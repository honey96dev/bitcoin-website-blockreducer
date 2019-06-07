var router = require('express').Router();
var priceService = require('./../services/price.service');
var volumeService = require('./../services/volume.service');
var fftService = require('./../services/fft.service');
var tradeService = require('./../services/trade.service');
var hiddenService = require('./../services/hidden.service');
var dbConn = require('../../_core/dbConn');
const sprintfJs = require('sprintf-js');
const sprintf = sprintfJs.sprintf,
    vsprintf = sprintfJs.vsprintf;
const fftJs = require('fft-js');

router.post('/price/init', GetLast1MonthPrice);
router.post('/price/custom', GetCustomizePrice);
router.post('/volume/init', GetVolumeChart);
router.post('/volume/custom', GetVolumeChart2);
router.post('/fft/init', GetLast1MonthFFT);
// router.post('/fft/custom', GetCustomizeFFT);
router.post('/fft/estimate', GetEstimateFFT);
router.post('/fft/customize', GetDataByCandle);
router.post('/hidden/day', GetLast1DayHidden);
router.post('/hidden/year', GetLast1YearHidden);
router.post('/trade/init', GetLast7dayTrade);

module.exports = router;

function GetLast1MonthPrice(req, res) {
    // res.json({});
    // return;
    priceService.GetLast1MonthPrice()
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

function GetCustomizePrice(req, res) {
    // res.json({});
    // return;
    var startTime = req.body.startTime;
    var endTime = req.body.endTime;
    priceService.GetCustomizePrice(startTime, endTime)
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

function GetVolumeChart(req, res) {
    const interval = req.query.interval;
    let startTime = req.query.startTime;
    if (startTime && startTime.length > 0) {
        startTime = (new Date(startTime)).toISOString();
    }
    let endTime = req.query.endTime;
    if (endTime && endTime.length > 0) {
        endTime = (new Date(endTime)).toISOString();
    }
    console.log('interval', interval);
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
        sql = sprintf("SELECT V.timestamp, IFNULL(I.open, 0) `open`, V.volume, IFNULL(W.vwap_seed, 1) `vwap_seed`, IFNULL(I.num_3, 0) `num_3`, IFNULL(I.num_6, 0) `num_6`, IFNULL(I.num_9, 0) `num_9`, IFNULL(I.num_100, 0) `num_100` FROM (SELECT `timestamp`, IFNULL(`volume`, 0) `volume` FROM `volume_%s` WHERE `timestamp` BETWEEN '%s' AND '%s' ORDER BY `timestamp` DESC LIMIT 2000) `V` LEFT JOIN `vwap_%s` W ON W.timestamp = V.timestamp LEFT JOIN `id0_%s` I ON I.timestamp = V.timestamp ORDER BY V.timestamp ASC;", interval, startTime, endTime, interval, interval);
    } else {
        sql = sprintf("SELECT V.timestamp, IFNULL(I.open, 0) `open`, V.volume, IFNULL(W.vwap_seed, 1) `vwap_seed`, IFNULL(I.num_3, 0) `num_3`, IFNULL(I.num_6, 0) `num_6`, IFNULL(I.num_9, 0) `num_9`, IFNULL(I.num_100, 0) `num_100` FROM (SELECT `timestamp`, IFNULL(`volume`, 0) `volume` FROM `volume_%s` ORDER BY `timestamp` DESC LIMIT 2000) `V` LEFT JOIN `vwap_%s` W ON W.timestamp = V.timestamp LEFT JOIN `id0_%s` I ON I.timestamp = V.timestamp ORDER BY V.timestamp ASC;", interval, interval, interval);
    }

    console.log(sql);
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
        let final = [];
        let lastOpen = 0;
        let lastNum3 = 0;
        let lastNum6 = 0;
        let lastNum9 = 0;
        let lastNum100 = 0;
        for (let item of results) {
            if (item.open != 0) {
                lastOpen = item.open;
            }
            if (item.num_3 != 0) {
                lastNum3 = item.num_3;
            }
            if (item.num_6 != 0) {
                lastNum6 = item.num_6;
            }
            if (item.num_9 != 0) {
                lastNum9 = item.num_9;
            }
            if (item.num_100 != 0) {
                lastNum100 = item.num_100;
            }
            final.push({
                timestamp: item.timestamp,
                open: lastOpen,
                volume: item.volume,
                num_3: item.vwap_seed * lastNum3,
                num_6: item.vwap_seed * lastNum6,
                num_9: item.vwap_seed * lastNum9,
                num_100: item.vwap_seed * lastNum100,
            });
        }
        final.pop();
        res.send(final);
    });
}

function GetVolumeChart2(req, res) {
    const interval = req.query.interval;
    let startTime = req.query.startTime;
    if (startTime && startTime.length > 0) {
        startTime = (new Date(startTime)).toISOString();
    }
    let endTime = req.query.endTime;
    if (endTime && endTime.length > 0) {
        endTime = (new Date(endTime)).toISOString();
    }
    console.log('interval', interval);
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
        sql = sprintf("SELECT I.*, IFNULL(B.open, 0) `open` FROM (SELECT `timestamp`, `openInterest`, `openValue` FROM `interested_n_value_%s` WHERE `timestamp` BETWEEN '%s' AND '%s' ORDER BY `timestamp` DESC LIMIT 2000) `I` LEFT JOIN `bitmex_data_%s_view` B ON B.timestamp = I.timestamp ORDER BY I.timestamp ASC;", interval, startTime, endTime, interval);
    } else {
        sql = sprintf("SELECT I.*, IFNULL(B.open, 0) `open` FROM (SELECT `timestamp`, `openInterest`, `openValue` FROM `interested_n_value_%s` WHERE `timestamp` ORDER BY `timestamp` DESC LIMIT 2000) `I` LEFT JOIN `bitmex_data_%s_view` B ON B.timestamp = I.timestamp ORDER BY I.timestamp ASC;", interval, interval);
    }

    console.log(sql);
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
        let final = [];
        let lastOpen = 0;
        for (let item of results) {
            if (item.open != 0) {
                lastOpen = item.open;
            }
            final.push({
                timestamp: item.timestamp,
                open: lastOpen,
                openInterest: item.openInterest,
                openValue: item.openValue / 10000,
            });
        }
        final.pop();
        res.send(final);
    });
}

function GetCustomizeVolume(req, res) {
    // res.json({});
    // return;
    var startTime = req.body.startTime;
    var endTime = req.body.endTime;
    volumeService.GetCustomizeVolume(startTime, endTime)
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
    // res.json({});
    // return;
    var startTime = (new Date( req.body.inputData.startTime)).toISOString();
    var endTime = (new Date(req.body.inputData.endTime)).toISOString();
    var candle = req.body.inputData.candle;
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
    let startTime = new Date();
    startTime.setFullYear(startTime.getFullYear() - 4);
    startTime = startTime.toISOString();
    if (req.body.data && req.body.data.startTime) {
        startTime = (new Date(req.body.data.startTime)).toISOString();
    }
    var estimates = req.body.estimates;
    // console.log('GetEstimateFFT', req.body, startTime, endTime, estimates);
    fftService.GetEstimateFFT(candle, startTime, endTime, estimates)
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


function GetLast1DayHidden(req, res) {
    // res.json({});
    // return;
    console.log(req.body);
    let startTime = req.body.params.startTime;
    let endTime = req.body.params.endTime;
    if (startTime && startTime.length > 0) {
        startTime = (new Date(startTime)).toISOString();
    }
    if (endTime && endTime.length > 0) {
        endTime = (new Date(endTime)).toISOString();
    }
    console.log(startTime, endTime);
    hiddenService.GetLast1DayHidden(startTime, endTime)
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


function GetLast1YearHidden(req, res) {
    // res.json({});
    // return;
    hiddenService.GetLast1YearHidden()
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

function GetLast7dayTrade (req, res) {
    // res.json({});
    // return;
    tradeService.GetLast7dayTrade()
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


function power_of_2(n) {
    if (typeof n !== 'number')
        return 'Not a number';

    return n && (n & (n - 1)) === 0;
}
