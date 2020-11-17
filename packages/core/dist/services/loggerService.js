"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.oidcLog = exports.setLogger = void 0;
var oidc_client_1 = require("oidc-client");
var oidcLogLevel = oidc_client_1.Log.DEBUG;
var oidcLogger = console;
exports.setLogger = function (level, logger) {
    var validOidcClientLevels = [
        oidc_client_1.Log.DEBUG,
        oidc_client_1.Log.INFO,
        oidc_client_1.Log.WARN,
        oidc_client_1.Log.ERROR,
        oidc_client_1.Log.NONE,
    ];
    if (validOidcClientLevels.indexOf(level) === -1) {
        var levels = validOidcClientLevels.join(', ');
        var msg = "The log level must be one of " + levels;
        throw new RangeError(msg);
    }
    oidcLogLevel = level;
    oidcLogger = logger;
    oidc_client_1.Log.level = level;
    oidc_client_1.Log.logger = logger;
};
var debug = function () {
    var msg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msg[_i] = arguments[_i];
    }
    if (oidcLogLevel >= oidc_client_1.Log.DEBUG) {
        oidcLogger.debug.apply(oidcLogger, __spreadArrays(['DEBUG [react-context-oidc] :'], msg));
    }
};
var info = function () {
    var msg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msg[_i] = arguments[_i];
    }
    if (oidcLogLevel >= oidc_client_1.Log.INFO) {
        oidcLogger.info.apply(oidcLogger, __spreadArrays(['INFO [react-context-oidc] :'], msg));
    }
};
var warn = function () {
    var msg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msg[_i] = arguments[_i];
    }
    if (oidcLogLevel >= oidc_client_1.Log.WARN) {
        oidcLogger.warn.apply(oidcLogger, __spreadArrays(['WARN [react-context-oidc] :'], msg));
    }
};
var error = function () {
    var msg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        msg[_i] = arguments[_i];
    }
    if (oidcLogLevel >= oidc_client_1.Log.ERROR) {
        oidcLogger.error.apply(oidcLogger, __spreadArrays(['ERROR [react-context-oidc] :'], msg));
    }
};
exports.oidcLog = {
    debug: debug,
    info: info,
    warn: warn,
    error: error,
    ERROR: oidc_client_1.Log.ERROR,
    WARN: oidc_client_1.Log.WARN,
    INFO: oidc_client_1.Log.INFO,
    NONE: oidc_client_1.Log.NONE,
    DEBUG: oidc_client_1.Log.DEBUG,
};
