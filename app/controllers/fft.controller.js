var router = require('express').Router();
var fftService = require('./../services/fft.service');

router.post('/init', GetLast1MonthFFT);
// router.post('/fft/custom', GetCustomizeFFT);
router.post('/estimate', GetEstimateFFT);
router.post('/customize', GetDataByCandle);
router.get('/:candle', GetDataByCandle);

module.exports = router;

function GetLast1MonthFFT(req, res) {
    // res.json({});
    // return;
    fftService.GetLast1MonthFFT()
        .then(function(data) {
            if(data) {
                res.json(data);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
}

function GetDataByCandle(req, res) {
    var candle = req.params.candle;
    const acceptInterval = ['5m', '1h'];
    // const acceptInterval = ['1m', '5m', '1h'];
    if (acceptInterval.indexOf(candle) === -1) {
        res.send([]);
        return;
    }

    let endTime = new Date().toISOString();
    if (req.body.inputData && req.body.inputData.endTime) {
        endTime = (new Date(req.body.inputData.endTime)).toISOString();
    }
    endTime = new Date(endTime);
    endTime.setMinutes(Math.floor(endTime.getMinutes() / 5) * 5);
    endTime = endTime.toISOString();

    let startTime = new Date();
    startTime.setFullYear(startTime.getFullYear() - 4);
    startTime = startTime.toISOString();
    if (req.body.inputData && req.body.inputData.startTime) {
        startTime = (new Date(req.body.inputData.startTime)).toISOString();
    }

    // fftService.GetDataByCandle(candle, startTime, endTime)
    //     .then(function(data) {
    //         if(data) {
    //             res.json(data);
    //         } else {
    //             res.sendStatus(404);
    //         }
    //     })
    //     .catch(function(error) {
    //         res.status(400).send(error);
    //     });

    fftService.GetCustomizeFFT(candle, startTime, endTime)
        .then(function(data) {
            if(data) {
                res.json(data);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
}

function GetEstimateFFT(req, res) {
    // res.json({});
    // return;
    let candle = null;
    if (req.body.data && req.body.data.candle) {
        candle = req.body.data.candle;
    }

    let endTime = new Date().toISOString();
    if (req.body.data && req.body.data.endTime) {
        endTime = (new Date(req.body.data.endTime)).toISOString();
    }
    endTime = new Date(endTime);
    endTime.setMinutes(Math.floor(endTime.getMinutes() / 5) * 5);
    endTime = endTime.toISOString();

    let startTime = new Date();
    startTime.setFullYear(startTime.getFullYear() - 4);
    startTime = startTime.toISOString();
    if (req.body.data && req.body.data.startTime) {
        startTime = (new Date(req.body.data.startTime)).toISOString();
    }
    let estimates = req.body.estimates;
    // console.log('GetEstimateFFT', req.body, startTime, endTime, estimates);
    fftService.GetEstimateFFT(candle, startTime, endTime, estimates, req.session.userId)
        .then(function(data) {
            if(data) {
                res.json(data);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function(error) {
            res.status(400).send(error);
        });
}

