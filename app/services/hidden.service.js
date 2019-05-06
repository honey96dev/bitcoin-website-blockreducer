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
            // callback.splice(0, 0, {timestamp: startTime, open: null});
            // callback.push({timestamp: endTime, open: null});
            tmpDataArray.push(callback);

            GetCustomizeData(startTime, endTime, '1m', 'Buy', function(callback) {
                // callback.splice(0, 0, {timestamp: startTime, price: null});
                // callback.push({timestamp: endTime, price: null});
                tmpDataArray.push(callback);
                GetCustomizeData (startTime, endTime, '1m', 'Sell', function(callback) {
                    // callback.splice(0, 0, {timestamp: startTime, price: null});
                    // callback.push({timestamp: endTime, price: null});
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
            startTime.setFullYear(startTime.getFullYear() - 1);
            startTime = startTime.toISOString();
            // startTime = new Date(new Date(endTime).getTime() - 30 * 86400000).toISOString();
        } else {
            startTime = new Date();
            startTime.setFullYear(startTime.getFullYear() - 1);
            startTime = startTime.toISOString();
            // startTime = new Date(new Date().getTime() - 30 * 86400000).toISOString();
        }
        GetCutomizePrice (startTime, endTime, '1h', function(callback) {
            // callback.splice(0, 0, {timestamp: startTime, open: null});
            // callback.push({timestamp: endTime, open: null});
            tmpDataArray.push(callback);

            GetCustomizeData(startTime, endTime, '1h', 'Buy', function(callback) {
                // callback.splice(0, 0, {timestamp: startTime, price: null});
                // callback.push({timestamp: endTime, price: null});
                tmpDataArray.push(callback);
                GetCustomizeData (startTime, endTime, '1h', 'Sell', function(callback) {
                    // callback.splice(0, 0, {timestamp: startTime, price: null});
                    // callback.push({timestamp: endTime, price: null});
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
        if (results && results.length > 0) {
            timestamp = results[0];
        }
        callback(timestamp);
    });
}


function GetCustomizeData (startTime, endTime, binSize, side, callback) {
    let deferred = Q.defer();
    let sql = sprintf("SELECT `timestamp`, SUM(`price`) `price` FROM (SELECT CONCAT(`%s`, '%s') `timestamp`, %s`price` `price` FROM `hidden_orders_view` WHERE `timestamp` BETWEEN '%s' AND '%s' AND `side` = '%s') `tmp` GROUP BY `timestamp` ORDER BY `timestamp`;", (binSize == '1m' ? 'timestamp1' : 'timestamp2'), (binSize == '1m' ? '5:00.000Z' : 'T12:00:00.000Z'), (side == 'Buy' ? '' : '-'), startTime, endTime, side);
    console.log('GetCustomizeData', sql);
    dbConn.query(sql, [startTime, endTime], function(error, results, fields) {
        if (error) {
            deferred.reject("Error!");
        }

        callback(results);
    });

    // var deferred = Q.defer();
    //
    // let sql = sprintf("SELECT COUNT(`id`) `count` FROM `hidden_orders_view` WHERE `timestamp` BETWEEN ? AND ?", binSize);
    // dbConn.query(sql, [startTime, endTime], function(error, results, fields) {
    //     if (error) {
    //         console.log(error);
    //     }
    //     const cnt = results[0].count;
    //     const step = cnt / config.hiddenChartEntryNum;
    //     sql = sprintf("SELECT `timestamp`, SUM(`price`) `price` FROM (SELECT FLOOR((@row_number:=@row_number + 1)/%f) AS num, `timestamp`, `price` FROM (SELECT `timestamp`, (-(`price`)) `price`  FROM hidden_orders_view WHERE `timestamp` BETWEEN '%s' AND '%s' GROUP BY `trdMatchID` ORDER BY `timestamp`) `bd`, (SELECT @row_number:=0) `row_num` ORDER BY `timestamp` ASC) `tmp` GROUP BY `num`;", step, startTime, endTime);
    //     console.log('GetCustomizeData', sql);
    //     dbConn.query(sql, [startTime, endTime], function (error, results, fields) {
    //         if (error) {
    //             deferred.reject("Error!");
    //         }
    //
    //         callback(results);
    //     });
    // });
}

function GetCutomizePrice(startTime, endTime, binSize, callback) {
    let sql = sprintf("SELECT COUNT(`timestamp`) `count` FROM `bitmex_data_%s_view` WHERE `timestamp` BETWEEN ? AND ?", binSize);
    dbConn.query(sql, [startTime, endTime], function(error, results, fields) {
        if (error) { console.log(error); }
        const cnt = results[0].count;
        const step = cnt / config.hiddenChartEntryNum;

        // sql = sprintf("SELECT `timestamp`, `open` FROM bitmex_data_%s_view WHERE `isoDate` BETWEEN ? AND ? ORDER BY `timestamp`;", binSize);
        sql = sprintf("SELECT `timestamp`, AVG(`open`) `open` FROM (SELECT FLOOR((@row_number:=@row_number + 1)/%f) AS num, `timestamp`, `open` " +
            "FROM (SELECT `timestamp`, `open` FROM bitmex_data_%s_view WHERE `isoDate` BETWEEN '%s' AND '%s'  ORDER BY `timestamp`) `bd`, " +
            "(SELECT @row_number:=0) `row_num`  ORDER BY `timestamp` ASC) `tmp` GROUP BY `num`;", step, binSize, startTime, endTime);
        console.log('GetCutomizePrice', sql);
        dbConn.query(sql, null, function(error, results, fields) {
            if (error) { console.log(error); }

            callback(results);
        });
    });
}
