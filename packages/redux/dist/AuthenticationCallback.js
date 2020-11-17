"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.success = void 0;
var React = __importStar(require("react"));
var redux_oidc_1 = require("redux-oidc");
var react_oidc_core_1 = require("@3rdparty/react-oidc-core");
var recompose_1 = require("recompose");
var react_redux_1 = require("react-redux");
var prop_types_1 = __importDefault(require("prop-types"));
var propTypes = {
    history: prop_types_1.default.object.isRequired,
    userManager: prop_types_1.default.object.isRequired,
    callbackComponentOverride: prop_types_1.default.elementType,
};
var defaultProps = {
    callbackComponentOverride: null,
};
exports.success = function (oidcLogInjected) { return function (history) { return function (user) {
    if (user && user.state) {
        history.push(user.state.url);
    }
    else {
        oidcLogInjected.error('urlBeforeSignin is null or undefined');
    }
}; }; };
var AuthenticationCallback = function (_a) {
    var history = _a.history, userManager = _a.userManager, CallbackComponentOverride = _a.callbackComponentOverride;
    var successCallback = function (user) { return exports.success(react_oidc_core_1.oidcLog)(history)(user); };
    var errorCallback = function (error) {
        var message = error.message;
        react_oidc_core_1.oidcLog.error("There was an error handling the token callback: " + message);
        history.push("/authentication/not-authenticated?message=" + message);
    };
    return (React.createElement(redux_oidc_1.CallbackComponent, { userManager: userManager, errorCallback: errorCallback, successCallback: successCallback }, CallbackComponentOverride ? (React.createElement(CallbackComponentOverride, null)) : (React.createElement("p", null, "Authentification en cours vous allez \u00EAtre redirig\u00E9."))));
};
// @ts-ignore
AuthenticationCallback.propTypes = propTypes;
AuthenticationCallback.defaultProps = defaultProps;
var wrapUserManager = function () { return ({ userManager: react_oidc_core_1.getUserManager() }); };
var enhance = recompose_1.compose(react_oidc_core_1.withRouter, recompose_1.withProps(wrapUserManager), react_redux_1.connect());
exports.default = recompose_1.pure(enhance(AuthenticationCallback));
