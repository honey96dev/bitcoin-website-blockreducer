import * as path from "path";
import { loadSync } from "protobufjs";

const protoPath = (dir, file) =>
  path.resolve(path.join(__dirname, "..", "proto", dir, `${file}.proto`));

// ProtobufClient
const root = loadSync(protoPath("client", "client"));
const ProtobufClient = root.lookup("ProtobufClient");
const ClientMessage = root.lookupType("ProtobufClient.ClientMessage");
const APIAuthenticationMessage = root.lookupType(
  "ProtobufClient.APIAuthenticationMessage"
);
const ClientSubscribeMessage = root.lookupType(
  "ProtobufClient.ClientSubscribeMessage"
);
const ClientUnsubscribeMessage = root.lookupType(
  "ProtobufClient.ClientUnsubscribeMessage"
);

// ProtobufMarkets
root.loadSync(protoPath("markets", "market"));
root.loadSync(protoPath("markets", "pair"));
root.loadSync(protoPath("markets", "asset"));
const MarketUpdateMessage = root.lookupType(
  "ProtobufMarkets.MarketUpdateMessage"
);
const OrderBookUpdate = root.lookupType("ProtobufMarkets.OrderBookUpdate");
const PairUpdateMessage = root.lookupType("ProtobufMarkets.PairUpdateMessage");
const PairVwapUpdate = root.lookupType("ProtobufMarkets.PairVwapUpdate");

// ProtobufStream
root.loadSync(protoPath("stream", "stream"));
const StreamMessage = root.lookupType("ProtobufStream.StreamMessage");
const AuthenticationResult = root.lookupType(
  "ProtobufStream.AuthenticationResult"
);

export {
  AuthenticationResult,
  APIAuthenticationMessage,
  ClientUnsubscribeMessage,
  ClientSubscribeMessage,
  ClientMessage,
  OrderBookUpdate,
  MarketUpdateMessage,
  StreamMessage,
  PairUpdateMessage,
  PairVwapUpdate,
  ProtobufClient
};
