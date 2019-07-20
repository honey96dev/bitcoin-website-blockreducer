var Q = require('q');
var _ = require('lodash');
var config = require('../../_core/config');
var dbConn = require('../../_core/dbConn');
var Fili = require('fili');
const sprintfJs = require('sprintf-js');
const sprintf = sprintfJs.sprintf,
    vsprintf = sprintfJs.vsprintf;


/**
 *  Define services
 */
var service = {};

/**
 * Global values
 */
var arrayEstimate = [];

/**
 *
 * @param {*} req
 * @param {*} res
 */

service.GetLast1MonthFFT = function (req, res) {
    var deferred = Q.defer();
    GetMaxIsoDate(function(callback) {
        var endTime = callback.max;
        // var startTime = new Date(new Date(endTime).getTime() - 2592000000).toISOString();
        var startTime = new Date(new Date(endTime));
        startTime.setFullYear(startTime.getFullYear() - 4);
        startTime = startTime.toISOString();
        // var selectSql = 'SELECT * FROM bitmex_data_5m_view WHERE isoDate BETWEEN ? AND ?';

        // GetCustomizeData(selectSql, startTime, endTime, function(callback) {
        //     deferred.resolve(_.add(callback));
        // });
        let sql = sprintf("SELECT COUNT(`timestamp`) `count` FROM `fft_5m` WHERE `timestamp` BETWEEN ? AND ?");
        dbConn.query(sql, [startTime, endTime], function(error, results, fields) {
            if (error) { console.log(error); }
            const cnt = results[0].count;
            const step = cnt / config.hiddenChartEntryNum;

            // sql = sprintf("SELECT `timestamp`, `open` FROM bitmex_data_%s_view WHERE `isoDate` BETWEEN ? AND ? ORDER BY `timestamp`;", binSize);
            sql = sprintf("SELECT `timestamp` `isoDate`, AVG(`open`) `open`, AVG(`lowPass`) `lowPass`, AVG(`highPass`) `highPass` FROM (SELECT FLOOR((@row_number:=@row_number + 1)/%f) AS num, `timestamp`, `open`, `lowPass`, `highPass` FROM (SELECT `timestamp`, `open`, `lowPass`, `highPass` FROM `fft_5m` WHERE `timestamp` BETWEEN '%s' AND '%s'  ORDER BY `timestamp`) `bd`, (SELECT @row_number:=0) `row_num`  ORDER BY `timestamp` ASC) `tmp` GROUP BY `num`;", step, startTime, endTime);
            console.log('GetLast1MonthFFT', sql);
            dbConn.query(sql, null, function(error, results, fields) {
                if (error) {
                    console.log(error);
                    // res.send([]);
                }

                // let buffer = [];
                // for (let item of results) {
                //     buffer.push((parseFloat(item.high) - parseFloat(item.low)) / parseFloat(item.close));
                // }
                //
                // var iirCalculator = new Fili.CalcCascades();
                //
                // var lowpassFilterCoeffs = iirCalculator.lowpass({
                //     order: 3, // cascade 3 biquad filters (max: 12)
                //     characteristic: 'butterworth',
                //     Fs: 800, // sampling frequency
                //     Fc: 80, // cutoff frequency / center frequency for bandpass, bandstop, peak
                //     BW: 1, // bandwidth only for bandstop and bandpass filters - optional
                //     gain: 0, // gain for peak, lowshelf and highshelf
                //     preGain: false // adds one constant multiplication for highpass and lowpass
                //     // k = (1 + cos(omega)) * 0.5 / k = 1 with preGain == false
                // });
                //
                // var iirLowpassFilter = new Fili.IirFilter(lowpassFilterCoeffs);
                //
                // let lowPass = iirLowpassFilter.multiStep(buffer);
                //
                // var highpassFilterCoeffs = iirCalculator.highpass({
                //     order: 3, // cascade 3 biquad filters (max: 12)
                //     characteristic: 'butterworth',
                //     Fs: 800, // sampling frequency
                //     Fc: 80, // cutoff frequency / center frequency for bandpass, bandstop, peak
                //     BW: 1, // bandwidth only for bandstop and bandpass filters - optional
                //     gain: 0, // gain for peak, lowshelf and highshelf
                //     preGain: false // adds one constant multiplication for highpass and lowpass
                //     // k = (1 + cos(omega)) * 0.5 / k = 1 with preGain == false
                // });
                //
                // var iirHighpassFilter = new Fili.IirFilter(highpassFilterCoeffs);
                // let highPass = iirHighpassFilter.multiStep(buffer);
                //
                // buffer = [];
                // for (let i in results) {
                //     buffer.push({
                //         isoDate: results[i].isoDate,
                //         open: results[i].open,
                //         lowPass: lowPass[i],
                //         highPass: highPass[i],
                //     });
                // }
                if (results != null && results.length > 0){
                    results.pop();
                }
                deferred.resolve(_.add(results));
            });
        });
    });

    return deferred.promise;
}


service.GetCustomizeFFT = function (candle, startTime, endTime, timeZone) {
    var deferred = Q.defer();

    if (candle == null || candle.length === 0) {
        candle = '5m';
    }
    let sql = sprintf("SELECT COUNT(`timestamp`) `count` FROM `fft_%s` WHERE `timestamp` BETWEEN ? AND ?", candle);
    dbConn.query(sql, [startTime, endTime], function(error, results, fields) {
        if (error) { console.log(error); }
        const cnt = results[0].count;
        const step = cnt / config.hiddenChartEntryNum;

        const timestampOffset = sprintf("%d:00:00", timeZone);
        const timestampFormat = "%Y-%m-%dT%H:%i:%s.000Z";

        // sql = sprintf("SELECT `timestamp`, `open` FROM bitmex_data_%s_view WHERE `isoDate` BETWEEN ? AND ? ORDER BY `timestamp`;", binSize);
        sql = sprintf("SELECT `timestamp` `isoDate`, AVG(`open`) `open`, AVG(`lowPass`) `lowPass`, AVG(`highPass`) `highPass` FROM (SELECT FLOOR((@row_number:=@row_number + 1)/%f) AS num, `timestamp`, `open`, `lowPass`, `highPass` FROM (SELECT DATE_FORMAT(ADDTIME(STR_TO_DATE(`timestamp`, '%s'), '%s'), '%s') `timestamp`, `open`, `lowPass`, `highPass` FROM `fft_%s` WHERE `timestamp` BETWEEN '%s' AND '%s'  ORDER BY `timestamp`) `bd`, (SELECT @row_number:=0) `row_num`  ORDER BY `timestamp` ASC) `tmp` GROUP BY `num`;", step, timestampFormat, timestampOffset, timestampFormat, candle, startTime, endTime);
        console.log('GetCutomizePrice', sql);
        dbConn.query(sql, null, function(error, results, fields) {
            if (error) { console.log(error); }

            // let buffer = [];
            // for (let item of results) {
            //     buffer.push((parseFloat(item.high) - parseFloat(item.low)) / parseFloat(item.close));
            // }
            //
            // var iirCalculator = new Fili.CalcCascades();
            //
            // var lowpassFilterCoeffs = iirCalculator.lowpass({
            //     order: 3, // cascade 3 biquad filters (max: 12)
            //     characteristic: 'butterworth',
            //     Fs: 800, // sampling frequency
            //     Fc: 80, // cutoff frequency / center frequency for bandpass, bandstop, peak
            //     BW: 1, // bandwidth only for bandstop and bandpass filters - optional
            //     gain: 0, // gain for peak, lowshelf and highshelf
            //     preGain: false // adds one constant multiplication for highpass and lowpass
            //     // k = (1 + cos(omega)) * 0.5 / k = 1 with preGain == false
            // });
            //
            // var iirLowpassFilter = new Fili.IirFilter(lowpassFilterCoeffs);
            //
            // let lowPass = iirLowpassFilter.multiStep(buffer);
            //
            // var highpassFilterCoeffs = iirCalculator.highpass({
            //     order: 3, // cascade 3 biquad filters (max: 12)
            //     characteristic: 'butterworth',
            //     Fs: 800, // sampling frequency
            //     Fc: 80, // cutoff frequency / center frequency for bandpass, bandstop, peak
            //     BW: 1, // bandwidth only for bandstop and bandpass filters - optional
            //     gain: 0, // gain for peak, lowshelf and highshelf
            //     preGain: false // adds one constant multiplication for highpass and lowpass
            //     // k = (1 + cos(omega)) * 0.5 / k = 1 with preGain == false
            // });
            //
            // var iirHighpassFilter = new Fili.IirFilter(highpassFilterCoeffs);
            // let highPass = iirHighpassFilter.multiStep(buffer);
            //
            // buffer = [];
            // for (let i in results) {
            //     buffer.push({
            //         isoDate: results[i].isoDate,
            //         open: results[i].open,
            //         lowPass: lowPass[i],
            //         highPass: highPass[i],
            //     });
            // }
            // deferred.resolve(_.add(buffer));

            if (results != null && results.length > 0){
                results.pop();
            }
            deferred.resolve(_.add(results));
        });
    });

    return deferred.promise;
}


service.GetDataByCandle = function (candle, startTime, endTime) {
    var deferred = Q.defer();
    var selectSql = 'SELECT MAX(id) as id, MAX(isoDate) AS isoDate ,symbol, MAX(`open`) as open , MAX(high) as high ,MIN(low) as low, MIN(`close`) as close FROM `bitmex_data_5m_view` WHERE isoDate BETWEEN ? AND ? ';
    var insertSql = 'INSERT INTO candle_tmp SET ?';
    var deleteSql = 'TRUNCATE TABLE candle_tmp';

    dbConn.query(deleteSql, function(error, results, fields) {
        if (error) {console.log(error); }
        switch (parseInt(candle)) {
            case 1:
                selectSql += 'GROUP BY isoDate  ORDER BY id';
                GetCustomizeData(selectSql, startTime, endTime, function(callback) {
                    deferred.resolve(_.add(callback));
                });
                break;
            case 2:
                selectSql += 'GROUP BY isoDate  ORDER BY id';
                GetCustomizeData(selectSql, startTime, endTime, function(callback) {
                    StoreCandleTempData(callback, insertSql, 2, function(callback) {
                        if (callback > 0) {
                            GetCandleTempData(function(callback) {
                                if (callback.length > 0) {
                                    deferred.resolve(_.add(callback));
                                } else {
                                    deferred.reject("connection error!");
                                }
                            });
                        } else {
                            deferred.reject("connection error!");
                        }
                    });
                });
                break;
            case 3:
                selectSql += 'GROUP BY isoDate ORDER BY id';
                GetCustomizeData(selectSql, startTime, endTime, function(callback) {
                    StoreCandleTempData(callback, insertSql, 6, function(callback) {
                        if (callback > 0) {
                            GetCandleTempData(function(callback) {
                                if (callback.length > 0) {
                                    deferred.resolve(_.add(callback));
                                } else {
                                    deferred.reject("connection error!");
                                }
                            });
                        } else {
                            deferred.reject("connection error!");
                        }
                    });
                });
                break;
            case 4:
                selectSql += 'GROUP BY LEFT(isoDate, 13) ORDER BY id';
                GetCustomizeData(selectSql, startTime, endTime, function(callback) {
                    deferred.resolve(_.add(callback));
                });
                break;
            case 5:
                selectSql += 'GROUP BY LEFT(isoDate, 13) ORDER BY id';
                GetCustomizeData(selectSql, startTime, endTime, function(callback) {
                    StoreCandleTempData(callback, insertSql, 3, function(callback) {
                        if (callback > 0) {
                            GetCandleTempData(function(callback) {
                                if (callback.length > 0) {
                                    deferred.resolve(_.add(callback));
                                } else {
                                    deferred.reject("connection error!");
                                }
                            });
                        } else {
                            deferred.reject("connection error!");
                        }
                    });
                });
                break;
            case 6:
                selectSql += 'GROUP BY LEFT(isoDate, 10) ORDER BY id';
                GetCustomizeData(selectSql, startTime, endTime, function(callback) {
                    deferred.resolve(_.add(callback));
                });
                break;
        }
    });

    return deferred.promise;
}

function StoreCandleTempData (data, insertSql, _value, callback) {
    if(data.length > 0) {
        var index = 1;
        var i = 1;
        var temp;
        for (var obj of data) {
            if (index % _value == 0) {
                temp = i++;
            } else {
                temp = i;
            }
            index ++;
            var tmpData = {
                sortid: temp,
                isoDate: obj.isoDate,
                symbol: obj.symbol,
                open: obj.open,
                high: obj.high,
                low: obj.low,
                close: obj.close
            };

            dbConn.query(insertSql, [tmpData], function(error, results, fields) {
                if (error) { console.log(error); }
            });
        }

        callback(1);
    } else {
        callback(0);
    }
}

function GetCandleTempData (callback) {
    var selectSql = 'SELECT  MAX(isoDate) AS isoDate ,symbol, MAX(`open`) as open , MAX(high) as high ,MIN(low) as low, MIN(`close`) as close FROM candle_tmp GROUP BY sortid';

    dbConn.query(selectSql, function(error, results, fields) {
        if (error) {console.log(error);}

        callback(results);
    });
}

service.GetEstimateFFT = function (candle, startTime, endTime, timeZone, estimates, userId) {
    var deferred = Q.defer();

    if (candle == null || candle.length === 0) {
        candle = '5m';
    }
    let sql = sprintf("DELETE FROM `estimates` WHERE `userId` = '%s';", userId);
    // console.log(sql);
    dbConn.query(sql, undefined, function (error, results, fields) {
        if (error) {
            console.log(error);
            deferred.resolve(_.add([]));
            return;
        }
        sql = sprintf("SELECT * FROM (SELECT * FROM `fft_%s` WHERE `timestamp` <= '%s' ORDER BY `timestamp` DESC LIMIT 500) `tmp` ORDER BY `timestamp` ASC;", candle, endTime);
        // console.log(sql);
        dbConn.query(sql, undefined, function (error, results, fields) {
            if (error) {
                console.log(error);
                deferred.resolve(_.add([]));
                return;
            }
            let timestamps = [];
            let open = [];
            let high = [];
            let low = [];
            let close = [];
            let maxChange = [];
            let lowPass = [];
            let highPass = [];
            let maxChange1;
            let realResultLen = results.length;
            if (results != null && realResultLen > 1) {
                // results.pop();
                // realResultLen = results.length;
                for (let item of results) {
                    timestamps.push(item.timestamp);
                    open.push(item.open);
                    high.push(item.high);
                    low.push(item.low);
                    close.push(item.close);
                    maxChange1 = ((parseFloat(item.high) - parseFloat(item.low)) / parseFloat(item.close));
                    if (isNaN(maxChange1)) {
                        maxChange1 = 0
                    }
                    maxChange.push(maxChange1);
                }

                let lastTimestamp = timestamps[realResultLen - 1];

                let timeStep = 0;
                if (candle === '1m') {
                    timeStep = 60000;
                } else if (candle === '5m') {
                    timeStep = 300000;
                } else if (candle === '1h') {
                    timeStep = 3600000;
                }

                const lastItem = results[realResultLen - 1];
                const differentHigh = lastItem.high - lastItem.open;
                const differentLow = lastItem.low - lastItem.open;
                const differentClose = lastItem.close - lastItem.open;
                let lastOpen = lastItem.open;
                let offset;
                let calcedOpen;
                // console.log(lastItem, results);
                for (let estimate of estimates) {
                    offset = (estimate.price - lastOpen) / estimate.time;
                    for (let i = 1; i <= estimate.time; i++) {
                        lastTimestamp = new Date(new Date(lastTimestamp).getTime() + timeStep).toISOString();
                        calcedOpen = lastOpen + offset * i;
                        timestamps.push(lastTimestamp);
                        open.push(calcedOpen);
                        high.push(calcedOpen + differentHigh);
                        low.push(calcedOpen + differentLow);
                        close.push(calcedOpen + differentClose);
                        maxChange1 = (differentHigh - differentLow) /(calcedOpen + differentClose);
                        if (isNaN(maxChange1)) {
                            maxChange1 = 0
                        }
                        maxChange.push(maxChange1);
                    }
                    lastOpen = estimate.price;
                }
                const totalLen = timestamps.length;
                for (let i = 0; i < 100; i++) {
                    timestamps.push(timestamps[totalLen - 1]);
                    open.push(open[totalLen - 1]);
                    high.push(high[totalLen - 1]);
                    low.push(low[totalLen - 1]);
                    close.push(close[totalLen - 1]);
                    maxChange.push(maxChange[totalLen - 1]);
                }

                var iirCalculator = new Fili.CalcCascades();

                var lowpassFilterCoeffs = iirCalculator.lowpass({
                    order: 3, // cascade 3 biquad filters (max: 12)
                    characteristic: 'butterworth',
                    Fs: 800, // sampling frequency
                    Fc: 80, // cutoff frequency / center frequency for bandpass, bandstop, peak
                    BW: 1, // bandwidth only for bandstop and bandpass filters - optional
                    gain: 0, // gain for peak, lowshelf and highshelf
                    preGain: false // adds one constant multiplication for highpass and lowpass
                    // k = (1 + cos(omega)) * 0.5 / k = 1 with preGain == false
                });

                var iirLowpassFilter = new Fili.IirFilter(lowpassFilterCoeffs);

                lowPass = iirLowpassFilter.multiStep(maxChange);

                var highpassFilterCoeffs = iirCalculator.highpass({
                    order: 3, // cascade 3 biquad filters (max: 12)
                    characteristic: 'butterworth',
                    Fs: 800, // sampling frequency
                    Fc: 80, // cutoff frequency / center frequency for bandpass, bandstop, peak
                    BW: 1, // bandwidth only for bandstop and bandpass filters - optional
                    gain: 0, // gain for peak, lowshelf and highshelf
                    preGain: false // adds one constant multiplication for highpass and lowpass
                    // k = (1 + cos(omega)) * 0.5 / k = 1 with preGain == false
                });

                var iirHighpassFilter = new Fili.IirFilter(highpassFilterCoeffs);
                highPass = iirHighpassFilter.multiStep(maxChange);

                lastTimestamp = timestamps[realResultLen - 1];
                let myIdx = 0;
                let newRecords = [];
                lastOpen = lastItem.open;
                for (let estimate of estimates) {
                    offset = (estimate.price - lastOpen) / estimate.time;
                    for (let i = 1; i <= estimate.time; i++) {
                        lastTimestamp = new Date(new Date(lastTimestamp).getTime() + timeStep).toISOString();
                        calcedOpen = lastOpen + offset * i;
                        newRecords.push([
                            userId,
                            lastTimestamp,
                            'XBTUSD',
                            calcedOpen,
                            calcedOpen + differentHigh,
                            calcedOpen + differentLow,
                            calcedOpen + differentClose,
                            0,
                            lowPass[realResultLen + myIdx],
                            highPass[realResultLen + myIdx]
                        ]);
                        myIdx++;
                    }
                    lastOpen = estimate.price;
                }

                console.log(JSON.stringify(newRecords));

                sql = sprintf("INSERT INTO `estimates`(`userId`, `timestamp`, `symbol`, `open`, `high`, `low`, `close`, `volume`, `lowPass`, `highPass`) VALUES ?;");
                dbConn.query(sql, [newRecords], (error, results, fields) => {
                    if (error) {
                        console.log(error);
                        deferred.resolve(_.add([]));
                        return;
                    }
                    sql = sprintf("SELECT COUNT(*) `count` FROM (SELECT `timestamp`, `open`, `lowPass`, `highPass` FROM `fft_%s` WHERE `timestamp` BETWEEN '%s' AND '%s' UNION SELECT `timestamp`, `open`, `lowPass`, `highPass` FROM `estimates` WHERE `userId` = '%s') `tmp`;", candle, startTime, endTime, userId);
                    dbConn.query(sql, undefined, (error, results, fields) => {
                        if (error) {
                            console.log(error);
                            deferred.resolve(_.add([]));
                            return;
                        }

                        const timestampOffset = sprintf("%d:00:00", timeZone);
                        const timestampFormat = "%Y-%m-%dT%H:%i:%s.000Z";

                        const dataCount = results[0].count;
                        const step = dataCount / config.hiddenChartEntryNum;
                        sql = sprintf("SELECT `timestamp` `isoDate`, AVG(`open`) `open`, AVG(`lowPass`) `lowPass`, AVG(`highPass`) `highPass`, FLOOR((@row_number:=@row_number + 1)/%f) AS num FROM (SELECT DATE_FORMAT(ADDTIME(STR_TO_DATE(`timestamp`, '%s'), '%s'), '%s') `timestamp`, `open`, `lowPass`, `highPass` FROM `fft_%s` WHERE `timestamp` >= '%s' AND `timestamp` < '%s' UNION SELECT DATE_FORMAT(ADDTIME(STR_TO_DATE(`timestamp`, '%s'), '%s'), '%s') `timestamp`, `open`, `lowPass`, `highPass` FROM `estimates` WHERE `userId` = '%s') `tmp`, (SELECT @row_number:=0) `row_num` GROUP BY `num`;", step, timestampFormat, timestampOffset, timestampFormat, candle, startTime, endTime, timestampFormat, timestampOffset, timestampFormat, userId);
                        console.log(sql);
                        dbConn.query(sql, null, function(error, results, fields) {
                            if (error) { console.log(error); }

                            // if (results != null && results.length > 0){
                            //     results.pop();
                            // }
                            deferred.resolve(_.add(results));
                        });
                    });
                });
            }
        });
    });

    return deferred.promise;
};

// service.GetEstimateFFT = function (candle, startTime, endTime, estimates) {
//     var deferred = Q.defer();
//
//     if (candle == null || candle.length === 0) {
//         candle = '5m';
//     }
//     let sql = sprintf("SELECT COUNT(`timestamp`) `count` FROM `bitmex_data_%s_view` WHERE `timestamp` BETWEEN ? AND ?", candle);
//     dbConn.query(sql, [startTime, endTime], function(error, results, fields) {
//         if (error) { console.log(error); }
//         const cnt = results[0].count;
//         const step = cnt / config.hiddenChartEntryNum;
//
//         // sql = sprintf("SELECT `timestamp`, `open` FROM bitmex_data_%s_view WHERE `isoDate` BETWEEN ? AND ? ORDER BY `timestamp`;", binSize);
//         sql = sprintf("SELECT `timestamp` `isoDate`, AVG(`open`) `open`, AVG(`high`) `high`, AVG(`low`) `low`, AVG(`close`) `close`, AVG(`lowPass`) `lowPass`, AVG(`highPass`) `highPass` FROM (SELECT FLOOR((@row_number:=@row_number + 1)/%f) AS num, `timestamp`, `open`, `high`, `low`, `close`, `lowPass`, `highPass` FROM (SELECT `timestamp`, `open`, `high`, `low`, `close`, `lowPass`, `highPass` FROM bitmex_data_%s_view WHERE `isoDate` BETWEEN '%s' AND '%s'  ORDER BY `timestamp`) `bd`, (SELECT @row_number:=0) `row_num`  ORDER BY `timestamp` ASC) `tmp` GROUP BY `num`;", step, candle, startTime, endTime);
//         console.log('GetEstimateFFT', sql);
//         dbConn.query(sql, null, function(error, results, fields) {
//             if (error) {
//                 console.log(error);
//             }
//
//             let lastItem = {
//                 isoDate: endTime,
//                 open: 0,
//                 high: 0,
//                 low: 0,
//                 close: 0,
//             };
//             let realResultsCnt = 0;
//             if (results && results.length > 0) {
//                 realResultsCnt = results.length;
//                 lastItem = results[realResultsCnt - 1];
//             }
//             let futureTimestamp = lastItem.isoDate;
//             let lastOpen = lastItem.open;
//             let lastClose = lastItem.close;
//             let timeStep = 0;
//             if (candle == '5m') {
//                 timeStep = 300000;
//             } else if (candle == '1h') {
//                 timeStep = 3600000;
//             }
//             let differentOpen;
//             let differentClose;
//             for (let estimate of estimates) {
//                 differentOpen = estimate.price - lastOpen;
//                 differentClose = estimate.price - lastClose;
//                 for (let i = 1; i <= estimate.time; i++) {
//                     futureTimestamp = new Date(new Date(futureTimestamp).getTime() + timeStep).toISOString();
//                     results.push({
//                         isoDate: futureTimestamp,
//                         // open: lastItem.open,
//                         // high: lastItem.high,
//                         // low: lastItem.low,
//                         // close: lastItem.close,
//                         open: lastOpen + differentOpen * i / estimate.time,
//                         high: lastOpen + differentOpen * i / estimate.time,
//                         low: lastClose + lastClose * i / estimate.time,
//                         close: lastClose + lastClose * i / estimate.time,
//                     });
//                 }
//                 lastOpen = estimate.price;
//                 lastClose = estimate.price;
//             }
//
//             let buffer = [];
//             for (let item of results) {
//                 // buffer.push((parseFloat(item.high) - parseFloat(item.low)) / parseFloat(item.open));
//                 buffer.push((parseFloat(item.high) - parseFloat(item.low)) / parseFloat(item.close));
//             }
//             for (let i = 0; i < 20; i++) {
//                 buffer.push(buffer[buffer.length - 1]);
//             }
//
//             var iirCalculator = new Fili.CalcCascades();
//
//             var lowpassFilterCoeffs = iirCalculator.lowpass({
//                 order: 3, // cascade 3 biquad filters (max: 12)
//                 characteristic: 'butterworth',
//                 Fs: 800, // sampling frequency
//                 Fc: 80, // cutoff frequency / center frequency for bandpass, bandstop, peak
//                 BW: 1, // bandwidth only for bandstop and bandpass filters - optional
//                 gain: 0, // gain for peak, lowshelf and highshelf
//                 preGain: false // adds one constant multiplication for highpass and lowpass
//                 // k = (1 + cos(omega)) * 0.5 / k = 1 with preGain == false
//             });
//
//             var iirLowpassFilter = new Fili.IirFilter(lowpassFilterCoeffs);
//
//             let lowPass = iirLowpassFilter.multiStep(buffer);
//
//             var highpassFilterCoeffs = iirCalculator.highpass({
//                 order: 3, // cascade 3 biquad filters (max: 12)
//                 characteristic: 'butterworth',
//                 Fs: 800, // sampling frequency
//                 Fc: 80, // cutoff frequency / center frequency for bandpass, bandstop, peak
//                 BW: 1, // bandwidth only for bandstop and bandpass filters - optional
//                 gain: 0, // gain for peak, lowshelf and highshelf
//                 preGain: false // adds one constant multiplication for highpass and lowpass
//                 // k = (1 + cos(omega)) * 0.5 / k = 1 with preGain == false
//             });
//
//             var iirHighpassFilter = new Fili.IirFilter(highpassFilterCoeffs);
//             let highPass = iirHighpassFilter.multiStep(buffer);
//
//             buffer = [];
//             let totalResultsCnt = results.length;
//             for (let i = 0; i < realResultsCnt - 1; i++) {
//                 buffer.push({
//                     isoDate: results[i].isoDate,
//                     open: results[i].open,
//                     lowPass: results[i].lowPass,
//                     highPass: results[i].highPass,
//                 });
//             }
//
//             for (let i = realResultsCnt - 1; i < totalResultsCnt; i++) {
//                 buffer.push({
//                     isoDate: results[i].isoDate,
//                     open: results[i].open,
//                     lowPass: lowPass[i] / 10000,
//                     highPass: highPass[i] / 10000,
//                 });
//             }
//             // console.log('EstimateChart', realResultsCnt, totalResultsCnt, JSON.stringify(buffer));
//             // for (let i in results) {
//             //     buffer.push({
//             //         isoDate: results[i].isoDate,
//             //         open: results[i].open,
//             //         lowPass: lowPass[i],
//             //         highPass: highPass[i],
//             //     });
//             // }
//
//             if (buffer != null && buffer.length > 0){
//                 buffer.pop();
//             }
//             deferred.resolve(_.add(buffer));
//         });
//     });
//
//     return deferred.promise;
// };

function GetLastTrade(callback) {
    var selectSql= 'SELECT * FROM `bitmex_data_5m_view` ORDER BY isoDate  DESC LIMIT 0 , 1';
    dbConn.query(selectSql, function(error, results, fields) {
        if (error) { console.log(error); }
        callback(results);
    });
}

function StoreEstimateRows(data, tmp, callback) {
    var tmpIsoDate = tmp.isoDate;
    var tmpPrice = tmp.close;
    var insertSql = "INSERT INTO `estimate_tbl` SET ?";
    var tempArrayData = data.tmpArray;

    for (var i = 0; i< tempArrayData.length; i++) {
        var delta = 0;
        var tmpOpen = 0;
        var tmpLow = 0;
        //var tmpIsoDate;
        if( i == 0 ) {
            delta = Math.abs((parseFloat(tempArrayData[i].price) - parseFloat(tmpPrice))/2);
            tmpIsoDate = new Date( new Date(new Date(tmpIsoDate)).getTime() + 1000*60*tempArrayData[i].time);
        }
        else {
            delta = Math.abs((parseFloat(tempArrayData[i].price) - parseFloat(tmpPrice))/2);
            tmpIsoDate = new Date( new Date(new Date(tmpIsoDate)).getTime() + 1000*60*tempArrayData[i].time);
        }

        tmpOpen = tmpLow = parseFloat(tempArrayData[i].price)- delta;

        var estimateRows = {
            userid: tempArrayData[i]._id,
            isoDate: (new Date(tmpIsoDate)).toISOString(),
            open: tmpOpen,
            high: tempArrayData[i].price,
            low: tmpLow,
            close: tempArrayData[i].price,
            time: tempArrayData[i].time,
            saveDate: (new Date()).toISOString(),
            state: 0
        };

        arrayEstimate.push(estimateRows);

        dbConn.query(insertSql, [estimateRows], function(error, results, fields) {
            if (error) { console.log(error); }
            callback(results.serverStatus);
        });
    }
}

function Store3HourCandle(startTime, endTime, callback) {
    var deleteSql = 'TRUNCATE TABLE estimate_tmp';
    var selectSql = 'SELECT MAX(isoDate) AS isoDate ,symbol, MAX(`open`) as open , MAX(high) as high ,MIN(low) as low, MIN(`close`) as close FROM `bitmex_data_5m_view` WHERE isoDate BETWEEN ? AND ?  GROUP BY LEFT(isoDate,13)  order by isoDate; ';
    var insertSql = 'INSERT INTO estimate_tmp SET ?';

    dbConn.query(deleteSql, function(error, results, fields) {
        if (error) {console.log(error); }

        dbConn.query(selectSql, [startTime, endTime], function(error, results, fields) {
            if (error) { console.log(error); }
            if(results.length > 0) {
                var index = 1;
                var i = 1;
                var temp;
                for (var obj of results) {
                    if (index % 3 == 0) {
                        temp = i++;
                    } else {
                        temp = i;
                    }
                    index ++;
                    var tmpData = {
                        sortid: temp,
                        isoDate: obj.isoDate,
                        symbol: obj.symbol,
                        open: obj.open,
                        high: obj.high,
                        low: obj.low,
                        close: obj.close
                    };

                    dbConn.query(insertSql, [tmpData], function(error, results, fields) {
                        if (error) { console.log(error); }
                    });
                }

                callback(1);
            } else {
                callback(0);
            }
        });
    });
}

function Get3HourCandle(callback) {
    var get3HourCandleSql = 'SELECT  MAX(isoDate) AS isoDate ,symbol, MAX(`open`) as open , MAX(high) as high ,MIN(low) as low, MIN(`close`) as close FROM estimate_tmp GROUP BY sortid';

    dbConn.query(get3HourCandleSql, function(error, results, fields) {
        if (error) {console.log(error); }
        callback(results);
    });
}

function GetMaxIsoDate(callback) {
    var selectSql = 'SELECT MAX(isoDate) AS max FROM bitmex_data_5m_view';

    dbConn.query(selectSql, function(error, results, fields) {
        if (error) {
            console.log(error);
        }

        callback(results[0]);
    });
}

function GetCustomizeData (selectSql, startTime, endTime, callback) {
    dbConn.query(selectSql, [startTime, endTime], function(error, results, fields) {
        if (error) {
            deferred.reject("Error!");
        }
        callback(results);
    });
}

module.exports = service;
