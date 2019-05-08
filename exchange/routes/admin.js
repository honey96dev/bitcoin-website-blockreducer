var express = require('express');
var router = express.Router();
var axios = require('axios');
var allExchanges = [];
var getPool = require('../config/database').getPool;
var sprintfJs = require('sprintf-js');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/getExchanges', function (req, res, next) {
    res.send('Request is Received.')
})
router.get('/saveExchanges', function (req, response, next) {
    axios.get('https://api.cryptowat.ch/exchanges')
        .then(res=>{
            allExchanges = res.data.result;
            for(let i = 0; i < allExchanges.length; i++){
                //let quer = INSERT INTO `exchanges`(`id`, `exchange_id`, `symbol`, `name`, `route`, `active`) VALUES (1,20,'kraken','Kraken','http',true)
                let query = "INSERT INTO `exchanges`(`exchange_id`, `symbol`, `name`, `route`, `active`) VALUES ("+allExchanges[i].id+", '"+allExchanges[i].symbol+"', '"+allExchanges[i].name+"', '"+allExchanges[i].route+"', "+allExchanges[i].active+")";
                console.log(query);
                getPool().query(query,function(err, rows) {
                    if (err){
                        return response.status(500).send(err);
                    }
                    console.log('okay!');


                });
            }
            // console.log(allExchanges);
            // console.log(allExchanges.length);
        }).catch(err=> {
        console.log(err);
    });
});
router.get('/getAllExchanges', function (req, res, next) {
    let query = "SELECT * FROM `exchanges` ORDER BY id";
    const groupLabel = req.query.groupLabel;
    console.log(groupLabel);
    getPool().query(query, function (err, rows) {
        if (err){
            return response.status(500).send(err);
        }
        let finalRes;
        if (groupLabel) {
            let items = [];
            for (let item of rows) {
                items.push({
                    id: item.id,
                    exchange_id: item.exchange_id,
                    symbol: item.symbol,
                    name: item.name,
                    route: item.route,
                    active: item.active === 1 ? 'Enabled': 'Disabled',
                    // check: sprintfJs.sprintf('<input type="button" class="source-checker" data-source-id="%s"/>', item.id),
                    check: sprintfJs.sprintf('<input type="button" name="%s" ng-model="isSee.m%s" ng-click="toggleSourceId(\'%s\')" class="ng-valid ng-dirty ng-valid-parse ng-empty ng-touched" style/>', item.id, item.id, item.id),
                });
            }
            finalRes = {[groupLabel]: items};
        } else {
            finalRes = rows;
        }
        res.send(finalRes);
    })

});
module.exports = router;
