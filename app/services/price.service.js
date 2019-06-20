const Q = require('q');
const _ = require('lodash');
const config = require('../../_core/config');
const dbConn = require('../../_core/dbConn');
const sprintfJs = require('sprintf-js');

const sprintf = sprintfJs.sprintf,
    vsprintf = sprintfJs.vsprintf;

/**
 *  Define services
 */
var service = {};
service.GetLast1MonthPrice = GetLast1MonthPrice;
service.GetCustomizePrice = GetCustomizePrice;

module.exports = service;

function GetLast1MonthPrice() {
    var deferred = Q.defer();
    GetMaxIsoDate(function(callback) {
        var endTime = callback.max;
        var startTime = new Date(new Date(endTime).getTime() - 2592000000).toISOString();

        GetCustomizeData(startTime, endTime, 0, function(callback) {
            deferred.resolve(_.add(callback));
        });
    });

    return deferred.promise;
}

function GetCustomizePrice(startTime, endTime, timeZone) {
    var deferred = Q.defer();

    GetCustomizeData(startTime, endTime, timeZone, function(callback) {
        deferred.resolve(_.add(callback));
    });

    return deferred.promise;
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

function GetCustomizeData (startTime, endTime, timeZone, callback) {
    var deferred = Q.defer();
    //
    // let sql = sprintf("SELECT COUNT(`id`) `count` FROM `bitmex_data_%s_view` WHERE `timestamp` BETWEEN ? AND ?", binSize);
    // dbConn.query(sql, [startTime, endTime], function(error, results, fields) {
    //     if (error) {
    //         console.log(error);
    //     }
    //     const cnt = results[0].count;
    //     const step = cnt / config.hiddenChartEntryNum;
    //     sql = 'SELECT `timestamp` `isoDate`, `open` FROM `bitmex_data_5m` WHERE `timestamp` BETWEEN ? AND ? ORDER BY `timestamp`;';
    //     dbConn.query(sql, [startTime, endTime], function (error, results, fields) {
    //         if (error) {
    //             deferred.reject("Error!");
    //         }
    //
    //         callback(results);
    //     });
    // });
    // startTime = new Date(startTime).toISOString();
    // startTime =
    startTime = new Date(new Date(startTime).getTime() + Math.floor(3600000 * parseFloat(timeZone))).toISOString();
    endTime = new Date(new Date(endTime).getTime() + Math.floor(3600000 * parseFloat(timeZone))).toISOString();
    let sql = sprintf("SELECT COUNT(`timestamp`) `count` FROM `bitmex_data_5m_view` WHERE `timestamp` BETWEEN ? AND ?");
    dbConn.query(sql, [startTime, endTime], function(error, results, fields) {
        if (error) { console.log(error); }
        const cnt = results[0].count;
        const step = cnt / config.hiddenChartEntryNum;

        // sql = sprintf("SELECT `timestamp`, `open` FROM bitmex_data_%s_view WHERE `isoDate` BETWEEN ? AND ? ORDER BY `timestamp`;", binSize);
        sql = sprintf("SELECT `timestamp` `isoDate`, AVG(`open`) `open` FROM (SELECT FLOOR((@row_number:=@row_number + 1)/%f) AS num, `timestamp`, `open` " +
            "FROM (SELECT `timestamp`, `open` FROM bitmex_data_5m_view WHERE `isoDate` BETWEEN '%s' AND '%s'  ORDER BY `timestamp`) `bd`, " +
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
