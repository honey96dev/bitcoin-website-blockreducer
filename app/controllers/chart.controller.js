var router = require('express').Router();
var priceService = require('./../services/price.service');
var tradeService = require('./../services/trade.service');
var hiddenService = require('./../services/hidden.service');
var dbConn = require('../../_core/dbConn');
var config = require('../../_core/config');
const sprintfJs = require('sprintf-js');
const sprintf = sprintfJs.sprintf;

router.post('/price/init', GetLast1MonthPrice);
router.post('/price/custom', GetCustomizePrice);
router.post('/volume/init', GetVolumeChart);
router.post('/volume/custom', GetVolumeChart2);
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
    let startTime = req.body.startTime;
    let endTime = req.body.endTime;
    let timeZone = req.body.timeZone;
    priceService.GetCustomizePrice(startTime, endTime, timeZone)
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
    let timeZone = req.query.timeZone;
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
        // startTime = new Date(new Date(startTime).getTime() + Math.floor(3600000 * parseFloat(timeZone))).toISOString();
        // endTime = new Date(new Date(endTime).getTime() + Math.floor(3600000 * parseFloat(timeZone))).toISOString();
        sql = sprintf("SELECT COUNT(`timestamp`) `cnt` FROM (SELECT V.timestamp FROM `volume_%s` V LEFT JOIN `vwap_%s` W ON W.timestamp = V.timestamp LEFT JOIN `id0_%s` I ON I.timestamp = V.timestamp WHERE V.timestamp BETWEEN '%s' AND '%s' ORDER BY `timestamp`) `tmp`", interval, interval, interval, startTime, endTime);
        dbConn.query(sql, undefined, (error, results, fields) => {
            if (error) {
                console.log(error);
                res.send({
                    result: 'error',
                    data: 'internal server error',
                });
                return;
            }

            const timestampOffset = sprintf("%d:00:00", timeZone);
            const timestampFormat = "%Y-%m-%dT%H:%i:%s.000Z";

            let step = parseInt(results[0]['cnt']) / config.volumeChartEntryNum;
            sql = sprintf("SELECT `timestamp`, SUM(`volume`) `volume`, AVG(`open`) `open`, AVG(`vwap_seed`) `vwap_seed`, AVG(`num_3`) `num_3`, AVG(`num_6`) `num_6`, AVG(`num_9`) `num_9`, AVG(`num_100`) `num_100` FROM (SELECT (SELECT FLOOR((@row_num:=@row_num+1) / %f)) `row_num`, tmp.* FROM (SELECT DATE_FORMAT(ADDTIME(STR_TO_DATE(V.timestamp, '%s'), '%s'), '%s') `timestamp`, IFNULL(V.volume, 0) `volume`, IFNULL(B.open, 0) `open`, IFNULL(W.vwap_seed, 1) `vwap_seed`, IFNULL(I.num_3, 0) `num_3`, IFNULL(I.num_6, 0) `num_6`, IFNULL(I.num_9, 0) `num_9`, IFNULL(I.num_100, 0) `num_100` FROM `volume_%s` V LEFT JOIN `bitmex_data_%s_view` B ON B.timestamp = V.timestamp LEFT JOIN `vwap_%s` W ON W.timestamp = V.timestamp LEFT JOIN `id0_%s` I ON I.timestamp = V.timestamp WHERE V.timestamp BETWEEN '%s' AND '%s' ORDER BY `timestamp`) `tmp`, (SELECT @row_num := 0) `rnum`) `final` GROUP BY `row_num` ORDER BY `timestamp`;", step, timestampFormat, timestampOffset, timestampFormat, interval, interval, interval, interval, startTime, endTime);
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
                let volumeSum = 0;
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
                    volumeSum += item.volume;
                    final.push({
                        timestamp: item.timestamp,
                        open: lastOpen,
                        volume: item.volume,
                        volumeSum: volumeSum,
                        num_3: item.vwap_seed * lastNum3,
                        num_6: item.vwap_seed * lastNum6,
                        num_9: item.vwap_seed * lastNum9,
                        num_100: item.vwap_seed * lastNum100,
                    });
                }
                final.pop();
                res.send(final);
            });
        });
        // sql = sprintf("SELECT `timestamp`, SUM(`volume`) `volume`, SUM(`open`) `open`, SUM(`vwap_seed`) `vwap_seed`, SUM(`num_3`) `num_3`, SUM(`num_6`) `num_6`, SUM(`num_9`) `num_9`, SUM(`num_100`) `num_100` FROM (SELECT (SELECT FLOOR((@row_num:=@row_num+1) / %f)) `row_num`, tmp.* FROM (SELECT V.timestamp, IFNULL(V.volume, 0) `volume`, IFNULL(I.open, 0) `open`, IFNULL(W.vwap_seed, 1) `vwap_seed`, IFNULL(I.num_3, 0) `num_3`, IFNULL(I.num_6, 0) `num_6`, IFNULL(I.num_9, 0) `num_9`, IFNULL(I.num_100, 0) `num_100` FROM `volume_%s` V LEFT JOIN `vwap_%s` W ON W.timestamp = V.timestamp LEFT JOIN `id0_%s` I ON I.timestamp = V.timestamp WHERE V.timestamp BETWEEN '%s' AND '%s' ORDER BY `timestamp`) `tmp`, (SELECT @row_num := 0) `rnum`) `final` GROUP BY `row_num` ORDER BY `timestamp`;", step, interval, interval, interval, startTime, endTime);
        return;
    }
    sql = sprintf("SELECT * FROM (SELECT V.timestamp, IFNULL(V.volume, 0) volume, IFNULL(B.open, 0) `open`, IFNULL(W.vwap_seed, 1) `vwap_seed`, IFNULL(I.num_3, 0) `num_3`, IFNULL(I.num_6, 0) `num_6`, IFNULL(I.num_9, 0) `num_9`, IFNULL(I.num_100, 0) `num_100`  FROM `volume_%s` V LEFT JOIN `bitmex_data_%s_view` B ON B.timestamp = V.timestamp LEFT JOIN `vwap_%s` W ON W.timestamp = V.timestamp LEFT JOIN `id0_%s` I ON I.timestamp = V.timestamp ORDER BY V.timestamp DESC LIMIT 2000) `tmp`  ORDER BY `timestamp` ASC;", interval, interval, interval, interval);


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
        let volumeSum = 0;
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
            volumeSum += item.volume;
            final.push({
                timestamp: item.timestamp,
                open: lastOpen,
                volume: item.volume,
                volumeSum: volumeSum,
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
    let timeZone = req.query.timeZone;
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
        // startTime = new Date(new Date(startTime).getTime() + Math.floor(3600000 * parseFloat(timeZone))).toISOString();
        // endTime = new Date(new Date(endTime).getTime() + Math.floor(3600000 * parseFloat(timeZone))).toISOString();
        sql = sprintf("SELECT COUNT(`timestamp`) `cnt` FROM (SELECT I.timestamp, I.openInterest, I.openValue, IFNULL(B.open, 0) `open` FROM `interested_n_value_%s` I LEFT JOIN `bitmex_data_%s_view` B ON B.timestamp = I.timestamp WHERE I.timestamp BETWEEN '%s' AND '%s') `tmp`", interval, interval, startTime, endTime);
        dbConn.query(sql, undefined, (error, results, fields) => {
            if (error) {
                console.log(error);
                res.send({
                    result: 'error',
                    data: 'internal server error',
                });
                return;
            }

            const timestampOffset = sprintf("%d:00:00", timeZone);
            const timestampFormat = "%Y-%m-%dT%H:%i:%s.000Z";

            let step = parseInt(results[0]['cnt']) / config.volumeChartEntryNum;
            sql = sprintf("SELECT `timestamp`, AVG(`openInterest`) `openInterest`, AVG(`openValue`) `openValue`, AVG(`open`) `open` FROM (SELECT tmp.*, FLOOR((SELECT @row_num:=@row_num+1) / %f) `row_num` FROM (SELECT DATE_FORMAT(ADDTIME(STR_TO_DATE(I.timestamp, '%s'), '%s'), '%s') `timestamp`, I.openInterest, I.openValue, IFNULL(B.open, 0) `open` FROM `interested_n_value_%s` I LEFT JOIN `bitmex_data_%s_view` B ON B.timestamp = I.timestamp WHERE I.timestamp BETWEEN '%s' AND '%s') `tmp`, (SELECT @row_num:=0) `rnum`) `final` GROUP BY `row_num` ORDER BY `timestamp` ASC;", step, timestampFormat, timestampOffset, timestampFormat, interval, interval, startTime, endTime);
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
        });
        return;
    }

    sql = sprintf("SELECT I.*, IFNULL(B.open, 0) `open` FROM (SELECT `timestamp`, `openInterest`, `openValue` FROM `interested_n_value_%s` WHERE `timestamp` ORDER BY `timestamp` DESC LIMIT 2000) `I` LEFT JOIN `bitmex_data_%s_view` B ON B.timestamp = I.timestamp ORDER BY I.timestamp ASC;", interval, interval);

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
    let timeZone = req.body.params.timeZone;
    console.log(startTime, endTime);
    hiddenService.GetLast1DayHidden(startTime, endTime, timeZone)
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
    let startTime = req.body.params.startTime;
    let endTime = req.body.params.endTime;
    if (startTime && startTime.length > 0) {
        startTime = (new Date(startTime)).toISOString();
    }
    if (endTime && endTime.length > 0) {
        endTime = (new Date(endTime)).toISOString();
    }
    let timeZone = req.body.params.timeZone;
    hiddenService.GetLast1YearHidden(startTime, endTime, timeZone)
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
