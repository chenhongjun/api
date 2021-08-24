// source: chipperpb.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.chippergrpc2.StreamingIntentGraphRequest');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.chippergrpc2.AudioEncoding');
goog.forwardDeclare('proto.chippergrpc2.IntentService');
goog.forwardDeclare('proto.chippergrpc2.LanguageCode');
goog.forwardDeclare('proto.chippergrpc2.RobotMode');
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.chippergrpc2.StreamingIntentGraphRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.chippergrpc2.StreamingIntentGraphRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.chippergrpc2.StreamingIntentGraphRequest.displayName = 'proto.chippergrpc2.StreamingIntentGraphRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.chippergrpc2.StreamingIntentGraphRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.chippergrpc2.StreamingIntentGraphRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chippergrpc2.StreamingIntentGraphRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    session: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deviceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    inputAudio: msg.getInputAudio_asB64(),
    languageCode: jspb.Message.getFieldWithDefault(msg, 4, 0),
    speechOnly: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    firmwareVersion: jspb.Message.getFieldWithDefault(msg, 6, ""),
    mode: jspb.Message.getFieldWithDefault(msg, 7, 0),
    bootId: jspb.Message.getFieldWithDefault(msg, 8, ""),
    skipDas: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    audioEncoding: jspb.Message.getFieldWithDefault(msg, 10, 0),
    singleUtterance: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    intentService: jspb.Message.getFieldWithDefault(msg, 12, 0),
    appKey: jspb.Message.getFieldWithDefault(msg, 13, ""),
    timezone: jspb.Message.getFieldWithDefault(msg, 14, ""),
    saveAudio: jspb.Message.getBooleanFieldWithDefault(msg, 15, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.chippergrpc2.StreamingIntentGraphRequest}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.chippergrpc2.StreamingIntentGraphRequest;
  return proto.chippergrpc2.StreamingIntentGraphRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.chippergrpc2.StreamingIntentGraphRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.chippergrpc2.StreamingIntentGraphRequest}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSession(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceId(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setInputAudio(value);
      break;
    case 4:
      var value = /** @type {!proto.chippergrpc2.LanguageCode} */ (reader.readEnum());
      msg.setLanguageCode(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSpeechOnly(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirmwareVersion(value);
      break;
    case 7:
      var value = /** @type {!proto.chippergrpc2.RobotMode} */ (reader.readEnum());
      msg.setMode(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setBootId(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipDas(value);
      break;
    case 10:
      var value = /** @type {!proto.chippergrpc2.AudioEncoding} */ (reader.readEnum());
      msg.setAudioEncoding(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSingleUtterance(value);
      break;
    case 12:
      var value = /** @type {!proto.chippergrpc2.IntentService} */ (reader.readEnum());
      msg.setIntentService(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppKey(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSaveAudio(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.chippergrpc2.StreamingIntentGraphRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.chippergrpc2.StreamingIntentGraphRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.chippergrpc2.StreamingIntentGraphRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSession();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeviceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInputAudio_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = message.getLanguageCode();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getSpeechOnly();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getFirmwareVersion();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMode();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getBootId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSkipDas();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getAudioEncoding();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getSingleUtterance();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getIntentService();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getAppKey();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getSaveAudio();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
};


/**
 * optional string session = 1;
 * @return {string}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.getSession = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.chippergrpc2.StreamingIntentGraphRequest} returns this
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.setSession = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string device_id = 2;
 * @return {string}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.getDeviceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.chippergrpc2.StreamingIntentGraphRequest} returns this
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.setDeviceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes input_audio = 3;
 * @return {string}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.getInputAudio = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes input_audio = 3;
 * This is a type-conversion wrapper around `getInputAudio()`
 * @return {string}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.getInputAudio_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getInputAudio()));
};


/**
 * optional bytes input_audio = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getInputAudio()`
 * @return {!Uint8Array}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.getInputAudio_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getInputAudio()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.chippergrpc2.StreamingIntentGraphRequest} returns this
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.setInputAudio = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional LanguageCode language_code = 4;
 * @return {!proto.chippergrpc2.LanguageCode}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.getLanguageCode = function() {
  return /** @type {!proto.chippergrpc2.LanguageCode} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.chippergrpc2.LanguageCode} value
 * @return {!proto.chippergrpc2.StreamingIntentGraphRequest} returns this
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional bool speech_only = 5;
 * @return {boolean}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.getSpeechOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.chippergrpc2.StreamingIntentGraphRequest} returns this
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.setSpeechOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional string firmware_version = 6;
 * @return {string}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.getFirmwareVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.chippergrpc2.StreamingIntentGraphRequest} returns this
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.setFirmwareVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional RobotMode mode = 7;
 * @return {!proto.chippergrpc2.RobotMode}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.getMode = function() {
  return /** @type {!proto.chippergrpc2.RobotMode} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.chippergrpc2.RobotMode} value
 * @return {!proto.chippergrpc2.StreamingIntentGraphRequest} returns this
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.setMode = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string boot_id = 8;
 * @return {string}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.getBootId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.chippergrpc2.StreamingIntentGraphRequest} returns this
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.setBootId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool skip_das = 9;
 * @return {boolean}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.getSkipDas = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.chippergrpc2.StreamingIntentGraphRequest} returns this
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.setSkipDas = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional AudioEncoding audio_encoding = 10;
 * @return {!proto.chippergrpc2.AudioEncoding}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.getAudioEncoding = function() {
  return /** @type {!proto.chippergrpc2.AudioEncoding} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.chippergrpc2.AudioEncoding} value
 * @return {!proto.chippergrpc2.StreamingIntentGraphRequest} returns this
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.setAudioEncoding = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional bool single_utterance = 11;
 * @return {boolean}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.getSingleUtterance = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.chippergrpc2.StreamingIntentGraphRequest} returns this
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.setSingleUtterance = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional IntentService intent_service = 12;
 * @return {!proto.chippergrpc2.IntentService}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.getIntentService = function() {
  return /** @type {!proto.chippergrpc2.IntentService} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.chippergrpc2.IntentService} value
 * @return {!proto.chippergrpc2.StreamingIntentGraphRequest} returns this
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.setIntentService = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * optional string app_key = 13;
 * @return {string}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.getAppKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.chippergrpc2.StreamingIntentGraphRequest} returns this
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.setAppKey = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string timezone = 14;
 * @return {string}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.chippergrpc2.StreamingIntentGraphRequest} returns this
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional bool save_audio = 15;
 * @return {boolean}
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.getSaveAudio = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.chippergrpc2.StreamingIntentGraphRequest} returns this
 */
proto.chippergrpc2.StreamingIntentGraphRequest.prototype.setSaveAudio = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


