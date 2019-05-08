const { CWStreamClient, STATE, EVENT, ERROR } = require("../crypto_watch");
var express = require('express');
var fs = require('fs');
var path = require('path');
var axios = require('axios');
var router = express.Router();
var appDir = path.dirname(require.main.filename);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/getMarketData', function (req,res) {
    console.log(req.query.symbol);
    console.log(req.query.minPrice);
    let symbol = req.query.symbol;
    let minPrice = req.query.minPrice;
    let pair_id = '';
    axios.get("https://api.cryptowat.ch/pairs/" + symbol)
        .then(res => {

            pair_id = res.data.result.id;
        }).catch(err => {
            console.log(err)
    });


    const client = new CWStreamClient({
        apiKey: "4Y8X6OHWUXH1RYDYRF9P", // or via environment variable CW_API_KEY
        secretKey: "Yp2jK4i5x+Q4dCB1DDYn0IW2hktZjUYOmuGPhaFh", // or via environment variable CW_SECRET_KEY
        subscriptions: [
            "markets:87:trades", // kraken btc:usd
            "markets:1258:trades",
            "pairs:" + pair_id + ":performance" // btc/usd pair
        ]
    });
    client.onMarketUpdate(marketData => {
        // console.log(marketData);
        let market_id = marketData.market.marketId.low;
        // console.log(market_id);
        // console.log("MarketData:", marketData.tradesUpdate.trades);
    });

// client.onPairUpdate(pairData => {
//   console.log(pairData);
// });

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
        // setTimeout(() => {
        //   client.disconnect();
        // }, 15 * 1000);
    });

    client.onDisconnect(() => {
        console.log("done");
    });

// Connect to stream
    client.connect();

    // console.log(__dirname);
    // console.log(path.resolve(__dirname));
    // console.log(appDir);
    fs.readFile( './users.json', 'utf-8', function (err, data) {
        // console.log(data);
        res.end(data);
    });
})

module.exports = router;
