var express = require('express');
var router = require('express').Router();
var dbConn = require('../../_core/dbConn');
const sprintfJs = require('sprintf-js');
const sprintf = sprintfJs.sprintf,
    vsprintf = sprintfJs.vsprintf;
const fftJs = require('fft-js');
const ss = require('simple-statistics');
const config = require('../../_core/config');

const offsetPercent = 0.25;

router.get('/instruments', (req, res) => {
    let sql = sprintf("SELECT * FROM `deribit_instruments2` ORDER BY `creation_timestamp`;");
    dbConn.query(sql, undefined, (error, results, fields) => {
        if (error) {
            res.status(200).send({
                data:[],
                strikeKDECall: [],
                strikeKDEPut: [],
                bidKDECall: [],
                bidKDEPut: [],
                deltaKDECall: [],
                deltaKDEPut: [],
                gammaKDECall: [],
                gammaKDEPut: [],
                vegaKDECall: [],
                vegaKDEPut: [],
                spreadKDECall: [],
                spreadKDEPut: [],
            });
            return;
        }
        if (!results || results.length === 0) {
            res.status(200).send({
                data:[],
                strikeKDECall: [],
                strikeKDEPut: [],
                bidKDECall: [],
                bidKDEPut: [],
                deltaKDECall: [],
                deltaKDEPut: [],
                gammaKDECall: [],
                gammaKDEPut: [],
                vegaKDECall: [],
                vegaKDEPut: [],
                spreadKDECall: [],
                spreadKDEPut: [],
            });
            return;
        }

        let finalResult = {
            data: results,
        };

        let strikeKDECallBuffer = [];
        let strikeKDEPutBuffer = [];
        let bidKDECallBuffer = [];
        let bidKDEPutBuffer = [];
        let deltaKDECallBuffer = [];
        let deltaKDEPutBuffer = [];
        let gammaKDECallBuffer = [];
        let gammaKDEPutBuffer = [];
        let vegaKDECallBuffer = [];
        let vegaKDEPutBuffer = [];
        let spreadKDECallBuffer = [];
        let spreadKDEPutBuffer = [];

        let x, step;
        let tmp1;
        let tmp2;
        let strikeRange = {min: results[0].strike, max: results[0].strike};
        let bidRange = {min: results[0].best_bid_price, max: results[0].best_bid_price};
        let deltaRange = {min: results[0].delta, max: results[0].delta};
        let gammaRange = {min: results[0].gamma, max: results[0].gamma};
        let vegaRange = {min: results[0].vega, max: results[0].vega};
        let spreadRange = {min: results[0].best_ask_price - results[0].best_bid_price, max: results[0].best_ask_price - results[0].best_bid_price};
        let spread;
        for (let result of results) {
            if (result.type == 'Call') strikeKDECallBuffer.push(result.strike);
            if (result.type == 'Put') strikeKDEPutBuffer.push(result.strike);
            if (strikeRange.min > result.strike) strikeRange.min = result.strike;
            if (strikeRange.max < result.strike) strikeRange.max = result.strike;

            if (result.type == 'Call') bidKDECallBuffer.push(result.best_bid_price);
            if (result.type == 'Put') bidKDEPutBuffer.push(result.best_bid_price);
            if (bidRange.min > result.best_bid_price) bidRange.min = result.best_bid_price;
            if (bidRange.max < result.best_bid_price) bidRange.max = result.best_bid_price;

            if (result.type == 'Call') deltaKDECallBuffer.push(result.delta);
            if (result.type == 'Put') deltaKDEPutBuffer.push(result.delta);
            if (deltaRange.min > result.delta) deltaRange.min = result.delta;
            if (deltaRange.max < result.delta) deltaRange.max = result.delta;

            if (result.type == 'Call') gammaKDECallBuffer.push(result.gamma);
            if (result.type == 'Put') gammaKDEPutBuffer.push(result.gamma);
            if (gammaRange.min > result.gamma) gammaRange.min = result.gamma;
            if (gammaRange.max < result.gamma) gammaRange.max = result.gamma;

            if (result.type == 'Call') vegaKDECallBuffer.push(result.vega);
            if (result.type == 'Put') vegaKDEPutBuffer.push(result.vega);
            if (vegaRange.min > result.vega) vegaRange.min = result.vega;
            if (vegaRange.max < result.vega) vegaRange.max = result.vega;

            spread = result.best_ask_price - result.best_bid_price;
            if (result.type == 'Call') spreadKDECallBuffer.push(spread);
            if (result.type == 'Put') spreadKDEPutBuffer.push(spread);
            if (spreadRange.min > spread) spreadRange.min = spread;
            if (spreadRange.max < spread) spreadRange.max = spread;
        }
        tmp1 = strikeRange.min;
        tmp2 = strikeRange.max;
        strikeRange.min -= (tmp2 - tmp1) * offsetPercent;
        strikeRange.max += (tmp2 - tmp1) * offsetPercent;
        tmp1 = bidRange.min;
        tmp2 = bidRange.max;
        bidRange.min -= (tmp2 - tmp1) * offsetPercent;
        bidRange.max += (tmp2 - tmp1) * offsetPercent;
        tmp1 = deltaRange.min;
        tmp2 = deltaRange.max;
        deltaRange.min -= (tmp2 - tmp1) * offsetPercent;
        deltaRange.max += (tmp2 - tmp1) * offsetPercent;
        tmp1 = gammaRange.min;
        tmp2 = gammaRange.max;
        gammaRange.min -= (tmp2 - tmp1) * offsetPercent;
        gammaRange.max += (tmp2 - tmp1) * offsetPercent;
        tmp1 = vegaRange.min;
        tmp2 = vegaRange.max;
        vegaRange.min -= (tmp2 - tmp1) * offsetPercent;
        vegaRange.max += (tmp2 - tmp1) * offsetPercent;
        tmp1 = spreadRange.min;
        tmp2 = spreadRange.max;
        spreadRange.min -= (tmp2 - tmp1) * offsetPercent;
        spreadRange.max += (tmp2 - tmp1) * offsetPercent;

        const fStrikeKDECall = ss.kernelDensityEstimation(strikeKDECallBuffer);
        const fStrikeKDEPut = ss.kernelDensityEstimation(strikeKDEPutBuffer);
        let strikeKDECall = [];
        let strikeKDEPut = [];
        step = (strikeRange.max - strikeRange.min) / config.hiddenChartEntryNum;
        for (x = strikeRange.min; x <= strikeRange.max; x += step) {
            strikeKDECall.push({value: x, density: fStrikeKDECall(x) * strikeKDECallBuffer.length});
            strikeKDEPut.push({value: x, density: fStrikeKDEPut(x) * strikeKDEPutBuffer.length});
        }
        finalResult['strikeKDECall'] = strikeKDECall;
        finalResult['strikeKDEPut'] = strikeKDEPut;

        const fBidKDECall = ss.kernelDensityEstimation(bidKDECallBuffer);
        const fBidKDEPut = ss.kernelDensityEstimation(bidKDEPutBuffer);
        let bidKDECall = [];
        let bidKDEPut = [];
        step = (bidRange.max - bidRange.min) / config.hiddenChartEntryNum;
        for (x = bidRange.min; x <= bidRange.max; x += step) {
            bidKDECall.push({value: x, density: fBidKDECall(x) * bidKDECallBuffer.length});
            bidKDEPut.push({value: x, density: fBidKDEPut(x) * bidKDEPutBuffer.length});
        }
        finalResult['bidKDECall'] = bidKDECall;
        finalResult['bidKDEPut'] = bidKDEPut;

        const fDeltaKDECall = ss.kernelDensityEstimation(deltaKDECallBuffer);
        const fDeltaKDEPut = ss.kernelDensityEstimation(deltaKDEPutBuffer);
        let deltaKDECall = [];
        let deltaKDEPut = [];
        step = (deltaRange.max - deltaRange.min) / config.hiddenChartEntryNum;
        for (x = deltaRange.min; x <= deltaRange.max; x += step) {
            deltaKDECall.push({value: x, density: fDeltaKDECall(x) * deltaKDECallBuffer.length});
            deltaKDEPut.push({value: x, density: fDeltaKDEPut(x) * deltaKDEPutBuffer.length});
        }
        finalResult['deltaKDECall'] = deltaKDECall;
        finalResult['deltaKDEPut'] = deltaKDEPut;

        const fGammaKDECall = ss.kernelDensityEstimation(gammaKDECallBuffer);
        const fGammaKDEPut = ss.kernelDensityEstimation(gammaKDEPutBuffer);
        let gammaKDECall = [];
        let gammaKDEPut = [];
        step = (gammaRange.max - gammaRange.min) / config.hiddenChartEntryNum;
        for (x = gammaRange.min; x <= gammaRange.max; x += step) {
            gammaKDECall.push({value: x, density: fGammaKDECall(x) * gammaKDECallBuffer.length});
            gammaKDEPut.push({value: x, density: fGammaKDEPut(x) * gammaKDEPutBuffer.length});
        }
        finalResult['gammaKDECall'] = gammaKDECall;
        finalResult['gammaKDEPut'] = gammaKDEPut;

        const fVegaKDECall = ss.kernelDensityEstimation(vegaKDECallBuffer);
        const fVegaKDEPut = ss.kernelDensityEstimation(vegaKDEPutBuffer);
        let vegaKDECall = [];
        let vegaKDEPut = [];
        step = (vegaRange.max - vegaRange.min) / config.hiddenChartEntryNum;
        for (x = vegaRange.min; x <= vegaRange.max; x += step) {
            vegaKDECall.push({value: x, density: fVegaKDECall(x) * vegaKDECallBuffer.length});
            vegaKDEPut.push({value: x, density: fVegaKDEPut(x) * vegaKDEPutBuffer.length});
        }
        finalResult['vegaKDECall'] = vegaKDECall;
        finalResult['vegaKDEPut'] = vegaKDEPut;

        const fSpreadKDECall = ss.kernelDensityEstimation(spreadKDECallBuffer);
        const fSpreadKDEPut = ss.kernelDensityEstimation(spreadKDEPutBuffer);
        let spreadKDECall = [];
        let spreadKDEPut = [];
        step = (spreadRange.max - spreadRange.min) / config.hiddenChartEntryNum;
        for (x = spreadRange.min; x <= spreadRange.max; x += step) {
            spreadKDECall.push({value: x, density: fSpreadKDECall(x) * spreadKDECallBuffer.length});
            spreadKDEPut.push({value: x, density: fSpreadKDEPut(x) * spreadKDEPutBuffer.length});
        }
        finalResult['spreadKDECall'] = spreadKDECall;
        finalResult['spreadKDEPut'] = spreadKDEPut;
        // console.log(strikeKDEPut);

        res.status(200).send(finalResult);
    });
});

//
// router.get('/bid-kde', (req, res) => {
//     let sql = sprintf("SELECT * FROM `deribit_instruments2` ORDER BY `best_bid_price`;");
//     dbConn.query(sql, undefined, (error, results, fields) => {
//         if (error) {
//             res.status(200).send([]);
//             return;
//         }
//         if (!results || results.length === 0) {
//             res.status(200).send([]);
//             return;
//         }
//         let buffer1 = [];
//         let buffer2 = [];
//         let buffer3 = [];
//         const resultsCnt = results.length;
//         let strikeRange = results[resultsCnt - 1].best_bid_price - results[0].best_bid_price;
//         buffer3.push({type: 'Call', value: results[0].best_bid_price - strikeRange / 4 < 0 ? 0 : results[0].best_bid_price - strikeRange / 4 < 0});
//         buffer3.push({type: 'Put', value: results[0].best_bid_price - strikeRange / 4 < 0 ? 0 : results[0].best_bid_price - strikeRange / 4 < 0});
//         for (let result of results) {
//             if (result.type == 'Call') buffer1.push(result.best_bid_price);
//             if (result.type == 'Put') buffer2.push(result.best_bid_price);
//             buffer3.push({type: result.type, value: result.best_bid_price});
//             // if (strikeRange.min > result.best_bid_price) strikeRange.min = result.best_bid_price;
//             // if (strikeRange.max < result.best_bid_price) strikeRange.max = result.best_bid_price;
//         }
//         buffer3.push({type: 'Call', value: results[resultsCnt - 1].best_bid_price + strikeRange / 4});
//         buffer3.push({type: 'Put', value: results[resultsCnt - 1].best_bid_price + strikeRange / 4});
//
//         let finalResult = {
//             data: results,
//         };
//
//         const fKDECall = ss.kernelDensityEstimation(buffer1);
//         const fKDEPut = ss.kernelDensityEstimation(buffer2);
//         let KDEPut = [];
//         let KDECall = [];
//         // step = (strikeRange.max - strikeRange.min) / config.hiddenChartEntryNum;
//         // for (x = strikeRange.min; x <= strikeRange.max; x += step) {
//         //     strikeKDE.push(fStrikeKDE(x));
//         // }
//         for (let item of buffer3) {
//             if (item.type == 'Call') KDECall.push({value: item.value, density: fKDECall(item.value)});
//             if (item.type == 'Put') KDEPut.push({value: item.value, density: fKDEPut(item.value)});
//         }
//         finalResult['KDECall'] = KDECall;
//         finalResult['KDEPut'] = KDEPut;
//         // console.log(strikeKDEPut);
//
//         res.status(200).send(finalResult);
//     });
// });

module.exports = router;
