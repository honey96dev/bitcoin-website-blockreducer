var Q = require('q');
var _ = require('lodash');
var config = require('../../_core/config');
var dbConn = require('../../_core/dbConn');
const sprintfJs = require('sprintf-js');

const sprintf = sprintfJs.sprintf,
    vsprintf = sprintfJs.vsprintf;

/**
 *  Define services
 */
var service = {};
service.GetLast1MonthVolume = GetLast1MonthVolume;
service.GetCustomizeVolume = GetCustomizeVolume;

module.exports = service;


function GetLast1MonthVolume() {
    var deferred = Q.defer();
    var tmpDataArray = [];
    GetMaxIsoDate(function(callback) {
        var endTime = callback.max;
        var startTime = new Date(new Date(endTime).getTime() - 2592000000).toISOString();
        
        GetCustomizeData(startTime, endTime, function(callback) {
            tmpDataArray.push(callback);
            // for (var obj of callback) {
            //     tmpDataArray.push(obj);
            // }
            GetCutomizePrice (startTime, endTime, function(callback) {
                tmpDataArray.push(callback);
                // for (var obj of callback) {
                //     tmpDataArray.push(obj)
                // }

                deferred.resolve(_.add(tmpDataArray));
                tmpDataArray = [];
            });
        });
    });

    return deferred.promise;
}


function GetCustomizeVolume(startTime, endTime) {
    var deferred = Q.defer();

    GetCustomizeData(startTime, endTime, function(callback) {
        if (callback.length > 0) {
            deferred.resolve(_.add(callback));
        } else {
            deferred.reject('There is null');     
        }
        
    });
    
    return deferred.promise;
}


function GetCutomizePrice(startTime, endTime, callback) {
    // var selectSql = 'SELECT * FROM bitmex_data_5m_view WHERE isoDate BETWEEN ? AND ?';
    // console.log('GetCutomizePrice', startTime, endTime);
    // dbConn.query(selectSql, [startTime, endTime], function(error, results, fields) {
    //     if (error) { console.log(error); }
    //
    //     callback(results);
    // });
    let sql = sprintf("SELECT COUNT(`timestamp`) `count` FROM `bitmex_data_5m_view` WHERE `timestamp` BETWEEN ? AND ?");
    dbConn.query(sql, [startTime, endTime], function(error, results, fields) {
        if (error) { console.log(error); }
        const cnt = results[0].count;
        const step = cnt / config.volumeChartEntryNum;

        // sql = sprintf("SELECT `timestamp`, `open` FROM bitmex_data_%s_view WHERE `isoDate` BETWEEN ? AND ? ORDER BY `timestamp`;", binSize);
        sql = sprintf("SELECT `timestamp` `isoDate`, AVG(`open`) `open`, AVG(`high`) `high`, AVG(`low`) `low`, AVG(`close`) `close` FROM (SELECT FLOOR((@row_number:=@row_number + 1)/%f) AS num, `timestamp`, `open`, `high`, `low`, `close` FROM (SELECT `timestamp`, `open`, `high`, `low`, `close` FROM bitmex_data_5m_view WHERE `isoDate` BETWEEN '%s' AND '%s'  ORDER BY `timestamp`) `bd`, (SELECT @row_number:=0) `row_num`  ORDER BY `timestamp` ASC) `tmp` GROUP BY `num`;", step, startTime, endTime);
        console.log('GetCutomizePrice', sql);
        dbConn.query(sql, null, function(error, results, fields) {
            if (error) { console.log(error); }

            callback(results);
        });
    });
}

function GetMaxIsoDate(callback) {
    var deferred = Q.defer();
    var selectSql = 'SELECT MAX(`timestamp`) AS max FROM `bitmex_data_5m`';

    dbConn.query(selectSql, function(error, results, fields) {
        if (error) {            
            deferred.reject("Error!");
        }

        callback(results[0]);
    });
}

function GetCustomizeData (startTime, endTime, callback) {
    var deferred = Q.defer();
    // var selectSql = 'SELECT `timestamp` `isoDate`, `volume` FROM `bitmex_data_5m` WHERE `timestamp` BETWEEN ? AND ? ORDER BY `timestamp` ASC';
    // // console.log(selectSql, startTime, endTime);
    // dbConn.query(selectSql, [startTime, endTime], function(error, results, fields) {
    //     if (error) {
    //         deferred.reject("Error!");
    //     }
    //     //console.log(results);
    //     callback(results);
    // });
    let sql = sprintf("SELECT COUNT(`timestamp`) `count` FROM `bitmex_data_5m_view` WHERE `timestamp` BETWEEN ? AND ?");
    dbConn.query(sql, [startTime, endTime], function(error, results, fields) {
        if (error) { console.log(error); }
        const cnt = results[0].count;
        const step = cnt / config.volumeChartEntryNum;

        // sql = sprintf("SELECT `timestamp`, `open` FROM bitmex_data_%s_view WHERE `isoDate` BETWEEN ? AND ? ORDER BY `timestamp`;", binSize);
        sql = sprintf("SELECT `timestamp` `isoDate`, AVG(`volume`) `volume` FROM (SELECT FLOOR((@row_number:=@row_number + 1)/%f) AS num, `timestamp`, `volume` " +
            "FROM (SELECT `timestamp`, `volume` FROM bitmex_data_5m_view WHERE `isoDate` BETWEEN '%s' AND '%s'  ORDER BY `timestamp`) `bd`, " +
            "(SELECT @row_number:=0) `row_num`  ORDER BY `timestamp` ASC) `tmp` GROUP BY `num`;", step, startTime, endTime);
        console.log('GetCutomizePrice', sql);
        dbConn.query(sql, null, function(error, results, fields) {
            if (error) {
                deferred.reject("Error!");
            }

            callback(results);
        });
    });
}
