var express = require('express');
var router = require('express').Router();
var dbConn = require('../../_core/dbConn');
const sprintfJs = require('sprintf-js');
const sprintf = sprintfJs.sprintf,
    vsprintf = sprintfJs.vsprintf;
const fftJs = require('fft-js');

router.get('/calculated/:interval', (req, res) => {
    const interval = req.params.interval;
    const acceptInterval = ['1m', '5m', '1h'];
    if (acceptInterval.indexOf(interval) === -1) {
        res.send({
            result: 'error',
            data: 'binSize error',
        });
        return;
    }
    let sql = sprintf("SELECT * FROM (SELECT `timestamp`, `date`, IFNULL(`open`, 0) `open`, IFNULL(`high`, 0) `high`, IFNULL(`low`, 0) `low`, IFNULL(`close`, 0) `close` FROM `bitmex_data_%s_view` ORDER BY `timestamp` DESC LIMIT 2000) `sub` ORDER BY `timestamp` ASC;", interval);
    // console.log(sql);
    dbConn.query(sql, null, (error, results, fields) => {
        if (error) {
            console.log(error);
            res.send({
                result: 'error',
                data: 'internal server error',
            });
            return;
        }
        if (results == null) {
            res.send({
                result: 'error',
                data: 'no data',
            });
            return;
        }
        if (!power_of_2(results.length)) {
            const cnt = results.length;
            const last = results[cnt - 1];
            for (let i = cnt; i < 2048; i++) {
                results.push(last);
            }
        }
        // let dates = [];
        let opens = [];
        for (let item of results) {
            // dates.push(item.date);
            opens.push(item.open);
        }
        let fft = fftJs.fft(opens);
        const cnts = [3, 6, 9, 100];
        let buffer;
        let iffts = new Map();
        for (let cnt of cnts) {
            let i;
            const cnt2 = 2048 - cnt;
            let ifft;
            buffer = [];
            for (i = 0; i < cnt; i++) {
                buffer.push(fft[i]);
            }
            for (i = cnt; i < cnt2; i++) {
                buffer.push([0, 0]);
            }
            for (i = cnt2; i < 2048; i++) {
                buffer.push(fft[i]);
            }
            ifft = fftJs.ifft(buffer);
            // console.log(ifft[0][0]);
            iffts.set('ifft' + cnt, ifft);
        }
        // console.log(iffts);
        // console.log(iffts.get('ifft3'));
        let final = [];
        let idx = 1999;
        let dbItem;
        let ifft3 = iffts.get('ifft3');
        let ifft6 = iffts.get('ifft6');
        let ifft9 = iffts.get('ifft9');
        let ifft100 = iffts.get('ifft100');
        for (let i = 0; i < 2048; i++) {
            dbItem = results[i];
            final.push({
                id: idx--,
                timestamp: dbItem.timestamp,
                open: dbItem.open,
                high: dbItem.high,
                low: dbItem.low,
                close: dbItem.close,
                num_3: ifft3[i][0],
                num_3i: ifft3[i][1],
                num_6: ifft6[i][0],
                num_6i: ifft6[i][1],
                num_9: ifft9[i][0],
                num_9i: ifft9[i][1],
                num_100: ifft100[i][0],
                num_100i: ifft100[i][1],
            })
        }
        res.send(final);
    });
});

router.get('/id0/:interval', (req, res) => {
    const interval = req.params.interval;
    _calculateId0(interval, results => {
        console.log(results);
        res.send(results);
    });
    // const acceptInterval = ['1m', '5m', '1h'];
    // if (acceptInterval.indexOf(interval) === -1) {
    //     res.send({
    //         result: 'error',
    //         data: 'binSize error',
    //     });
    //     return;
    // }
    // let sql = sprintf("SELECT * FROM (SELECT `timestamp`, `date`, IFNULL(`open`, 0) `open`, IFNULL(`high`, 0) `high`, IFNULL(`low`, 0) `low`, IFNULL(`close`, 0) `close` FROM `bitmex_data_%s_view` ORDER BY `timestamp` DESC LIMIT 2000) `sub` ORDER BY `timestamp` ASC;", interval);
    // // console.log(sql);
    // dbConn.query(sql, null, (error, results, fields) => {
    //     if (error) {
    //         console.log(error);
    //         res.send({
    //             result: 'error',
    //             data: 'internal server error',
    //         });
    //         return;
    //     }
    //     if (results == null) {
    //         res.send({
    //             result: 'error',
    //             data: 'no data',
    //         });
    //         return;
    //     }
    //     let resultCnt = results.length;
    //     if (!power_of_2(resultCnt)) {
    //         const cnt = resultCnt;
    //         const last = results[cnt - 1];
    //         for (let i = cnt; i < 2048; i++) {
    //             results.push(last);
    //         }
    //     }
    //     // let dates = [];
    //     let opens = [];
    //     for (let item of results) {
    //         // dates.push(item.date);
    //         opens.push(item.open);
    //     }
    //     let fft = fftJs.fft(opens);
    //     const cnts = [3, 6, 9, 100];
    //     let buffer;
    //     let iffts = new Map();
    //     for (let cnt of cnts) {
    //         let i;
    //         const cnt2 = 2048 - cnt;
    //         let ifft;
    //         buffer = [];
    //         for (i = 0; i < cnt; i++) {
    //             buffer.push(fft[i]);
    //         }
    //         for (i = cnt; i < cnt2; i++) {
    //             buffer.push([0, 0]);
    //         }
    //         for (i = cnt2; i < 2048; i++) {
    //             buffer.push(fft[i]);
    //         }
    //         ifft = fftJs.ifft(buffer);
    //         // console.log(ifft[0][0]);
    //         iffts.set('ifft' + cnt, ifft);
    //     }
    //     // console.log(iffts);
    //     // console.log(iffts.get('ifft3'));
    //     let idx = 1999;
    //     let dbItem;
    //     let ifft3 = iffts.get('ifft3');
    //     let ifft6 = iffts.get('ifft6');
    //     let ifft9 = iffts.get('ifft9');
    //     let ifft100 = iffts.get('ifft100');
    //     const finalIdx = resultCnt - 1;
    //     const final = {
    //         id: 0,
    //         timestamp: results[finalIdx].timestamp,
    //         open: results[finalIdx].open,
    //         high: results[finalIdx].high,
    //         low: results[finalIdx].low,
    //         close: results[finalIdx].close,
    //         num_3: ifft3[finalIdx][0],
    //         num_3i: ifft3[finalIdx][1],
    //         num_6: ifft6[finalIdx][0],
    //         num_6i: ifft6[finalIdx][1],
    //         num_9: ifft9[finalIdx][0],
    //         num_9i: ifft9[finalIdx][1],
    //         num_100: ifft100[finalIdx][0],
    //         num_100i: ifft100[finalIdx][1],
    //     };
    //     res.send(final);
    // });
});

router.get('/id0_collection/:interval', (req, res) => {
    const interval = req.params.interval;
    let startTime = req.query.startTime;
    if (startTime && startTime.length > 0) {
        startTime = (new Date(startTime)).toISOString();
    }
    let endTime = req.query.endTime;
    if (endTime && endTime.length > 0) {
        endTime = (new Date(endTime)).toISOString();
    }
    console.log(startTime, endTime);
    const acceptInterval = ['1m', '5m', '1h'];
    if (acceptInterval.indexOf(interval) === -1) {
        res.send({
            result: 'error',
            data: 'binSize error',
        });
        return;
    }
    let sql;
    if (startTime && startTime.length > 0) {
        sql = sprintf("SELECT * FROM (SELECT `timestamp`, `open`, `num_3`, `num_3i`, `num_6`, `num_6i`, `num_9`, `num_9i`, `num_100`, `num_100i` FROM `id0_%s` WHERE `timestamp` BETWEEN '%s' AND '%s' ORDER BY `timestamp` DESC LIMIT 2000) `sub` ORDER BY `timestamp` ASC;", interval, startTime, endTime);
    } else {
        sql = sprintf("SELECT * FROM (SELECT `timestamp`, `open`, `num_3`, `num_3i`, `num_6`, `num_6i`, `num_9`, `num_9i`, `num_100`, `num_100i` FROM `id0_%s` ORDER BY `timestamp` DESC LIMIT 2000) `sub` ORDER BY `timestamp` ASC;", interval);
    }
    console.log(sql);
    dbConn.query(sql, null, (error, results, fields) => {
        if (error) {
            console.log(error);
            res.send([]);
            return;
        }
        // console.log(resultsNoUse[0].count);
        // return;
        if (results && results.length > 0) {
            let finalResult = [];
            let idx = results.length - 1;
            for (let item of results) {
                // item.id = idx--;
                // finalResult.push(item);
                finalResult.push({
                    id: idx--,
                    timestamp: item.timestamp,
                    open: item.open,
                    num_3: item.num_3,
                    num_3i: item.num_3i,
                    num_6: item.num_6,
                    num_6i: item.num_6i,
                    num_9: item.num_9,
                    num_9i: item.num_9i,
                    num_100: item.num_100,
                    num_100i: item.num_100i,
                })
            }
            res.send(finalResult);
        }
    });
});
module.exports = router; 
