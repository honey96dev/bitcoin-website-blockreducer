var router = require('express').Router();
var priceService = require('./../services/price.service');
var volumeService = require('./../services/volume.service');
var fftService = require('./../services/fft.service');
var tradeService = require('./../services/trade.service');
var hiddenService = require('./../services/hidden.service');

router.post('/price/init', GetLast1MonthPrice);
router.post('/price/custom', GetCustomizePrice);
router.post('/volume/init', GetLast1MonthVolume);
router.post('/volume/custom', GetCustomizeVolume);
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

function GetLast1MonthVolume(req, res) {
    // res.json({});
    // return;
    volumeService.GetLast1MonthVolume()
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
    console.log(candle);
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
    var estiamtes = req.body;
    fftService.GetEstimateFFT(estiamtes)
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
    hiddenService.GetLast1DayHidden()
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
