const { CWStreamClient, STATE, EVENT, ERROR } = require("../");

// STATE, EVENT, and ERROR contain all the possible listeners, while
// CWStreamClient manages the stream connection

const client = new CWStreamClient({
  apiKey: "4Y8X6OHWUXH1RYDYRF9P", // or via environment variable CW_API_KEY
  secretKey: "Yp2jK4i5x+Q4dCB1DDYn0IW2hktZjUYOmuGPhaFh", // or via environment variable CW_SECRET_KEY
  subscriptions: [
    "markets:1258:trades", // kraken btc:usd
    "pairs:9:performance" // btc/usd pair
  ]
});

// Handlers for market and pair data
client.onMarketUpdate(marketData => {
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
