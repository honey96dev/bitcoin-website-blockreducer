const { CWStreamClient, STATE, EVENT, ERROR } = require("../crypto_watch");
var express = require('express');
var axios = require('axios');
var router = express.Router();
var marketHistory = [];
var serverSocket;

let sockets = [];
let currentStreamClient;
var allExchanges = [];
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/getMarketData', function (req,response) {
    marketHistory = [];
    serverSocket.sockets.emit('marketHistory', []);

    if (currentStreamClient){
        try {
            currentStreamClient.disconnect();
        }catch(e){}
        currentStreamClient = undefined;
    }
    let symbol = req.query.symbol;
    let minPrice = req.query.filterPrice;
    let limitRow = req.query.limitRow;
    let exchangeIds = req.query.exchangeIds.split(",");


    console.log('minPrice111111:   ', minPrice);
    console.log('symbol111111:   ', symbol);
    console.log('limitRow111111:   ', limitRow);
    console.log('exchangeIds111111:', exchangeIds);
    let pairId = '';
    let marketPair = [];
    //let marketPairLength = 0;
    let subscriptionData = [];
    let item = '';
    let marketPairs = [];
    /*
        Init Filters to determine whether the market update is Sell or Buy
    */
    let filters = [];
    for (var i = 0; i<exchangeIds.length; i++){
        let filter = {
            marketName: exchangeIds[i],
            marker: true,
            totalPrice: 0
        }
        filters.push(filter);
    }
    // console.log(filters);
    let currentFilter = {};currentFilter.marketName = '';currentFilter.marker = true; currentFilter.totalPrice = 0;
    axios.get("https://api.cryptowat.ch/pairs/" + symbol)//get markets which support symbol
        .then(res => {
            marketPair = res.data.result.markets;//exchanges which support the current symbol
            pairId = res.data.result.id;
            console.log("pairId",pairId)
            let marketPairLength = marketPair.length;
            for (let i = 0; i < marketPairLength;i++){
                for (let j = 0; j < filters.length;j++){
                    if (marketPair[i].exchange == filters[j].marketName){
                        item = "markets:"+marketPair[i].id+":trades";
                        marketPairs.push(marketPair[i]);
                        subscriptionData.push(item);
                    }

                }
            }
            // console.log("SUBSCRIPTIONDATA 111111111:",subscriptionData);
            const client = new CWStreamClient({
                apiKey: "4Y8X6OHWUXH1RYDYRF9P", // or via environment variable CW_API_KEY
                secretKey: "Yp2jK4i5x+Q4dCB1DDYn0IW2hktZjUYOmuGPhaFh", // or via environment variable CW_SECRET_KEY
                subscriptions: subscriptionData
            });
            client.onMarketUpdate(marketData => {
                let marketId = marketData.market.marketId.low;
                let marketName = '';
                // console.log(marketId);
                // console.log("MarketData:", marketData.tradesUpdate.trades);
                let data = marketData.tradesUpdate.trades;

                for (var i = 0; i < data.length; i++){

                    for (var j = 0; j < marketPairs.length; j++){
                        if (marketId == marketPairs[j].id){
                            marketName = marketPairs[j].exchange;
                        }
                    }
                    //console.log('marketName:12312141455255:  ',marketName)
                    var totalPrice = parseFloat(data[i].price)*parseFloat(data[i].amount);
                    // console.log('Price11111111111111: ', data[i].price);
                    for (var k = 0; k < filters.length; k++){
                        if (filters[k].marketName == marketName){
                            currentFilter = filters[k];
                        }
                    }
                    if (totalPrice >= minPrice){

                        let marker = currentFilter.marker;
                        if (currentFilter.totalPrice > data[i].price){  //lower: sell
                            marker = true;
                            currentFilter.totalPrice = data[i].price;
                            currentFilter.marker = marker;
                        }else if(currentFilter.totalPrice<data[i].price){ //higher: buy
                            marker = false;
                            currentFilter.totalPrice = data[i].price;
                            currentFilter.marker = marker;
                        }
                        var marketHistoryItem = {
                            marketName: marketName,
                            timestamp: data[i].timestamp.low,
                            price: data[i].price,
                            amount: totalPrice,
                            marker: marker
                        };
                        marketHistory.push(marketHistoryItem);
                    }

                }
                if (currentStreamClient === client){
                    // console.log(marketHistory);
                    serverSocket.sockets.emit('marketHistory', marketHistory);


                }

            });

            // Error handling
            client.onError(err => {
                // You can check what error it was against the exported ERROR object
                switch (err) {
                    case ERROR.CONNECTION_REFUSED:
                        console.log("connection refused");
                        break;

                    case ERROR.PROTOBUF:
                        console.log("protobuf error");
                        break;
                }
            });

// Or you can listen on specific errors
            client.on(ERROR.MISSING_API_KEY, () => {
                console.log("missing api key");
            });

// You can also listen on state changes
            client.onStateChange(newState => {
                console.log("connection state changed:", newState);
            });

            client.onConnect(() => {
                console.info("streaming data for the next 15 seconds...");
            });

            client.onDisconnect(() => {
                console.log("done");
            });

// Connect to stream
            currentStreamClient = client;
            client.connect();

            response.json(marketHistory);
        }).catch(err => {
        console.log(err)
    });
});

module.exports.router = router;
module.exports.setSocketIO = function(io){
  serverSocket = io;
  io.on('connect', onConnect);
};

function onConnect(clientSocket){
    sockets.push(clientSocket);
    clientSocket.emit('marketHistory', marketHistory);
}
