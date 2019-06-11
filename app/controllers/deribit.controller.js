var express = require('express');
var router = require('express').Router();
var dbConn = require('../../_core/dbConn');
const sprintfJs = require('sprintf-js');
const sprintf = sprintfJs.sprintf,
    vsprintf = sprintfJs.vsprintf;
const fftJs = require('fft-js');
const ss = require('simple-statistics');
const config = require('../../_core/config');

router.get('/strike-kde', (req, res) => {
    let sql = sprintf("SELECT * FROM `deribit_instruments2` ORDER BY `strike`;");
    dbConn.query(sql, undefined, (error, results, fields) => {
        if (error) {
            res.status(200).send([]);
            return;
        }
        if (!results || results.length === 0) {
            res.status(200).send([]);
            return;
        }
        let buffer1 = [];
        let buffer2 = [];
        let buffer3 = [];
        const resultsCnt = results.length;
        let strikeRange = results[resultsCnt - 1].strike - results[0].strike;
        buffer3.push({type: 'Call', value: results[0].strike - strikeRange / 4 < 0 ? 0 : results[0].strike - strikeRange / 4 < 0});
        buffer3.push({type: 'Put', value: results[0].strike - strikeRange / 4 < 0 ? 0 : results[0].strike - strikeRange / 4 < 0});
        for (let result of results) {
            if (result.type == 'Call') buffer1.push(result.strike);
            if (result.type == 'Put') buffer2.push(result.strike);
            buffer3.push({type: result.type, value: result.strike});
            // if (strikeRange.min > result.strike) strikeRange.min = result.strike;
            // if (strikeRange.max < result.strike) strikeRange.max = result.strike;
        }
        buffer3.push({type: 'Call', value: results[resultsCnt - 1].strike + strikeRange / 4});
        buffer3.push({type: 'Put', value: results[resultsCnt - 1].strike + strikeRange / 4});

        let finalResult = {
            data: results,
        };

        const fKDECall = ss.kernelDensityEstimation(buffer1);
        const fKDEPut = ss.kernelDensityEstimation(buffer2);
        let KDEPut = [];
        let KDECall = [];
        // step = (strikeRange.max - strikeRange.min) / config.hiddenChartEntryNum;
        // for (x = strikeRange.min; x <= strikeRange.max; x += step) {
        //     strikeKDE.push(fStrikeKDE(x));
        // }
        for (let item of buffer3) {
            if (item.type == 'Call') KDECall.push({value: item.value, density: fKDECall(item.value)});
            if (item.type == 'Put') KDEPut.push({value: item.value, density: fKDEPut(item.value)});
        }
        finalResult['KDECall'] = KDECall;
        finalResult['KDEPut'] = KDEPut;
        // console.log(strikeKDEPut);

        res.status(200).send(finalResult);
    });
});


router.get('/bid-kde', (req, res) => {
    let sql = sprintf("SELECT * FROM `deribit_instruments2` ORDER BY `best_bid_price`;");
    dbConn.query(sql, undefined, (error, results, fields) => {
        if (error) {
            res.status(200).send([]);
            return;
        }
        if (!results || results.length === 0) {
            res.status(200).send([]);
            return;
        }
        let buffer1 = [];
        let buffer2 = [];
        let buffer3 = [];
        const resultsCnt = results.length;
        let strikeRange = results[resultsCnt - 1].best_bid_price - results[0].best_bid_price;
        buffer3.push({type: 'Call', value: results[0].best_bid_price - strikeRange / 4 < 0 ? 0 : results[0].best_bid_price - strikeRange / 4 < 0});
        buffer3.push({type: 'Put', value: results[0].best_bid_price - strikeRange / 4 < 0 ? 0 : results[0].best_bid_price - strikeRange / 4 < 0});
        for (let result of results) {
            if (result.type == 'Call') buffer1.push(result.best_bid_price);
            if (result.type == 'Put') buffer2.push(result.best_bid_price);
            buffer3.push({type: result.type, value: result.best_bid_price});
            // if (strikeRange.min > result.best_bid_price) strikeRange.min = result.best_bid_price;
            // if (strikeRange.max < result.best_bid_price) strikeRange.max = result.best_bid_price;
        }
        buffer3.push({type: 'Call', value: results[resultsCnt - 1].best_bid_price + strikeRange / 4});
        buffer3.push({type: 'Put', value: results[resultsCnt - 1].best_bid_price + strikeRange / 4});

        let finalResult = {
            data: results,
        };

        const fKDECall = ss.kernelDensityEstimation(buffer1);
        const fKDEPut = ss.kernelDensityEstimation(buffer2);
        let KDEPut = [];
        let KDECall = [];
        // step = (strikeRange.max - strikeRange.min) / config.hiddenChartEntryNum;
        // for (x = strikeRange.min; x <= strikeRange.max; x += step) {
        //     strikeKDE.push(fStrikeKDE(x));
        // }
        for (let item of buffer3) {
            if (item.type == 'Call') KDECall.push({value: item.value, density: fKDECall(item.value)});
            if (item.type == 'Put') KDEPut.push({value: item.value, density: fKDEPut(item.value)});
        }
        finalResult['KDECall'] = KDECall;
        finalResult['KDEPut'] = KDEPut;
        // console.log(strikeKDEPut);

        res.status(200).send(finalResult);
    });
});

module.exports = router;
