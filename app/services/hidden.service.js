var Q = require('q');
var _ = require('lodash');
var config = require('../../_core/config');
var dbConn = require('../../_core/dbConn');
const sprintfJs = require('sprintf-js');

const sprintf = sprintfJs.sprintf,
    vsprintf = sprintfJs.vsprintf;

var service = {};
service.GetLast1DayHidden = GetLast1DayHidden;
service.GetLast1YearHidden = GetLast1YearHidden;

module.exports = service;

function GetLast1DayHidden() {
    var deferred = Q.defer();
    var tmpDataArray = [];
    GetMaxIsoDate('1m', function(callback) {
        var endTime = callback.max;
        let startTime;
        if (endTime != null) {
            startTime = new Date(new Date(endTime).getTime() - 86400000).toISOString();
        } else {
            startTime = new Date(new Date().getTime() - 86400000).toISOString();
        }
        GetCutomizePrice (startTime, endTime, '1m', function(callback) {
            tmpDataArray.push(callback);

            GetCustomizeData(startTime, endTime, 'Buy', function(callback) {
                tmpDataArray.push(callback);
                GetCustomizeData (startTime, endTime, 'Sell', function(callback) {
                    tmpDataArray.push(callback);

                    deferred.resolve(_.add(tmpDataArray));
                    tmpDataArray = [];
                });
            });
        });
    });

    return deferred.promise;
}

function GetLast1YearHidden() {
    var deferred = Q.defer();
    var tmpDataArray = [];
    GetMaxIsoDate('1h', function(callback) {
        var endTime = callback.max;
        let startTime;
        if (endTime != null) {
            startTime = new Date(endTime);
            // startTime.setFullYear(startTime.getFullYear() - 1);
            startTime = startTime.toISOString();
            startTime = new Date(new Date(endTime).getTime() - 30 * 86400000).toISOString();
        } else {
            startTime = new Date();
            // startTime.setFullYear(startTime.getFullYear() - 1);
            startTime = startTime.toISOString();
            startTime = new Date(new Date().getTime() - 30 * 86400000).toISOString();
        }
        GetCutomizePrice (startTime, endTime, '1h', function(callback) {
            tmpDataArray.push(callback);

            GetCustomizeData(startTime, endTime, 'Buy', function(callback) {
                tmpDataArray.push(callback);
                GetCustomizeData (startTime, endTime, 'Sell', function(callback) {
                    tmpDataArray.push(callback);

                    deferred.resolve(_.add(tmpDataArray));
                    tmpDataArray = [];
                });
            });
        });
    });

    return deferred.promise;
}

function GetMaxIsoDate(binSize, callback) {
    var deferred = Q.defer();
    var selectSql = sprintf('SELECT `timestamp` AS max FROM bitmex_data_%s_view ORDER BY `timestamp` DESC LIMIT 0, 1;', binSize);

    dbConn.query(selectSql, function(error, results, fields) {
        if (error) {            
            deferred.reject("Error!");
        }
        let timestamp = '';
        if (results.length > 0) {
            timestamp = results[0];
        }
        callback(timestamp);
    });
}


function GetCustomizeData (startTime, endTime, side, callback) {
    var deferred = Q.defer();
    var selectSql = sprintf("SELECT `timestamp`, %s(`price`) `price` FROM `hidden_orders_view` WHERE `timestamp` BETWEEN ? AND ? AND `side` = '%s' ORDER BY `timestamp`;", (side == 'Buy' ? '' : '-'), side);
    console.log('GetCustomizeData', selectSql);
    dbConn.query(selectSql, [startTime, endTime], function(error, results, fields) {
        if (error) {            
            deferred.reject("Error!");
        }

        callback(results);
    });
}

function GetCutomizePrice(startTime, endTime, binSize, callback) {
    var selectSql = sprintf("SELECT `timestamp`, `open` FROM bitmex_data_%s_view WHERE `isoDate` BETWEEN ? AND ? ORDER BY `timestamp`;", binSize);
    console.log('GetCutomizePrice', selectSql);
    dbConn.query(selectSql, [startTime, endTime], function(error, results, fields) {
        if (error) { console.log(error); }

        callback(results);
    });
}