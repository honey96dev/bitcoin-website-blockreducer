# Cryptowatch Node.js Stream Client

This is a Node.js client for connecting to the [Cryptowatch Streaming API](https://cryptowat.ch/docs/streaming-api).

The Cryptowatch Websocket Streaming API is not public like our [REST API](https://cryptowat.ch/docs/api).
Please [click here](https://docs.google.com/forms/d/e/1FAIpQLSdhv_ceVtKA0qQcW6zQzBniRBaZ_cC4al31lDCeZirntkmWQw/viewform?c=0&w=1)
to inquire about getting access to it.

## Install
```
npm i cw-stream-client --save
```

## Usage
The following code connects to the stream api and listens for market and pair data for `btc:usd`.
```javascript
const { CWStreamClient, STATE, EVENT, ERROR } = require("cw-stream-client");

// STATE, EVENT, and ERROR contain all the possible listeners, while
// CWStreamClient manages the stream connection

const client = new CWStreamClient({
  apiKey: "", // or via environment variable CW_API_KEY
  secretKey: "", // or via environment variable CW_SECRET_KEY
  subscriptions: [
    "markets:87:trades", // kraken btc:usd
    "pairs:9:performance" // btc/usd pair
  ]
});

// Handlers for market and pair data
client.onMarketUpdate(marketData => {
  console.log(marketData);
});
client.onPairUpdate(pairData => {
  console.log(pairData);
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
  console.log("connection state changed:", newState)
});

client.onConnect(() => {
  console.info("streaming data for the next 15 seconds...");
  setTimeout(() => {
    client.disconnect();
  }, 15 * 1000);
});

client.onDisconnect(() => {
  console.log("done");
});

// Connect to stream
client.connect();
```

## Settings
The following object contains the default connection settings. Any of these can be overridden by passing your own settings object to the constructor.
```javascript
const defaultOptions = {
  // The stream url to connect to
  url: "wss://stream.cryptowat.ch",

  // apiKey and secretKey are both required. Obtain from https://cryptowat.ch/account/stream-api
  // These defaults will be overwritten by environment variables CW_API_KEY and CW_SECRET_KEY,
  // and environment variables will be overwritten by settings passed to the constructor.
  apiKey: "",
  secretKey: "",

  // A list of subscriptions to subscribe to on connection
  subscriptions: [],

  // Whether the library should reconnect automatically
  reconnect: true,

  // Reconnection backoff: if true, then the reconnection time will be initially
  // reconnectTimeout, then will double with each unsuccessful connection attempt.
  // It will not exceed maxReconnectTimeout
  backoff: true,

  // Initial reconnect timeout (seconds); a minimum of 1 will be used if backoff=false
  reconnectTimeout: 0,

  // The maximum amount of time between reconnect tries (applies to backoff)
  maxReconnectTimeout: 30,

  // If true, client outputs detailed log messages
  verbose: false
}
```

## Methods
The following methods are available on an instance of `CWStreamClient`.

#### get(key)
Gets a client's setting `key`. `key` must be a valid [setting](#settings).

#### connect()
Initiates connection to websocket api.

#### disconnect()
Kills connection to the websocket api. You will need to re-authenticate if you call `connect()` again.

#### subscribe(keys)
Subscribes the client to each of `keys`. `keys` should be an array of valid subscription id strings.

#### unsubscribe(keys)
Unsubscribes the client from each of `keys`. `keys` should be an array of valid subscription id strings.

#### state()
Returns the current client connection [state](#states).

## Event Handlers
The following event handlers are available on an instance of `CWStreamClient`.

#### onMarketUpdate(fn)
`fn` is called whenever market data is received from the stream. This is the equivalent to listening on `EVENT.MARKET_UPDATE`.

#### onPairUpdate(fn)
`fn` is called whenever pair data is received from the stream. This is the equivalent to listening on `EVENT.PAIR_UPDATE`.

#### onStateChange(fn)
`fn` is called whenever the client's internal connection state changes.

#### onError(fn)
`fn` is called with the [error](#errors) that was encountered. This is the equivalent to listening on `EVENT.CLIENT_ERROR`.

#### onConnect(fn)
`fn` is called when the client connects to the stream. This is the equivalent of listening on `STATE.CONNECTED`.

#### onDisconnect(fn)
`fn` is called when the client disconnects from the stream, for whatever reason. This is the equivalent of listening on `STATE.DISCONNECTED`.

## Listeners
The `cw-stream-client` package exports 3 objects in addition to the client: `STATE`, `ERROR`, and `EVENT`. These contain all possible event listeners, in case your application requires more granularity.

### States
- `CONNECTING` - the client has initiated a websocket connection  
- `AUTHENTICATING` - the connection has been opened, and the client is authenticating  
- `CONNECTED` - the connection is open and authenticated, data will now be received  
- `DISCONNECTED` - the connection has been closed, either intentionally or from an error  
- `WAITING_TO_RECONNECT` - the client is disconnected, but will reconnect based on `reconnect` and `backoff` settings

### Errors  
- `CONNECTION_REFUSED` - connection was closed  
- `PROTOBUF` - error decoding protobuf messages  
- `TOKEN_EXPIRED` - the client sent an expired token  
- `BAD_TOKEN` - the client sent an invalid token (invalid credentials)  
- `BAD_NONCE` - the client sent an invalid nonce
- `MISSING_API_KEY` - api key was not supplied correctly  
- `MISSING_SECRET_KEY` - secret key was not supplied correctly  
- `UNKNOWN` - describes an internal service error  

### Events
- `MARKET_UPDATE` - when the client receives market-level data
- `PAIR_UPDATE` - when the client receives pair-level data
- `CLIENT_ERROR` - when any of the `ERROR` states listed above occur
- `STATE_CHANGE` - when any of the `STATE` changes listed above occur

## Notes
Some of our [protobuf message definitions](https://github.com/cryptowatch/proto) use the `uint64` data type, which is not included in JavaScript. To circumvent this, those types are returned as [Long](https://github.com/dcodeIO/long.js). You can safely use Long's `toNumber()` method to get the desired value. None of our `uint64` types will ever exceed the 64-bit floating point limitation.

## Testing
Tests are written using `jest`. Run tests with:
```
make test
```

## License
[BSD-2-Clause](LICENSE)
