"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const big_js_1 = require("big.js");
const crypto = require("crypto");
const events_1 = require("events");
const pjson = require("pjson");
const WebSocket = require("ws");
// Protobuf message constructors
const proto_builders_1 = require("./proto-builders");
// Protobuf message type definitions
const proto_1 = require("../modules/proto");
// Listeners
// A client can listen on any of the following events, states, or errors
// Connection states. Each of these will also emit EVENT.STATE_CHANGE
var STATE;
(function (STATE) {
    STATE["AUTHENTICATING"] = "authenticating";
    STATE["CONNECTED"] = "connected";
    STATE["CONNECTING"] = "connecting";
    STATE["DISCONNECTED"] = "disconnected";
    STATE["WAITING_TO_CONNECT"] = "waiting to connect";
    STATE["WAITING_TO_RECONNECT"] = "waiting to reconnect";
})(STATE = exports.STATE || (exports.STATE = {}));
// Client events
var EVENT;
(function (EVENT) {
    EVENT["CLIENT_ERROR"] = "client error";
    EVENT["MARKET_UPDATE"] = "market update";
    EVENT["PAIR_UPDATE"] = "pair update";
    EVENT["STATE_CHANGE"] = "state change";
})(EVENT = exports.EVENT || (exports.EVENT = {}));
// Connection errors; Each of these will also emit EVENT.ERROR
var ERROR;
(function (ERROR) {
    ERROR["BAD_NONCE"] = "bad nonce";
    ERROR["BAD_TOKEN"] = "bad token";
    ERROR["CONNECTION_REFUSED"] = "connection refused";
    ERROR["MISSING_API_KEY"] = "missing api key";
    ERROR["MISSING_SECRET_KEY"] = "missing secret key";
    ERROR["PROTOBUF"] = "protobuf";
    ERROR["TOKEN_EXPIRED"] = "token expired";
    ERROR["UNKNOWN"] = "unknown error";
})(ERROR = exports.ERROR || (exports.ERROR = {}));
const backoffIncrement = 0.5;
// These will be overwritten by the opts object passed to the constructor
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
};
/**
 * StreamClient manages a connection to Cryptowatch websocket api
 */
class CWStreamClient extends events_1.EventEmitter {
    // Default to defaultOptions
    constructor(opts = defaultOptions) {
        super();
        // Environment variables
        if (process.env.CW_API_KEY) {
            opts.apiKey = process.env.CW_API_KEY;
        }
        if (process.env.CW_SECRET_KEY) {
            opts.secretKey = process.env.CW_SECRET_KEY;
        }
        // Set minimum reconnectTimeout of 1s if backoff=false
        if (!opts.backoff && opts.reconnectTimeout < 1) {
            opts.reconnectTimeout = 1;
        }
        // Merge supplied options with defaults
        this.session = Object.assign(defaultOptions, opts);
        if (this.session.apiKey.length === 0) {
            throw new Error(ERROR.MISSING_API_KEY);
        }
        if (this.session.secretKey.length === 0) {
            throw new Error(ERROR.MISSING_SECRET_KEY);
        }
        // Keep track of subscriptions in case we need to reconnect after the client
        // has called subscribe()
        this.subscriptionState = {};
        this.session.subscriptions.forEach(x => {
            this.subscriptionState[x] = true;
        });
        this.currentState = STATE.WAITING_TO_CONNECT;
        // Register internal event handlers
        // Log and emit every state change
        Object.keys(STATE).forEach(s => {
            this.on(STATE[s], () => {
                this.currentState = STATE[s];
                this.log("info", `state change: ${STATE[s]}`);
                this.emit(EVENT.STATE_CHANGE, STATE[s]);
            });
        });
        // Log and emit every error
        Object.keys(ERROR).forEach(e => {
            this.on(ERROR[e], () => {
                this.log("error", ERROR[e]);
                this.emit(EVENT.CLIENT_ERROR, ERROR[e]);
            });
        });
    }
    connect() {
        // Reset reconnectDisabled since the user called connect() again
        this.reconnectDisabled = false;
        this.emit(STATE.CONNECTING);
        this.conn = new WebSocket(this.session.url);
        this.conn.once("open", () => {
            this.authenticate();
        });
        this.conn.on("message", (data) => this.handleMessage(data));
        this.conn.once("error", err => {
            this.emit(ERROR.CONNECTION_REFUSED);
        });
        this.conn.once("close", () => {
            this.emit(STATE.DISCONNECTED);
            if (this.session.reconnect && !this.reconnectDisabled) {
                this.reconnect();
            }
        });
    }
    subscribe(keys) {
        const subMsg = proto_builders_1.ClientMessage.create({
            subscribe: proto_builders_1.ClientSubscribeMessage.create({
                subscriptionKeys: keys
            })
        });
        this.send(proto_builders_1.ClientMessage.encode(subMsg).finish());
        keys.forEach(x => {
            this.subscriptionState[x] = true;
        });
    }
    unsubscribe(keys) {
        const subMsg = proto_builders_1.ClientMessage.create({
            unsubscribe: proto_builders_1.ClientUnsubscribeMessage.create({
                subscriptionKeys: keys
            })
        });
        this.send(proto_builders_1.ClientMessage.encode(subMsg).finish());
        keys.forEach(x => {
            delete this.subscriptionState[x];
        });
    }
    subscriptions() {
        return Object.keys(this.subscriptionState);
    }
    generateToken(nonce) {
        const hmac = crypto.createHmac("sha512", Buffer.from(this.session.secretKey, "base64"));
        hmac.update(`stream_access;access_key_id=${this.session.apiKey};nonce=${nonce};`);
        return hmac.digest("base64");
    }
    onConnect(fn) {
        this.on(STATE.CONNECTED, () => fn());
    }
    onDisconnect(fn) {
        this.on(STATE.DISCONNECTED, () => fn());
    }
    onStateChange(fn) {
        this.on(EVENT.STATE_CHANGE, newState => fn(newState));
    }
    onError(fn) {
        this.on(EVENT.CLIENT_ERROR, err => fn(err));
    }
    onMarketUpdate(fn) {
        this.on(EVENT.MARKET_UPDATE, marketUpdate => fn(marketUpdate));
    }
    onPairUpdate(fn) {
        this.on(EVENT.PAIR_UPDATE, pairUpdate => fn(pairUpdate));
    }
    send(data) {
        this.conn.send(data);
    }
    disconnect() {
        this.reconnectDisabled = true;
        this.conn.close();
    }
    state() {
        return this.currentState;
    }
    get(key) {
        return this.session[key];
    }
    reconnect() {
        setTimeout(() => {
            if (this.session.backoff) {
                this.session.reconnectTimeout += backoffIncrement;
                if (this.session.reconnectTimeout > this.session.maxReconnectTimeout) {
                    this.session.reconnectTimeout = this.session.maxReconnectTimeout;
                }
            }
            this.connect();
        }, this.session.reconnectTimeout * 1000);
        this.emit(STATE.WAITING_TO_RECONNECT, this.session.reconnectTimeout);
    }
    authenticate() {
        this.emit(STATE.AUTHENTICATING);
        // The client should never use their own nonce, this is only for testing
        // purposes
        const nonce = this.session.nonce ? this.session.nonce : this.getNonce();
        const token = this.generateToken(nonce);
        const authMsg = proto_builders_1.ClientMessage.create({
            apiAuthentication: proto_builders_1.APIAuthenticationMessage.create({
                apiKey: this.session.apiKey,
                nonce,
                source: proto_1.ProtobufClient.APIAuthenticationMessage.Source.NODE_SDK,
                subscriptions: this.subscriptions(),
                token,
                version: pjson.version
            })
        });
        this.send(proto_builders_1.ClientMessage.encode(authMsg).finish());
    }
    /**
     * Gets current unix time in nanoseconds, as a string. The use of big.js is
     * kind of a hack here to get around JavaScript converting the nonce to
     * scientific notation.
     */
    getNonce() {
        return new big_js_1.Big(new Date().getTime() * 1000 * 1000).toPrecision(19);
    }
    handleMessage(data) {
        // Heartbeat
        const bytes = new Uint8Array(data);
        if (bytes.length === 1 && bytes[0] === 1) {
            return;
        }
        let message;
        try {
            message = proto_builders_1.StreamMessage.decode(data);
        }
        catch (e) {
            this.emit(ERROR.PROTOBUF);
            this.log("error", e);
            return;
        }
        switch (message.body) {
            case "authenticationResult":
                this.authResultHandler(message.authenticationResult);
                break;
            case "marketUpdate":
                this.emit(EVENT.MARKET_UPDATE, message.marketUpdate);
                break;
            case "pairUpdate":
                this.emit(EVENT.PAIR_UPDATE, message.pairUpdate);
                break;
            default:
                this.emit(ERROR.PROTOBUF);
        }
    }
    authResultHandler(authResult) {
        switch (authResult.status) {
            case proto_1.ProtobufStream.AuthenticationResult.Status.AUTHENTICATED:
                this.emit(STATE.CONNECTED);
                break;
            case proto_1.ProtobufStream.AuthenticationResult.Status.TOKEN_EXPIRED:
                this.emit(ERROR.TOKEN_EXPIRED);
                this.disconnect();
                break;
            case proto_1.ProtobufStream.AuthenticationResult.Status.BAD_NONCE:
                this.emit(ERROR.BAD_NONCE);
                this.disconnect();
                break;
            case proto_1.ProtobufStream.AuthenticationResult.Status.BAD_TOKEN:
                this.emit(ERROR.BAD_TOKEN);
                this.disconnect();
                break;
            case proto_1.ProtobufStream.AuthenticationResult.Status.UNKNOWN:
                this.emit(ERROR.UNKNOWN);
                this.disconnect();
                break;
            default:
                break;
        }
    }
    log(level, ...msg) {
        if (this.session.verbose) {
            console[level](...msg);
        }
    }
}
exports.CWStreamClient = CWStreamClient;
