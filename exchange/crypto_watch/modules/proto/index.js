/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ProtobufClient = (function() {

    /**
     * Namespace ProtobufClient.
     * @exports ProtobufClient
     * @namespace
     */
    var ProtobufClient = {};

    ProtobufClient.ClientMessage = (function() {

        /**
         * Properties of a ClientMessage.
         * @memberof ProtobufClient
         * @interface IClientMessage
         * @property {ProtobufClient.IClientIdentificationMessage|null} [identification] ClientMessage identification
         * @property {ProtobufClient.IClientSubscribeMessage|null} [subscribe] ClientMessage subscribe
         * @property {ProtobufClient.IClientUnsubscribeMessage|null} [unsubscribe] ClientMessage unsubscribe
         * @property {ProtobufClient.IWebAuthenticationMessage|null} [webAuthentication] ClientMessage webAuthentication
         * @property {ProtobufClient.IAPIAuthenticationMessage|null} [apiAuthentication] ClientMessage apiAuthentication
         */

        /**
         * Constructs a new ClientMessage.
         * @memberof ProtobufClient
         * @classdesc Represents a ClientMessage.
         * @implements IClientMessage
         * @constructor
         * @param {ProtobufClient.IClientMessage=} [properties] Properties to set
         */
        function ClientMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientMessage identification.
         * @member {ProtobufClient.IClientIdentificationMessage|null|undefined} identification
         * @memberof ProtobufClient.ClientMessage
         * @instance
         */
        ClientMessage.prototype.identification = null;

        /**
         * ClientMessage subscribe.
         * @member {ProtobufClient.IClientSubscribeMessage|null|undefined} subscribe
         * @memberof ProtobufClient.ClientMessage
         * @instance
         */
        ClientMessage.prototype.subscribe = null;

        /**
         * ClientMessage unsubscribe.
         * @member {ProtobufClient.IClientUnsubscribeMessage|null|undefined} unsubscribe
         * @memberof ProtobufClient.ClientMessage
         * @instance
         */
        ClientMessage.prototype.unsubscribe = null;

        /**
         * ClientMessage webAuthentication.
         * @member {ProtobufClient.IWebAuthenticationMessage|null|undefined} webAuthentication
         * @memberof ProtobufClient.ClientMessage
         * @instance
         */
        ClientMessage.prototype.webAuthentication = null;

        /**
         * ClientMessage apiAuthentication.
         * @member {ProtobufClient.IAPIAuthenticationMessage|null|undefined} apiAuthentication
         * @memberof ProtobufClient.ClientMessage
         * @instance
         */
        ClientMessage.prototype.apiAuthentication = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ClientMessage body.
         * @member {"identification"|"subscribe"|"unsubscribe"|"webAuthentication"|"apiAuthentication"|undefined} body
         * @memberof ProtobufClient.ClientMessage
         * @instance
         */
        Object.defineProperty(ClientMessage.prototype, "body", {
            get: $util.oneOfGetter($oneOfFields = ["identification", "subscribe", "unsubscribe", "webAuthentication", "apiAuthentication"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ClientMessage instance using the specified properties.
         * @function create
         * @memberof ProtobufClient.ClientMessage
         * @static
         * @param {ProtobufClient.IClientMessage=} [properties] Properties to set
         * @returns {ProtobufClient.ClientMessage} ClientMessage instance
         */
        ClientMessage.create = function create(properties) {
            return new ClientMessage(properties);
        };

        /**
         * Encodes the specified ClientMessage message. Does not implicitly {@link ProtobufClient.ClientMessage.verify|verify} messages.
         * @function encode
         * @memberof ProtobufClient.ClientMessage
         * @static
         * @param {ProtobufClient.IClientMessage} message ClientMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.identification != null && message.hasOwnProperty("identification"))
                $root.ProtobufClient.ClientIdentificationMessage.encode(message.identification, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.subscribe != null && message.hasOwnProperty("subscribe"))
                $root.ProtobufClient.ClientSubscribeMessage.encode(message.subscribe, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.unsubscribe != null && message.hasOwnProperty("unsubscribe"))
                $root.ProtobufClient.ClientUnsubscribeMessage.encode(message.unsubscribe, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.webAuthentication != null && message.hasOwnProperty("webAuthentication"))
                $root.ProtobufClient.WebAuthenticationMessage.encode(message.webAuthentication, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.apiAuthentication != null && message.hasOwnProperty("apiAuthentication"))
                $root.ProtobufClient.APIAuthenticationMessage.encode(message.apiAuthentication, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ClientMessage message, length delimited. Does not implicitly {@link ProtobufClient.ClientMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufClient.ClientMessage
         * @static
         * @param {ProtobufClient.IClientMessage} message ClientMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufClient.ClientMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufClient.ClientMessage} ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufClient.ClientMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.identification = $root.ProtobufClient.ClientIdentificationMessage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.subscribe = $root.ProtobufClient.ClientSubscribeMessage.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.unsubscribe = $root.ProtobufClient.ClientUnsubscribeMessage.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.webAuthentication = $root.ProtobufClient.WebAuthenticationMessage.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.apiAuthentication = $root.ProtobufClient.APIAuthenticationMessage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufClient.ClientMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufClient.ClientMessage} ClientMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientMessage message.
         * @function verify
         * @memberof ProtobufClient.ClientMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.identification != null && message.hasOwnProperty("identification")) {
                properties.body = 1;
                {
                    var error = $root.ProtobufClient.ClientIdentificationMessage.verify(message.identification);
                    if (error)
                        return "identification." + error;
                }
            }
            if (message.subscribe != null && message.hasOwnProperty("subscribe")) {
                if (properties.body === 1)
                    return "body: multiple values";
                properties.body = 1;
                {
                    var error = $root.ProtobufClient.ClientSubscribeMessage.verify(message.subscribe);
                    if (error)
                        return "subscribe." + error;
                }
            }
            if (message.unsubscribe != null && message.hasOwnProperty("unsubscribe")) {
                if (properties.body === 1)
                    return "body: multiple values";
                properties.body = 1;
                {
                    var error = $root.ProtobufClient.ClientUnsubscribeMessage.verify(message.unsubscribe);
                    if (error)
                        return "unsubscribe." + error;
                }
            }
            if (message.webAuthentication != null && message.hasOwnProperty("webAuthentication")) {
                if (properties.body === 1)
                    return "body: multiple values";
                properties.body = 1;
                {
                    var error = $root.ProtobufClient.WebAuthenticationMessage.verify(message.webAuthentication);
                    if (error)
                        return "webAuthentication." + error;
                }
            }
            if (message.apiAuthentication != null && message.hasOwnProperty("apiAuthentication")) {
                if (properties.body === 1)
                    return "body: multiple values";
                properties.body = 1;
                {
                    var error = $root.ProtobufClient.APIAuthenticationMessage.verify(message.apiAuthentication);
                    if (error)
                        return "apiAuthentication." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ClientMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufClient.ClientMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufClient.ClientMessage} ClientMessage
         */
        ClientMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufClient.ClientMessage)
                return object;
            var message = new $root.ProtobufClient.ClientMessage();
            if (object.identification != null) {
                if (typeof object.identification !== "object")
                    throw TypeError(".ProtobufClient.ClientMessage.identification: object expected");
                message.identification = $root.ProtobufClient.ClientIdentificationMessage.fromObject(object.identification);
            }
            if (object.subscribe != null) {
                if (typeof object.subscribe !== "object")
                    throw TypeError(".ProtobufClient.ClientMessage.subscribe: object expected");
                message.subscribe = $root.ProtobufClient.ClientSubscribeMessage.fromObject(object.subscribe);
            }
            if (object.unsubscribe != null) {
                if (typeof object.unsubscribe !== "object")
                    throw TypeError(".ProtobufClient.ClientMessage.unsubscribe: object expected");
                message.unsubscribe = $root.ProtobufClient.ClientUnsubscribeMessage.fromObject(object.unsubscribe);
            }
            if (object.webAuthentication != null) {
                if (typeof object.webAuthentication !== "object")
                    throw TypeError(".ProtobufClient.ClientMessage.webAuthentication: object expected");
                message.webAuthentication = $root.ProtobufClient.WebAuthenticationMessage.fromObject(object.webAuthentication);
            }
            if (object.apiAuthentication != null) {
                if (typeof object.apiAuthentication !== "object")
                    throw TypeError(".ProtobufClient.ClientMessage.apiAuthentication: object expected");
                message.apiAuthentication = $root.ProtobufClient.APIAuthenticationMessage.fromObject(object.apiAuthentication);
            }
            return message;
        };

        /**
         * Creates a plain object from a ClientMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufClient.ClientMessage
         * @static
         * @param {ProtobufClient.ClientMessage} message ClientMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.identification != null && message.hasOwnProperty("identification")) {
                object.identification = $root.ProtobufClient.ClientIdentificationMessage.toObject(message.identification, options);
                if (options.oneofs)
                    object.body = "identification";
            }
            if (message.subscribe != null && message.hasOwnProperty("subscribe")) {
                object.subscribe = $root.ProtobufClient.ClientSubscribeMessage.toObject(message.subscribe, options);
                if (options.oneofs)
                    object.body = "subscribe";
            }
            if (message.unsubscribe != null && message.hasOwnProperty("unsubscribe")) {
                object.unsubscribe = $root.ProtobufClient.ClientUnsubscribeMessage.toObject(message.unsubscribe, options);
                if (options.oneofs)
                    object.body = "unsubscribe";
            }
            if (message.webAuthentication != null && message.hasOwnProperty("webAuthentication")) {
                object.webAuthentication = $root.ProtobufClient.WebAuthenticationMessage.toObject(message.webAuthentication, options);
                if (options.oneofs)
                    object.body = "webAuthentication";
            }
            if (message.apiAuthentication != null && message.hasOwnProperty("apiAuthentication")) {
                object.apiAuthentication = $root.ProtobufClient.APIAuthenticationMessage.toObject(message.apiAuthentication, options);
                if (options.oneofs)
                    object.body = "apiAuthentication";
            }
            return object;
        };

        /**
         * Converts this ClientMessage to JSON.
         * @function toJSON
         * @memberof ProtobufClient.ClientMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClientMessage;
    })();

    ProtobufClient.ClientIdentificationMessage = (function() {

        /**
         * Properties of a ClientIdentificationMessage.
         * @memberof ProtobufClient
         * @interface IClientIdentificationMessage
         * @property {string|null} [useragent] ClientIdentificationMessage useragent
         * @property {string|null} [revision] ClientIdentificationMessage revision
         * @property {string|null} [integration] ClientIdentificationMessage integration
         * @property {string|null} [locale] ClientIdentificationMessage locale
         * @property {Array.<string>|null} [subscriptions] ClientIdentificationMessage subscriptions
         */

        /**
         * Constructs a new ClientIdentificationMessage.
         * @memberof ProtobufClient
         * @classdesc Represents a ClientIdentificationMessage.
         * @implements IClientIdentificationMessage
         * @constructor
         * @param {ProtobufClient.IClientIdentificationMessage=} [properties] Properties to set
         */
        function ClientIdentificationMessage(properties) {
            this.subscriptions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientIdentificationMessage useragent.
         * @member {string} useragent
         * @memberof ProtobufClient.ClientIdentificationMessage
         * @instance
         */
        ClientIdentificationMessage.prototype.useragent = "";

        /**
         * ClientIdentificationMessage revision.
         * @member {string} revision
         * @memberof ProtobufClient.ClientIdentificationMessage
         * @instance
         */
        ClientIdentificationMessage.prototype.revision = "";

        /**
         * ClientIdentificationMessage integration.
         * @member {string} integration
         * @memberof ProtobufClient.ClientIdentificationMessage
         * @instance
         */
        ClientIdentificationMessage.prototype.integration = "";

        /**
         * ClientIdentificationMessage locale.
         * @member {string} locale
         * @memberof ProtobufClient.ClientIdentificationMessage
         * @instance
         */
        ClientIdentificationMessage.prototype.locale = "";

        /**
         * ClientIdentificationMessage subscriptions.
         * @member {Array.<string>} subscriptions
         * @memberof ProtobufClient.ClientIdentificationMessage
         * @instance
         */
        ClientIdentificationMessage.prototype.subscriptions = $util.emptyArray;

        /**
         * Creates a new ClientIdentificationMessage instance using the specified properties.
         * @function create
         * @memberof ProtobufClient.ClientIdentificationMessage
         * @static
         * @param {ProtobufClient.IClientIdentificationMessage=} [properties] Properties to set
         * @returns {ProtobufClient.ClientIdentificationMessage} ClientIdentificationMessage instance
         */
        ClientIdentificationMessage.create = function create(properties) {
            return new ClientIdentificationMessage(properties);
        };

        /**
         * Encodes the specified ClientIdentificationMessage message. Does not implicitly {@link ProtobufClient.ClientIdentificationMessage.verify|verify} messages.
         * @function encode
         * @memberof ProtobufClient.ClientIdentificationMessage
         * @static
         * @param {ProtobufClient.IClientIdentificationMessage} message ClientIdentificationMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientIdentificationMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.useragent != null && message.hasOwnProperty("useragent"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.useragent);
            if (message.revision != null && message.hasOwnProperty("revision"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.revision);
            if (message.integration != null && message.hasOwnProperty("integration"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.integration);
            if (message.locale != null && message.hasOwnProperty("locale"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.locale);
            if (message.subscriptions != null && message.subscriptions.length)
                for (var i = 0; i < message.subscriptions.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.subscriptions[i]);
            return writer;
        };

        /**
         * Encodes the specified ClientIdentificationMessage message, length delimited. Does not implicitly {@link ProtobufClient.ClientIdentificationMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufClient.ClientIdentificationMessage
         * @static
         * @param {ProtobufClient.IClientIdentificationMessage} message ClientIdentificationMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientIdentificationMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientIdentificationMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufClient.ClientIdentificationMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufClient.ClientIdentificationMessage} ClientIdentificationMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientIdentificationMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufClient.ClientIdentificationMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.useragent = reader.string();
                    break;
                case 2:
                    message.revision = reader.string();
                    break;
                case 3:
                    message.integration = reader.string();
                    break;
                case 4:
                    message.locale = reader.string();
                    break;
                case 5:
                    if (!(message.subscriptions && message.subscriptions.length))
                        message.subscriptions = [];
                    message.subscriptions.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientIdentificationMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufClient.ClientIdentificationMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufClient.ClientIdentificationMessage} ClientIdentificationMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientIdentificationMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientIdentificationMessage message.
         * @function verify
         * @memberof ProtobufClient.ClientIdentificationMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientIdentificationMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.useragent != null && message.hasOwnProperty("useragent"))
                if (!$util.isString(message.useragent))
                    return "useragent: string expected";
            if (message.revision != null && message.hasOwnProperty("revision"))
                if (!$util.isString(message.revision))
                    return "revision: string expected";
            if (message.integration != null && message.hasOwnProperty("integration"))
                if (!$util.isString(message.integration))
                    return "integration: string expected";
            if (message.locale != null && message.hasOwnProperty("locale"))
                if (!$util.isString(message.locale))
                    return "locale: string expected";
            if (message.subscriptions != null && message.hasOwnProperty("subscriptions")) {
                if (!Array.isArray(message.subscriptions))
                    return "subscriptions: array expected";
                for (var i = 0; i < message.subscriptions.length; ++i)
                    if (!$util.isString(message.subscriptions[i]))
                        return "subscriptions: string[] expected";
            }
            return null;
        };

        /**
         * Creates a ClientIdentificationMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufClient.ClientIdentificationMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufClient.ClientIdentificationMessage} ClientIdentificationMessage
         */
        ClientIdentificationMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufClient.ClientIdentificationMessage)
                return object;
            var message = new $root.ProtobufClient.ClientIdentificationMessage();
            if (object.useragent != null)
                message.useragent = String(object.useragent);
            if (object.revision != null)
                message.revision = String(object.revision);
            if (object.integration != null)
                message.integration = String(object.integration);
            if (object.locale != null)
                message.locale = String(object.locale);
            if (object.subscriptions) {
                if (!Array.isArray(object.subscriptions))
                    throw TypeError(".ProtobufClient.ClientIdentificationMessage.subscriptions: array expected");
                message.subscriptions = [];
                for (var i = 0; i < object.subscriptions.length; ++i)
                    message.subscriptions[i] = String(object.subscriptions[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ClientIdentificationMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufClient.ClientIdentificationMessage
         * @static
         * @param {ProtobufClient.ClientIdentificationMessage} message ClientIdentificationMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientIdentificationMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.subscriptions = [];
            if (options.defaults) {
                object.useragent = "";
                object.revision = "";
                object.integration = "";
                object.locale = "";
            }
            if (message.useragent != null && message.hasOwnProperty("useragent"))
                object.useragent = message.useragent;
            if (message.revision != null && message.hasOwnProperty("revision"))
                object.revision = message.revision;
            if (message.integration != null && message.hasOwnProperty("integration"))
                object.integration = message.integration;
            if (message.locale != null && message.hasOwnProperty("locale"))
                object.locale = message.locale;
            if (message.subscriptions && message.subscriptions.length) {
                object.subscriptions = [];
                for (var j = 0; j < message.subscriptions.length; ++j)
                    object.subscriptions[j] = message.subscriptions[j];
            }
            return object;
        };

        /**
         * Converts this ClientIdentificationMessage to JSON.
         * @function toJSON
         * @memberof ProtobufClient.ClientIdentificationMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientIdentificationMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClientIdentificationMessage;
    })();

    ProtobufClient.WebAuthenticationMessage = (function() {

        /**
         * Properties of a WebAuthenticationMessage.
         * @memberof ProtobufClient
         * @interface IWebAuthenticationMessage
         * @property {ProtobufClient.IClientIdentificationMessage|null} [identification] WebAuthenticationMessage identification
         * @property {string|null} [token] WebAuthenticationMessage token
         * @property {string|null} [nonce] WebAuthenticationMessage nonce
         * @property {Array.<string>|null} [accessList] WebAuthenticationMessage accessList
         */

        /**
         * Constructs a new WebAuthenticationMessage.
         * @memberof ProtobufClient
         * @classdesc Represents a WebAuthenticationMessage.
         * @implements IWebAuthenticationMessage
         * @constructor
         * @param {ProtobufClient.IWebAuthenticationMessage=} [properties] Properties to set
         */
        function WebAuthenticationMessage(properties) {
            this.accessList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WebAuthenticationMessage identification.
         * @member {ProtobufClient.IClientIdentificationMessage|null|undefined} identification
         * @memberof ProtobufClient.WebAuthenticationMessage
         * @instance
         */
        WebAuthenticationMessage.prototype.identification = null;

        /**
         * WebAuthenticationMessage token.
         * @member {string} token
         * @memberof ProtobufClient.WebAuthenticationMessage
         * @instance
         */
        WebAuthenticationMessage.prototype.token = "";

        /**
         * WebAuthenticationMessage nonce.
         * @member {string} nonce
         * @memberof ProtobufClient.WebAuthenticationMessage
         * @instance
         */
        WebAuthenticationMessage.prototype.nonce = "";

        /**
         * WebAuthenticationMessage accessList.
         * @member {Array.<string>} accessList
         * @memberof ProtobufClient.WebAuthenticationMessage
         * @instance
         */
        WebAuthenticationMessage.prototype.accessList = $util.emptyArray;

        /**
         * Creates a new WebAuthenticationMessage instance using the specified properties.
         * @function create
         * @memberof ProtobufClient.WebAuthenticationMessage
         * @static
         * @param {ProtobufClient.IWebAuthenticationMessage=} [properties] Properties to set
         * @returns {ProtobufClient.WebAuthenticationMessage} WebAuthenticationMessage instance
         */
        WebAuthenticationMessage.create = function create(properties) {
            return new WebAuthenticationMessage(properties);
        };

        /**
         * Encodes the specified WebAuthenticationMessage message. Does not implicitly {@link ProtobufClient.WebAuthenticationMessage.verify|verify} messages.
         * @function encode
         * @memberof ProtobufClient.WebAuthenticationMessage
         * @static
         * @param {ProtobufClient.IWebAuthenticationMessage} message WebAuthenticationMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebAuthenticationMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.identification != null && message.hasOwnProperty("identification"))
                $root.ProtobufClient.ClientIdentificationMessage.encode(message.identification, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nonce);
            if (message.accessList != null && message.accessList.length)
                for (var i = 0; i < message.accessList.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.accessList[i]);
            return writer;
        };

        /**
         * Encodes the specified WebAuthenticationMessage message, length delimited. Does not implicitly {@link ProtobufClient.WebAuthenticationMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufClient.WebAuthenticationMessage
         * @static
         * @param {ProtobufClient.IWebAuthenticationMessage} message WebAuthenticationMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WebAuthenticationMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WebAuthenticationMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufClient.WebAuthenticationMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufClient.WebAuthenticationMessage} WebAuthenticationMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebAuthenticationMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufClient.WebAuthenticationMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.identification = $root.ProtobufClient.ClientIdentificationMessage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.token = reader.string();
                    break;
                case 3:
                    message.nonce = reader.string();
                    break;
                case 4:
                    if (!(message.accessList && message.accessList.length))
                        message.accessList = [];
                    message.accessList.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a WebAuthenticationMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufClient.WebAuthenticationMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufClient.WebAuthenticationMessage} WebAuthenticationMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WebAuthenticationMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WebAuthenticationMessage message.
         * @function verify
         * @memberof ProtobufClient.WebAuthenticationMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WebAuthenticationMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.identification != null && message.hasOwnProperty("identification")) {
                var error = $root.ProtobufClient.ClientIdentificationMessage.verify(message.identification);
                if (error)
                    return "identification." + error;
            }
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!$util.isString(message.nonce))
                    return "nonce: string expected";
            if (message.accessList != null && message.hasOwnProperty("accessList")) {
                if (!Array.isArray(message.accessList))
                    return "accessList: array expected";
                for (var i = 0; i < message.accessList.length; ++i)
                    if (!$util.isString(message.accessList[i]))
                        return "accessList: string[] expected";
            }
            return null;
        };

        /**
         * Creates a WebAuthenticationMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufClient.WebAuthenticationMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufClient.WebAuthenticationMessage} WebAuthenticationMessage
         */
        WebAuthenticationMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufClient.WebAuthenticationMessage)
                return object;
            var message = new $root.ProtobufClient.WebAuthenticationMessage();
            if (object.identification != null) {
                if (typeof object.identification !== "object")
                    throw TypeError(".ProtobufClient.WebAuthenticationMessage.identification: object expected");
                message.identification = $root.ProtobufClient.ClientIdentificationMessage.fromObject(object.identification);
            }
            if (object.token != null)
                message.token = String(object.token);
            if (object.nonce != null)
                message.nonce = String(object.nonce);
            if (object.accessList) {
                if (!Array.isArray(object.accessList))
                    throw TypeError(".ProtobufClient.WebAuthenticationMessage.accessList: array expected");
                message.accessList = [];
                for (var i = 0; i < object.accessList.length; ++i)
                    message.accessList[i] = String(object.accessList[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a WebAuthenticationMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufClient.WebAuthenticationMessage
         * @static
         * @param {ProtobufClient.WebAuthenticationMessage} message WebAuthenticationMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WebAuthenticationMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.accessList = [];
            if (options.defaults) {
                object.identification = null;
                object.token = "";
                object.nonce = "";
            }
            if (message.identification != null && message.hasOwnProperty("identification"))
                object.identification = $root.ProtobufClient.ClientIdentificationMessage.toObject(message.identification, options);
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                object.nonce = message.nonce;
            if (message.accessList && message.accessList.length) {
                object.accessList = [];
                for (var j = 0; j < message.accessList.length; ++j)
                    object.accessList[j] = message.accessList[j];
            }
            return object;
        };

        /**
         * Converts this WebAuthenticationMessage to JSON.
         * @function toJSON
         * @memberof ProtobufClient.WebAuthenticationMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WebAuthenticationMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return WebAuthenticationMessage;
    })();

    ProtobufClient.APIAuthenticationMessage = (function() {

        /**
         * Properties of a APIAuthenticationMessage.
         * @memberof ProtobufClient
         * @interface IAPIAuthenticationMessage
         * @property {string|null} [token] APIAuthenticationMessage token
         * @property {string|null} [nonce] APIAuthenticationMessage nonce
         * @property {string|null} [apiKey] APIAuthenticationMessage apiKey
         * @property {ProtobufClient.APIAuthenticationMessage.Source|null} [source] APIAuthenticationMessage source
         * @property {string|null} [version] APIAuthenticationMessage version
         * @property {Array.<string>|null} [subscriptions] APIAuthenticationMessage subscriptions
         */

        /**
         * Constructs a new APIAuthenticationMessage.
         * @memberof ProtobufClient
         * @classdesc Represents a APIAuthenticationMessage.
         * @implements IAPIAuthenticationMessage
         * @constructor
         * @param {ProtobufClient.IAPIAuthenticationMessage=} [properties] Properties to set
         */
        function APIAuthenticationMessage(properties) {
            this.subscriptions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * APIAuthenticationMessage token.
         * @member {string} token
         * @memberof ProtobufClient.APIAuthenticationMessage
         * @instance
         */
        APIAuthenticationMessage.prototype.token = "";

        /**
         * APIAuthenticationMessage nonce.
         * @member {string} nonce
         * @memberof ProtobufClient.APIAuthenticationMessage
         * @instance
         */
        APIAuthenticationMessage.prototype.nonce = "";

        /**
         * APIAuthenticationMessage apiKey.
         * @member {string} apiKey
         * @memberof ProtobufClient.APIAuthenticationMessage
         * @instance
         */
        APIAuthenticationMessage.prototype.apiKey = "";

        /**
         * APIAuthenticationMessage source.
         * @member {ProtobufClient.APIAuthenticationMessage.Source} source
         * @memberof ProtobufClient.APIAuthenticationMessage
         * @instance
         */
        APIAuthenticationMessage.prototype.source = 0;

        /**
         * APIAuthenticationMessage version.
         * @member {string} version
         * @memberof ProtobufClient.APIAuthenticationMessage
         * @instance
         */
        APIAuthenticationMessage.prototype.version = "";

        /**
         * APIAuthenticationMessage subscriptions.
         * @member {Array.<string>} subscriptions
         * @memberof ProtobufClient.APIAuthenticationMessage
         * @instance
         */
        APIAuthenticationMessage.prototype.subscriptions = $util.emptyArray;

        /**
         * Creates a new APIAuthenticationMessage instance using the specified properties.
         * @function create
         * @memberof ProtobufClient.APIAuthenticationMessage
         * @static
         * @param {ProtobufClient.IAPIAuthenticationMessage=} [properties] Properties to set
         * @returns {ProtobufClient.APIAuthenticationMessage} APIAuthenticationMessage instance
         */
        APIAuthenticationMessage.create = function create(properties) {
            return new APIAuthenticationMessage(properties);
        };

        /**
         * Encodes the specified APIAuthenticationMessage message. Does not implicitly {@link ProtobufClient.APIAuthenticationMessage.verify|verify} messages.
         * @function encode
         * @memberof ProtobufClient.APIAuthenticationMessage
         * @static
         * @param {ProtobufClient.IAPIAuthenticationMessage} message APIAuthenticationMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        APIAuthenticationMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.token != null && message.hasOwnProperty("token"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.nonce);
            if (message.apiKey != null && message.hasOwnProperty("apiKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.apiKey);
            if (message.source != null && message.hasOwnProperty("source"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.source);
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.version);
            if (message.subscriptions != null && message.subscriptions.length)
                for (var i = 0; i < message.subscriptions.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.subscriptions[i]);
            return writer;
        };

        /**
         * Encodes the specified APIAuthenticationMessage message, length delimited. Does not implicitly {@link ProtobufClient.APIAuthenticationMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufClient.APIAuthenticationMessage
         * @static
         * @param {ProtobufClient.IAPIAuthenticationMessage} message APIAuthenticationMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        APIAuthenticationMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a APIAuthenticationMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufClient.APIAuthenticationMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufClient.APIAuthenticationMessage} APIAuthenticationMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        APIAuthenticationMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufClient.APIAuthenticationMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.token = reader.string();
                    break;
                case 2:
                    message.nonce = reader.string();
                    break;
                case 3:
                    message.apiKey = reader.string();
                    break;
                case 4:
                    message.source = reader.int32();
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    if (!(message.subscriptions && message.subscriptions.length))
                        message.subscriptions = [];
                    message.subscriptions.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a APIAuthenticationMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufClient.APIAuthenticationMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufClient.APIAuthenticationMessage} APIAuthenticationMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        APIAuthenticationMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a APIAuthenticationMessage message.
         * @function verify
         * @memberof ProtobufClient.APIAuthenticationMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        APIAuthenticationMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.token != null && message.hasOwnProperty("token"))
                if (!$util.isString(message.token))
                    return "token: string expected";
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!$util.isString(message.nonce))
                    return "nonce: string expected";
            if (message.apiKey != null && message.hasOwnProperty("apiKey"))
                if (!$util.isString(message.apiKey))
                    return "apiKey: string expected";
            if (message.source != null && message.hasOwnProperty("source"))
                switch (message.source) {
                default:
                    return "source: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.subscriptions != null && message.hasOwnProperty("subscriptions")) {
                if (!Array.isArray(message.subscriptions))
                    return "subscriptions: array expected";
                for (var i = 0; i < message.subscriptions.length; ++i)
                    if (!$util.isString(message.subscriptions[i]))
                        return "subscriptions: string[] expected";
            }
            return null;
        };

        /**
         * Creates a APIAuthenticationMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufClient.APIAuthenticationMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufClient.APIAuthenticationMessage} APIAuthenticationMessage
         */
        APIAuthenticationMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufClient.APIAuthenticationMessage)
                return object;
            var message = new $root.ProtobufClient.APIAuthenticationMessage();
            if (object.token != null)
                message.token = String(object.token);
            if (object.nonce != null)
                message.nonce = String(object.nonce);
            if (object.apiKey != null)
                message.apiKey = String(object.apiKey);
            switch (object.source) {
            case "UNKNOWN":
            case 0:
                message.source = 0;
                break;
            case "GOLANG_SDK":
            case 1:
                message.source = 1;
                break;
            case "JAVASCRIPT_SDK":
            case 2:
                message.source = 2;
                break;
            case "NODE_SDK":
            case 3:
                message.source = 3;
                break;
            case "CW_WEB":
            case 4:
                message.source = 4;
                break;
            }
            if (object.version != null)
                message.version = String(object.version);
            if (object.subscriptions) {
                if (!Array.isArray(object.subscriptions))
                    throw TypeError(".ProtobufClient.APIAuthenticationMessage.subscriptions: array expected");
                message.subscriptions = [];
                for (var i = 0; i < object.subscriptions.length; ++i)
                    message.subscriptions[i] = String(object.subscriptions[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a APIAuthenticationMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufClient.APIAuthenticationMessage
         * @static
         * @param {ProtobufClient.APIAuthenticationMessage} message APIAuthenticationMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        APIAuthenticationMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.subscriptions = [];
            if (options.defaults) {
                object.token = "";
                object.nonce = "";
                object.apiKey = "";
                object.source = options.enums === String ? "UNKNOWN" : 0;
                object.version = "";
            }
            if (message.token != null && message.hasOwnProperty("token"))
                object.token = message.token;
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                object.nonce = message.nonce;
            if (message.apiKey != null && message.hasOwnProperty("apiKey"))
                object.apiKey = message.apiKey;
            if (message.source != null && message.hasOwnProperty("source"))
                object.source = options.enums === String ? $root.ProtobufClient.APIAuthenticationMessage.Source[message.source] : message.source;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.subscriptions && message.subscriptions.length) {
                object.subscriptions = [];
                for (var j = 0; j < message.subscriptions.length; ++j)
                    object.subscriptions[j] = message.subscriptions[j];
            }
            return object;
        };

        /**
         * Converts this APIAuthenticationMessage to JSON.
         * @function toJSON
         * @memberof ProtobufClient.APIAuthenticationMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        APIAuthenticationMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Source enum.
         * @name ProtobufClient.APIAuthenticationMessage.Source
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} GOLANG_SDK=1 GOLANG_SDK value
         * @property {number} JAVASCRIPT_SDK=2 JAVASCRIPT_SDK value
         * @property {number} NODE_SDK=3 NODE_SDK value
         * @property {number} CW_WEB=4 CW_WEB value
         */
        APIAuthenticationMessage.Source = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "GOLANG_SDK"] = 1;
            values[valuesById[2] = "JAVASCRIPT_SDK"] = 2;
            values[valuesById[3] = "NODE_SDK"] = 3;
            values[valuesById[4] = "CW_WEB"] = 4;
            return values;
        })();

        return APIAuthenticationMessage;
    })();

    ProtobufClient.ClientSessionMessage = (function() {

        /**
         * Properties of a ClientSessionMessage.
         * @memberof ProtobufClient
         * @interface IClientSessionMessage
         * @property {ProtobufClient.ClientSessionMessage.ISession|null} [session] ClientSessionMessage session
         * @property {ProtobufClient.ClientSessionMessage.IAnonymousTradingSession|null} [anonymousTradingSession] ClientSessionMessage anonymousTradingSession
         */

        /**
         * Constructs a new ClientSessionMessage.
         * @memberof ProtobufClient
         * @classdesc Represents a ClientSessionMessage.
         * @implements IClientSessionMessage
         * @constructor
         * @param {ProtobufClient.IClientSessionMessage=} [properties] Properties to set
         */
        function ClientSessionMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientSessionMessage session.
         * @member {ProtobufClient.ClientSessionMessage.ISession|null|undefined} session
         * @memberof ProtobufClient.ClientSessionMessage
         * @instance
         */
        ClientSessionMessage.prototype.session = null;

        /**
         * ClientSessionMessage anonymousTradingSession.
         * @member {ProtobufClient.ClientSessionMessage.IAnonymousTradingSession|null|undefined} anonymousTradingSession
         * @memberof ProtobufClient.ClientSessionMessage
         * @instance
         */
        ClientSessionMessage.prototype.anonymousTradingSession = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * ClientSessionMessage SessionConfig.
         * @member {"session"|"anonymousTradingSession"|undefined} SessionConfig
         * @memberof ProtobufClient.ClientSessionMessage
         * @instance
         */
        Object.defineProperty(ClientSessionMessage.prototype, "SessionConfig", {
            get: $util.oneOfGetter($oneOfFields = ["session", "anonymousTradingSession"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ClientSessionMessage instance using the specified properties.
         * @function create
         * @memberof ProtobufClient.ClientSessionMessage
         * @static
         * @param {ProtobufClient.IClientSessionMessage=} [properties] Properties to set
         * @returns {ProtobufClient.ClientSessionMessage} ClientSessionMessage instance
         */
        ClientSessionMessage.create = function create(properties) {
            return new ClientSessionMessage(properties);
        };

        /**
         * Encodes the specified ClientSessionMessage message. Does not implicitly {@link ProtobufClient.ClientSessionMessage.verify|verify} messages.
         * @function encode
         * @memberof ProtobufClient.ClientSessionMessage
         * @static
         * @param {ProtobufClient.IClientSessionMessage} message ClientSessionMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientSessionMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.session != null && message.hasOwnProperty("session"))
                $root.ProtobufClient.ClientSessionMessage.Session.encode(message.session, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.anonymousTradingSession != null && message.hasOwnProperty("anonymousTradingSession"))
                $root.ProtobufClient.ClientSessionMessage.AnonymousTradingSession.encode(message.anonymousTradingSession, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ClientSessionMessage message, length delimited. Does not implicitly {@link ProtobufClient.ClientSessionMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufClient.ClientSessionMessage
         * @static
         * @param {ProtobufClient.IClientSessionMessage} message ClientSessionMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientSessionMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientSessionMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufClient.ClientSessionMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufClient.ClientSessionMessage} ClientSessionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientSessionMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufClient.ClientSessionMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.session = $root.ProtobufClient.ClientSessionMessage.Session.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.anonymousTradingSession = $root.ProtobufClient.ClientSessionMessage.AnonymousTradingSession.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientSessionMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufClient.ClientSessionMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufClient.ClientSessionMessage} ClientSessionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientSessionMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientSessionMessage message.
         * @function verify
         * @memberof ProtobufClient.ClientSessionMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientSessionMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.session != null && message.hasOwnProperty("session")) {
                properties.SessionConfig = 1;
                {
                    var error = $root.ProtobufClient.ClientSessionMessage.Session.verify(message.session);
                    if (error)
                        return "session." + error;
                }
            }
            if (message.anonymousTradingSession != null && message.hasOwnProperty("anonymousTradingSession")) {
                if (properties.SessionConfig === 1)
                    return "SessionConfig: multiple values";
                properties.SessionConfig = 1;
                {
                    var error = $root.ProtobufClient.ClientSessionMessage.AnonymousTradingSession.verify(message.anonymousTradingSession);
                    if (error)
                        return "anonymousTradingSession." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ClientSessionMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufClient.ClientSessionMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufClient.ClientSessionMessage} ClientSessionMessage
         */
        ClientSessionMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufClient.ClientSessionMessage)
                return object;
            var message = new $root.ProtobufClient.ClientSessionMessage();
            if (object.session != null) {
                if (typeof object.session !== "object")
                    throw TypeError(".ProtobufClient.ClientSessionMessage.session: object expected");
                message.session = $root.ProtobufClient.ClientSessionMessage.Session.fromObject(object.session);
            }
            if (object.anonymousTradingSession != null) {
                if (typeof object.anonymousTradingSession !== "object")
                    throw TypeError(".ProtobufClient.ClientSessionMessage.anonymousTradingSession: object expected");
                message.anonymousTradingSession = $root.ProtobufClient.ClientSessionMessage.AnonymousTradingSession.fromObject(object.anonymousTradingSession);
            }
            return message;
        };

        /**
         * Creates a plain object from a ClientSessionMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufClient.ClientSessionMessage
         * @static
         * @param {ProtobufClient.ClientSessionMessage} message ClientSessionMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientSessionMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.session != null && message.hasOwnProperty("session")) {
                object.session = $root.ProtobufClient.ClientSessionMessage.Session.toObject(message.session, options);
                if (options.oneofs)
                    object.SessionConfig = "session";
            }
            if (message.anonymousTradingSession != null && message.hasOwnProperty("anonymousTradingSession")) {
                object.anonymousTradingSession = $root.ProtobufClient.ClientSessionMessage.AnonymousTradingSession.toObject(message.anonymousTradingSession, options);
                if (options.oneofs)
                    object.SessionConfig = "anonymousTradingSession";
            }
            return object;
        };

        /**
         * Converts this ClientSessionMessage to JSON.
         * @function toJSON
         * @memberof ProtobufClient.ClientSessionMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientSessionMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        ClientSessionMessage.Session = (function() {

            /**
             * Properties of a Session.
             * @memberof ProtobufClient.ClientSessionMessage
             * @interface ISession
             * @property {string|null} [userId] Session userId
             * @property {number|Long|null} [expires] Session expires
             * @property {string|null} [token] Session token
             * @property {string|null} [mfaToken] Session mfaToken
             */

            /**
             * Constructs a new Session.
             * @memberof ProtobufClient.ClientSessionMessage
             * @classdesc Represents a Session.
             * @implements ISession
             * @constructor
             * @param {ProtobufClient.ClientSessionMessage.ISession=} [properties] Properties to set
             */
            function Session(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Session userId.
             * @member {string} userId
             * @memberof ProtobufClient.ClientSessionMessage.Session
             * @instance
             */
            Session.prototype.userId = "";

            /**
             * Session expires.
             * @member {number|Long} expires
             * @memberof ProtobufClient.ClientSessionMessage.Session
             * @instance
             */
            Session.prototype.expires = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Session token.
             * @member {string} token
             * @memberof ProtobufClient.ClientSessionMessage.Session
             * @instance
             */
            Session.prototype.token = "";

            /**
             * Session mfaToken.
             * @member {string} mfaToken
             * @memberof ProtobufClient.ClientSessionMessage.Session
             * @instance
             */
            Session.prototype.mfaToken = "";

            /**
             * Creates a new Session instance using the specified properties.
             * @function create
             * @memberof ProtobufClient.ClientSessionMessage.Session
             * @static
             * @param {ProtobufClient.ClientSessionMessage.ISession=} [properties] Properties to set
             * @returns {ProtobufClient.ClientSessionMessage.Session} Session instance
             */
            Session.create = function create(properties) {
                return new Session(properties);
            };

            /**
             * Encodes the specified Session message. Does not implicitly {@link ProtobufClient.ClientSessionMessage.Session.verify|verify} messages.
             * @function encode
             * @memberof ProtobufClient.ClientSessionMessage.Session
             * @static
             * @param {ProtobufClient.ClientSessionMessage.ISession} message Session message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Session.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && message.hasOwnProperty("userId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
                if (message.expires != null && message.hasOwnProperty("expires"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.expires);
                if (message.token != null && message.hasOwnProperty("token"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
                if (message.mfaToken != null && message.hasOwnProperty("mfaToken"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.mfaToken);
                return writer;
            };

            /**
             * Encodes the specified Session message, length delimited. Does not implicitly {@link ProtobufClient.ClientSessionMessage.Session.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ProtobufClient.ClientSessionMessage.Session
             * @static
             * @param {ProtobufClient.ClientSessionMessage.ISession} message Session message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Session.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Session message from the specified reader or buffer.
             * @function decode
             * @memberof ProtobufClient.ClientSessionMessage.Session
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ProtobufClient.ClientSessionMessage.Session} Session
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Session.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufClient.ClientSessionMessage.Session();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.userId = reader.string();
                        break;
                    case 2:
                        message.expires = reader.int64();
                        break;
                    case 3:
                        message.token = reader.string();
                        break;
                    case 4:
                        message.mfaToken = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Session message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ProtobufClient.ClientSessionMessage.Session
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ProtobufClient.ClientSessionMessage.Session} Session
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Session.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Session message.
             * @function verify
             * @memberof ProtobufClient.ClientSessionMessage.Session
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Session.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isString(message.userId))
                        return "userId: string expected";
                if (message.expires != null && message.hasOwnProperty("expires"))
                    if (!$util.isInteger(message.expires) && !(message.expires && $util.isInteger(message.expires.low) && $util.isInteger(message.expires.high)))
                        return "expires: integer|Long expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                if (message.mfaToken != null && message.hasOwnProperty("mfaToken"))
                    if (!$util.isString(message.mfaToken))
                        return "mfaToken: string expected";
                return null;
            };

            /**
             * Creates a Session message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ProtobufClient.ClientSessionMessage.Session
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ProtobufClient.ClientSessionMessage.Session} Session
             */
            Session.fromObject = function fromObject(object) {
                if (object instanceof $root.ProtobufClient.ClientSessionMessage.Session)
                    return object;
                var message = new $root.ProtobufClient.ClientSessionMessage.Session();
                if (object.userId != null)
                    message.userId = String(object.userId);
                if (object.expires != null)
                    if ($util.Long)
                        (message.expires = $util.Long.fromValue(object.expires)).unsigned = false;
                    else if (typeof object.expires === "string")
                        message.expires = parseInt(object.expires, 10);
                    else if (typeof object.expires === "number")
                        message.expires = object.expires;
                    else if (typeof object.expires === "object")
                        message.expires = new $util.LongBits(object.expires.low >>> 0, object.expires.high >>> 0).toNumber();
                if (object.token != null)
                    message.token = String(object.token);
                if (object.mfaToken != null)
                    message.mfaToken = String(object.mfaToken);
                return message;
            };

            /**
             * Creates a plain object from a Session message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ProtobufClient.ClientSessionMessage.Session
             * @static
             * @param {ProtobufClient.ClientSessionMessage.Session} message Session
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Session.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.userId = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.expires = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.expires = options.longs === String ? "0" : 0;
                    object.token = "";
                    object.mfaToken = "";
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                if (message.expires != null && message.hasOwnProperty("expires"))
                    if (typeof message.expires === "number")
                        object.expires = options.longs === String ? String(message.expires) : message.expires;
                    else
                        object.expires = options.longs === String ? $util.Long.prototype.toString.call(message.expires) : options.longs === Number ? new $util.LongBits(message.expires.low >>> 0, message.expires.high >>> 0).toNumber() : message.expires;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                if (message.mfaToken != null && message.hasOwnProperty("mfaToken"))
                    object.mfaToken = message.mfaToken;
                return object;
            };

            /**
             * Converts this Session to JSON.
             * @function toJSON
             * @memberof ProtobufClient.ClientSessionMessage.Session
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Session.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Session;
        })();

        ClientSessionMessage.AnonymousTradingSession = (function() {

            /**
             * Properties of an AnonymousTradingSession.
             * @memberof ProtobufClient.ClientSessionMessage
             * @interface IAnonymousTradingSession
             * @property {string|null} [exchange] AnonymousTradingSession exchange
             * @property {string|null} [token] AnonymousTradingSession token
             * @property {number|Long|null} [expiration] AnonymousTradingSession expiration
             */

            /**
             * Constructs a new AnonymousTradingSession.
             * @memberof ProtobufClient.ClientSessionMessage
             * @classdesc Represents an AnonymousTradingSession.
             * @implements IAnonymousTradingSession
             * @constructor
             * @param {ProtobufClient.ClientSessionMessage.IAnonymousTradingSession=} [properties] Properties to set
             */
            function AnonymousTradingSession(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AnonymousTradingSession exchange.
             * @member {string} exchange
             * @memberof ProtobufClient.ClientSessionMessage.AnonymousTradingSession
             * @instance
             */
            AnonymousTradingSession.prototype.exchange = "";

            /**
             * AnonymousTradingSession token.
             * @member {string} token
             * @memberof ProtobufClient.ClientSessionMessage.AnonymousTradingSession
             * @instance
             */
            AnonymousTradingSession.prototype.token = "";

            /**
             * AnonymousTradingSession expiration.
             * @member {number|Long} expiration
             * @memberof ProtobufClient.ClientSessionMessage.AnonymousTradingSession
             * @instance
             */
            AnonymousTradingSession.prototype.expiration = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new AnonymousTradingSession instance using the specified properties.
             * @function create
             * @memberof ProtobufClient.ClientSessionMessage.AnonymousTradingSession
             * @static
             * @param {ProtobufClient.ClientSessionMessage.IAnonymousTradingSession=} [properties] Properties to set
             * @returns {ProtobufClient.ClientSessionMessage.AnonymousTradingSession} AnonymousTradingSession instance
             */
            AnonymousTradingSession.create = function create(properties) {
                return new AnonymousTradingSession(properties);
            };

            /**
             * Encodes the specified AnonymousTradingSession message. Does not implicitly {@link ProtobufClient.ClientSessionMessage.AnonymousTradingSession.verify|verify} messages.
             * @function encode
             * @memberof ProtobufClient.ClientSessionMessage.AnonymousTradingSession
             * @static
             * @param {ProtobufClient.ClientSessionMessage.IAnonymousTradingSession} message AnonymousTradingSession message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AnonymousTradingSession.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.exchange != null && message.hasOwnProperty("exchange"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.exchange);
                if (message.token != null && message.hasOwnProperty("token"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.token);
                if (message.expiration != null && message.hasOwnProperty("expiration"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.expiration);
                return writer;
            };

            /**
             * Encodes the specified AnonymousTradingSession message, length delimited. Does not implicitly {@link ProtobufClient.ClientSessionMessage.AnonymousTradingSession.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ProtobufClient.ClientSessionMessage.AnonymousTradingSession
             * @static
             * @param {ProtobufClient.ClientSessionMessage.IAnonymousTradingSession} message AnonymousTradingSession message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AnonymousTradingSession.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AnonymousTradingSession message from the specified reader or buffer.
             * @function decode
             * @memberof ProtobufClient.ClientSessionMessage.AnonymousTradingSession
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ProtobufClient.ClientSessionMessage.AnonymousTradingSession} AnonymousTradingSession
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AnonymousTradingSession.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufClient.ClientSessionMessage.AnonymousTradingSession();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.exchange = reader.string();
                        break;
                    case 2:
                        message.token = reader.string();
                        break;
                    case 3:
                        message.expiration = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AnonymousTradingSession message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ProtobufClient.ClientSessionMessage.AnonymousTradingSession
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ProtobufClient.ClientSessionMessage.AnonymousTradingSession} AnonymousTradingSession
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AnonymousTradingSession.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AnonymousTradingSession message.
             * @function verify
             * @memberof ProtobufClient.ClientSessionMessage.AnonymousTradingSession
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AnonymousTradingSession.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.exchange != null && message.hasOwnProperty("exchange"))
                    if (!$util.isString(message.exchange))
                        return "exchange: string expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                if (message.expiration != null && message.hasOwnProperty("expiration"))
                    if (!$util.isInteger(message.expiration) && !(message.expiration && $util.isInteger(message.expiration.low) && $util.isInteger(message.expiration.high)))
                        return "expiration: integer|Long expected";
                return null;
            };

            /**
             * Creates an AnonymousTradingSession message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ProtobufClient.ClientSessionMessage.AnonymousTradingSession
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ProtobufClient.ClientSessionMessage.AnonymousTradingSession} AnonymousTradingSession
             */
            AnonymousTradingSession.fromObject = function fromObject(object) {
                if (object instanceof $root.ProtobufClient.ClientSessionMessage.AnonymousTradingSession)
                    return object;
                var message = new $root.ProtobufClient.ClientSessionMessage.AnonymousTradingSession();
                if (object.exchange != null)
                    message.exchange = String(object.exchange);
                if (object.token != null)
                    message.token = String(object.token);
                if (object.expiration != null)
                    if ($util.Long)
                        (message.expiration = $util.Long.fromValue(object.expiration)).unsigned = false;
                    else if (typeof object.expiration === "string")
                        message.expiration = parseInt(object.expiration, 10);
                    else if (typeof object.expiration === "number")
                        message.expiration = object.expiration;
                    else if (typeof object.expiration === "object")
                        message.expiration = new $util.LongBits(object.expiration.low >>> 0, object.expiration.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an AnonymousTradingSession message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ProtobufClient.ClientSessionMessage.AnonymousTradingSession
             * @static
             * @param {ProtobufClient.ClientSessionMessage.AnonymousTradingSession} message AnonymousTradingSession
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AnonymousTradingSession.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.exchange = "";
                    object.token = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.expiration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.expiration = options.longs === String ? "0" : 0;
                }
                if (message.exchange != null && message.hasOwnProperty("exchange"))
                    object.exchange = message.exchange;
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                if (message.expiration != null && message.hasOwnProperty("expiration"))
                    if (typeof message.expiration === "number")
                        object.expiration = options.longs === String ? String(message.expiration) : message.expiration;
                    else
                        object.expiration = options.longs === String ? $util.Long.prototype.toString.call(message.expiration) : options.longs === Number ? new $util.LongBits(message.expiration.low >>> 0, message.expiration.high >>> 0).toNumber() : message.expiration;
                return object;
            };

            /**
             * Converts this AnonymousTradingSession to JSON.
             * @function toJSON
             * @memberof ProtobufClient.ClientSessionMessage.AnonymousTradingSession
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AnonymousTradingSession.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return AnonymousTradingSession;
        })();

        return ClientSessionMessage;
    })();

    ProtobufClient.ClientSubscribeMessage = (function() {

        /**
         * Properties of a ClientSubscribeMessage.
         * @memberof ProtobufClient
         * @interface IClientSubscribeMessage
         * @property {Array.<string>|null} [subscriptionKeys] ClientSubscribeMessage subscriptionKeys
         */

        /**
         * Constructs a new ClientSubscribeMessage.
         * @memberof ProtobufClient
         * @classdesc Represents a ClientSubscribeMessage.
         * @implements IClientSubscribeMessage
         * @constructor
         * @param {ProtobufClient.IClientSubscribeMessage=} [properties] Properties to set
         */
        function ClientSubscribeMessage(properties) {
            this.subscriptionKeys = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientSubscribeMessage subscriptionKeys.
         * @member {Array.<string>} subscriptionKeys
         * @memberof ProtobufClient.ClientSubscribeMessage
         * @instance
         */
        ClientSubscribeMessage.prototype.subscriptionKeys = $util.emptyArray;

        /**
         * Creates a new ClientSubscribeMessage instance using the specified properties.
         * @function create
         * @memberof ProtobufClient.ClientSubscribeMessage
         * @static
         * @param {ProtobufClient.IClientSubscribeMessage=} [properties] Properties to set
         * @returns {ProtobufClient.ClientSubscribeMessage} ClientSubscribeMessage instance
         */
        ClientSubscribeMessage.create = function create(properties) {
            return new ClientSubscribeMessage(properties);
        };

        /**
         * Encodes the specified ClientSubscribeMessage message. Does not implicitly {@link ProtobufClient.ClientSubscribeMessage.verify|verify} messages.
         * @function encode
         * @memberof ProtobufClient.ClientSubscribeMessage
         * @static
         * @param {ProtobufClient.IClientSubscribeMessage} message ClientSubscribeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientSubscribeMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subscriptionKeys != null && message.subscriptionKeys.length)
                for (var i = 0; i < message.subscriptionKeys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.subscriptionKeys[i]);
            return writer;
        };

        /**
         * Encodes the specified ClientSubscribeMessage message, length delimited. Does not implicitly {@link ProtobufClient.ClientSubscribeMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufClient.ClientSubscribeMessage
         * @static
         * @param {ProtobufClient.IClientSubscribeMessage} message ClientSubscribeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientSubscribeMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientSubscribeMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufClient.ClientSubscribeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufClient.ClientSubscribeMessage} ClientSubscribeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientSubscribeMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufClient.ClientSubscribeMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.subscriptionKeys && message.subscriptionKeys.length))
                        message.subscriptionKeys = [];
                    message.subscriptionKeys.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientSubscribeMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufClient.ClientSubscribeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufClient.ClientSubscribeMessage} ClientSubscribeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientSubscribeMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientSubscribeMessage message.
         * @function verify
         * @memberof ProtobufClient.ClientSubscribeMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientSubscribeMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subscriptionKeys != null && message.hasOwnProperty("subscriptionKeys")) {
                if (!Array.isArray(message.subscriptionKeys))
                    return "subscriptionKeys: array expected";
                for (var i = 0; i < message.subscriptionKeys.length; ++i)
                    if (!$util.isString(message.subscriptionKeys[i]))
                        return "subscriptionKeys: string[] expected";
            }
            return null;
        };

        /**
         * Creates a ClientSubscribeMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufClient.ClientSubscribeMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufClient.ClientSubscribeMessage} ClientSubscribeMessage
         */
        ClientSubscribeMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufClient.ClientSubscribeMessage)
                return object;
            var message = new $root.ProtobufClient.ClientSubscribeMessage();
            if (object.subscriptionKeys) {
                if (!Array.isArray(object.subscriptionKeys))
                    throw TypeError(".ProtobufClient.ClientSubscribeMessage.subscriptionKeys: array expected");
                message.subscriptionKeys = [];
                for (var i = 0; i < object.subscriptionKeys.length; ++i)
                    message.subscriptionKeys[i] = String(object.subscriptionKeys[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ClientSubscribeMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufClient.ClientSubscribeMessage
         * @static
         * @param {ProtobufClient.ClientSubscribeMessage} message ClientSubscribeMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientSubscribeMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.subscriptionKeys = [];
            if (message.subscriptionKeys && message.subscriptionKeys.length) {
                object.subscriptionKeys = [];
                for (var j = 0; j < message.subscriptionKeys.length; ++j)
                    object.subscriptionKeys[j] = message.subscriptionKeys[j];
            }
            return object;
        };

        /**
         * Converts this ClientSubscribeMessage to JSON.
         * @function toJSON
         * @memberof ProtobufClient.ClientSubscribeMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientSubscribeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClientSubscribeMessage;
    })();

    ProtobufClient.ClientUnsubscribeMessage = (function() {

        /**
         * Properties of a ClientUnsubscribeMessage.
         * @memberof ProtobufClient
         * @interface IClientUnsubscribeMessage
         * @property {Array.<string>|null} [subscriptionKeys] ClientUnsubscribeMessage subscriptionKeys
         */

        /**
         * Constructs a new ClientUnsubscribeMessage.
         * @memberof ProtobufClient
         * @classdesc Represents a ClientUnsubscribeMessage.
         * @implements IClientUnsubscribeMessage
         * @constructor
         * @param {ProtobufClient.IClientUnsubscribeMessage=} [properties] Properties to set
         */
        function ClientUnsubscribeMessage(properties) {
            this.subscriptionKeys = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientUnsubscribeMessage subscriptionKeys.
         * @member {Array.<string>} subscriptionKeys
         * @memberof ProtobufClient.ClientUnsubscribeMessage
         * @instance
         */
        ClientUnsubscribeMessage.prototype.subscriptionKeys = $util.emptyArray;

        /**
         * Creates a new ClientUnsubscribeMessage instance using the specified properties.
         * @function create
         * @memberof ProtobufClient.ClientUnsubscribeMessage
         * @static
         * @param {ProtobufClient.IClientUnsubscribeMessage=} [properties] Properties to set
         * @returns {ProtobufClient.ClientUnsubscribeMessage} ClientUnsubscribeMessage instance
         */
        ClientUnsubscribeMessage.create = function create(properties) {
            return new ClientUnsubscribeMessage(properties);
        };

        /**
         * Encodes the specified ClientUnsubscribeMessage message. Does not implicitly {@link ProtobufClient.ClientUnsubscribeMessage.verify|verify} messages.
         * @function encode
         * @memberof ProtobufClient.ClientUnsubscribeMessage
         * @static
         * @param {ProtobufClient.IClientUnsubscribeMessage} message ClientUnsubscribeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientUnsubscribeMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.subscriptionKeys != null && message.subscriptionKeys.length)
                for (var i = 0; i < message.subscriptionKeys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.subscriptionKeys[i]);
            return writer;
        };

        /**
         * Encodes the specified ClientUnsubscribeMessage message, length delimited. Does not implicitly {@link ProtobufClient.ClientUnsubscribeMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufClient.ClientUnsubscribeMessage
         * @static
         * @param {ProtobufClient.IClientUnsubscribeMessage} message ClientUnsubscribeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientUnsubscribeMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientUnsubscribeMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufClient.ClientUnsubscribeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufClient.ClientUnsubscribeMessage} ClientUnsubscribeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientUnsubscribeMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufClient.ClientUnsubscribeMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.subscriptionKeys && message.subscriptionKeys.length))
                        message.subscriptionKeys = [];
                    message.subscriptionKeys.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ClientUnsubscribeMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufClient.ClientUnsubscribeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufClient.ClientUnsubscribeMessage} ClientUnsubscribeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientUnsubscribeMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientUnsubscribeMessage message.
         * @function verify
         * @memberof ProtobufClient.ClientUnsubscribeMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientUnsubscribeMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.subscriptionKeys != null && message.hasOwnProperty("subscriptionKeys")) {
                if (!Array.isArray(message.subscriptionKeys))
                    return "subscriptionKeys: array expected";
                for (var i = 0; i < message.subscriptionKeys.length; ++i)
                    if (!$util.isString(message.subscriptionKeys[i]))
                        return "subscriptionKeys: string[] expected";
            }
            return null;
        };

        /**
         * Creates a ClientUnsubscribeMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufClient.ClientUnsubscribeMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufClient.ClientUnsubscribeMessage} ClientUnsubscribeMessage
         */
        ClientUnsubscribeMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufClient.ClientUnsubscribeMessage)
                return object;
            var message = new $root.ProtobufClient.ClientUnsubscribeMessage();
            if (object.subscriptionKeys) {
                if (!Array.isArray(object.subscriptionKeys))
                    throw TypeError(".ProtobufClient.ClientUnsubscribeMessage.subscriptionKeys: array expected");
                message.subscriptionKeys = [];
                for (var i = 0; i < object.subscriptionKeys.length; ++i)
                    message.subscriptionKeys[i] = String(object.subscriptionKeys[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ClientUnsubscribeMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufClient.ClientUnsubscribeMessage
         * @static
         * @param {ProtobufClient.ClientUnsubscribeMessage} message ClientUnsubscribeMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientUnsubscribeMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.subscriptionKeys = [];
            if (message.subscriptionKeys && message.subscriptionKeys.length) {
                object.subscriptionKeys = [];
                for (var j = 0; j < message.subscriptionKeys.length; ++j)
                    object.subscriptionKeys[j] = message.subscriptionKeys[j];
            }
            return object;
        };

        /**
         * Converts this ClientUnsubscribeMessage to JSON.
         * @function toJSON
         * @memberof ProtobufClient.ClientUnsubscribeMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientUnsubscribeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClientUnsubscribeMessage;
    })();

    return ProtobufClient;
})();

$root.ProtobufMarkets = (function() {

    /**
     * Namespace ProtobufMarkets.
     * @exports ProtobufMarkets
     * @namespace
     */
    var ProtobufMarkets = {};

    ProtobufMarkets.AssetUpdateMessage = (function() {

        /**
         * Properties of an AssetUpdateMessage.
         * @memberof ProtobufMarkets
         * @interface IAssetUpdateMessage
         * @property {number|null} [asset] AssetUpdateMessage asset
         * @property {ProtobufMarkets.IAssetUSDVolumeUpdate|null} [usdVolumeUpdate] AssetUpdateMessage usdVolumeUpdate
         */

        /**
         * Constructs a new AssetUpdateMessage.
         * @memberof ProtobufMarkets
         * @classdesc Represents an AssetUpdateMessage.
         * @implements IAssetUpdateMessage
         * @constructor
         * @param {ProtobufMarkets.IAssetUpdateMessage=} [properties] Properties to set
         */
        function AssetUpdateMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssetUpdateMessage asset.
         * @member {number} asset
         * @memberof ProtobufMarkets.AssetUpdateMessage
         * @instance
         */
        AssetUpdateMessage.prototype.asset = 0;

        /**
         * AssetUpdateMessage usdVolumeUpdate.
         * @member {ProtobufMarkets.IAssetUSDVolumeUpdate|null|undefined} usdVolumeUpdate
         * @memberof ProtobufMarkets.AssetUpdateMessage
         * @instance
         */
        AssetUpdateMessage.prototype.usdVolumeUpdate = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * AssetUpdateMessage Update.
         * @member {"usdVolumeUpdate"|undefined} Update
         * @memberof ProtobufMarkets.AssetUpdateMessage
         * @instance
         */
        Object.defineProperty(AssetUpdateMessage.prototype, "Update", {
            get: $util.oneOfGetter($oneOfFields = ["usdVolumeUpdate"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AssetUpdateMessage instance using the specified properties.
         * @function create
         * @memberof ProtobufMarkets.AssetUpdateMessage
         * @static
         * @param {ProtobufMarkets.IAssetUpdateMessage=} [properties] Properties to set
         * @returns {ProtobufMarkets.AssetUpdateMessage} AssetUpdateMessage instance
         */
        AssetUpdateMessage.create = function create(properties) {
            return new AssetUpdateMessage(properties);
        };

        /**
         * Encodes the specified AssetUpdateMessage message. Does not implicitly {@link ProtobufMarkets.AssetUpdateMessage.verify|verify} messages.
         * @function encode
         * @memberof ProtobufMarkets.AssetUpdateMessage
         * @static
         * @param {ProtobufMarkets.IAssetUpdateMessage} message AssetUpdateMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetUpdateMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.asset != null && message.hasOwnProperty("asset"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.asset);
            if (message.usdVolumeUpdate != null && message.hasOwnProperty("usdVolumeUpdate"))
                $root.ProtobufMarkets.AssetUSDVolumeUpdate.encode(message.usdVolumeUpdate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AssetUpdateMessage message, length delimited. Does not implicitly {@link ProtobufMarkets.AssetUpdateMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufMarkets.AssetUpdateMessage
         * @static
         * @param {ProtobufMarkets.IAssetUpdateMessage} message AssetUpdateMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetUpdateMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssetUpdateMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufMarkets.AssetUpdateMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufMarkets.AssetUpdateMessage} AssetUpdateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetUpdateMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.AssetUpdateMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.asset = reader.int32();
                    break;
                case 2:
                    message.usdVolumeUpdate = $root.ProtobufMarkets.AssetUSDVolumeUpdate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssetUpdateMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufMarkets.AssetUpdateMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufMarkets.AssetUpdateMessage} AssetUpdateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetUpdateMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssetUpdateMessage message.
         * @function verify
         * @memberof ProtobufMarkets.AssetUpdateMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssetUpdateMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.asset != null && message.hasOwnProperty("asset"))
                if (!$util.isInteger(message.asset))
                    return "asset: integer expected";
            if (message.usdVolumeUpdate != null && message.hasOwnProperty("usdVolumeUpdate")) {
                properties.Update = 1;
                {
                    var error = $root.ProtobufMarkets.AssetUSDVolumeUpdate.verify(message.usdVolumeUpdate);
                    if (error)
                        return "usdVolumeUpdate." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AssetUpdateMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufMarkets.AssetUpdateMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufMarkets.AssetUpdateMessage} AssetUpdateMessage
         */
        AssetUpdateMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufMarkets.AssetUpdateMessage)
                return object;
            var message = new $root.ProtobufMarkets.AssetUpdateMessage();
            if (object.asset != null)
                message.asset = object.asset | 0;
            if (object.usdVolumeUpdate != null) {
                if (typeof object.usdVolumeUpdate !== "object")
                    throw TypeError(".ProtobufMarkets.AssetUpdateMessage.usdVolumeUpdate: object expected");
                message.usdVolumeUpdate = $root.ProtobufMarkets.AssetUSDVolumeUpdate.fromObject(object.usdVolumeUpdate);
            }
            return message;
        };

        /**
         * Creates a plain object from an AssetUpdateMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufMarkets.AssetUpdateMessage
         * @static
         * @param {ProtobufMarkets.AssetUpdateMessage} message AssetUpdateMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssetUpdateMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.asset = 0;
            if (message.asset != null && message.hasOwnProperty("asset"))
                object.asset = message.asset;
            if (message.usdVolumeUpdate != null && message.hasOwnProperty("usdVolumeUpdate")) {
                object.usdVolumeUpdate = $root.ProtobufMarkets.AssetUSDVolumeUpdate.toObject(message.usdVolumeUpdate, options);
                if (options.oneofs)
                    object.Update = "usdVolumeUpdate";
            }
            return object;
        };

        /**
         * Converts this AssetUpdateMessage to JSON.
         * @function toJSON
         * @memberof ProtobufMarkets.AssetUpdateMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssetUpdateMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssetUpdateMessage;
    })();

    ProtobufMarkets.AssetUSDVolumeUpdate = (function() {

        /**
         * Properties of an AssetUSDVolumeUpdate.
         * @memberof ProtobufMarkets
         * @interface IAssetUSDVolumeUpdate
         * @property {string|null} [volume] AssetUSDVolumeUpdate volume
         */

        /**
         * Constructs a new AssetUSDVolumeUpdate.
         * @memberof ProtobufMarkets
         * @classdesc Represents an AssetUSDVolumeUpdate.
         * @implements IAssetUSDVolumeUpdate
         * @constructor
         * @param {ProtobufMarkets.IAssetUSDVolumeUpdate=} [properties] Properties to set
         */
        function AssetUSDVolumeUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssetUSDVolumeUpdate volume.
         * @member {string} volume
         * @memberof ProtobufMarkets.AssetUSDVolumeUpdate
         * @instance
         */
        AssetUSDVolumeUpdate.prototype.volume = "";

        /**
         * Creates a new AssetUSDVolumeUpdate instance using the specified properties.
         * @function create
         * @memberof ProtobufMarkets.AssetUSDVolumeUpdate
         * @static
         * @param {ProtobufMarkets.IAssetUSDVolumeUpdate=} [properties] Properties to set
         * @returns {ProtobufMarkets.AssetUSDVolumeUpdate} AssetUSDVolumeUpdate instance
         */
        AssetUSDVolumeUpdate.create = function create(properties) {
            return new AssetUSDVolumeUpdate(properties);
        };

        /**
         * Encodes the specified AssetUSDVolumeUpdate message. Does not implicitly {@link ProtobufMarkets.AssetUSDVolumeUpdate.verify|verify} messages.
         * @function encode
         * @memberof ProtobufMarkets.AssetUSDVolumeUpdate
         * @static
         * @param {ProtobufMarkets.IAssetUSDVolumeUpdate} message AssetUSDVolumeUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetUSDVolumeUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.volume != null && message.hasOwnProperty("volume"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.volume);
            return writer;
        };

        /**
         * Encodes the specified AssetUSDVolumeUpdate message, length delimited. Does not implicitly {@link ProtobufMarkets.AssetUSDVolumeUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufMarkets.AssetUSDVolumeUpdate
         * @static
         * @param {ProtobufMarkets.IAssetUSDVolumeUpdate} message AssetUSDVolumeUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetUSDVolumeUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssetUSDVolumeUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufMarkets.AssetUSDVolumeUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufMarkets.AssetUSDVolumeUpdate} AssetUSDVolumeUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetUSDVolumeUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.AssetUSDVolumeUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.volume = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssetUSDVolumeUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufMarkets.AssetUSDVolumeUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufMarkets.AssetUSDVolumeUpdate} AssetUSDVolumeUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetUSDVolumeUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssetUSDVolumeUpdate message.
         * @function verify
         * @memberof ProtobufMarkets.AssetUSDVolumeUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssetUSDVolumeUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.volume != null && message.hasOwnProperty("volume"))
                if (!$util.isString(message.volume))
                    return "volume: string expected";
            return null;
        };

        /**
         * Creates an AssetUSDVolumeUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufMarkets.AssetUSDVolumeUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufMarkets.AssetUSDVolumeUpdate} AssetUSDVolumeUpdate
         */
        AssetUSDVolumeUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufMarkets.AssetUSDVolumeUpdate)
                return object;
            var message = new $root.ProtobufMarkets.AssetUSDVolumeUpdate();
            if (object.volume != null)
                message.volume = String(object.volume);
            return message;
        };

        /**
         * Creates a plain object from an AssetUSDVolumeUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufMarkets.AssetUSDVolumeUpdate
         * @static
         * @param {ProtobufMarkets.AssetUSDVolumeUpdate} message AssetUSDVolumeUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssetUSDVolumeUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.volume = "";
            if (message.volume != null && message.hasOwnProperty("volume"))
                object.volume = message.volume;
            return object;
        };

        /**
         * Converts this AssetUSDVolumeUpdate to JSON.
         * @function toJSON
         * @memberof ProtobufMarkets.AssetUSDVolumeUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssetUSDVolumeUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssetUSDVolumeUpdate;
    })();

    ProtobufMarkets.Market = (function() {

        /**
         * Properties of a Market.
         * @memberof ProtobufMarkets
         * @interface IMarket
         * @property {number|Long|null} [exchangeId] Market exchangeId
         * @property {number|Long|null} [currencyPairId] Market currencyPairId
         * @property {number|Long|null} [marketId] Market marketId
         * @property {string|null} [exchange] Market exchange
         * @property {string|null} [currencyPair] Market currencyPair
         */

        /**
         * Constructs a new Market.
         * @memberof ProtobufMarkets
         * @classdesc Represents a Market.
         * @implements IMarket
         * @constructor
         * @param {ProtobufMarkets.IMarket=} [properties] Properties to set
         */
        function Market(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Market exchangeId.
         * @member {number|Long} exchangeId
         * @memberof ProtobufMarkets.Market
         * @instance
         */
        Market.prototype.exchangeId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Market currencyPairId.
         * @member {number|Long} currencyPairId
         * @memberof ProtobufMarkets.Market
         * @instance
         */
        Market.prototype.currencyPairId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Market marketId.
         * @member {number|Long} marketId
         * @memberof ProtobufMarkets.Market
         * @instance
         */
        Market.prototype.marketId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Market exchange.
         * @member {string} exchange
         * @memberof ProtobufMarkets.Market
         * @instance
         */
        Market.prototype.exchange = "";

        /**
         * Market currencyPair.
         * @member {string} currencyPair
         * @memberof ProtobufMarkets.Market
         * @instance
         */
        Market.prototype.currencyPair = "";

        /**
         * Creates a new Market instance using the specified properties.
         * @function create
         * @memberof ProtobufMarkets.Market
         * @static
         * @param {ProtobufMarkets.IMarket=} [properties] Properties to set
         * @returns {ProtobufMarkets.Market} Market instance
         */
        Market.create = function create(properties) {
            return new Market(properties);
        };

        /**
         * Encodes the specified Market message. Does not implicitly {@link ProtobufMarkets.Market.verify|verify} messages.
         * @function encode
         * @memberof ProtobufMarkets.Market
         * @static
         * @param {ProtobufMarkets.IMarket} message Market message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Market.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.exchange != null && message.hasOwnProperty("exchange"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.exchange);
            if (message.currencyPair != null && message.hasOwnProperty("currencyPair"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.currencyPair);
            if (message.exchangeId != null && message.hasOwnProperty("exchangeId"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.exchangeId);
            if (message.currencyPairId != null && message.hasOwnProperty("currencyPairId"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.currencyPairId);
            if (message.marketId != null && message.hasOwnProperty("marketId"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.marketId);
            return writer;
        };

        /**
         * Encodes the specified Market message, length delimited. Does not implicitly {@link ProtobufMarkets.Market.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufMarkets.Market
         * @static
         * @param {ProtobufMarkets.IMarket} message Market message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Market.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Market message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufMarkets.Market
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufMarkets.Market} Market
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Market.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.Market();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3:
                    message.exchangeId = reader.uint64();
                    break;
                case 4:
                    message.currencyPairId = reader.uint64();
                    break;
                case 5:
                    message.marketId = reader.uint64();
                    break;
                case 1:
                    message.exchange = reader.string();
                    break;
                case 2:
                    message.currencyPair = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Market message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufMarkets.Market
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufMarkets.Market} Market
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Market.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Market message.
         * @function verify
         * @memberof ProtobufMarkets.Market
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Market.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.exchangeId != null && message.hasOwnProperty("exchangeId"))
                if (!$util.isInteger(message.exchangeId) && !(message.exchangeId && $util.isInteger(message.exchangeId.low) && $util.isInteger(message.exchangeId.high)))
                    return "exchangeId: integer|Long expected";
            if (message.currencyPairId != null && message.hasOwnProperty("currencyPairId"))
                if (!$util.isInteger(message.currencyPairId) && !(message.currencyPairId && $util.isInteger(message.currencyPairId.low) && $util.isInteger(message.currencyPairId.high)))
                    return "currencyPairId: integer|Long expected";
            if (message.marketId != null && message.hasOwnProperty("marketId"))
                if (!$util.isInteger(message.marketId) && !(message.marketId && $util.isInteger(message.marketId.low) && $util.isInteger(message.marketId.high)))
                    return "marketId: integer|Long expected";
            if (message.exchange != null && message.hasOwnProperty("exchange"))
                if (!$util.isString(message.exchange))
                    return "exchange: string expected";
            if (message.currencyPair != null && message.hasOwnProperty("currencyPair"))
                if (!$util.isString(message.currencyPair))
                    return "currencyPair: string expected";
            return null;
        };

        /**
         * Creates a Market message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufMarkets.Market
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufMarkets.Market} Market
         */
        Market.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufMarkets.Market)
                return object;
            var message = new $root.ProtobufMarkets.Market();
            if (object.exchangeId != null)
                if ($util.Long)
                    (message.exchangeId = $util.Long.fromValue(object.exchangeId)).unsigned = true;
                else if (typeof object.exchangeId === "string")
                    message.exchangeId = parseInt(object.exchangeId, 10);
                else if (typeof object.exchangeId === "number")
                    message.exchangeId = object.exchangeId;
                else if (typeof object.exchangeId === "object")
                    message.exchangeId = new $util.LongBits(object.exchangeId.low >>> 0, object.exchangeId.high >>> 0).toNumber(true);
            if (object.currencyPairId != null)
                if ($util.Long)
                    (message.currencyPairId = $util.Long.fromValue(object.currencyPairId)).unsigned = true;
                else if (typeof object.currencyPairId === "string")
                    message.currencyPairId = parseInt(object.currencyPairId, 10);
                else if (typeof object.currencyPairId === "number")
                    message.currencyPairId = object.currencyPairId;
                else if (typeof object.currencyPairId === "object")
                    message.currencyPairId = new $util.LongBits(object.currencyPairId.low >>> 0, object.currencyPairId.high >>> 0).toNumber(true);
            if (object.marketId != null)
                if ($util.Long)
                    (message.marketId = $util.Long.fromValue(object.marketId)).unsigned = true;
                else if (typeof object.marketId === "string")
                    message.marketId = parseInt(object.marketId, 10);
                else if (typeof object.marketId === "number")
                    message.marketId = object.marketId;
                else if (typeof object.marketId === "object")
                    message.marketId = new $util.LongBits(object.marketId.low >>> 0, object.marketId.high >>> 0).toNumber(true);
            if (object.exchange != null)
                message.exchange = String(object.exchange);
            if (object.currencyPair != null)
                message.currencyPair = String(object.currencyPair);
            return message;
        };

        /**
         * Creates a plain object from a Market message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufMarkets.Market
         * @static
         * @param {ProtobufMarkets.Market} message Market
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Market.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.exchange = "";
                object.currencyPair = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.exchangeId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.exchangeId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.currencyPairId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.currencyPairId = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.marketId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.marketId = options.longs === String ? "0" : 0;
            }
            if (message.exchange != null && message.hasOwnProperty("exchange"))
                object.exchange = message.exchange;
            if (message.currencyPair != null && message.hasOwnProperty("currencyPair"))
                object.currencyPair = message.currencyPair;
            if (message.exchangeId != null && message.hasOwnProperty("exchangeId"))
                if (typeof message.exchangeId === "number")
                    object.exchangeId = options.longs === String ? String(message.exchangeId) : message.exchangeId;
                else
                    object.exchangeId = options.longs === String ? $util.Long.prototype.toString.call(message.exchangeId) : options.longs === Number ? new $util.LongBits(message.exchangeId.low >>> 0, message.exchangeId.high >>> 0).toNumber(true) : message.exchangeId;
            if (message.currencyPairId != null && message.hasOwnProperty("currencyPairId"))
                if (typeof message.currencyPairId === "number")
                    object.currencyPairId = options.longs === String ? String(message.currencyPairId) : message.currencyPairId;
                else
                    object.currencyPairId = options.longs === String ? $util.Long.prototype.toString.call(message.currencyPairId) : options.longs === Number ? new $util.LongBits(message.currencyPairId.low >>> 0, message.currencyPairId.high >>> 0).toNumber(true) : message.currencyPairId;
            if (message.marketId != null && message.hasOwnProperty("marketId"))
                if (typeof message.marketId === "number")
                    object.marketId = options.longs === String ? String(message.marketId) : message.marketId;
                else
                    object.marketId = options.longs === String ? $util.Long.prototype.toString.call(message.marketId) : options.longs === Number ? new $util.LongBits(message.marketId.low >>> 0, message.marketId.high >>> 0).toNumber(true) : message.marketId;
            return object;
        };

        /**
         * Converts this Market to JSON.
         * @function toJSON
         * @memberof ProtobufMarkets.Market
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Market.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Market;
    })();

    ProtobufMarkets.Order = (function() {

        /**
         * Properties of an Order.
         * @memberof ProtobufMarkets
         * @interface IOrder
         * @property {string|null} [priceStr] Order priceStr
         * @property {string|null} [amountStr] Order amountStr
         * @property {number|null} [price] Order price
         * @property {number|null} [amount] Order amount
         */

        /**
         * Constructs a new Order.
         * @memberof ProtobufMarkets
         * @classdesc Represents an Order.
         * @implements IOrder
         * @constructor
         * @param {ProtobufMarkets.IOrder=} [properties] Properties to set
         */
        function Order(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Order priceStr.
         * @member {string} priceStr
         * @memberof ProtobufMarkets.Order
         * @instance
         */
        Order.prototype.priceStr = "";

        /**
         * Order amountStr.
         * @member {string} amountStr
         * @memberof ProtobufMarkets.Order
         * @instance
         */
        Order.prototype.amountStr = "";

        /**
         * Order price.
         * @member {number} price
         * @memberof ProtobufMarkets.Order
         * @instance
         */
        Order.prototype.price = 0;

        /**
         * Order amount.
         * @member {number} amount
         * @memberof ProtobufMarkets.Order
         * @instance
         */
        Order.prototype.amount = 0;

        /**
         * Creates a new Order instance using the specified properties.
         * @function create
         * @memberof ProtobufMarkets.Order
         * @static
         * @param {ProtobufMarkets.IOrder=} [properties] Properties to set
         * @returns {ProtobufMarkets.Order} Order instance
         */
        Order.create = function create(properties) {
            return new Order(properties);
        };

        /**
         * Encodes the specified Order message. Does not implicitly {@link ProtobufMarkets.Order.verify|verify} messages.
         * @function encode
         * @memberof ProtobufMarkets.Order
         * @static
         * @param {ProtobufMarkets.IOrder} message Order message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Order.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.price != null && message.hasOwnProperty("price"))
                writer.uint32(/* id 1, wireType 5 =*/13).float(message.price);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.amount);
            if (message.priceStr != null && message.hasOwnProperty("priceStr"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.priceStr);
            if (message.amountStr != null && message.hasOwnProperty("amountStr"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.amountStr);
            return writer;
        };

        /**
         * Encodes the specified Order message, length delimited. Does not implicitly {@link ProtobufMarkets.Order.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufMarkets.Order
         * @static
         * @param {ProtobufMarkets.IOrder} message Order message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Order.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Order message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufMarkets.Order
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufMarkets.Order} Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Order.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.Order();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3:
                    message.priceStr = reader.string();
                    break;
                case 4:
                    message.amountStr = reader.string();
                    break;
                case 1:
                    message.price = reader.float();
                    break;
                case 2:
                    message.amount = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Order message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufMarkets.Order
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufMarkets.Order} Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Order.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Order message.
         * @function verify
         * @memberof ProtobufMarkets.Order
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Order.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.priceStr != null && message.hasOwnProperty("priceStr"))
                if (!$util.isString(message.priceStr))
                    return "priceStr: string expected";
            if (message.amountStr != null && message.hasOwnProperty("amountStr"))
                if (!$util.isString(message.amountStr))
                    return "amountStr: string expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price !== "number")
                    return "price: number expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            return null;
        };

        /**
         * Creates an Order message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufMarkets.Order
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufMarkets.Order} Order
         */
        Order.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufMarkets.Order)
                return object;
            var message = new $root.ProtobufMarkets.Order();
            if (object.priceStr != null)
                message.priceStr = String(object.priceStr);
            if (object.amountStr != null)
                message.amountStr = String(object.amountStr);
            if (object.price != null)
                message.price = Number(object.price);
            if (object.amount != null)
                message.amount = Number(object.amount);
            return message;
        };

        /**
         * Creates a plain object from an Order message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufMarkets.Order
         * @static
         * @param {ProtobufMarkets.Order} message Order
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Order.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.price = 0;
                object.amount = 0;
                object.priceStr = "";
                object.amountStr = "";
            }
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = options.json && !isFinite(message.price) ? String(message.price) : message.price;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            if (message.priceStr != null && message.hasOwnProperty("priceStr"))
                object.priceStr = message.priceStr;
            if (message.amountStr != null && message.hasOwnProperty("amountStr"))
                object.amountStr = message.amountStr;
            return object;
        };

        /**
         * Converts this Order to JSON.
         * @function toJSON
         * @memberof ProtobufMarkets.Order
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Order.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Order;
    })();

    ProtobufMarkets.Trade = (function() {

        /**
         * Properties of a Trade.
         * @memberof ProtobufMarkets
         * @interface ITrade
         * @property {string|null} [externalId] Trade externalId
         * @property {number|Long|null} [timestamp] Trade timestamp
         * @property {number|Long|null} [timestampMillis] Trade timestampMillis
         * @property {number|Long|null} [timestampNano] Trade timestampNano
         * @property {string|null} [priceStr] Trade priceStr
         * @property {string|null} [amountStr] Trade amountStr
         * @property {number|null} [price] Trade price
         * @property {number|null} [amount] Trade amount
         * @property {number|null} [priceDouble] Trade priceDouble
         * @property {number|null} [amountDouble] Trade amountDouble
         * @property {number|Long|null} [id] Trade id
         */

        /**
         * Constructs a new Trade.
         * @memberof ProtobufMarkets
         * @classdesc Represents a Trade.
         * @implements ITrade
         * @constructor
         * @param {ProtobufMarkets.ITrade=} [properties] Properties to set
         */
        function Trade(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Trade externalId.
         * @member {string} externalId
         * @memberof ProtobufMarkets.Trade
         * @instance
         */
        Trade.prototype.externalId = "";

        /**
         * Trade timestamp.
         * @member {number|Long} timestamp
         * @memberof ProtobufMarkets.Trade
         * @instance
         */
        Trade.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Trade timestampMillis.
         * @member {number|Long} timestampMillis
         * @memberof ProtobufMarkets.Trade
         * @instance
         */
        Trade.prototype.timestampMillis = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Trade timestampNano.
         * @member {number|Long} timestampNano
         * @memberof ProtobufMarkets.Trade
         * @instance
         */
        Trade.prototype.timestampNano = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Trade priceStr.
         * @member {string} priceStr
         * @memberof ProtobufMarkets.Trade
         * @instance
         */
        Trade.prototype.priceStr = "";

        /**
         * Trade amountStr.
         * @member {string} amountStr
         * @memberof ProtobufMarkets.Trade
         * @instance
         */
        Trade.prototype.amountStr = "";

        /**
         * Trade price.
         * @member {number} price
         * @memberof ProtobufMarkets.Trade
         * @instance
         */
        Trade.prototype.price = 0;

        /**
         * Trade amount.
         * @member {number} amount
         * @memberof ProtobufMarkets.Trade
         * @instance
         */
        Trade.prototype.amount = 0;

        /**
         * Trade priceDouble.
         * @member {number} priceDouble
         * @memberof ProtobufMarkets.Trade
         * @instance
         */
        Trade.prototype.priceDouble = 0;

        /**
         * Trade amountDouble.
         * @member {number} amountDouble
         * @memberof ProtobufMarkets.Trade
         * @instance
         */
        Trade.prototype.amountDouble = 0;

        /**
         * Trade id.
         * @member {number|Long} id
         * @memberof ProtobufMarkets.Trade
         * @instance
         */
        Trade.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Trade instance using the specified properties.
         * @function create
         * @memberof ProtobufMarkets.Trade
         * @static
         * @param {ProtobufMarkets.ITrade=} [properties] Properties to set
         * @returns {ProtobufMarkets.Trade} Trade instance
         */
        Trade.create = function create(properties) {
            return new Trade(properties);
        };

        /**
         * Encodes the specified Trade message. Does not implicitly {@link ProtobufMarkets.Trade.verify|verify} messages.
         * @function encode
         * @memberof ProtobufMarkets.Trade
         * @static
         * @param {ProtobufMarkets.ITrade} message Trade message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Trade.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.timestamp);
            if (message.price != null && message.hasOwnProperty("price"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.price);
            if (message.amount != null && message.hasOwnProperty("amount"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.amount);
            if (message.timestampMillis != null && message.hasOwnProperty("timestampMillis"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestampMillis);
            if (message.priceDouble != null && message.hasOwnProperty("priceDouble"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.priceDouble);
            if (message.amountDouble != null && message.hasOwnProperty("amountDouble"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.amountDouble);
            if (message.priceStr != null && message.hasOwnProperty("priceStr"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.priceStr);
            if (message.amountStr != null && message.hasOwnProperty("amountStr"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.amountStr);
            if (message.timestampNano != null && message.hasOwnProperty("timestampNano"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.timestampNano);
            if (message.externalId != null && message.hasOwnProperty("externalId"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.externalId);
            return writer;
        };

        /**
         * Encodes the specified Trade message, length delimited. Does not implicitly {@link ProtobufMarkets.Trade.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufMarkets.Trade
         * @static
         * @param {ProtobufMarkets.ITrade} message Trade message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Trade.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Trade message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufMarkets.Trade
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufMarkets.Trade} Trade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Trade.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.Trade();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 11:
                    message.externalId = reader.string();
                    break;
                case 2:
                    message.timestamp = reader.int64();
                    break;
                case 5:
                    message.timestampMillis = reader.int64();
                    break;
                case 10:
                    message.timestampNano = reader.int64();
                    break;
                case 8:
                    message.priceStr = reader.string();
                    break;
                case 9:
                    message.amountStr = reader.string();
                    break;
                case 3:
                    message.price = reader.float();
                    break;
                case 4:
                    message.amount = reader.float();
                    break;
                case 6:
                    message.priceDouble = reader.double();
                    break;
                case 7:
                    message.amountDouble = reader.double();
                    break;
                case 1:
                    message.id = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Trade message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufMarkets.Trade
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufMarkets.Trade} Trade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Trade.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Trade message.
         * @function verify
         * @memberof ProtobufMarkets.Trade
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Trade.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.externalId != null && message.hasOwnProperty("externalId"))
                if (!$util.isString(message.externalId))
                    return "externalId: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.timestampMillis != null && message.hasOwnProperty("timestampMillis"))
                if (!$util.isInteger(message.timestampMillis) && !(message.timestampMillis && $util.isInteger(message.timestampMillis.low) && $util.isInteger(message.timestampMillis.high)))
                    return "timestampMillis: integer|Long expected";
            if (message.timestampNano != null && message.hasOwnProperty("timestampNano"))
                if (!$util.isInteger(message.timestampNano) && !(message.timestampNano && $util.isInteger(message.timestampNano.low) && $util.isInteger(message.timestampNano.high)))
                    return "timestampNano: integer|Long expected";
            if (message.priceStr != null && message.hasOwnProperty("priceStr"))
                if (!$util.isString(message.priceStr))
                    return "priceStr: string expected";
            if (message.amountStr != null && message.hasOwnProperty("amountStr"))
                if (!$util.isString(message.amountStr))
                    return "amountStr: string expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price !== "number")
                    return "price: number expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            if (message.priceDouble != null && message.hasOwnProperty("priceDouble"))
                if (typeof message.priceDouble !== "number")
                    return "priceDouble: number expected";
            if (message.amountDouble != null && message.hasOwnProperty("amountDouble"))
                if (typeof message.amountDouble !== "number")
                    return "amountDouble: number expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                    return "id: integer|Long expected";
            return null;
        };

        /**
         * Creates a Trade message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufMarkets.Trade
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufMarkets.Trade} Trade
         */
        Trade.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufMarkets.Trade)
                return object;
            var message = new $root.ProtobufMarkets.Trade();
            if (object.externalId != null)
                message.externalId = String(object.externalId);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.timestampMillis != null)
                if ($util.Long)
                    (message.timestampMillis = $util.Long.fromValue(object.timestampMillis)).unsigned = false;
                else if (typeof object.timestampMillis === "string")
                    message.timestampMillis = parseInt(object.timestampMillis, 10);
                else if (typeof object.timestampMillis === "number")
                    message.timestampMillis = object.timestampMillis;
                else if (typeof object.timestampMillis === "object")
                    message.timestampMillis = new $util.LongBits(object.timestampMillis.low >>> 0, object.timestampMillis.high >>> 0).toNumber();
            if (object.timestampNano != null)
                if ($util.Long)
                    (message.timestampNano = $util.Long.fromValue(object.timestampNano)).unsigned = false;
                else if (typeof object.timestampNano === "string")
                    message.timestampNano = parseInt(object.timestampNano, 10);
                else if (typeof object.timestampNano === "number")
                    message.timestampNano = object.timestampNano;
                else if (typeof object.timestampNano === "object")
                    message.timestampNano = new $util.LongBits(object.timestampNano.low >>> 0, object.timestampNano.high >>> 0).toNumber();
            if (object.priceStr != null)
                message.priceStr = String(object.priceStr);
            if (object.amountStr != null)
                message.amountStr = String(object.amountStr);
            if (object.price != null)
                message.price = Number(object.price);
            if (object.amount != null)
                message.amount = Number(object.amount);
            if (object.priceDouble != null)
                message.priceDouble = Number(object.priceDouble);
            if (object.amountDouble != null)
                message.amountDouble = Number(object.amountDouble);
            if (object.id != null)
                if ($util.Long)
                    (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                else if (typeof object.id === "string")
                    message.id = parseInt(object.id, 10);
                else if (typeof object.id === "number")
                    message.id = object.id;
                else if (typeof object.id === "object")
                    message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Trade message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufMarkets.Trade
         * @static
         * @param {ProtobufMarkets.Trade} message Trade
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Trade.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.id = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.price = 0;
                object.amount = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestampMillis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestampMillis = options.longs === String ? "0" : 0;
                object.priceDouble = 0;
                object.amountDouble = 0;
                object.priceStr = "";
                object.amountStr = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestampNano = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestampNano = options.longs === String ? "0" : 0;
                object.externalId = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (typeof message.id === "number")
                    object.id = options.longs === String ? String(message.id) : message.id;
                else
                    object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = options.json && !isFinite(message.price) ? String(message.price) : message.price;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            if (message.timestampMillis != null && message.hasOwnProperty("timestampMillis"))
                if (typeof message.timestampMillis === "number")
                    object.timestampMillis = options.longs === String ? String(message.timestampMillis) : message.timestampMillis;
                else
                    object.timestampMillis = options.longs === String ? $util.Long.prototype.toString.call(message.timestampMillis) : options.longs === Number ? new $util.LongBits(message.timestampMillis.low >>> 0, message.timestampMillis.high >>> 0).toNumber() : message.timestampMillis;
            if (message.priceDouble != null && message.hasOwnProperty("priceDouble"))
                object.priceDouble = options.json && !isFinite(message.priceDouble) ? String(message.priceDouble) : message.priceDouble;
            if (message.amountDouble != null && message.hasOwnProperty("amountDouble"))
                object.amountDouble = options.json && !isFinite(message.amountDouble) ? String(message.amountDouble) : message.amountDouble;
            if (message.priceStr != null && message.hasOwnProperty("priceStr"))
                object.priceStr = message.priceStr;
            if (message.amountStr != null && message.hasOwnProperty("amountStr"))
                object.amountStr = message.amountStr;
            if (message.timestampNano != null && message.hasOwnProperty("timestampNano"))
                if (typeof message.timestampNano === "number")
                    object.timestampNano = options.longs === String ? String(message.timestampNano) : message.timestampNano;
                else
                    object.timestampNano = options.longs === String ? $util.Long.prototype.toString.call(message.timestampNano) : options.longs === Number ? new $util.LongBits(message.timestampNano.low >>> 0, message.timestampNano.high >>> 0).toNumber() : message.timestampNano;
            if (message.externalId != null && message.hasOwnProperty("externalId"))
                object.externalId = message.externalId;
            return object;
        };

        /**
         * Converts this Trade to JSON.
         * @function toJSON
         * @memberof ProtobufMarkets.Trade
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Trade.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Trade;
    })();

    ProtobufMarkets.MarketUpdateMessage = (function() {

        /**
         * Properties of a MarketUpdateMessage.
         * @memberof ProtobufMarkets
         * @interface IMarketUpdateMessage
         * @property {ProtobufMarkets.IMarket|null} [market] MarketUpdateMessage market
         * @property {ProtobufMarkets.IOrderBookUpdate|null} [orderBookUpdate] MarketUpdateMessage orderBookUpdate
         * @property {ProtobufMarkets.IOrderBookDeltaUpdate|null} [orderBookDeltaUpdate] MarketUpdateMessage orderBookDeltaUpdate
         * @property {ProtobufMarkets.IOrderBookSpreadUpdate|null} [orderBookSpreadUpdate] MarketUpdateMessage orderBookSpreadUpdate
         * @property {ProtobufMarkets.ITradesUpdate|null} [tradesUpdate] MarketUpdateMessage tradesUpdate
         * @property {ProtobufMarkets.IIntervalsUpdate|null} [intervalsUpdate] MarketUpdateMessage intervalsUpdate
         * @property {ProtobufMarkets.ISummaryUpdate|null} [summaryUpdate] MarketUpdateMessage summaryUpdate
         * @property {ProtobufMarkets.ISparklineUpdate|null} [sparklineUpdate] MarketUpdateMessage sparklineUpdate
         */

        /**
         * Constructs a new MarketUpdateMessage.
         * @memberof ProtobufMarkets
         * @classdesc Represents a MarketUpdateMessage.
         * @implements IMarketUpdateMessage
         * @constructor
         * @param {ProtobufMarkets.IMarketUpdateMessage=} [properties] Properties to set
         */
        function MarketUpdateMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MarketUpdateMessage market.
         * @member {ProtobufMarkets.IMarket|null|undefined} market
         * @memberof ProtobufMarkets.MarketUpdateMessage
         * @instance
         */
        MarketUpdateMessage.prototype.market = null;

        /**
         * MarketUpdateMessage orderBookUpdate.
         * @member {ProtobufMarkets.IOrderBookUpdate|null|undefined} orderBookUpdate
         * @memberof ProtobufMarkets.MarketUpdateMessage
         * @instance
         */
        MarketUpdateMessage.prototype.orderBookUpdate = null;

        /**
         * MarketUpdateMessage orderBookDeltaUpdate.
         * @member {ProtobufMarkets.IOrderBookDeltaUpdate|null|undefined} orderBookDeltaUpdate
         * @memberof ProtobufMarkets.MarketUpdateMessage
         * @instance
         */
        MarketUpdateMessage.prototype.orderBookDeltaUpdate = null;

        /**
         * MarketUpdateMessage orderBookSpreadUpdate.
         * @member {ProtobufMarkets.IOrderBookSpreadUpdate|null|undefined} orderBookSpreadUpdate
         * @memberof ProtobufMarkets.MarketUpdateMessage
         * @instance
         */
        MarketUpdateMessage.prototype.orderBookSpreadUpdate = null;

        /**
         * MarketUpdateMessage tradesUpdate.
         * @member {ProtobufMarkets.ITradesUpdate|null|undefined} tradesUpdate
         * @memberof ProtobufMarkets.MarketUpdateMessage
         * @instance
         */
        MarketUpdateMessage.prototype.tradesUpdate = null;

        /**
         * MarketUpdateMessage intervalsUpdate.
         * @member {ProtobufMarkets.IIntervalsUpdate|null|undefined} intervalsUpdate
         * @memberof ProtobufMarkets.MarketUpdateMessage
         * @instance
         */
        MarketUpdateMessage.prototype.intervalsUpdate = null;

        /**
         * MarketUpdateMessage summaryUpdate.
         * @member {ProtobufMarkets.ISummaryUpdate|null|undefined} summaryUpdate
         * @memberof ProtobufMarkets.MarketUpdateMessage
         * @instance
         */
        MarketUpdateMessage.prototype.summaryUpdate = null;

        /**
         * MarketUpdateMessage sparklineUpdate.
         * @member {ProtobufMarkets.ISparklineUpdate|null|undefined} sparklineUpdate
         * @memberof ProtobufMarkets.MarketUpdateMessage
         * @instance
         */
        MarketUpdateMessage.prototype.sparklineUpdate = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * MarketUpdateMessage Update.
         * @member {"orderBookUpdate"|"orderBookDeltaUpdate"|"orderBookSpreadUpdate"|"tradesUpdate"|"intervalsUpdate"|"summaryUpdate"|"sparklineUpdate"|undefined} Update
         * @memberof ProtobufMarkets.MarketUpdateMessage
         * @instance
         */
        Object.defineProperty(MarketUpdateMessage.prototype, "Update", {
            get: $util.oneOfGetter($oneOfFields = ["orderBookUpdate", "orderBookDeltaUpdate", "orderBookSpreadUpdate", "tradesUpdate", "intervalsUpdate", "summaryUpdate", "sparklineUpdate"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new MarketUpdateMessage instance using the specified properties.
         * @function create
         * @memberof ProtobufMarkets.MarketUpdateMessage
         * @static
         * @param {ProtobufMarkets.IMarketUpdateMessage=} [properties] Properties to set
         * @returns {ProtobufMarkets.MarketUpdateMessage} MarketUpdateMessage instance
         */
        MarketUpdateMessage.create = function create(properties) {
            return new MarketUpdateMessage(properties);
        };

        /**
         * Encodes the specified MarketUpdateMessage message. Does not implicitly {@link ProtobufMarkets.MarketUpdateMessage.verify|verify} messages.
         * @function encode
         * @memberof ProtobufMarkets.MarketUpdateMessage
         * @static
         * @param {ProtobufMarkets.IMarketUpdateMessage} message MarketUpdateMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MarketUpdateMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.orderBookUpdate != null && message.hasOwnProperty("orderBookUpdate"))
                $root.ProtobufMarkets.OrderBookUpdate.encode(message.orderBookUpdate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.orderBookDeltaUpdate != null && message.hasOwnProperty("orderBookDeltaUpdate"))
                $root.ProtobufMarkets.OrderBookDeltaUpdate.encode(message.orderBookDeltaUpdate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.tradesUpdate != null && message.hasOwnProperty("tradesUpdate"))
                $root.ProtobufMarkets.TradesUpdate.encode(message.tradesUpdate, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.intervalsUpdate != null && message.hasOwnProperty("intervalsUpdate"))
                $root.ProtobufMarkets.IntervalsUpdate.encode(message.intervalsUpdate, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.summaryUpdate != null && message.hasOwnProperty("summaryUpdate"))
                $root.ProtobufMarkets.SummaryUpdate.encode(message.summaryUpdate, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.sparklineUpdate != null && message.hasOwnProperty("sparklineUpdate"))
                $root.ProtobufMarkets.SparklineUpdate.encode(message.sparklineUpdate, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.market != null && message.hasOwnProperty("market"))
                $root.ProtobufMarkets.Market.encode(message.market, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.orderBookSpreadUpdate != null && message.hasOwnProperty("orderBookSpreadUpdate"))
                $root.ProtobufMarkets.OrderBookSpreadUpdate.encode(message.orderBookSpreadUpdate, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MarketUpdateMessage message, length delimited. Does not implicitly {@link ProtobufMarkets.MarketUpdateMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufMarkets.MarketUpdateMessage
         * @static
         * @param {ProtobufMarkets.IMarketUpdateMessage} message MarketUpdateMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MarketUpdateMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MarketUpdateMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufMarkets.MarketUpdateMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufMarkets.MarketUpdateMessage} MarketUpdateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MarketUpdateMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.MarketUpdateMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 9:
                    message.market = $root.ProtobufMarkets.Market.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.orderBookUpdate = $root.ProtobufMarkets.OrderBookUpdate.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.orderBookDeltaUpdate = $root.ProtobufMarkets.OrderBookDeltaUpdate.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.orderBookSpreadUpdate = $root.ProtobufMarkets.OrderBookSpreadUpdate.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.tradesUpdate = $root.ProtobufMarkets.TradesUpdate.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.intervalsUpdate = $root.ProtobufMarkets.IntervalsUpdate.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.summaryUpdate = $root.ProtobufMarkets.SummaryUpdate.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.sparklineUpdate = $root.ProtobufMarkets.SparklineUpdate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MarketUpdateMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufMarkets.MarketUpdateMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufMarkets.MarketUpdateMessage} MarketUpdateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MarketUpdateMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MarketUpdateMessage message.
         * @function verify
         * @memberof ProtobufMarkets.MarketUpdateMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MarketUpdateMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.market != null && message.hasOwnProperty("market")) {
                var error = $root.ProtobufMarkets.Market.verify(message.market);
                if (error)
                    return "market." + error;
            }
            if (message.orderBookUpdate != null && message.hasOwnProperty("orderBookUpdate")) {
                properties.Update = 1;
                {
                    var error = $root.ProtobufMarkets.OrderBookUpdate.verify(message.orderBookUpdate);
                    if (error)
                        return "orderBookUpdate." + error;
                }
            }
            if (message.orderBookDeltaUpdate != null && message.hasOwnProperty("orderBookDeltaUpdate")) {
                if (properties.Update === 1)
                    return "Update: multiple values";
                properties.Update = 1;
                {
                    var error = $root.ProtobufMarkets.OrderBookDeltaUpdate.verify(message.orderBookDeltaUpdate);
                    if (error)
                        return "orderBookDeltaUpdate." + error;
                }
            }
            if (message.orderBookSpreadUpdate != null && message.hasOwnProperty("orderBookSpreadUpdate")) {
                if (properties.Update === 1)
                    return "Update: multiple values";
                properties.Update = 1;
                {
                    var error = $root.ProtobufMarkets.OrderBookSpreadUpdate.verify(message.orderBookSpreadUpdate);
                    if (error)
                        return "orderBookSpreadUpdate." + error;
                }
            }
            if (message.tradesUpdate != null && message.hasOwnProperty("tradesUpdate")) {
                if (properties.Update === 1)
                    return "Update: multiple values";
                properties.Update = 1;
                {
                    var error = $root.ProtobufMarkets.TradesUpdate.verify(message.tradesUpdate);
                    if (error)
                        return "tradesUpdate." + error;
                }
            }
            if (message.intervalsUpdate != null && message.hasOwnProperty("intervalsUpdate")) {
                if (properties.Update === 1)
                    return "Update: multiple values";
                properties.Update = 1;
                {
                    var error = $root.ProtobufMarkets.IntervalsUpdate.verify(message.intervalsUpdate);
                    if (error)
                        return "intervalsUpdate." + error;
                }
            }
            if (message.summaryUpdate != null && message.hasOwnProperty("summaryUpdate")) {
                if (properties.Update === 1)
                    return "Update: multiple values";
                properties.Update = 1;
                {
                    var error = $root.ProtobufMarkets.SummaryUpdate.verify(message.summaryUpdate);
                    if (error)
                        return "summaryUpdate." + error;
                }
            }
            if (message.sparklineUpdate != null && message.hasOwnProperty("sparklineUpdate")) {
                if (properties.Update === 1)
                    return "Update: multiple values";
                properties.Update = 1;
                {
                    var error = $root.ProtobufMarkets.SparklineUpdate.verify(message.sparklineUpdate);
                    if (error)
                        return "sparklineUpdate." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MarketUpdateMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufMarkets.MarketUpdateMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufMarkets.MarketUpdateMessage} MarketUpdateMessage
         */
        MarketUpdateMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufMarkets.MarketUpdateMessage)
                return object;
            var message = new $root.ProtobufMarkets.MarketUpdateMessage();
            if (object.market != null) {
                if (typeof object.market !== "object")
                    throw TypeError(".ProtobufMarkets.MarketUpdateMessage.market: object expected");
                message.market = $root.ProtobufMarkets.Market.fromObject(object.market);
            }
            if (object.orderBookUpdate != null) {
                if (typeof object.orderBookUpdate !== "object")
                    throw TypeError(".ProtobufMarkets.MarketUpdateMessage.orderBookUpdate: object expected");
                message.orderBookUpdate = $root.ProtobufMarkets.OrderBookUpdate.fromObject(object.orderBookUpdate);
            }
            if (object.orderBookDeltaUpdate != null) {
                if (typeof object.orderBookDeltaUpdate !== "object")
                    throw TypeError(".ProtobufMarkets.MarketUpdateMessage.orderBookDeltaUpdate: object expected");
                message.orderBookDeltaUpdate = $root.ProtobufMarkets.OrderBookDeltaUpdate.fromObject(object.orderBookDeltaUpdate);
            }
            if (object.orderBookSpreadUpdate != null) {
                if (typeof object.orderBookSpreadUpdate !== "object")
                    throw TypeError(".ProtobufMarkets.MarketUpdateMessage.orderBookSpreadUpdate: object expected");
                message.orderBookSpreadUpdate = $root.ProtobufMarkets.OrderBookSpreadUpdate.fromObject(object.orderBookSpreadUpdate);
            }
            if (object.tradesUpdate != null) {
                if (typeof object.tradesUpdate !== "object")
                    throw TypeError(".ProtobufMarkets.MarketUpdateMessage.tradesUpdate: object expected");
                message.tradesUpdate = $root.ProtobufMarkets.TradesUpdate.fromObject(object.tradesUpdate);
            }
            if (object.intervalsUpdate != null) {
                if (typeof object.intervalsUpdate !== "object")
                    throw TypeError(".ProtobufMarkets.MarketUpdateMessage.intervalsUpdate: object expected");
                message.intervalsUpdate = $root.ProtobufMarkets.IntervalsUpdate.fromObject(object.intervalsUpdate);
            }
            if (object.summaryUpdate != null) {
                if (typeof object.summaryUpdate !== "object")
                    throw TypeError(".ProtobufMarkets.MarketUpdateMessage.summaryUpdate: object expected");
                message.summaryUpdate = $root.ProtobufMarkets.SummaryUpdate.fromObject(object.summaryUpdate);
            }
            if (object.sparklineUpdate != null) {
                if (typeof object.sparklineUpdate !== "object")
                    throw TypeError(".ProtobufMarkets.MarketUpdateMessage.sparklineUpdate: object expected");
                message.sparklineUpdate = $root.ProtobufMarkets.SparklineUpdate.fromObject(object.sparklineUpdate);
            }
            return message;
        };

        /**
         * Creates a plain object from a MarketUpdateMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufMarkets.MarketUpdateMessage
         * @static
         * @param {ProtobufMarkets.MarketUpdateMessage} message MarketUpdateMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MarketUpdateMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.market = null;
            if (message.orderBookUpdate != null && message.hasOwnProperty("orderBookUpdate")) {
                object.orderBookUpdate = $root.ProtobufMarkets.OrderBookUpdate.toObject(message.orderBookUpdate, options);
                if (options.oneofs)
                    object.Update = "orderBookUpdate";
            }
            if (message.orderBookDeltaUpdate != null && message.hasOwnProperty("orderBookDeltaUpdate")) {
                object.orderBookDeltaUpdate = $root.ProtobufMarkets.OrderBookDeltaUpdate.toObject(message.orderBookDeltaUpdate, options);
                if (options.oneofs)
                    object.Update = "orderBookDeltaUpdate";
            }
            if (message.tradesUpdate != null && message.hasOwnProperty("tradesUpdate")) {
                object.tradesUpdate = $root.ProtobufMarkets.TradesUpdate.toObject(message.tradesUpdate, options);
                if (options.oneofs)
                    object.Update = "tradesUpdate";
            }
            if (message.intervalsUpdate != null && message.hasOwnProperty("intervalsUpdate")) {
                object.intervalsUpdate = $root.ProtobufMarkets.IntervalsUpdate.toObject(message.intervalsUpdate, options);
                if (options.oneofs)
                    object.Update = "intervalsUpdate";
            }
            if (message.summaryUpdate != null && message.hasOwnProperty("summaryUpdate")) {
                object.summaryUpdate = $root.ProtobufMarkets.SummaryUpdate.toObject(message.summaryUpdate, options);
                if (options.oneofs)
                    object.Update = "summaryUpdate";
            }
            if (message.sparklineUpdate != null && message.hasOwnProperty("sparklineUpdate")) {
                object.sparklineUpdate = $root.ProtobufMarkets.SparklineUpdate.toObject(message.sparklineUpdate, options);
                if (options.oneofs)
                    object.Update = "sparklineUpdate";
            }
            if (message.market != null && message.hasOwnProperty("market"))
                object.market = $root.ProtobufMarkets.Market.toObject(message.market, options);
            if (message.orderBookSpreadUpdate != null && message.hasOwnProperty("orderBookSpreadUpdate")) {
                object.orderBookSpreadUpdate = $root.ProtobufMarkets.OrderBookSpreadUpdate.toObject(message.orderBookSpreadUpdate, options);
                if (options.oneofs)
                    object.Update = "orderBookSpreadUpdate";
            }
            return object;
        };

        /**
         * Converts this MarketUpdateMessage to JSON.
         * @function toJSON
         * @memberof ProtobufMarkets.MarketUpdateMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MarketUpdateMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MarketUpdateMessage;
    })();

    ProtobufMarkets.OrderBookUpdate = (function() {

        /**
         * Properties of an OrderBookUpdate.
         * @memberof ProtobufMarkets
         * @interface IOrderBookUpdate
         * @property {string|null} [aggregationModulusStr] OrderBookUpdate aggregationModulusStr
         * @property {number|null} [seqNum] OrderBookUpdate seqNum
         * @property {Array.<ProtobufMarkets.IOrder>|null} [bids] OrderBookUpdate bids
         * @property {Array.<ProtobufMarkets.IOrder>|null} [asks] OrderBookUpdate asks
         * @property {number|null} [aggregationModulus] OrderBookUpdate aggregationModulus
         */

        /**
         * Constructs a new OrderBookUpdate.
         * @memberof ProtobufMarkets
         * @classdesc Represents an OrderBookUpdate.
         * @implements IOrderBookUpdate
         * @constructor
         * @param {ProtobufMarkets.IOrderBookUpdate=} [properties] Properties to set
         */
        function OrderBookUpdate(properties) {
            this.bids = [];
            this.asks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OrderBookUpdate aggregationModulusStr.
         * @member {string} aggregationModulusStr
         * @memberof ProtobufMarkets.OrderBookUpdate
         * @instance
         */
        OrderBookUpdate.prototype.aggregationModulusStr = "";

        /**
         * OrderBookUpdate seqNum.
         * @member {number} seqNum
         * @memberof ProtobufMarkets.OrderBookUpdate
         * @instance
         */
        OrderBookUpdate.prototype.seqNum = 0;

        /**
         * OrderBookUpdate bids.
         * @member {Array.<ProtobufMarkets.IOrder>} bids
         * @memberof ProtobufMarkets.OrderBookUpdate
         * @instance
         */
        OrderBookUpdate.prototype.bids = $util.emptyArray;

        /**
         * OrderBookUpdate asks.
         * @member {Array.<ProtobufMarkets.IOrder>} asks
         * @memberof ProtobufMarkets.OrderBookUpdate
         * @instance
         */
        OrderBookUpdate.prototype.asks = $util.emptyArray;

        /**
         * OrderBookUpdate aggregationModulus.
         * @member {number} aggregationModulus
         * @memberof ProtobufMarkets.OrderBookUpdate
         * @instance
         */
        OrderBookUpdate.prototype.aggregationModulus = 0;

        /**
         * Creates a new OrderBookUpdate instance using the specified properties.
         * @function create
         * @memberof ProtobufMarkets.OrderBookUpdate
         * @static
         * @param {ProtobufMarkets.IOrderBookUpdate=} [properties] Properties to set
         * @returns {ProtobufMarkets.OrderBookUpdate} OrderBookUpdate instance
         */
        OrderBookUpdate.create = function create(properties) {
            return new OrderBookUpdate(properties);
        };

        /**
         * Encodes the specified OrderBookUpdate message. Does not implicitly {@link ProtobufMarkets.OrderBookUpdate.verify|verify} messages.
         * @function encode
         * @memberof ProtobufMarkets.OrderBookUpdate
         * @static
         * @param {ProtobufMarkets.IOrderBookUpdate} message OrderBookUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderBookUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bids != null && message.bids.length)
                for (var i = 0; i < message.bids.length; ++i)
                    $root.ProtobufMarkets.Order.encode(message.bids[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.asks != null && message.asks.length)
                for (var i = 0; i < message.asks.length; ++i)
                    $root.ProtobufMarkets.Order.encode(message.asks[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.aggregationModulus != null && message.hasOwnProperty("aggregationModulus"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.aggregationModulus);
            if (message.aggregationModulusStr != null && message.hasOwnProperty("aggregationModulusStr"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.aggregationModulusStr);
            if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.seqNum);
            return writer;
        };

        /**
         * Encodes the specified OrderBookUpdate message, length delimited. Does not implicitly {@link ProtobufMarkets.OrderBookUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufMarkets.OrderBookUpdate
         * @static
         * @param {ProtobufMarkets.IOrderBookUpdate} message OrderBookUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderBookUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OrderBookUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufMarkets.OrderBookUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufMarkets.OrderBookUpdate} OrderBookUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderBookUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.OrderBookUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 4:
                    message.aggregationModulusStr = reader.string();
                    break;
                case 5:
                    message.seqNum = reader.int32();
                    break;
                case 1:
                    if (!(message.bids && message.bids.length))
                        message.bids = [];
                    message.bids.push($root.ProtobufMarkets.Order.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.asks && message.asks.length))
                        message.asks = [];
                    message.asks.push($root.ProtobufMarkets.Order.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.aggregationModulus = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OrderBookUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufMarkets.OrderBookUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufMarkets.OrderBookUpdate} OrderBookUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderBookUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OrderBookUpdate message.
         * @function verify
         * @memberof ProtobufMarkets.OrderBookUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OrderBookUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.aggregationModulusStr != null && message.hasOwnProperty("aggregationModulusStr"))
                if (!$util.isString(message.aggregationModulusStr))
                    return "aggregationModulusStr: string expected";
            if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                if (!$util.isInteger(message.seqNum))
                    return "seqNum: integer expected";
            if (message.bids != null && message.hasOwnProperty("bids")) {
                if (!Array.isArray(message.bids))
                    return "bids: array expected";
                for (var i = 0; i < message.bids.length; ++i) {
                    var error = $root.ProtobufMarkets.Order.verify(message.bids[i]);
                    if (error)
                        return "bids." + error;
                }
            }
            if (message.asks != null && message.hasOwnProperty("asks")) {
                if (!Array.isArray(message.asks))
                    return "asks: array expected";
                for (var i = 0; i < message.asks.length; ++i) {
                    var error = $root.ProtobufMarkets.Order.verify(message.asks[i]);
                    if (error)
                        return "asks." + error;
                }
            }
            if (message.aggregationModulus != null && message.hasOwnProperty("aggregationModulus"))
                if (typeof message.aggregationModulus !== "number")
                    return "aggregationModulus: number expected";
            return null;
        };

        /**
         * Creates an OrderBookUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufMarkets.OrderBookUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufMarkets.OrderBookUpdate} OrderBookUpdate
         */
        OrderBookUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufMarkets.OrderBookUpdate)
                return object;
            var message = new $root.ProtobufMarkets.OrderBookUpdate();
            if (object.aggregationModulusStr != null)
                message.aggregationModulusStr = String(object.aggregationModulusStr);
            if (object.seqNum != null)
                message.seqNum = object.seqNum | 0;
            if (object.bids) {
                if (!Array.isArray(object.bids))
                    throw TypeError(".ProtobufMarkets.OrderBookUpdate.bids: array expected");
                message.bids = [];
                for (var i = 0; i < object.bids.length; ++i) {
                    if (typeof object.bids[i] !== "object")
                        throw TypeError(".ProtobufMarkets.OrderBookUpdate.bids: object expected");
                    message.bids[i] = $root.ProtobufMarkets.Order.fromObject(object.bids[i]);
                }
            }
            if (object.asks) {
                if (!Array.isArray(object.asks))
                    throw TypeError(".ProtobufMarkets.OrderBookUpdate.asks: array expected");
                message.asks = [];
                for (var i = 0; i < object.asks.length; ++i) {
                    if (typeof object.asks[i] !== "object")
                        throw TypeError(".ProtobufMarkets.OrderBookUpdate.asks: object expected");
                    message.asks[i] = $root.ProtobufMarkets.Order.fromObject(object.asks[i]);
                }
            }
            if (object.aggregationModulus != null)
                message.aggregationModulus = Number(object.aggregationModulus);
            return message;
        };

        /**
         * Creates a plain object from an OrderBookUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufMarkets.OrderBookUpdate
         * @static
         * @param {ProtobufMarkets.OrderBookUpdate} message OrderBookUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OrderBookUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.bids = [];
                object.asks = [];
            }
            if (options.defaults) {
                object.aggregationModulus = 0;
                object.aggregationModulusStr = "";
                object.seqNum = 0;
            }
            if (message.bids && message.bids.length) {
                object.bids = [];
                for (var j = 0; j < message.bids.length; ++j)
                    object.bids[j] = $root.ProtobufMarkets.Order.toObject(message.bids[j], options);
            }
            if (message.asks && message.asks.length) {
                object.asks = [];
                for (var j = 0; j < message.asks.length; ++j)
                    object.asks[j] = $root.ProtobufMarkets.Order.toObject(message.asks[j], options);
            }
            if (message.aggregationModulus != null && message.hasOwnProperty("aggregationModulus"))
                object.aggregationModulus = options.json && !isFinite(message.aggregationModulus) ? String(message.aggregationModulus) : message.aggregationModulus;
            if (message.aggregationModulusStr != null && message.hasOwnProperty("aggregationModulusStr"))
                object.aggregationModulusStr = message.aggregationModulusStr;
            if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                object.seqNum = message.seqNum;
            return object;
        };

        /**
         * Converts this OrderBookUpdate to JSON.
         * @function toJSON
         * @memberof ProtobufMarkets.OrderBookUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OrderBookUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OrderBookUpdate;
    })();

    ProtobufMarkets.OrderBookDeltaUpdate = (function() {

        /**
         * Properties of an OrderBookDeltaUpdate.
         * @memberof ProtobufMarkets
         * @interface IOrderBookDeltaUpdate
         * @property {number|null} [aggregationModulus] OrderBookDeltaUpdate aggregationModulus
         * @property {string|null} [aggregationModulusStr] OrderBookDeltaUpdate aggregationModulusStr
         * @property {number|null} [seqNum] OrderBookDeltaUpdate seqNum
         * @property {ProtobufMarkets.OrderBookDeltaUpdate.IOrderDeltas|null} [bids] OrderBookDeltaUpdate bids
         * @property {ProtobufMarkets.OrderBookDeltaUpdate.IOrderDeltas|null} [asks] OrderBookDeltaUpdate asks
         */

        /**
         * Constructs a new OrderBookDeltaUpdate.
         * @memberof ProtobufMarkets
         * @classdesc Represents an OrderBookDeltaUpdate.
         * @implements IOrderBookDeltaUpdate
         * @constructor
         * @param {ProtobufMarkets.IOrderBookDeltaUpdate=} [properties] Properties to set
         */
        function OrderBookDeltaUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OrderBookDeltaUpdate aggregationModulus.
         * @member {number} aggregationModulus
         * @memberof ProtobufMarkets.OrderBookDeltaUpdate
         * @instance
         */
        OrderBookDeltaUpdate.prototype.aggregationModulus = 0;

        /**
         * OrderBookDeltaUpdate aggregationModulusStr.
         * @member {string} aggregationModulusStr
         * @memberof ProtobufMarkets.OrderBookDeltaUpdate
         * @instance
         */
        OrderBookDeltaUpdate.prototype.aggregationModulusStr = "";

        /**
         * OrderBookDeltaUpdate seqNum.
         * @member {number} seqNum
         * @memberof ProtobufMarkets.OrderBookDeltaUpdate
         * @instance
         */
        OrderBookDeltaUpdate.prototype.seqNum = 0;

        /**
         * OrderBookDeltaUpdate bids.
         * @member {ProtobufMarkets.OrderBookDeltaUpdate.IOrderDeltas|null|undefined} bids
         * @memberof ProtobufMarkets.OrderBookDeltaUpdate
         * @instance
         */
        OrderBookDeltaUpdate.prototype.bids = null;

        /**
         * OrderBookDeltaUpdate asks.
         * @member {ProtobufMarkets.OrderBookDeltaUpdate.IOrderDeltas|null|undefined} asks
         * @memberof ProtobufMarkets.OrderBookDeltaUpdate
         * @instance
         */
        OrderBookDeltaUpdate.prototype.asks = null;

        /**
         * Creates a new OrderBookDeltaUpdate instance using the specified properties.
         * @function create
         * @memberof ProtobufMarkets.OrderBookDeltaUpdate
         * @static
         * @param {ProtobufMarkets.IOrderBookDeltaUpdate=} [properties] Properties to set
         * @returns {ProtobufMarkets.OrderBookDeltaUpdate} OrderBookDeltaUpdate instance
         */
        OrderBookDeltaUpdate.create = function create(properties) {
            return new OrderBookDeltaUpdate(properties);
        };

        /**
         * Encodes the specified OrderBookDeltaUpdate message. Does not implicitly {@link ProtobufMarkets.OrderBookDeltaUpdate.verify|verify} messages.
         * @function encode
         * @memberof ProtobufMarkets.OrderBookDeltaUpdate
         * @static
         * @param {ProtobufMarkets.IOrderBookDeltaUpdate} message OrderBookDeltaUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderBookDeltaUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bids != null && message.hasOwnProperty("bids"))
                $root.ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas.encode(message.bids, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.asks != null && message.hasOwnProperty("asks"))
                $root.ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas.encode(message.asks, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.aggregationModulus != null && message.hasOwnProperty("aggregationModulus"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.aggregationModulus);
            if (message.aggregationModulusStr != null && message.hasOwnProperty("aggregationModulusStr"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.aggregationModulusStr);
            if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.seqNum);
            return writer;
        };

        /**
         * Encodes the specified OrderBookDeltaUpdate message, length delimited. Does not implicitly {@link ProtobufMarkets.OrderBookDeltaUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufMarkets.OrderBookDeltaUpdate
         * @static
         * @param {ProtobufMarkets.IOrderBookDeltaUpdate} message OrderBookDeltaUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderBookDeltaUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OrderBookDeltaUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufMarkets.OrderBookDeltaUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufMarkets.OrderBookDeltaUpdate} OrderBookDeltaUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderBookDeltaUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.OrderBookDeltaUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 3:
                    message.aggregationModulus = reader.float();
                    break;
                case 4:
                    message.aggregationModulusStr = reader.string();
                    break;
                case 5:
                    message.seqNum = reader.int32();
                    break;
                case 1:
                    message.bids = $root.ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.asks = $root.ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OrderBookDeltaUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufMarkets.OrderBookDeltaUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufMarkets.OrderBookDeltaUpdate} OrderBookDeltaUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderBookDeltaUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OrderBookDeltaUpdate message.
         * @function verify
         * @memberof ProtobufMarkets.OrderBookDeltaUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OrderBookDeltaUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.aggregationModulus != null && message.hasOwnProperty("aggregationModulus"))
                if (typeof message.aggregationModulus !== "number")
                    return "aggregationModulus: number expected";
            if (message.aggregationModulusStr != null && message.hasOwnProperty("aggregationModulusStr"))
                if (!$util.isString(message.aggregationModulusStr))
                    return "aggregationModulusStr: string expected";
            if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                if (!$util.isInteger(message.seqNum))
                    return "seqNum: integer expected";
            if (message.bids != null && message.hasOwnProperty("bids")) {
                var error = $root.ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas.verify(message.bids);
                if (error)
                    return "bids." + error;
            }
            if (message.asks != null && message.hasOwnProperty("asks")) {
                var error = $root.ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas.verify(message.asks);
                if (error)
                    return "asks." + error;
            }
            return null;
        };

        /**
         * Creates an OrderBookDeltaUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufMarkets.OrderBookDeltaUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufMarkets.OrderBookDeltaUpdate} OrderBookDeltaUpdate
         */
        OrderBookDeltaUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufMarkets.OrderBookDeltaUpdate)
                return object;
            var message = new $root.ProtobufMarkets.OrderBookDeltaUpdate();
            if (object.aggregationModulus != null)
                message.aggregationModulus = Number(object.aggregationModulus);
            if (object.aggregationModulusStr != null)
                message.aggregationModulusStr = String(object.aggregationModulusStr);
            if (object.seqNum != null)
                message.seqNum = object.seqNum | 0;
            if (object.bids != null) {
                if (typeof object.bids !== "object")
                    throw TypeError(".ProtobufMarkets.OrderBookDeltaUpdate.bids: object expected");
                message.bids = $root.ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas.fromObject(object.bids);
            }
            if (object.asks != null) {
                if (typeof object.asks !== "object")
                    throw TypeError(".ProtobufMarkets.OrderBookDeltaUpdate.asks: object expected");
                message.asks = $root.ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas.fromObject(object.asks);
            }
            return message;
        };

        /**
         * Creates a plain object from an OrderBookDeltaUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufMarkets.OrderBookDeltaUpdate
         * @static
         * @param {ProtobufMarkets.OrderBookDeltaUpdate} message OrderBookDeltaUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OrderBookDeltaUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.bids = null;
                object.asks = null;
                object.aggregationModulus = 0;
                object.aggregationModulusStr = "";
                object.seqNum = 0;
            }
            if (message.bids != null && message.hasOwnProperty("bids"))
                object.bids = $root.ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas.toObject(message.bids, options);
            if (message.asks != null && message.hasOwnProperty("asks"))
                object.asks = $root.ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas.toObject(message.asks, options);
            if (message.aggregationModulus != null && message.hasOwnProperty("aggregationModulus"))
                object.aggregationModulus = options.json && !isFinite(message.aggregationModulus) ? String(message.aggregationModulus) : message.aggregationModulus;
            if (message.aggregationModulusStr != null && message.hasOwnProperty("aggregationModulusStr"))
                object.aggregationModulusStr = message.aggregationModulusStr;
            if (message.seqNum != null && message.hasOwnProperty("seqNum"))
                object.seqNum = message.seqNum;
            return object;
        };

        /**
         * Converts this OrderBookDeltaUpdate to JSON.
         * @function toJSON
         * @memberof ProtobufMarkets.OrderBookDeltaUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OrderBookDeltaUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        OrderBookDeltaUpdate.OrderDeltas = (function() {

            /**
             * Properties of an OrderDeltas.
             * @memberof ProtobufMarkets.OrderBookDeltaUpdate
             * @interface IOrderDeltas
             * @property {Array.<ProtobufMarkets.IOrder>|null} [set] OrderDeltas set
             * @property {Array.<ProtobufMarkets.IOrder>|null} [delta] OrderDeltas delta
             * @property {Array.<number>|null} [remove] OrderDeltas remove
             * @property {Array.<string>|null} [removeStr] OrderDeltas removeStr
             */

            /**
             * Constructs a new OrderDeltas.
             * @memberof ProtobufMarkets.OrderBookDeltaUpdate
             * @classdesc Represents an OrderDeltas.
             * @implements IOrderDeltas
             * @constructor
             * @param {ProtobufMarkets.OrderBookDeltaUpdate.IOrderDeltas=} [properties] Properties to set
             */
            function OrderDeltas(properties) {
                this.set = [];
                this.delta = [];
                this.remove = [];
                this.removeStr = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OrderDeltas set.
             * @member {Array.<ProtobufMarkets.IOrder>} set
             * @memberof ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas
             * @instance
             */
            OrderDeltas.prototype.set = $util.emptyArray;

            /**
             * OrderDeltas delta.
             * @member {Array.<ProtobufMarkets.IOrder>} delta
             * @memberof ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas
             * @instance
             */
            OrderDeltas.prototype.delta = $util.emptyArray;

            /**
             * OrderDeltas remove.
             * @member {Array.<number>} remove
             * @memberof ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas
             * @instance
             */
            OrderDeltas.prototype.remove = $util.emptyArray;

            /**
             * OrderDeltas removeStr.
             * @member {Array.<string>} removeStr
             * @memberof ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas
             * @instance
             */
            OrderDeltas.prototype.removeStr = $util.emptyArray;

            /**
             * Creates a new OrderDeltas instance using the specified properties.
             * @function create
             * @memberof ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas
             * @static
             * @param {ProtobufMarkets.OrderBookDeltaUpdate.IOrderDeltas=} [properties] Properties to set
             * @returns {ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas} OrderDeltas instance
             */
            OrderDeltas.create = function create(properties) {
                return new OrderDeltas(properties);
            };

            /**
             * Encodes the specified OrderDeltas message. Does not implicitly {@link ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas.verify|verify} messages.
             * @function encode
             * @memberof ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas
             * @static
             * @param {ProtobufMarkets.OrderBookDeltaUpdate.IOrderDeltas} message OrderDeltas message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OrderDeltas.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.set != null && message.set.length)
                    for (var i = 0; i < message.set.length; ++i)
                        $root.ProtobufMarkets.Order.encode(message.set[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.delta != null && message.delta.length)
                    for (var i = 0; i < message.delta.length; ++i)
                        $root.ProtobufMarkets.Order.encode(message.delta[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.remove != null && message.remove.length)
                    for (var i = 0; i < message.remove.length; ++i)
                        writer.uint32(/* id 3, wireType 5 =*/29).float(message.remove[i]);
                if (message.removeStr != null && message.removeStr.length)
                    for (var i = 0; i < message.removeStr.length; ++i)
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.removeStr[i]);
                return writer;
            };

            /**
             * Encodes the specified OrderDeltas message, length delimited. Does not implicitly {@link ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas
             * @static
             * @param {ProtobufMarkets.OrderBookDeltaUpdate.IOrderDeltas} message OrderDeltas message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OrderDeltas.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an OrderDeltas message from the specified reader or buffer.
             * @function decode
             * @memberof ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas} OrderDeltas
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OrderDeltas.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.set && message.set.length))
                            message.set = [];
                        message.set.push($root.ProtobufMarkets.Order.decode(reader, reader.uint32()));
                        break;
                    case 2:
                        if (!(message.delta && message.delta.length))
                            message.delta = [];
                        message.delta.push($root.ProtobufMarkets.Order.decode(reader, reader.uint32()));
                        break;
                    case 3:
                        if (!(message.remove && message.remove.length))
                            message.remove = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.remove.push(reader.float());
                        } else
                            message.remove.push(reader.float());
                        break;
                    case 4:
                        if (!(message.removeStr && message.removeStr.length))
                            message.removeStr = [];
                        message.removeStr.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an OrderDeltas message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas} OrderDeltas
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OrderDeltas.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an OrderDeltas message.
             * @function verify
             * @memberof ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OrderDeltas.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.set != null && message.hasOwnProperty("set")) {
                    if (!Array.isArray(message.set))
                        return "set: array expected";
                    for (var i = 0; i < message.set.length; ++i) {
                        var error = $root.ProtobufMarkets.Order.verify(message.set[i]);
                        if (error)
                            return "set." + error;
                    }
                }
                if (message.delta != null && message.hasOwnProperty("delta")) {
                    if (!Array.isArray(message.delta))
                        return "delta: array expected";
                    for (var i = 0; i < message.delta.length; ++i) {
                        var error = $root.ProtobufMarkets.Order.verify(message.delta[i]);
                        if (error)
                            return "delta." + error;
                    }
                }
                if (message.remove != null && message.hasOwnProperty("remove")) {
                    if (!Array.isArray(message.remove))
                        return "remove: array expected";
                    for (var i = 0; i < message.remove.length; ++i)
                        if (typeof message.remove[i] !== "number")
                            return "remove: number[] expected";
                }
                if (message.removeStr != null && message.hasOwnProperty("removeStr")) {
                    if (!Array.isArray(message.removeStr))
                        return "removeStr: array expected";
                    for (var i = 0; i < message.removeStr.length; ++i)
                        if (!$util.isString(message.removeStr[i]))
                            return "removeStr: string[] expected";
                }
                return null;
            };

            /**
             * Creates an OrderDeltas message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas} OrderDeltas
             */
            OrderDeltas.fromObject = function fromObject(object) {
                if (object instanceof $root.ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas)
                    return object;
                var message = new $root.ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas();
                if (object.set) {
                    if (!Array.isArray(object.set))
                        throw TypeError(".ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas.set: array expected");
                    message.set = [];
                    for (var i = 0; i < object.set.length; ++i) {
                        if (typeof object.set[i] !== "object")
                            throw TypeError(".ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas.set: object expected");
                        message.set[i] = $root.ProtobufMarkets.Order.fromObject(object.set[i]);
                    }
                }
                if (object.delta) {
                    if (!Array.isArray(object.delta))
                        throw TypeError(".ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas.delta: array expected");
                    message.delta = [];
                    for (var i = 0; i < object.delta.length; ++i) {
                        if (typeof object.delta[i] !== "object")
                            throw TypeError(".ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas.delta: object expected");
                        message.delta[i] = $root.ProtobufMarkets.Order.fromObject(object.delta[i]);
                    }
                }
                if (object.remove) {
                    if (!Array.isArray(object.remove))
                        throw TypeError(".ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas.remove: array expected");
                    message.remove = [];
                    for (var i = 0; i < object.remove.length; ++i)
                        message.remove[i] = Number(object.remove[i]);
                }
                if (object.removeStr) {
                    if (!Array.isArray(object.removeStr))
                        throw TypeError(".ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas.removeStr: array expected");
                    message.removeStr = [];
                    for (var i = 0; i < object.removeStr.length; ++i)
                        message.removeStr[i] = String(object.removeStr[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from an OrderDeltas message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas
             * @static
             * @param {ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas} message OrderDeltas
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OrderDeltas.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults) {
                    object.set = [];
                    object.delta = [];
                    object.remove = [];
                    object.removeStr = [];
                }
                if (message.set && message.set.length) {
                    object.set = [];
                    for (var j = 0; j < message.set.length; ++j)
                        object.set[j] = $root.ProtobufMarkets.Order.toObject(message.set[j], options);
                }
                if (message.delta && message.delta.length) {
                    object.delta = [];
                    for (var j = 0; j < message.delta.length; ++j)
                        object.delta[j] = $root.ProtobufMarkets.Order.toObject(message.delta[j], options);
                }
                if (message.remove && message.remove.length) {
                    object.remove = [];
                    for (var j = 0; j < message.remove.length; ++j)
                        object.remove[j] = options.json && !isFinite(message.remove[j]) ? String(message.remove[j]) : message.remove[j];
                }
                if (message.removeStr && message.removeStr.length) {
                    object.removeStr = [];
                    for (var j = 0; j < message.removeStr.length; ++j)
                        object.removeStr[j] = message.removeStr[j];
                }
                return object;
            };

            /**
             * Converts this OrderDeltas to JSON.
             * @function toJSON
             * @memberof ProtobufMarkets.OrderBookDeltaUpdate.OrderDeltas
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OrderDeltas.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OrderDeltas;
        })();

        return OrderBookDeltaUpdate;
    })();

    ProtobufMarkets.OrderBookSpreadUpdate = (function() {

        /**
         * Properties of an OrderBookSpreadUpdate.
         * @memberof ProtobufMarkets
         * @interface IOrderBookSpreadUpdate
         * @property {number|Long|null} [timestamp] OrderBookSpreadUpdate timestamp
         * @property {ProtobufMarkets.IOrder|null} [bid] OrderBookSpreadUpdate bid
         * @property {ProtobufMarkets.IOrder|null} [ask] OrderBookSpreadUpdate ask
         */

        /**
         * Constructs a new OrderBookSpreadUpdate.
         * @memberof ProtobufMarkets
         * @classdesc Represents an OrderBookSpreadUpdate.
         * @implements IOrderBookSpreadUpdate
         * @constructor
         * @param {ProtobufMarkets.IOrderBookSpreadUpdate=} [properties] Properties to set
         */
        function OrderBookSpreadUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OrderBookSpreadUpdate timestamp.
         * @member {number|Long} timestamp
         * @memberof ProtobufMarkets.OrderBookSpreadUpdate
         * @instance
         */
        OrderBookSpreadUpdate.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * OrderBookSpreadUpdate bid.
         * @member {ProtobufMarkets.IOrder|null|undefined} bid
         * @memberof ProtobufMarkets.OrderBookSpreadUpdate
         * @instance
         */
        OrderBookSpreadUpdate.prototype.bid = null;

        /**
         * OrderBookSpreadUpdate ask.
         * @member {ProtobufMarkets.IOrder|null|undefined} ask
         * @memberof ProtobufMarkets.OrderBookSpreadUpdate
         * @instance
         */
        OrderBookSpreadUpdate.prototype.ask = null;

        /**
         * Creates a new OrderBookSpreadUpdate instance using the specified properties.
         * @function create
         * @memberof ProtobufMarkets.OrderBookSpreadUpdate
         * @static
         * @param {ProtobufMarkets.IOrderBookSpreadUpdate=} [properties] Properties to set
         * @returns {ProtobufMarkets.OrderBookSpreadUpdate} OrderBookSpreadUpdate instance
         */
        OrderBookSpreadUpdate.create = function create(properties) {
            return new OrderBookSpreadUpdate(properties);
        };

        /**
         * Encodes the specified OrderBookSpreadUpdate message. Does not implicitly {@link ProtobufMarkets.OrderBookSpreadUpdate.verify|verify} messages.
         * @function encode
         * @memberof ProtobufMarkets.OrderBookSpreadUpdate
         * @static
         * @param {ProtobufMarkets.IOrderBookSpreadUpdate} message OrderBookSpreadUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderBookSpreadUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.timestamp);
            if (message.bid != null && message.hasOwnProperty("bid"))
                $root.ProtobufMarkets.Order.encode(message.bid, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.ask != null && message.hasOwnProperty("ask"))
                $root.ProtobufMarkets.Order.encode(message.ask, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OrderBookSpreadUpdate message, length delimited. Does not implicitly {@link ProtobufMarkets.OrderBookSpreadUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufMarkets.OrderBookSpreadUpdate
         * @static
         * @param {ProtobufMarkets.IOrderBookSpreadUpdate} message OrderBookSpreadUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OrderBookSpreadUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OrderBookSpreadUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufMarkets.OrderBookSpreadUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufMarkets.OrderBookSpreadUpdate} OrderBookSpreadUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderBookSpreadUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.OrderBookSpreadUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.timestamp = reader.int64();
                    break;
                case 2:
                    message.bid = $root.ProtobufMarkets.Order.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.ask = $root.ProtobufMarkets.Order.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OrderBookSpreadUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufMarkets.OrderBookSpreadUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufMarkets.OrderBookSpreadUpdate} OrderBookSpreadUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OrderBookSpreadUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OrderBookSpreadUpdate message.
         * @function verify
         * @memberof ProtobufMarkets.OrderBookSpreadUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OrderBookSpreadUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.bid != null && message.hasOwnProperty("bid")) {
                var error = $root.ProtobufMarkets.Order.verify(message.bid);
                if (error)
                    return "bid." + error;
            }
            if (message.ask != null && message.hasOwnProperty("ask")) {
                var error = $root.ProtobufMarkets.Order.verify(message.ask);
                if (error)
                    return "ask." + error;
            }
            return null;
        };

        /**
         * Creates an OrderBookSpreadUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufMarkets.OrderBookSpreadUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufMarkets.OrderBookSpreadUpdate} OrderBookSpreadUpdate
         */
        OrderBookSpreadUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufMarkets.OrderBookSpreadUpdate)
                return object;
            var message = new $root.ProtobufMarkets.OrderBookSpreadUpdate();
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.bid != null) {
                if (typeof object.bid !== "object")
                    throw TypeError(".ProtobufMarkets.OrderBookSpreadUpdate.bid: object expected");
                message.bid = $root.ProtobufMarkets.Order.fromObject(object.bid);
            }
            if (object.ask != null) {
                if (typeof object.ask !== "object")
                    throw TypeError(".ProtobufMarkets.OrderBookSpreadUpdate.ask: object expected");
                message.ask = $root.ProtobufMarkets.Order.fromObject(object.ask);
            }
            return message;
        };

        /**
         * Creates a plain object from an OrderBookSpreadUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufMarkets.OrderBookSpreadUpdate
         * @static
         * @param {ProtobufMarkets.OrderBookSpreadUpdate} message OrderBookSpreadUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OrderBookSpreadUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.bid = null;
                object.ask = null;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.bid != null && message.hasOwnProperty("bid"))
                object.bid = $root.ProtobufMarkets.Order.toObject(message.bid, options);
            if (message.ask != null && message.hasOwnProperty("ask"))
                object.ask = $root.ProtobufMarkets.Order.toObject(message.ask, options);
            return object;
        };

        /**
         * Converts this OrderBookSpreadUpdate to JSON.
         * @function toJSON
         * @memberof ProtobufMarkets.OrderBookSpreadUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OrderBookSpreadUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OrderBookSpreadUpdate;
    })();

    ProtobufMarkets.TradesUpdate = (function() {

        /**
         * Properties of a TradesUpdate.
         * @memberof ProtobufMarkets
         * @interface ITradesUpdate
         * @property {Array.<ProtobufMarkets.ITrade>|null} [trades] TradesUpdate trades
         */

        /**
         * Constructs a new TradesUpdate.
         * @memberof ProtobufMarkets
         * @classdesc Represents a TradesUpdate.
         * @implements ITradesUpdate
         * @constructor
         * @param {ProtobufMarkets.ITradesUpdate=} [properties] Properties to set
         */
        function TradesUpdate(properties) {
            this.trades = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TradesUpdate trades.
         * @member {Array.<ProtobufMarkets.ITrade>} trades
         * @memberof ProtobufMarkets.TradesUpdate
         * @instance
         */
        TradesUpdate.prototype.trades = $util.emptyArray;

        /**
         * Creates a new TradesUpdate instance using the specified properties.
         * @function create
         * @memberof ProtobufMarkets.TradesUpdate
         * @static
         * @param {ProtobufMarkets.ITradesUpdate=} [properties] Properties to set
         * @returns {ProtobufMarkets.TradesUpdate} TradesUpdate instance
         */
        TradesUpdate.create = function create(properties) {
            return new TradesUpdate(properties);
        };

        /**
         * Encodes the specified TradesUpdate message. Does not implicitly {@link ProtobufMarkets.TradesUpdate.verify|verify} messages.
         * @function encode
         * @memberof ProtobufMarkets.TradesUpdate
         * @static
         * @param {ProtobufMarkets.ITradesUpdate} message TradesUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TradesUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.trades != null && message.trades.length)
                for (var i = 0; i < message.trades.length; ++i)
                    $root.ProtobufMarkets.Trade.encode(message.trades[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TradesUpdate message, length delimited. Does not implicitly {@link ProtobufMarkets.TradesUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufMarkets.TradesUpdate
         * @static
         * @param {ProtobufMarkets.ITradesUpdate} message TradesUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TradesUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TradesUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufMarkets.TradesUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufMarkets.TradesUpdate} TradesUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TradesUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.TradesUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.trades && message.trades.length))
                        message.trades = [];
                    message.trades.push($root.ProtobufMarkets.Trade.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TradesUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufMarkets.TradesUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufMarkets.TradesUpdate} TradesUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TradesUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TradesUpdate message.
         * @function verify
         * @memberof ProtobufMarkets.TradesUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TradesUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.trades != null && message.hasOwnProperty("trades")) {
                if (!Array.isArray(message.trades))
                    return "trades: array expected";
                for (var i = 0; i < message.trades.length; ++i) {
                    var error = $root.ProtobufMarkets.Trade.verify(message.trades[i]);
                    if (error)
                        return "trades." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TradesUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufMarkets.TradesUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufMarkets.TradesUpdate} TradesUpdate
         */
        TradesUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufMarkets.TradesUpdate)
                return object;
            var message = new $root.ProtobufMarkets.TradesUpdate();
            if (object.trades) {
                if (!Array.isArray(object.trades))
                    throw TypeError(".ProtobufMarkets.TradesUpdate.trades: array expected");
                message.trades = [];
                for (var i = 0; i < object.trades.length; ++i) {
                    if (typeof object.trades[i] !== "object")
                        throw TypeError(".ProtobufMarkets.TradesUpdate.trades: object expected");
                    message.trades[i] = $root.ProtobufMarkets.Trade.fromObject(object.trades[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TradesUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufMarkets.TradesUpdate
         * @static
         * @param {ProtobufMarkets.TradesUpdate} message TradesUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TradesUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.trades = [];
            if (message.trades && message.trades.length) {
                object.trades = [];
                for (var j = 0; j < message.trades.length; ++j)
                    object.trades[j] = $root.ProtobufMarkets.Trade.toObject(message.trades[j], options);
            }
            return object;
        };

        /**
         * Converts this TradesUpdate to JSON.
         * @function toJSON
         * @memberof ProtobufMarkets.TradesUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TradesUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TradesUpdate;
    })();

    ProtobufMarkets.Interval = (function() {

        /**
         * Properties of an Interval.
         * @memberof ProtobufMarkets
         * @interface IInterval
         * @property {number|Long|null} [closetime] Interval closetime
         * @property {number|null} [period] Interval period
         * @property {ProtobufMarkets.Interval.IOHLC|null} [ohlc] Interval ohlc
         * @property {string|null} [volumeBaseStr] Interval volumeBaseStr
         * @property {string|null} [volumeQuoteStr] Interval volumeQuoteStr
         * @property {number|null} [volumeBase] Interval volumeBase
         * @property {number|null} [volumeQuote] Interval volumeQuote
         */

        /**
         * Constructs a new Interval.
         * @memberof ProtobufMarkets
         * @classdesc Represents an Interval.
         * @implements IInterval
         * @constructor
         * @param {ProtobufMarkets.IInterval=} [properties] Properties to set
         */
        function Interval(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Interval closetime.
         * @member {number|Long} closetime
         * @memberof ProtobufMarkets.Interval
         * @instance
         */
        Interval.prototype.closetime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Interval period.
         * @member {number} period
         * @memberof ProtobufMarkets.Interval
         * @instance
         */
        Interval.prototype.period = 0;

        /**
         * Interval ohlc.
         * @member {ProtobufMarkets.Interval.IOHLC|null|undefined} ohlc
         * @memberof ProtobufMarkets.Interval
         * @instance
         */
        Interval.prototype.ohlc = null;

        /**
         * Interval volumeBaseStr.
         * @member {string} volumeBaseStr
         * @memberof ProtobufMarkets.Interval
         * @instance
         */
        Interval.prototype.volumeBaseStr = "";

        /**
         * Interval volumeQuoteStr.
         * @member {string} volumeQuoteStr
         * @memberof ProtobufMarkets.Interval
         * @instance
         */
        Interval.prototype.volumeQuoteStr = "";

        /**
         * Interval volumeBase.
         * @member {number} volumeBase
         * @memberof ProtobufMarkets.Interval
         * @instance
         */
        Interval.prototype.volumeBase = 0;

        /**
         * Interval volumeQuote.
         * @member {number} volumeQuote
         * @memberof ProtobufMarkets.Interval
         * @instance
         */
        Interval.prototype.volumeQuote = 0;

        /**
         * Creates a new Interval instance using the specified properties.
         * @function create
         * @memberof ProtobufMarkets.Interval
         * @static
         * @param {ProtobufMarkets.IInterval=} [properties] Properties to set
         * @returns {ProtobufMarkets.Interval} Interval instance
         */
        Interval.create = function create(properties) {
            return new Interval(properties);
        };

        /**
         * Encodes the specified Interval message. Does not implicitly {@link ProtobufMarkets.Interval.verify|verify} messages.
         * @function encode
         * @memberof ProtobufMarkets.Interval
         * @static
         * @param {ProtobufMarkets.IInterval} message Interval message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Interval.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.closetime != null && message.hasOwnProperty("closetime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.closetime);
            if (message.ohlc != null && message.hasOwnProperty("ohlc"))
                $root.ProtobufMarkets.Interval.OHLC.encode(message.ohlc, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.volumeBase != null && message.hasOwnProperty("volumeBase"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.volumeBase);
            if (message.period != null && message.hasOwnProperty("period"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.period);
            if (message.volumeQuote != null && message.hasOwnProperty("volumeQuote"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.volumeQuote);
            if (message.volumeBaseStr != null && message.hasOwnProperty("volumeBaseStr"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.volumeBaseStr);
            if (message.volumeQuoteStr != null && message.hasOwnProperty("volumeQuoteStr"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.volumeQuoteStr);
            return writer;
        };

        /**
         * Encodes the specified Interval message, length delimited. Does not implicitly {@link ProtobufMarkets.Interval.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufMarkets.Interval
         * @static
         * @param {ProtobufMarkets.IInterval} message Interval message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Interval.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Interval message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufMarkets.Interval
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufMarkets.Interval} Interval
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Interval.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.Interval();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.closetime = reader.int64();
                    break;
                case 4:
                    message.period = reader.int32();
                    break;
                case 2:
                    message.ohlc = $root.ProtobufMarkets.Interval.OHLC.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.volumeBaseStr = reader.string();
                    break;
                case 7:
                    message.volumeQuoteStr = reader.string();
                    break;
                case 3:
                    message.volumeBase = reader.float();
                    break;
                case 5:
                    message.volumeQuote = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Interval message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufMarkets.Interval
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufMarkets.Interval} Interval
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Interval.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Interval message.
         * @function verify
         * @memberof ProtobufMarkets.Interval
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Interval.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.closetime != null && message.hasOwnProperty("closetime"))
                if (!$util.isInteger(message.closetime) && !(message.closetime && $util.isInteger(message.closetime.low) && $util.isInteger(message.closetime.high)))
                    return "closetime: integer|Long expected";
            if (message.period != null && message.hasOwnProperty("period"))
                if (!$util.isInteger(message.period))
                    return "period: integer expected";
            if (message.ohlc != null && message.hasOwnProperty("ohlc")) {
                var error = $root.ProtobufMarkets.Interval.OHLC.verify(message.ohlc);
                if (error)
                    return "ohlc." + error;
            }
            if (message.volumeBaseStr != null && message.hasOwnProperty("volumeBaseStr"))
                if (!$util.isString(message.volumeBaseStr))
                    return "volumeBaseStr: string expected";
            if (message.volumeQuoteStr != null && message.hasOwnProperty("volumeQuoteStr"))
                if (!$util.isString(message.volumeQuoteStr))
                    return "volumeQuoteStr: string expected";
            if (message.volumeBase != null && message.hasOwnProperty("volumeBase"))
                if (typeof message.volumeBase !== "number")
                    return "volumeBase: number expected";
            if (message.volumeQuote != null && message.hasOwnProperty("volumeQuote"))
                if (typeof message.volumeQuote !== "number")
                    return "volumeQuote: number expected";
            return null;
        };

        /**
         * Creates an Interval message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufMarkets.Interval
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufMarkets.Interval} Interval
         */
        Interval.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufMarkets.Interval)
                return object;
            var message = new $root.ProtobufMarkets.Interval();
            if (object.closetime != null)
                if ($util.Long)
                    (message.closetime = $util.Long.fromValue(object.closetime)).unsigned = false;
                else if (typeof object.closetime === "string")
                    message.closetime = parseInt(object.closetime, 10);
                else if (typeof object.closetime === "number")
                    message.closetime = object.closetime;
                else if (typeof object.closetime === "object")
                    message.closetime = new $util.LongBits(object.closetime.low >>> 0, object.closetime.high >>> 0).toNumber();
            if (object.period != null)
                message.period = object.period | 0;
            if (object.ohlc != null) {
                if (typeof object.ohlc !== "object")
                    throw TypeError(".ProtobufMarkets.Interval.ohlc: object expected");
                message.ohlc = $root.ProtobufMarkets.Interval.OHLC.fromObject(object.ohlc);
            }
            if (object.volumeBaseStr != null)
                message.volumeBaseStr = String(object.volumeBaseStr);
            if (object.volumeQuoteStr != null)
                message.volumeQuoteStr = String(object.volumeQuoteStr);
            if (object.volumeBase != null)
                message.volumeBase = Number(object.volumeBase);
            if (object.volumeQuote != null)
                message.volumeQuote = Number(object.volumeQuote);
            return message;
        };

        /**
         * Creates a plain object from an Interval message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufMarkets.Interval
         * @static
         * @param {ProtobufMarkets.Interval} message Interval
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Interval.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.closetime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.closetime = options.longs === String ? "0" : 0;
                object.ohlc = null;
                object.volumeBase = 0;
                object.period = 0;
                object.volumeQuote = 0;
                object.volumeBaseStr = "";
                object.volumeQuoteStr = "";
            }
            if (message.closetime != null && message.hasOwnProperty("closetime"))
                if (typeof message.closetime === "number")
                    object.closetime = options.longs === String ? String(message.closetime) : message.closetime;
                else
                    object.closetime = options.longs === String ? $util.Long.prototype.toString.call(message.closetime) : options.longs === Number ? new $util.LongBits(message.closetime.low >>> 0, message.closetime.high >>> 0).toNumber() : message.closetime;
            if (message.ohlc != null && message.hasOwnProperty("ohlc"))
                object.ohlc = $root.ProtobufMarkets.Interval.OHLC.toObject(message.ohlc, options);
            if (message.volumeBase != null && message.hasOwnProperty("volumeBase"))
                object.volumeBase = options.json && !isFinite(message.volumeBase) ? String(message.volumeBase) : message.volumeBase;
            if (message.period != null && message.hasOwnProperty("period"))
                object.period = message.period;
            if (message.volumeQuote != null && message.hasOwnProperty("volumeQuote"))
                object.volumeQuote = options.json && !isFinite(message.volumeQuote) ? String(message.volumeQuote) : message.volumeQuote;
            if (message.volumeBaseStr != null && message.hasOwnProperty("volumeBaseStr"))
                object.volumeBaseStr = message.volumeBaseStr;
            if (message.volumeQuoteStr != null && message.hasOwnProperty("volumeQuoteStr"))
                object.volumeQuoteStr = message.volumeQuoteStr;
            return object;
        };

        /**
         * Converts this Interval to JSON.
         * @function toJSON
         * @memberof ProtobufMarkets.Interval
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Interval.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Interval.OHLC = (function() {

            /**
             * Properties of a OHLC.
             * @memberof ProtobufMarkets.Interval
             * @interface IOHLC
             * @property {string|null} [openStr] OHLC openStr
             * @property {string|null} [highStr] OHLC highStr
             * @property {string|null} [lowStr] OHLC lowStr
             * @property {string|null} [closeStr] OHLC closeStr
             * @property {number|null} [open] OHLC open
             * @property {number|null} [high] OHLC high
             * @property {number|null} [low] OHLC low
             * @property {number|null} [close] OHLC close
             */

            /**
             * Constructs a new OHLC.
             * @memberof ProtobufMarkets.Interval
             * @classdesc Represents a OHLC.
             * @implements IOHLC
             * @constructor
             * @param {ProtobufMarkets.Interval.IOHLC=} [properties] Properties to set
             */
            function OHLC(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * OHLC openStr.
             * @member {string} openStr
             * @memberof ProtobufMarkets.Interval.OHLC
             * @instance
             */
            OHLC.prototype.openStr = "";

            /**
             * OHLC highStr.
             * @member {string} highStr
             * @memberof ProtobufMarkets.Interval.OHLC
             * @instance
             */
            OHLC.prototype.highStr = "";

            /**
             * OHLC lowStr.
             * @member {string} lowStr
             * @memberof ProtobufMarkets.Interval.OHLC
             * @instance
             */
            OHLC.prototype.lowStr = "";

            /**
             * OHLC closeStr.
             * @member {string} closeStr
             * @memberof ProtobufMarkets.Interval.OHLC
             * @instance
             */
            OHLC.prototype.closeStr = "";

            /**
             * OHLC open.
             * @member {number} open
             * @memberof ProtobufMarkets.Interval.OHLC
             * @instance
             */
            OHLC.prototype.open = 0;

            /**
             * OHLC high.
             * @member {number} high
             * @memberof ProtobufMarkets.Interval.OHLC
             * @instance
             */
            OHLC.prototype.high = 0;

            /**
             * OHLC low.
             * @member {number} low
             * @memberof ProtobufMarkets.Interval.OHLC
             * @instance
             */
            OHLC.prototype.low = 0;

            /**
             * OHLC close.
             * @member {number} close
             * @memberof ProtobufMarkets.Interval.OHLC
             * @instance
             */
            OHLC.prototype.close = 0;

            /**
             * Creates a new OHLC instance using the specified properties.
             * @function create
             * @memberof ProtobufMarkets.Interval.OHLC
             * @static
             * @param {ProtobufMarkets.Interval.IOHLC=} [properties] Properties to set
             * @returns {ProtobufMarkets.Interval.OHLC} OHLC instance
             */
            OHLC.create = function create(properties) {
                return new OHLC(properties);
            };

            /**
             * Encodes the specified OHLC message. Does not implicitly {@link ProtobufMarkets.Interval.OHLC.verify|verify} messages.
             * @function encode
             * @memberof ProtobufMarkets.Interval.OHLC
             * @static
             * @param {ProtobufMarkets.Interval.IOHLC} message OHLC message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OHLC.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.open != null && message.hasOwnProperty("open"))
                    writer.uint32(/* id 1, wireType 5 =*/13).float(message.open);
                if (message.high != null && message.hasOwnProperty("high"))
                    writer.uint32(/* id 2, wireType 5 =*/21).float(message.high);
                if (message.low != null && message.hasOwnProperty("low"))
                    writer.uint32(/* id 3, wireType 5 =*/29).float(message.low);
                if (message.close != null && message.hasOwnProperty("close"))
                    writer.uint32(/* id 4, wireType 5 =*/37).float(message.close);
                if (message.openStr != null && message.hasOwnProperty("openStr"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.openStr);
                if (message.highStr != null && message.hasOwnProperty("highStr"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.highStr);
                if (message.lowStr != null && message.hasOwnProperty("lowStr"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.lowStr);
                if (message.closeStr != null && message.hasOwnProperty("closeStr"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.closeStr);
                return writer;
            };

            /**
             * Encodes the specified OHLC message, length delimited. Does not implicitly {@link ProtobufMarkets.Interval.OHLC.verify|verify} messages.
             * @function encodeDelimited
             * @memberof ProtobufMarkets.Interval.OHLC
             * @static
             * @param {ProtobufMarkets.Interval.IOHLC} message OHLC message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            OHLC.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a OHLC message from the specified reader or buffer.
             * @function decode
             * @memberof ProtobufMarkets.Interval.OHLC
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {ProtobufMarkets.Interval.OHLC} OHLC
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OHLC.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.Interval.OHLC();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 5:
                        message.openStr = reader.string();
                        break;
                    case 6:
                        message.highStr = reader.string();
                        break;
                    case 7:
                        message.lowStr = reader.string();
                        break;
                    case 8:
                        message.closeStr = reader.string();
                        break;
                    case 1:
                        message.open = reader.float();
                        break;
                    case 2:
                        message.high = reader.float();
                        break;
                    case 3:
                        message.low = reader.float();
                        break;
                    case 4:
                        message.close = reader.float();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a OHLC message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof ProtobufMarkets.Interval.OHLC
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {ProtobufMarkets.Interval.OHLC} OHLC
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            OHLC.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a OHLC message.
             * @function verify
             * @memberof ProtobufMarkets.Interval.OHLC
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            OHLC.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.openStr != null && message.hasOwnProperty("openStr"))
                    if (!$util.isString(message.openStr))
                        return "openStr: string expected";
                if (message.highStr != null && message.hasOwnProperty("highStr"))
                    if (!$util.isString(message.highStr))
                        return "highStr: string expected";
                if (message.lowStr != null && message.hasOwnProperty("lowStr"))
                    if (!$util.isString(message.lowStr))
                        return "lowStr: string expected";
                if (message.closeStr != null && message.hasOwnProperty("closeStr"))
                    if (!$util.isString(message.closeStr))
                        return "closeStr: string expected";
                if (message.open != null && message.hasOwnProperty("open"))
                    if (typeof message.open !== "number")
                        return "open: number expected";
                if (message.high != null && message.hasOwnProperty("high"))
                    if (typeof message.high !== "number")
                        return "high: number expected";
                if (message.low != null && message.hasOwnProperty("low"))
                    if (typeof message.low !== "number")
                        return "low: number expected";
                if (message.close != null && message.hasOwnProperty("close"))
                    if (typeof message.close !== "number")
                        return "close: number expected";
                return null;
            };

            /**
             * Creates a OHLC message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof ProtobufMarkets.Interval.OHLC
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {ProtobufMarkets.Interval.OHLC} OHLC
             */
            OHLC.fromObject = function fromObject(object) {
                if (object instanceof $root.ProtobufMarkets.Interval.OHLC)
                    return object;
                var message = new $root.ProtobufMarkets.Interval.OHLC();
                if (object.openStr != null)
                    message.openStr = String(object.openStr);
                if (object.highStr != null)
                    message.highStr = String(object.highStr);
                if (object.lowStr != null)
                    message.lowStr = String(object.lowStr);
                if (object.closeStr != null)
                    message.closeStr = String(object.closeStr);
                if (object.open != null)
                    message.open = Number(object.open);
                if (object.high != null)
                    message.high = Number(object.high);
                if (object.low != null)
                    message.low = Number(object.low);
                if (object.close != null)
                    message.close = Number(object.close);
                return message;
            };

            /**
             * Creates a plain object from a OHLC message. Also converts values to other types if specified.
             * @function toObject
             * @memberof ProtobufMarkets.Interval.OHLC
             * @static
             * @param {ProtobufMarkets.Interval.OHLC} message OHLC
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            OHLC.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.open = 0;
                    object.high = 0;
                    object.low = 0;
                    object.close = 0;
                    object.openStr = "";
                    object.highStr = "";
                    object.lowStr = "";
                    object.closeStr = "";
                }
                if (message.open != null && message.hasOwnProperty("open"))
                    object.open = options.json && !isFinite(message.open) ? String(message.open) : message.open;
                if (message.high != null && message.hasOwnProperty("high"))
                    object.high = options.json && !isFinite(message.high) ? String(message.high) : message.high;
                if (message.low != null && message.hasOwnProperty("low"))
                    object.low = options.json && !isFinite(message.low) ? String(message.low) : message.low;
                if (message.close != null && message.hasOwnProperty("close"))
                    object.close = options.json && !isFinite(message.close) ? String(message.close) : message.close;
                if (message.openStr != null && message.hasOwnProperty("openStr"))
                    object.openStr = message.openStr;
                if (message.highStr != null && message.hasOwnProperty("highStr"))
                    object.highStr = message.highStr;
                if (message.lowStr != null && message.hasOwnProperty("lowStr"))
                    object.lowStr = message.lowStr;
                if (message.closeStr != null && message.hasOwnProperty("closeStr"))
                    object.closeStr = message.closeStr;
                return object;
            };

            /**
             * Converts this OHLC to JSON.
             * @function toJSON
             * @memberof ProtobufMarkets.Interval.OHLC
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            OHLC.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return OHLC;
        })();

        return Interval;
    })();

    ProtobufMarkets.IntervalsUpdate = (function() {

        /**
         * Properties of an IntervalsUpdate.
         * @memberof ProtobufMarkets
         * @interface IIntervalsUpdate
         * @property {Array.<ProtobufMarkets.IInterval>|null} [intervals] IntervalsUpdate intervals
         */

        /**
         * Constructs a new IntervalsUpdate.
         * @memberof ProtobufMarkets
         * @classdesc Represents an IntervalsUpdate.
         * @implements IIntervalsUpdate
         * @constructor
         * @param {ProtobufMarkets.IIntervalsUpdate=} [properties] Properties to set
         */
        function IntervalsUpdate(properties) {
            this.intervals = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IntervalsUpdate intervals.
         * @member {Array.<ProtobufMarkets.IInterval>} intervals
         * @memberof ProtobufMarkets.IntervalsUpdate
         * @instance
         */
        IntervalsUpdate.prototype.intervals = $util.emptyArray;

        /**
         * Creates a new IntervalsUpdate instance using the specified properties.
         * @function create
         * @memberof ProtobufMarkets.IntervalsUpdate
         * @static
         * @param {ProtobufMarkets.IIntervalsUpdate=} [properties] Properties to set
         * @returns {ProtobufMarkets.IntervalsUpdate} IntervalsUpdate instance
         */
        IntervalsUpdate.create = function create(properties) {
            return new IntervalsUpdate(properties);
        };

        /**
         * Encodes the specified IntervalsUpdate message. Does not implicitly {@link ProtobufMarkets.IntervalsUpdate.verify|verify} messages.
         * @function encode
         * @memberof ProtobufMarkets.IntervalsUpdate
         * @static
         * @param {ProtobufMarkets.IIntervalsUpdate} message IntervalsUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntervalsUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.intervals != null && message.intervals.length)
                for (var i = 0; i < message.intervals.length; ++i)
                    $root.ProtobufMarkets.Interval.encode(message.intervals[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified IntervalsUpdate message, length delimited. Does not implicitly {@link ProtobufMarkets.IntervalsUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufMarkets.IntervalsUpdate
         * @static
         * @param {ProtobufMarkets.IIntervalsUpdate} message IntervalsUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IntervalsUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IntervalsUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufMarkets.IntervalsUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufMarkets.IntervalsUpdate} IntervalsUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntervalsUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.IntervalsUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.intervals && message.intervals.length))
                        message.intervals = [];
                    message.intervals.push($root.ProtobufMarkets.Interval.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IntervalsUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufMarkets.IntervalsUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufMarkets.IntervalsUpdate} IntervalsUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IntervalsUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IntervalsUpdate message.
         * @function verify
         * @memberof ProtobufMarkets.IntervalsUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IntervalsUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.intervals != null && message.hasOwnProperty("intervals")) {
                if (!Array.isArray(message.intervals))
                    return "intervals: array expected";
                for (var i = 0; i < message.intervals.length; ++i) {
                    var error = $root.ProtobufMarkets.Interval.verify(message.intervals[i]);
                    if (error)
                        return "intervals." + error;
                }
            }
            return null;
        };

        /**
         * Creates an IntervalsUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufMarkets.IntervalsUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufMarkets.IntervalsUpdate} IntervalsUpdate
         */
        IntervalsUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufMarkets.IntervalsUpdate)
                return object;
            var message = new $root.ProtobufMarkets.IntervalsUpdate();
            if (object.intervals) {
                if (!Array.isArray(object.intervals))
                    throw TypeError(".ProtobufMarkets.IntervalsUpdate.intervals: array expected");
                message.intervals = [];
                for (var i = 0; i < object.intervals.length; ++i) {
                    if (typeof object.intervals[i] !== "object")
                        throw TypeError(".ProtobufMarkets.IntervalsUpdate.intervals: object expected");
                    message.intervals[i] = $root.ProtobufMarkets.Interval.fromObject(object.intervals[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an IntervalsUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufMarkets.IntervalsUpdate
         * @static
         * @param {ProtobufMarkets.IntervalsUpdate} message IntervalsUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IntervalsUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.intervals = [];
            if (message.intervals && message.intervals.length) {
                object.intervals = [];
                for (var j = 0; j < message.intervals.length; ++j)
                    object.intervals[j] = $root.ProtobufMarkets.Interval.toObject(message.intervals[j], options);
            }
            return object;
        };

        /**
         * Converts this IntervalsUpdate to JSON.
         * @function toJSON
         * @memberof ProtobufMarkets.IntervalsUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IntervalsUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IntervalsUpdate;
    })();

    ProtobufMarkets.SummaryUpdate = (function() {

        /**
         * Properties of a SummaryUpdate.
         * @memberof ProtobufMarkets
         * @interface ISummaryUpdate
         * @property {string|null} [lastStr] SummaryUpdate lastStr
         * @property {string|null} [highStr] SummaryUpdate highStr
         * @property {string|null} [lowStr] SummaryUpdate lowStr
         * @property {string|null} [volumeBaseStr] SummaryUpdate volumeBaseStr
         * @property {string|null} [volumeQuoteStr] SummaryUpdate volumeQuoteStr
         * @property {string|null} [changeAbsoluteStr] SummaryUpdate changeAbsoluteStr
         * @property {string|null} [changePercentStr] SummaryUpdate changePercentStr
         * @property {number|null} [numTrades] SummaryUpdate numTrades
         * @property {number|null} [last] SummaryUpdate last
         * @property {number|null} [high] SummaryUpdate high
         * @property {number|null} [low] SummaryUpdate low
         * @property {number|null} [volumeBase] SummaryUpdate volumeBase
         * @property {number|null} [volumeQuote] SummaryUpdate volumeQuote
         * @property {number|null} [changeAbsolute] SummaryUpdate changeAbsolute
         * @property {number|null} [changePercent] SummaryUpdate changePercent
         */

        /**
         * Constructs a new SummaryUpdate.
         * @memberof ProtobufMarkets
         * @classdesc Represents a SummaryUpdate.
         * @implements ISummaryUpdate
         * @constructor
         * @param {ProtobufMarkets.ISummaryUpdate=} [properties] Properties to set
         */
        function SummaryUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SummaryUpdate lastStr.
         * @member {string} lastStr
         * @memberof ProtobufMarkets.SummaryUpdate
         * @instance
         */
        SummaryUpdate.prototype.lastStr = "";

        /**
         * SummaryUpdate highStr.
         * @member {string} highStr
         * @memberof ProtobufMarkets.SummaryUpdate
         * @instance
         */
        SummaryUpdate.prototype.highStr = "";

        /**
         * SummaryUpdate lowStr.
         * @member {string} lowStr
         * @memberof ProtobufMarkets.SummaryUpdate
         * @instance
         */
        SummaryUpdate.prototype.lowStr = "";

        /**
         * SummaryUpdate volumeBaseStr.
         * @member {string} volumeBaseStr
         * @memberof ProtobufMarkets.SummaryUpdate
         * @instance
         */
        SummaryUpdate.prototype.volumeBaseStr = "";

        /**
         * SummaryUpdate volumeQuoteStr.
         * @member {string} volumeQuoteStr
         * @memberof ProtobufMarkets.SummaryUpdate
         * @instance
         */
        SummaryUpdate.prototype.volumeQuoteStr = "";

        /**
         * SummaryUpdate changeAbsoluteStr.
         * @member {string} changeAbsoluteStr
         * @memberof ProtobufMarkets.SummaryUpdate
         * @instance
         */
        SummaryUpdate.prototype.changeAbsoluteStr = "";

        /**
         * SummaryUpdate changePercentStr.
         * @member {string} changePercentStr
         * @memberof ProtobufMarkets.SummaryUpdate
         * @instance
         */
        SummaryUpdate.prototype.changePercentStr = "";

        /**
         * SummaryUpdate numTrades.
         * @member {number} numTrades
         * @memberof ProtobufMarkets.SummaryUpdate
         * @instance
         */
        SummaryUpdate.prototype.numTrades = 0;

        /**
         * SummaryUpdate last.
         * @member {number} last
         * @memberof ProtobufMarkets.SummaryUpdate
         * @instance
         */
        SummaryUpdate.prototype.last = 0;

        /**
         * SummaryUpdate high.
         * @member {number} high
         * @memberof ProtobufMarkets.SummaryUpdate
         * @instance
         */
        SummaryUpdate.prototype.high = 0;

        /**
         * SummaryUpdate low.
         * @member {number} low
         * @memberof ProtobufMarkets.SummaryUpdate
         * @instance
         */
        SummaryUpdate.prototype.low = 0;

        /**
         * SummaryUpdate volumeBase.
         * @member {number} volumeBase
         * @memberof ProtobufMarkets.SummaryUpdate
         * @instance
         */
        SummaryUpdate.prototype.volumeBase = 0;

        /**
         * SummaryUpdate volumeQuote.
         * @member {number} volumeQuote
         * @memberof ProtobufMarkets.SummaryUpdate
         * @instance
         */
        SummaryUpdate.prototype.volumeQuote = 0;

        /**
         * SummaryUpdate changeAbsolute.
         * @member {number} changeAbsolute
         * @memberof ProtobufMarkets.SummaryUpdate
         * @instance
         */
        SummaryUpdate.prototype.changeAbsolute = 0;

        /**
         * SummaryUpdate changePercent.
         * @member {number} changePercent
         * @memberof ProtobufMarkets.SummaryUpdate
         * @instance
         */
        SummaryUpdate.prototype.changePercent = 0;

        /**
         * Creates a new SummaryUpdate instance using the specified properties.
         * @function create
         * @memberof ProtobufMarkets.SummaryUpdate
         * @static
         * @param {ProtobufMarkets.ISummaryUpdate=} [properties] Properties to set
         * @returns {ProtobufMarkets.SummaryUpdate} SummaryUpdate instance
         */
        SummaryUpdate.create = function create(properties) {
            return new SummaryUpdate(properties);
        };

        /**
         * Encodes the specified SummaryUpdate message. Does not implicitly {@link ProtobufMarkets.SummaryUpdate.verify|verify} messages.
         * @function encode
         * @memberof ProtobufMarkets.SummaryUpdate
         * @static
         * @param {ProtobufMarkets.ISummaryUpdate} message SummaryUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SummaryUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.last != null && message.hasOwnProperty("last"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.last);
            if (message.high != null && message.hasOwnProperty("high"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.high);
            if (message.low != null && message.hasOwnProperty("low"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.low);
            if (message.volumeBase != null && message.hasOwnProperty("volumeBase"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.volumeBase);
            if (message.changeAbsolute != null && message.hasOwnProperty("changeAbsolute"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.changeAbsolute);
            if (message.changePercent != null && message.hasOwnProperty("changePercent"))
                writer.uint32(/* id 7, wireType 5 =*/61).float(message.changePercent);
            if (message.numTrades != null && message.hasOwnProperty("numTrades"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.numTrades);
            if (message.volumeQuote != null && message.hasOwnProperty("volumeQuote"))
                writer.uint32(/* id 9, wireType 5 =*/77).float(message.volumeQuote);
            if (message.lastStr != null && message.hasOwnProperty("lastStr"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.lastStr);
            if (message.highStr != null && message.hasOwnProperty("highStr"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.highStr);
            if (message.lowStr != null && message.hasOwnProperty("lowStr"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.lowStr);
            if (message.volumeBaseStr != null && message.hasOwnProperty("volumeBaseStr"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.volumeBaseStr);
            if (message.volumeQuoteStr != null && message.hasOwnProperty("volumeQuoteStr"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.volumeQuoteStr);
            if (message.changeAbsoluteStr != null && message.hasOwnProperty("changeAbsoluteStr"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.changeAbsoluteStr);
            if (message.changePercentStr != null && message.hasOwnProperty("changePercentStr"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.changePercentStr);
            return writer;
        };

        /**
         * Encodes the specified SummaryUpdate message, length delimited. Does not implicitly {@link ProtobufMarkets.SummaryUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufMarkets.SummaryUpdate
         * @static
         * @param {ProtobufMarkets.ISummaryUpdate} message SummaryUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SummaryUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SummaryUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufMarkets.SummaryUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufMarkets.SummaryUpdate} SummaryUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SummaryUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.SummaryUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10:
                    message.lastStr = reader.string();
                    break;
                case 11:
                    message.highStr = reader.string();
                    break;
                case 12:
                    message.lowStr = reader.string();
                    break;
                case 13:
                    message.volumeBaseStr = reader.string();
                    break;
                case 14:
                    message.volumeQuoteStr = reader.string();
                    break;
                case 15:
                    message.changeAbsoluteStr = reader.string();
                    break;
                case 16:
                    message.changePercentStr = reader.string();
                    break;
                case 8:
                    message.numTrades = reader.int32();
                    break;
                case 2:
                    message.last = reader.float();
                    break;
                case 3:
                    message.high = reader.float();
                    break;
                case 4:
                    message.low = reader.float();
                    break;
                case 5:
                    message.volumeBase = reader.float();
                    break;
                case 9:
                    message.volumeQuote = reader.float();
                    break;
                case 6:
                    message.changeAbsolute = reader.float();
                    break;
                case 7:
                    message.changePercent = reader.float();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SummaryUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufMarkets.SummaryUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufMarkets.SummaryUpdate} SummaryUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SummaryUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SummaryUpdate message.
         * @function verify
         * @memberof ProtobufMarkets.SummaryUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SummaryUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lastStr != null && message.hasOwnProperty("lastStr"))
                if (!$util.isString(message.lastStr))
                    return "lastStr: string expected";
            if (message.highStr != null && message.hasOwnProperty("highStr"))
                if (!$util.isString(message.highStr))
                    return "highStr: string expected";
            if (message.lowStr != null && message.hasOwnProperty("lowStr"))
                if (!$util.isString(message.lowStr))
                    return "lowStr: string expected";
            if (message.volumeBaseStr != null && message.hasOwnProperty("volumeBaseStr"))
                if (!$util.isString(message.volumeBaseStr))
                    return "volumeBaseStr: string expected";
            if (message.volumeQuoteStr != null && message.hasOwnProperty("volumeQuoteStr"))
                if (!$util.isString(message.volumeQuoteStr))
                    return "volumeQuoteStr: string expected";
            if (message.changeAbsoluteStr != null && message.hasOwnProperty("changeAbsoluteStr"))
                if (!$util.isString(message.changeAbsoluteStr))
                    return "changeAbsoluteStr: string expected";
            if (message.changePercentStr != null && message.hasOwnProperty("changePercentStr"))
                if (!$util.isString(message.changePercentStr))
                    return "changePercentStr: string expected";
            if (message.numTrades != null && message.hasOwnProperty("numTrades"))
                if (!$util.isInteger(message.numTrades))
                    return "numTrades: integer expected";
            if (message.last != null && message.hasOwnProperty("last"))
                if (typeof message.last !== "number")
                    return "last: number expected";
            if (message.high != null && message.hasOwnProperty("high"))
                if (typeof message.high !== "number")
                    return "high: number expected";
            if (message.low != null && message.hasOwnProperty("low"))
                if (typeof message.low !== "number")
                    return "low: number expected";
            if (message.volumeBase != null && message.hasOwnProperty("volumeBase"))
                if (typeof message.volumeBase !== "number")
                    return "volumeBase: number expected";
            if (message.volumeQuote != null && message.hasOwnProperty("volumeQuote"))
                if (typeof message.volumeQuote !== "number")
                    return "volumeQuote: number expected";
            if (message.changeAbsolute != null && message.hasOwnProperty("changeAbsolute"))
                if (typeof message.changeAbsolute !== "number")
                    return "changeAbsolute: number expected";
            if (message.changePercent != null && message.hasOwnProperty("changePercent"))
                if (typeof message.changePercent !== "number")
                    return "changePercent: number expected";
            return null;
        };

        /**
         * Creates a SummaryUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufMarkets.SummaryUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufMarkets.SummaryUpdate} SummaryUpdate
         */
        SummaryUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufMarkets.SummaryUpdate)
                return object;
            var message = new $root.ProtobufMarkets.SummaryUpdate();
            if (object.lastStr != null)
                message.lastStr = String(object.lastStr);
            if (object.highStr != null)
                message.highStr = String(object.highStr);
            if (object.lowStr != null)
                message.lowStr = String(object.lowStr);
            if (object.volumeBaseStr != null)
                message.volumeBaseStr = String(object.volumeBaseStr);
            if (object.volumeQuoteStr != null)
                message.volumeQuoteStr = String(object.volumeQuoteStr);
            if (object.changeAbsoluteStr != null)
                message.changeAbsoluteStr = String(object.changeAbsoluteStr);
            if (object.changePercentStr != null)
                message.changePercentStr = String(object.changePercentStr);
            if (object.numTrades != null)
                message.numTrades = object.numTrades | 0;
            if (object.last != null)
                message.last = Number(object.last);
            if (object.high != null)
                message.high = Number(object.high);
            if (object.low != null)
                message.low = Number(object.low);
            if (object.volumeBase != null)
                message.volumeBase = Number(object.volumeBase);
            if (object.volumeQuote != null)
                message.volumeQuote = Number(object.volumeQuote);
            if (object.changeAbsolute != null)
                message.changeAbsolute = Number(object.changeAbsolute);
            if (object.changePercent != null)
                message.changePercent = Number(object.changePercent);
            return message;
        };

        /**
         * Creates a plain object from a SummaryUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufMarkets.SummaryUpdate
         * @static
         * @param {ProtobufMarkets.SummaryUpdate} message SummaryUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SummaryUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.last = 0;
                object.high = 0;
                object.low = 0;
                object.volumeBase = 0;
                object.changeAbsolute = 0;
                object.changePercent = 0;
                object.numTrades = 0;
                object.volumeQuote = 0;
                object.lastStr = "";
                object.highStr = "";
                object.lowStr = "";
                object.volumeBaseStr = "";
                object.volumeQuoteStr = "";
                object.changeAbsoluteStr = "";
                object.changePercentStr = "";
            }
            if (message.last != null && message.hasOwnProperty("last"))
                object.last = options.json && !isFinite(message.last) ? String(message.last) : message.last;
            if (message.high != null && message.hasOwnProperty("high"))
                object.high = options.json && !isFinite(message.high) ? String(message.high) : message.high;
            if (message.low != null && message.hasOwnProperty("low"))
                object.low = options.json && !isFinite(message.low) ? String(message.low) : message.low;
            if (message.volumeBase != null && message.hasOwnProperty("volumeBase"))
                object.volumeBase = options.json && !isFinite(message.volumeBase) ? String(message.volumeBase) : message.volumeBase;
            if (message.changeAbsolute != null && message.hasOwnProperty("changeAbsolute"))
                object.changeAbsolute = options.json && !isFinite(message.changeAbsolute) ? String(message.changeAbsolute) : message.changeAbsolute;
            if (message.changePercent != null && message.hasOwnProperty("changePercent"))
                object.changePercent = options.json && !isFinite(message.changePercent) ? String(message.changePercent) : message.changePercent;
            if (message.numTrades != null && message.hasOwnProperty("numTrades"))
                object.numTrades = message.numTrades;
            if (message.volumeQuote != null && message.hasOwnProperty("volumeQuote"))
                object.volumeQuote = options.json && !isFinite(message.volumeQuote) ? String(message.volumeQuote) : message.volumeQuote;
            if (message.lastStr != null && message.hasOwnProperty("lastStr"))
                object.lastStr = message.lastStr;
            if (message.highStr != null && message.hasOwnProperty("highStr"))
                object.highStr = message.highStr;
            if (message.lowStr != null && message.hasOwnProperty("lowStr"))
                object.lowStr = message.lowStr;
            if (message.volumeBaseStr != null && message.hasOwnProperty("volumeBaseStr"))
                object.volumeBaseStr = message.volumeBaseStr;
            if (message.volumeQuoteStr != null && message.hasOwnProperty("volumeQuoteStr"))
                object.volumeQuoteStr = message.volumeQuoteStr;
            if (message.changeAbsoluteStr != null && message.hasOwnProperty("changeAbsoluteStr"))
                object.changeAbsoluteStr = message.changeAbsoluteStr;
            if (message.changePercentStr != null && message.hasOwnProperty("changePercentStr"))
                object.changePercentStr = message.changePercentStr;
            return object;
        };

        /**
         * Converts this SummaryUpdate to JSON.
         * @function toJSON
         * @memberof ProtobufMarkets.SummaryUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SummaryUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SummaryUpdate;
    })();

    ProtobufMarkets.SparklineUpdate = (function() {

        /**
         * Properties of a SparklineUpdate.
         * @memberof ProtobufMarkets
         * @interface ISparklineUpdate
         * @property {number|Long|null} [time] SparklineUpdate time
         * @property {number|null} [price] SparklineUpdate price
         * @property {string|null} [priceStr] SparklineUpdate priceStr
         */

        /**
         * Constructs a new SparklineUpdate.
         * @memberof ProtobufMarkets
         * @classdesc Represents a SparklineUpdate.
         * @implements ISparklineUpdate
         * @constructor
         * @param {ProtobufMarkets.ISparklineUpdate=} [properties] Properties to set
         */
        function SparklineUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SparklineUpdate time.
         * @member {number|Long} time
         * @memberof ProtobufMarkets.SparklineUpdate
         * @instance
         */
        SparklineUpdate.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SparklineUpdate price.
         * @member {number} price
         * @memberof ProtobufMarkets.SparklineUpdate
         * @instance
         */
        SparklineUpdate.prototype.price = 0;

        /**
         * SparklineUpdate priceStr.
         * @member {string} priceStr
         * @memberof ProtobufMarkets.SparklineUpdate
         * @instance
         */
        SparklineUpdate.prototype.priceStr = "";

        /**
         * Creates a new SparklineUpdate instance using the specified properties.
         * @function create
         * @memberof ProtobufMarkets.SparklineUpdate
         * @static
         * @param {ProtobufMarkets.ISparklineUpdate=} [properties] Properties to set
         * @returns {ProtobufMarkets.SparklineUpdate} SparklineUpdate instance
         */
        SparklineUpdate.create = function create(properties) {
            return new SparklineUpdate(properties);
        };

        /**
         * Encodes the specified SparklineUpdate message. Does not implicitly {@link ProtobufMarkets.SparklineUpdate.verify|verify} messages.
         * @function encode
         * @memberof ProtobufMarkets.SparklineUpdate
         * @static
         * @param {ProtobufMarkets.ISparklineUpdate} message SparklineUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SparklineUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.time);
            if (message.price != null && message.hasOwnProperty("price"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.price);
            if (message.priceStr != null && message.hasOwnProperty("priceStr"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.priceStr);
            return writer;
        };

        /**
         * Encodes the specified SparklineUpdate message, length delimited. Does not implicitly {@link ProtobufMarkets.SparklineUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufMarkets.SparklineUpdate
         * @static
         * @param {ProtobufMarkets.ISparklineUpdate} message SparklineUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SparklineUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SparklineUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufMarkets.SparklineUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufMarkets.SparklineUpdate} SparklineUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SparklineUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.SparklineUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.time = reader.int64();
                    break;
                case 3:
                    message.price = reader.float();
                    break;
                case 4:
                    message.priceStr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SparklineUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufMarkets.SparklineUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufMarkets.SparklineUpdate} SparklineUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SparklineUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SparklineUpdate message.
         * @function verify
         * @memberof ProtobufMarkets.SparklineUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SparklineUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (typeof message.price !== "number")
                    return "price: number expected";
            if (message.priceStr != null && message.hasOwnProperty("priceStr"))
                if (!$util.isString(message.priceStr))
                    return "priceStr: string expected";
            return null;
        };

        /**
         * Creates a SparklineUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufMarkets.SparklineUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufMarkets.SparklineUpdate} SparklineUpdate
         */
        SparklineUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufMarkets.SparklineUpdate)
                return object;
            var message = new $root.ProtobufMarkets.SparklineUpdate();
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            if (object.price != null)
                message.price = Number(object.price);
            if (object.priceStr != null)
                message.priceStr = String(object.priceStr);
            return message;
        };

        /**
         * Creates a plain object from a SparklineUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufMarkets.SparklineUpdate
         * @static
         * @param {ProtobufMarkets.SparklineUpdate} message SparklineUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SparklineUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
                object.price = 0;
                object.priceStr = "";
            }
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = options.json && !isFinite(message.price) ? String(message.price) : message.price;
            if (message.priceStr != null && message.hasOwnProperty("priceStr"))
                object.priceStr = message.priceStr;
            return object;
        };

        /**
         * Converts this SparklineUpdate to JSON.
         * @function toJSON
         * @memberof ProtobufMarkets.SparklineUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SparklineUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SparklineUpdate;
    })();

    ProtobufMarkets.PairUpdateMessage = (function() {

        /**
         * Properties of a PairUpdateMessage.
         * @memberof ProtobufMarkets
         * @interface IPairUpdateMessage
         * @property {number|Long|null} [pair] PairUpdateMessage pair
         * @property {ProtobufMarkets.IPairVwapUpdate|null} [vwapUpdate] PairUpdateMessage vwapUpdate
         * @property {ProtobufMarkets.IPairPerformanceUpdate|null} [performanceUpdate] PairUpdateMessage performanceUpdate
         * @property {ProtobufMarkets.IPairTrendlineUpdate|null} [trendlineUpdate] PairUpdateMessage trendlineUpdate
         */

        /**
         * Constructs a new PairUpdateMessage.
         * @memberof ProtobufMarkets
         * @classdesc Represents a PairUpdateMessage.
         * @implements IPairUpdateMessage
         * @constructor
         * @param {ProtobufMarkets.IPairUpdateMessage=} [properties] Properties to set
         */
        function PairUpdateMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PairUpdateMessage pair.
         * @member {number|Long} pair
         * @memberof ProtobufMarkets.PairUpdateMessage
         * @instance
         */
        PairUpdateMessage.prototype.pair = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PairUpdateMessage vwapUpdate.
         * @member {ProtobufMarkets.IPairVwapUpdate|null|undefined} vwapUpdate
         * @memberof ProtobufMarkets.PairUpdateMessage
         * @instance
         */
        PairUpdateMessage.prototype.vwapUpdate = null;

        /**
         * PairUpdateMessage performanceUpdate.
         * @member {ProtobufMarkets.IPairPerformanceUpdate|null|undefined} performanceUpdate
         * @memberof ProtobufMarkets.PairUpdateMessage
         * @instance
         */
        PairUpdateMessage.prototype.performanceUpdate = null;

        /**
         * PairUpdateMessage trendlineUpdate.
         * @member {ProtobufMarkets.IPairTrendlineUpdate|null|undefined} trendlineUpdate
         * @memberof ProtobufMarkets.PairUpdateMessage
         * @instance
         */
        PairUpdateMessage.prototype.trendlineUpdate = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * PairUpdateMessage Update.
         * @member {"vwapUpdate"|"performanceUpdate"|"trendlineUpdate"|undefined} Update
         * @memberof ProtobufMarkets.PairUpdateMessage
         * @instance
         */
        Object.defineProperty(PairUpdateMessage.prototype, "Update", {
            get: $util.oneOfGetter($oneOfFields = ["vwapUpdate", "performanceUpdate", "trendlineUpdate"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PairUpdateMessage instance using the specified properties.
         * @function create
         * @memberof ProtobufMarkets.PairUpdateMessage
         * @static
         * @param {ProtobufMarkets.IPairUpdateMessage=} [properties] Properties to set
         * @returns {ProtobufMarkets.PairUpdateMessage} PairUpdateMessage instance
         */
        PairUpdateMessage.create = function create(properties) {
            return new PairUpdateMessage(properties);
        };

        /**
         * Encodes the specified PairUpdateMessage message. Does not implicitly {@link ProtobufMarkets.PairUpdateMessage.verify|verify} messages.
         * @function encode
         * @memberof ProtobufMarkets.PairUpdateMessage
         * @static
         * @param {ProtobufMarkets.IPairUpdateMessage} message PairUpdateMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PairUpdateMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pair != null && message.hasOwnProperty("pair"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.pair);
            if (message.vwapUpdate != null && message.hasOwnProperty("vwapUpdate"))
                $root.ProtobufMarkets.PairVwapUpdate.encode(message.vwapUpdate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.performanceUpdate != null && message.hasOwnProperty("performanceUpdate"))
                $root.ProtobufMarkets.PairPerformanceUpdate.encode(message.performanceUpdate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.trendlineUpdate != null && message.hasOwnProperty("trendlineUpdate"))
                $root.ProtobufMarkets.PairTrendlineUpdate.encode(message.trendlineUpdate, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PairUpdateMessage message, length delimited. Does not implicitly {@link ProtobufMarkets.PairUpdateMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufMarkets.PairUpdateMessage
         * @static
         * @param {ProtobufMarkets.IPairUpdateMessage} message PairUpdateMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PairUpdateMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PairUpdateMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufMarkets.PairUpdateMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufMarkets.PairUpdateMessage} PairUpdateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PairUpdateMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.PairUpdateMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pair = reader.uint64();
                    break;
                case 2:
                    message.vwapUpdate = $root.ProtobufMarkets.PairVwapUpdate.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.performanceUpdate = $root.ProtobufMarkets.PairPerformanceUpdate.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.trendlineUpdate = $root.ProtobufMarkets.PairTrendlineUpdate.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PairUpdateMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufMarkets.PairUpdateMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufMarkets.PairUpdateMessage} PairUpdateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PairUpdateMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PairUpdateMessage message.
         * @function verify
         * @memberof ProtobufMarkets.PairUpdateMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PairUpdateMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.pair != null && message.hasOwnProperty("pair"))
                if (!$util.isInteger(message.pair) && !(message.pair && $util.isInteger(message.pair.low) && $util.isInteger(message.pair.high)))
                    return "pair: integer|Long expected";
            if (message.vwapUpdate != null && message.hasOwnProperty("vwapUpdate")) {
                properties.Update = 1;
                {
                    var error = $root.ProtobufMarkets.PairVwapUpdate.verify(message.vwapUpdate);
                    if (error)
                        return "vwapUpdate." + error;
                }
            }
            if (message.performanceUpdate != null && message.hasOwnProperty("performanceUpdate")) {
                if (properties.Update === 1)
                    return "Update: multiple values";
                properties.Update = 1;
                {
                    var error = $root.ProtobufMarkets.PairPerformanceUpdate.verify(message.performanceUpdate);
                    if (error)
                        return "performanceUpdate." + error;
                }
            }
            if (message.trendlineUpdate != null && message.hasOwnProperty("trendlineUpdate")) {
                if (properties.Update === 1)
                    return "Update: multiple values";
                properties.Update = 1;
                {
                    var error = $root.ProtobufMarkets.PairTrendlineUpdate.verify(message.trendlineUpdate);
                    if (error)
                        return "trendlineUpdate." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PairUpdateMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufMarkets.PairUpdateMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufMarkets.PairUpdateMessage} PairUpdateMessage
         */
        PairUpdateMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufMarkets.PairUpdateMessage)
                return object;
            var message = new $root.ProtobufMarkets.PairUpdateMessage();
            if (object.pair != null)
                if ($util.Long)
                    (message.pair = $util.Long.fromValue(object.pair)).unsigned = true;
                else if (typeof object.pair === "string")
                    message.pair = parseInt(object.pair, 10);
                else if (typeof object.pair === "number")
                    message.pair = object.pair;
                else if (typeof object.pair === "object")
                    message.pair = new $util.LongBits(object.pair.low >>> 0, object.pair.high >>> 0).toNumber(true);
            if (object.vwapUpdate != null) {
                if (typeof object.vwapUpdate !== "object")
                    throw TypeError(".ProtobufMarkets.PairUpdateMessage.vwapUpdate: object expected");
                message.vwapUpdate = $root.ProtobufMarkets.PairVwapUpdate.fromObject(object.vwapUpdate);
            }
            if (object.performanceUpdate != null) {
                if (typeof object.performanceUpdate !== "object")
                    throw TypeError(".ProtobufMarkets.PairUpdateMessage.performanceUpdate: object expected");
                message.performanceUpdate = $root.ProtobufMarkets.PairPerformanceUpdate.fromObject(object.performanceUpdate);
            }
            if (object.trendlineUpdate != null) {
                if (typeof object.trendlineUpdate !== "object")
                    throw TypeError(".ProtobufMarkets.PairUpdateMessage.trendlineUpdate: object expected");
                message.trendlineUpdate = $root.ProtobufMarkets.PairTrendlineUpdate.fromObject(object.trendlineUpdate);
            }
            return message;
        };

        /**
         * Creates a plain object from a PairUpdateMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufMarkets.PairUpdateMessage
         * @static
         * @param {ProtobufMarkets.PairUpdateMessage} message PairUpdateMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PairUpdateMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.pair = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.pair = options.longs === String ? "0" : 0;
            if (message.pair != null && message.hasOwnProperty("pair"))
                if (typeof message.pair === "number")
                    object.pair = options.longs === String ? String(message.pair) : message.pair;
                else
                    object.pair = options.longs === String ? $util.Long.prototype.toString.call(message.pair) : options.longs === Number ? new $util.LongBits(message.pair.low >>> 0, message.pair.high >>> 0).toNumber(true) : message.pair;
            if (message.vwapUpdate != null && message.hasOwnProperty("vwapUpdate")) {
                object.vwapUpdate = $root.ProtobufMarkets.PairVwapUpdate.toObject(message.vwapUpdate, options);
                if (options.oneofs)
                    object.Update = "vwapUpdate";
            }
            if (message.performanceUpdate != null && message.hasOwnProperty("performanceUpdate")) {
                object.performanceUpdate = $root.ProtobufMarkets.PairPerformanceUpdate.toObject(message.performanceUpdate, options);
                if (options.oneofs)
                    object.Update = "performanceUpdate";
            }
            if (message.trendlineUpdate != null && message.hasOwnProperty("trendlineUpdate")) {
                object.trendlineUpdate = $root.ProtobufMarkets.PairTrendlineUpdate.toObject(message.trendlineUpdate, options);
                if (options.oneofs)
                    object.Update = "trendlineUpdate";
            }
            return object;
        };

        /**
         * Converts this PairUpdateMessage to JSON.
         * @function toJSON
         * @memberof ProtobufMarkets.PairUpdateMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PairUpdateMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PairUpdateMessage;
    })();

    ProtobufMarkets.PairVwapUpdate = (function() {

        /**
         * Properties of a PairVwapUpdate.
         * @memberof ProtobufMarkets
         * @interface IPairVwapUpdate
         * @property {number|null} [vwap] PairVwapUpdate vwap
         */

        /**
         * Constructs a new PairVwapUpdate.
         * @memberof ProtobufMarkets
         * @classdesc Represents a PairVwapUpdate.
         * @implements IPairVwapUpdate
         * @constructor
         * @param {ProtobufMarkets.IPairVwapUpdate=} [properties] Properties to set
         */
        function PairVwapUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PairVwapUpdate vwap.
         * @member {number} vwap
         * @memberof ProtobufMarkets.PairVwapUpdate
         * @instance
         */
        PairVwapUpdate.prototype.vwap = 0;

        /**
         * Creates a new PairVwapUpdate instance using the specified properties.
         * @function create
         * @memberof ProtobufMarkets.PairVwapUpdate
         * @static
         * @param {ProtobufMarkets.IPairVwapUpdate=} [properties] Properties to set
         * @returns {ProtobufMarkets.PairVwapUpdate} PairVwapUpdate instance
         */
        PairVwapUpdate.create = function create(properties) {
            return new PairVwapUpdate(properties);
        };

        /**
         * Encodes the specified PairVwapUpdate message. Does not implicitly {@link ProtobufMarkets.PairVwapUpdate.verify|verify} messages.
         * @function encode
         * @memberof ProtobufMarkets.PairVwapUpdate
         * @static
         * @param {ProtobufMarkets.IPairVwapUpdate} message PairVwapUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PairVwapUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vwap != null && message.hasOwnProperty("vwap"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.vwap);
            return writer;
        };

        /**
         * Encodes the specified PairVwapUpdate message, length delimited. Does not implicitly {@link ProtobufMarkets.PairVwapUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufMarkets.PairVwapUpdate
         * @static
         * @param {ProtobufMarkets.IPairVwapUpdate} message PairVwapUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PairVwapUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PairVwapUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufMarkets.PairVwapUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufMarkets.PairVwapUpdate} PairVwapUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PairVwapUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.PairVwapUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.vwap = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PairVwapUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufMarkets.PairVwapUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufMarkets.PairVwapUpdate} PairVwapUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PairVwapUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PairVwapUpdate message.
         * @function verify
         * @memberof ProtobufMarkets.PairVwapUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PairVwapUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.vwap != null && message.hasOwnProperty("vwap"))
                if (typeof message.vwap !== "number")
                    return "vwap: number expected";
            return null;
        };

        /**
         * Creates a PairVwapUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufMarkets.PairVwapUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufMarkets.PairVwapUpdate} PairVwapUpdate
         */
        PairVwapUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufMarkets.PairVwapUpdate)
                return object;
            var message = new $root.ProtobufMarkets.PairVwapUpdate();
            if (object.vwap != null)
                message.vwap = Number(object.vwap);
            return message;
        };

        /**
         * Creates a plain object from a PairVwapUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufMarkets.PairVwapUpdate
         * @static
         * @param {ProtobufMarkets.PairVwapUpdate} message PairVwapUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PairVwapUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.vwap = 0;
            if (message.vwap != null && message.hasOwnProperty("vwap"))
                object.vwap = options.json && !isFinite(message.vwap) ? String(message.vwap) : message.vwap;
            return object;
        };

        /**
         * Converts this PairVwapUpdate to JSON.
         * @function toJSON
         * @memberof ProtobufMarkets.PairVwapUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PairVwapUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PairVwapUpdate;
    })();

    ProtobufMarkets.PairPerformanceUpdate = (function() {

        /**
         * Properties of a PairPerformanceUpdate.
         * @memberof ProtobufMarkets
         * @interface IPairPerformanceUpdate
         * @property {string|null} [window] PairPerformanceUpdate window
         * @property {number|null} [performance] PairPerformanceUpdate performance
         */

        /**
         * Constructs a new PairPerformanceUpdate.
         * @memberof ProtobufMarkets
         * @classdesc Represents a PairPerformanceUpdate.
         * @implements IPairPerformanceUpdate
         * @constructor
         * @param {ProtobufMarkets.IPairPerformanceUpdate=} [properties] Properties to set
         */
        function PairPerformanceUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PairPerformanceUpdate window.
         * @member {string} window
         * @memberof ProtobufMarkets.PairPerformanceUpdate
         * @instance
         */
        PairPerformanceUpdate.prototype.window = "";

        /**
         * PairPerformanceUpdate performance.
         * @member {number} performance
         * @memberof ProtobufMarkets.PairPerformanceUpdate
         * @instance
         */
        PairPerformanceUpdate.prototype.performance = 0;

        /**
         * Creates a new PairPerformanceUpdate instance using the specified properties.
         * @function create
         * @memberof ProtobufMarkets.PairPerformanceUpdate
         * @static
         * @param {ProtobufMarkets.IPairPerformanceUpdate=} [properties] Properties to set
         * @returns {ProtobufMarkets.PairPerformanceUpdate} PairPerformanceUpdate instance
         */
        PairPerformanceUpdate.create = function create(properties) {
            return new PairPerformanceUpdate(properties);
        };

        /**
         * Encodes the specified PairPerformanceUpdate message. Does not implicitly {@link ProtobufMarkets.PairPerformanceUpdate.verify|verify} messages.
         * @function encode
         * @memberof ProtobufMarkets.PairPerformanceUpdate
         * @static
         * @param {ProtobufMarkets.IPairPerformanceUpdate} message PairPerformanceUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PairPerformanceUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.window != null && message.hasOwnProperty("window"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.window);
            if (message.performance != null && message.hasOwnProperty("performance"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.performance);
            return writer;
        };

        /**
         * Encodes the specified PairPerformanceUpdate message, length delimited. Does not implicitly {@link ProtobufMarkets.PairPerformanceUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufMarkets.PairPerformanceUpdate
         * @static
         * @param {ProtobufMarkets.IPairPerformanceUpdate} message PairPerformanceUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PairPerformanceUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PairPerformanceUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufMarkets.PairPerformanceUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufMarkets.PairPerformanceUpdate} PairPerformanceUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PairPerformanceUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.PairPerformanceUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.window = reader.string();
                    break;
                case 2:
                    message.performance = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PairPerformanceUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufMarkets.PairPerformanceUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufMarkets.PairPerformanceUpdate} PairPerformanceUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PairPerformanceUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PairPerformanceUpdate message.
         * @function verify
         * @memberof ProtobufMarkets.PairPerformanceUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PairPerformanceUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.window != null && message.hasOwnProperty("window"))
                if (!$util.isString(message.window))
                    return "window: string expected";
            if (message.performance != null && message.hasOwnProperty("performance"))
                if (typeof message.performance !== "number")
                    return "performance: number expected";
            return null;
        };

        /**
         * Creates a PairPerformanceUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufMarkets.PairPerformanceUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufMarkets.PairPerformanceUpdate} PairPerformanceUpdate
         */
        PairPerformanceUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufMarkets.PairPerformanceUpdate)
                return object;
            var message = new $root.ProtobufMarkets.PairPerformanceUpdate();
            if (object.window != null)
                message.window = String(object.window);
            if (object.performance != null)
                message.performance = Number(object.performance);
            return message;
        };

        /**
         * Creates a plain object from a PairPerformanceUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufMarkets.PairPerformanceUpdate
         * @static
         * @param {ProtobufMarkets.PairPerformanceUpdate} message PairPerformanceUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PairPerformanceUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.window = "";
                object.performance = 0;
            }
            if (message.window != null && message.hasOwnProperty("window"))
                object.window = message.window;
            if (message.performance != null && message.hasOwnProperty("performance"))
                object.performance = options.json && !isFinite(message.performance) ? String(message.performance) : message.performance;
            return object;
        };

        /**
         * Converts this PairPerformanceUpdate to JSON.
         * @function toJSON
         * @memberof ProtobufMarkets.PairPerformanceUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PairPerformanceUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PairPerformanceUpdate;
    })();

    ProtobufMarkets.PairTrendlineUpdate = (function() {

        /**
         * Properties of a PairTrendlineUpdate.
         * @memberof ProtobufMarkets
         * @interface IPairTrendlineUpdate
         * @property {string|null} [window] PairTrendlineUpdate window
         * @property {number|Long|null} [time] PairTrendlineUpdate time
         * @property {string|null} [price] PairTrendlineUpdate price
         * @property {string|null} [volume] PairTrendlineUpdate volume
         */

        /**
         * Constructs a new PairTrendlineUpdate.
         * @memberof ProtobufMarkets
         * @classdesc Represents a PairTrendlineUpdate.
         * @implements IPairTrendlineUpdate
         * @constructor
         * @param {ProtobufMarkets.IPairTrendlineUpdate=} [properties] Properties to set
         */
        function PairTrendlineUpdate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PairTrendlineUpdate window.
         * @member {string} window
         * @memberof ProtobufMarkets.PairTrendlineUpdate
         * @instance
         */
        PairTrendlineUpdate.prototype.window = "";

        /**
         * PairTrendlineUpdate time.
         * @member {number|Long} time
         * @memberof ProtobufMarkets.PairTrendlineUpdate
         * @instance
         */
        PairTrendlineUpdate.prototype.time = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PairTrendlineUpdate price.
         * @member {string} price
         * @memberof ProtobufMarkets.PairTrendlineUpdate
         * @instance
         */
        PairTrendlineUpdate.prototype.price = "";

        /**
         * PairTrendlineUpdate volume.
         * @member {string} volume
         * @memberof ProtobufMarkets.PairTrendlineUpdate
         * @instance
         */
        PairTrendlineUpdate.prototype.volume = "";

        /**
         * Creates a new PairTrendlineUpdate instance using the specified properties.
         * @function create
         * @memberof ProtobufMarkets.PairTrendlineUpdate
         * @static
         * @param {ProtobufMarkets.IPairTrendlineUpdate=} [properties] Properties to set
         * @returns {ProtobufMarkets.PairTrendlineUpdate} PairTrendlineUpdate instance
         */
        PairTrendlineUpdate.create = function create(properties) {
            return new PairTrendlineUpdate(properties);
        };

        /**
         * Encodes the specified PairTrendlineUpdate message. Does not implicitly {@link ProtobufMarkets.PairTrendlineUpdate.verify|verify} messages.
         * @function encode
         * @memberof ProtobufMarkets.PairTrendlineUpdate
         * @static
         * @param {ProtobufMarkets.IPairTrendlineUpdate} message PairTrendlineUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PairTrendlineUpdate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.window != null && message.hasOwnProperty("window"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.window);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.time);
            if (message.price != null && message.hasOwnProperty("price"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.price);
            if (message.volume != null && message.hasOwnProperty("volume"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.volume);
            return writer;
        };

        /**
         * Encodes the specified PairTrendlineUpdate message, length delimited. Does not implicitly {@link ProtobufMarkets.PairTrendlineUpdate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufMarkets.PairTrendlineUpdate
         * @static
         * @param {ProtobufMarkets.IPairTrendlineUpdate} message PairTrendlineUpdate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PairTrendlineUpdate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PairTrendlineUpdate message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufMarkets.PairTrendlineUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufMarkets.PairTrendlineUpdate} PairTrendlineUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PairTrendlineUpdate.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufMarkets.PairTrendlineUpdate();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.window = reader.string();
                    break;
                case 2:
                    message.time = reader.int64();
                    break;
                case 3:
                    message.price = reader.string();
                    break;
                case 4:
                    message.volume = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PairTrendlineUpdate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufMarkets.PairTrendlineUpdate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufMarkets.PairTrendlineUpdate} PairTrendlineUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PairTrendlineUpdate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PairTrendlineUpdate message.
         * @function verify
         * @memberof ProtobufMarkets.PairTrendlineUpdate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PairTrendlineUpdate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.window != null && message.hasOwnProperty("window"))
                if (!$util.isString(message.window))
                    return "window: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                    return "time: integer|Long expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (!$util.isString(message.price))
                    return "price: string expected";
            if (message.volume != null && message.hasOwnProperty("volume"))
                if (!$util.isString(message.volume))
                    return "volume: string expected";
            return null;
        };

        /**
         * Creates a PairTrendlineUpdate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufMarkets.PairTrendlineUpdate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufMarkets.PairTrendlineUpdate} PairTrendlineUpdate
         */
        PairTrendlineUpdate.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufMarkets.PairTrendlineUpdate)
                return object;
            var message = new $root.ProtobufMarkets.PairTrendlineUpdate();
            if (object.window != null)
                message.window = String(object.window);
            if (object.time != null)
                if ($util.Long)
                    (message.time = $util.Long.fromValue(object.time)).unsigned = false;
                else if (typeof object.time === "string")
                    message.time = parseInt(object.time, 10);
                else if (typeof object.time === "number")
                    message.time = object.time;
                else if (typeof object.time === "object")
                    message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber();
            if (object.price != null)
                message.price = String(object.price);
            if (object.volume != null)
                message.volume = String(object.volume);
            return message;
        };

        /**
         * Creates a plain object from a PairTrendlineUpdate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufMarkets.PairTrendlineUpdate
         * @static
         * @param {ProtobufMarkets.PairTrendlineUpdate} message PairTrendlineUpdate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PairTrendlineUpdate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.window = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.time = options.longs === String ? "0" : 0;
                object.price = "";
                object.volume = "";
            }
            if (message.window != null && message.hasOwnProperty("window"))
                object.window = message.window;
            if (message.time != null && message.hasOwnProperty("time"))
                if (typeof message.time === "number")
                    object.time = options.longs === String ? String(message.time) : message.time;
                else
                    object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber() : message.time;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = message.price;
            if (message.volume != null && message.hasOwnProperty("volume"))
                object.volume = message.volume;
            return object;
        };

        /**
         * Converts this PairTrendlineUpdate to JSON.
         * @function toJSON
         * @memberof ProtobufMarkets.PairTrendlineUpdate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PairTrendlineUpdate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PairTrendlineUpdate;
    })();

    return ProtobufMarkets;
})();

$root.ProtobufStream = (function() {

    /**
     * Namespace ProtobufStream.
     * @exports ProtobufStream
     * @namespace
     */
    var ProtobufStream = {};

    ProtobufStream.StreamMessage = (function() {

        /**
         * Properties of a StreamMessage.
         * @memberof ProtobufStream
         * @interface IStreamMessage
         * @property {ProtobufStream.IAuthenticationResult|null} [authenticationResult] StreamMessage authenticationResult
         * @property {ProtobufMarkets.IMarketUpdateMessage|null} [marketUpdate] StreamMessage marketUpdate
         * @property {ProtobufMarkets.IPairUpdateMessage|null} [pairUpdate] StreamMessage pairUpdate
         * @property {ProtobufMarkets.IAssetUpdateMessage|null} [assetUpdate] StreamMessage assetUpdate
         */

        /**
         * Constructs a new StreamMessage.
         * @memberof ProtobufStream
         * @classdesc Represents a StreamMessage.
         * @implements IStreamMessage
         * @constructor
         * @param {ProtobufStream.IStreamMessage=} [properties] Properties to set
         */
        function StreamMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StreamMessage authenticationResult.
         * @member {ProtobufStream.IAuthenticationResult|null|undefined} authenticationResult
         * @memberof ProtobufStream.StreamMessage
         * @instance
         */
        StreamMessage.prototype.authenticationResult = null;

        /**
         * StreamMessage marketUpdate.
         * @member {ProtobufMarkets.IMarketUpdateMessage|null|undefined} marketUpdate
         * @memberof ProtobufStream.StreamMessage
         * @instance
         */
        StreamMessage.prototype.marketUpdate = null;

        /**
         * StreamMessage pairUpdate.
         * @member {ProtobufMarkets.IPairUpdateMessage|null|undefined} pairUpdate
         * @memberof ProtobufStream.StreamMessage
         * @instance
         */
        StreamMessage.prototype.pairUpdate = null;

        /**
         * StreamMessage assetUpdate.
         * @member {ProtobufMarkets.IAssetUpdateMessage|null|undefined} assetUpdate
         * @memberof ProtobufStream.StreamMessage
         * @instance
         */
        StreamMessage.prototype.assetUpdate = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * StreamMessage body.
         * @member {"authenticationResult"|"marketUpdate"|"pairUpdate"|"assetUpdate"|undefined} body
         * @memberof ProtobufStream.StreamMessage
         * @instance
         */
        Object.defineProperty(StreamMessage.prototype, "body", {
            get: $util.oneOfGetter($oneOfFields = ["authenticationResult", "marketUpdate", "pairUpdate", "assetUpdate"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new StreamMessage instance using the specified properties.
         * @function create
         * @memberof ProtobufStream.StreamMessage
         * @static
         * @param {ProtobufStream.IStreamMessage=} [properties] Properties to set
         * @returns {ProtobufStream.StreamMessage} StreamMessage instance
         */
        StreamMessage.create = function create(properties) {
            return new StreamMessage(properties);
        };

        /**
         * Encodes the specified StreamMessage message. Does not implicitly {@link ProtobufStream.StreamMessage.verify|verify} messages.
         * @function encode
         * @memberof ProtobufStream.StreamMessage
         * @static
         * @param {ProtobufStream.IStreamMessage} message StreamMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.authenticationResult != null && message.hasOwnProperty("authenticationResult"))
                $root.ProtobufStream.AuthenticationResult.encode(message.authenticationResult, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.marketUpdate != null && message.hasOwnProperty("marketUpdate"))
                $root.ProtobufMarkets.MarketUpdateMessage.encode(message.marketUpdate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.pairUpdate != null && message.hasOwnProperty("pairUpdate"))
                $root.ProtobufMarkets.PairUpdateMessage.encode(message.pairUpdate, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.assetUpdate != null && message.hasOwnProperty("assetUpdate"))
                $root.ProtobufMarkets.AssetUpdateMessage.encode(message.assetUpdate, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StreamMessage message, length delimited. Does not implicitly {@link ProtobufStream.StreamMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufStream.StreamMessage
         * @static
         * @param {ProtobufStream.IStreamMessage} message StreamMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StreamMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StreamMessage message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufStream.StreamMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufStream.StreamMessage} StreamMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufStream.StreamMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.authenticationResult = $root.ProtobufStream.AuthenticationResult.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.marketUpdate = $root.ProtobufMarkets.MarketUpdateMessage.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.pairUpdate = $root.ProtobufMarkets.PairUpdateMessage.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.assetUpdate = $root.ProtobufMarkets.AssetUpdateMessage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StreamMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufStream.StreamMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufStream.StreamMessage} StreamMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StreamMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StreamMessage message.
         * @function verify
         * @memberof ProtobufStream.StreamMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StreamMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.authenticationResult != null && message.hasOwnProperty("authenticationResult")) {
                properties.body = 1;
                {
                    var error = $root.ProtobufStream.AuthenticationResult.verify(message.authenticationResult);
                    if (error)
                        return "authenticationResult." + error;
                }
            }
            if (message.marketUpdate != null && message.hasOwnProperty("marketUpdate")) {
                if (properties.body === 1)
                    return "body: multiple values";
                properties.body = 1;
                {
                    var error = $root.ProtobufMarkets.MarketUpdateMessage.verify(message.marketUpdate);
                    if (error)
                        return "marketUpdate." + error;
                }
            }
            if (message.pairUpdate != null && message.hasOwnProperty("pairUpdate")) {
                if (properties.body === 1)
                    return "body: multiple values";
                properties.body = 1;
                {
                    var error = $root.ProtobufMarkets.PairUpdateMessage.verify(message.pairUpdate);
                    if (error)
                        return "pairUpdate." + error;
                }
            }
            if (message.assetUpdate != null && message.hasOwnProperty("assetUpdate")) {
                if (properties.body === 1)
                    return "body: multiple values";
                properties.body = 1;
                {
                    var error = $root.ProtobufMarkets.AssetUpdateMessage.verify(message.assetUpdate);
                    if (error)
                        return "assetUpdate." + error;
                }
            }
            return null;
        };

        /**
         * Creates a StreamMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufStream.StreamMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufStream.StreamMessage} StreamMessage
         */
        StreamMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufStream.StreamMessage)
                return object;
            var message = new $root.ProtobufStream.StreamMessage();
            if (object.authenticationResult != null) {
                if (typeof object.authenticationResult !== "object")
                    throw TypeError(".ProtobufStream.StreamMessage.authenticationResult: object expected");
                message.authenticationResult = $root.ProtobufStream.AuthenticationResult.fromObject(object.authenticationResult);
            }
            if (object.marketUpdate != null) {
                if (typeof object.marketUpdate !== "object")
                    throw TypeError(".ProtobufStream.StreamMessage.marketUpdate: object expected");
                message.marketUpdate = $root.ProtobufMarkets.MarketUpdateMessage.fromObject(object.marketUpdate);
            }
            if (object.pairUpdate != null) {
                if (typeof object.pairUpdate !== "object")
                    throw TypeError(".ProtobufStream.StreamMessage.pairUpdate: object expected");
                message.pairUpdate = $root.ProtobufMarkets.PairUpdateMessage.fromObject(object.pairUpdate);
            }
            if (object.assetUpdate != null) {
                if (typeof object.assetUpdate !== "object")
                    throw TypeError(".ProtobufStream.StreamMessage.assetUpdate: object expected");
                message.assetUpdate = $root.ProtobufMarkets.AssetUpdateMessage.fromObject(object.assetUpdate);
            }
            return message;
        };

        /**
         * Creates a plain object from a StreamMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufStream.StreamMessage
         * @static
         * @param {ProtobufStream.StreamMessage} message StreamMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StreamMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.authenticationResult != null && message.hasOwnProperty("authenticationResult")) {
                object.authenticationResult = $root.ProtobufStream.AuthenticationResult.toObject(message.authenticationResult, options);
                if (options.oneofs)
                    object.body = "authenticationResult";
            }
            if (message.marketUpdate != null && message.hasOwnProperty("marketUpdate")) {
                object.marketUpdate = $root.ProtobufMarkets.MarketUpdateMessage.toObject(message.marketUpdate, options);
                if (options.oneofs)
                    object.body = "marketUpdate";
            }
            if (message.pairUpdate != null && message.hasOwnProperty("pairUpdate")) {
                object.pairUpdate = $root.ProtobufMarkets.PairUpdateMessage.toObject(message.pairUpdate, options);
                if (options.oneofs)
                    object.body = "pairUpdate";
            }
            if (message.assetUpdate != null && message.hasOwnProperty("assetUpdate")) {
                object.assetUpdate = $root.ProtobufMarkets.AssetUpdateMessage.toObject(message.assetUpdate, options);
                if (options.oneofs)
                    object.body = "assetUpdate";
            }
            return object;
        };

        /**
         * Converts this StreamMessage to JSON.
         * @function toJSON
         * @memberof ProtobufStream.StreamMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StreamMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StreamMessage;
    })();

    ProtobufStream.AuthenticationResult = (function() {

        /**
         * Properties of an AuthenticationResult.
         * @memberof ProtobufStream
         * @interface IAuthenticationResult
         * @property {ProtobufStream.AuthenticationResult.Status|null} [status] AuthenticationResult status
         */

        /**
         * Constructs a new AuthenticationResult.
         * @memberof ProtobufStream
         * @classdesc Represents an AuthenticationResult.
         * @implements IAuthenticationResult
         * @constructor
         * @param {ProtobufStream.IAuthenticationResult=} [properties] Properties to set
         */
        function AuthenticationResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AuthenticationResult status.
         * @member {ProtobufStream.AuthenticationResult.Status} status
         * @memberof ProtobufStream.AuthenticationResult
         * @instance
         */
        AuthenticationResult.prototype.status = 0;

        /**
         * Creates a new AuthenticationResult instance using the specified properties.
         * @function create
         * @memberof ProtobufStream.AuthenticationResult
         * @static
         * @param {ProtobufStream.IAuthenticationResult=} [properties] Properties to set
         * @returns {ProtobufStream.AuthenticationResult} AuthenticationResult instance
         */
        AuthenticationResult.create = function create(properties) {
            return new AuthenticationResult(properties);
        };

        /**
         * Encodes the specified AuthenticationResult message. Does not implicitly {@link ProtobufStream.AuthenticationResult.verify|verify} messages.
         * @function encode
         * @memberof ProtobufStream.AuthenticationResult
         * @static
         * @param {ProtobufStream.IAuthenticationResult} message AuthenticationResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified AuthenticationResult message, length delimited. Does not implicitly {@link ProtobufStream.AuthenticationResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ProtobufStream.AuthenticationResult
         * @static
         * @param {ProtobufStream.IAuthenticationResult} message AuthenticationResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AuthenticationResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AuthenticationResult message from the specified reader or buffer.
         * @function decode
         * @memberof ProtobufStream.AuthenticationResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ProtobufStream.AuthenticationResult} AuthenticationResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ProtobufStream.AuthenticationResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AuthenticationResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ProtobufStream.AuthenticationResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ProtobufStream.AuthenticationResult} AuthenticationResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AuthenticationResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AuthenticationResult message.
         * @function verify
         * @memberof ProtobufStream.AuthenticationResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AuthenticationResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            return null;
        };

        /**
         * Creates an AuthenticationResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ProtobufStream.AuthenticationResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ProtobufStream.AuthenticationResult} AuthenticationResult
         */
        AuthenticationResult.fromObject = function fromObject(object) {
            if (object instanceof $root.ProtobufStream.AuthenticationResult)
                return object;
            var message = new $root.ProtobufStream.AuthenticationResult();
            switch (object.status) {
            case "UNKNOWN":
            case 0:
                message.status = 0;
                break;
            case "AUTHENTICATED":
            case 1:
                message.status = 1;
                break;
            case "BAD_NONCE":
            case 2:
                message.status = 2;
                break;
            case "BAD_TOKEN":
            case 3:
                message.status = 3;
                break;
            case "TOKEN_EXPIRED":
            case 4:
                message.status = 4;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from an AuthenticationResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ProtobufStream.AuthenticationResult
         * @static
         * @param {ProtobufStream.AuthenticationResult} message AuthenticationResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AuthenticationResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.status = options.enums === String ? "UNKNOWN" : 0;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.ProtobufStream.AuthenticationResult.Status[message.status] : message.status;
            return object;
        };

        /**
         * Converts this AuthenticationResult to JSON.
         * @function toJSON
         * @memberof ProtobufStream.AuthenticationResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AuthenticationResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Status enum.
         * @name ProtobufStream.AuthenticationResult.Status
         * @enum {string}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} AUTHENTICATED=1 AUTHENTICATED value
         * @property {number} BAD_NONCE=2 BAD_NONCE value
         * @property {number} BAD_TOKEN=3 BAD_TOKEN value
         * @property {number} TOKEN_EXPIRED=4 TOKEN_EXPIRED value
         */
        AuthenticationResult.Status = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "AUTHENTICATED"] = 1;
            values[valuesById[2] = "BAD_NONCE"] = 2;
            values[valuesById[3] = "BAD_TOKEN"] = 3;
            values[valuesById[4] = "TOKEN_EXPIRED"] = 4;
            return values;
        })();

        return AuthenticationResult;
    })();

    return ProtobufStream;
})();

module.exports = $root;
