"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const protobufjs_1 = require("protobufjs");
const protoPath = (dir, file) => path.resolve(path.join(__dirname, "..", "proto", dir, `${file}.proto`));
// ProtobufClient
const root = protobufjs_1.loadSync(protoPath("client", "client"));
const ProtobufClient = root.lookup("ProtobufClient");
exports.ProtobufClient = ProtobufClient;
const ClientMessage = root.lookupType("ProtobufClient.ClientMessage");
exports.ClientMessage = ClientMessage;
const APIAuthenticationMessage = root.lookupType("ProtobufClient.APIAuthenticationMessage");
exports.APIAuthenticationMessage = APIAuthenticationMessage;
const ClientSubscribeMessage = root.lookupType("ProtobufClient.ClientSubscribeMessage");
exports.ClientSubscribeMessage = ClientSubscribeMessage;
const ClientUnsubscribeMessage = root.lookupType("ProtobufClient.ClientUnsubscribeMessage");
exports.ClientUnsubscribeMessage = ClientUnsubscribeMessage;
// ProtobufMarkets
root.loadSync(protoPath("markets", "market"));
root.loadSync(protoPath("markets", "pair"));
root.loadSync(protoPath("markets", "asset"));
const MarketUpdateMessage = root.lookupType("ProtobufMarkets.MarketUpdateMessage");
exports.MarketUpdateMessage = MarketUpdateMessage;
const OrderBookUpdate = root.lookupType("ProtobufMarkets.OrderBookUpdate");
exports.OrderBookUpdate = OrderBookUpdate;
const PairUpdateMessage = root.lookupType("ProtobufMarkets.PairUpdateMessage");
exports.PairUpdateMessage = PairUpdateMessage;
const PairVwapUpdate = root.lookupType("ProtobufMarkets.PairVwapUpdate");
exports.PairVwapUpdate = PairVwapUpdate;
// ProtobufStream
root.loadSync(protoPath("stream", "stream"));
const StreamMessage = root.lookupType("ProtobufStream.StreamMessage");
exports.StreamMessage = StreamMessage;
const AuthenticationResult = root.lookupType("ProtobufStream.AuthenticationResult");
exports.AuthenticationResult = AuthenticationResult;
