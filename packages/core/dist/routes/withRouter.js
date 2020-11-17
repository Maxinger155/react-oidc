"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withRouter = exports.CreateEvent = void 0;
var react_1 = __importDefault(require("react"));
var generateKey = function () {
    return Math.random()
        .toString(36)
        .substr(2, 6);
};
// IE Polyfill for CustomEvent
exports.CreateEvent = function (windowInternal, documentInternal) { return function (event, params) {
    if (typeof windowInternal.CustomEvent === 'function') {
        return new windowInternal.CustomEvent(event, params);
    }
    var paramsToFunction = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = documentInternal.createEvent('CustomEvent');
    evt.initCustomEvent(event, paramsToFunction.bubbles, paramsToFunction.cancelable, paramsToFunction.detail);
    evt.prototype = windowInternal.Event.prototype;
    return evt;
}; };
exports.withRouter = function (windowInternal, CreateEventInternal, generateKeyInternal) { return function (Component) { return function (props) {
    var oidcHistory = {
        push: function (url, stateHistory) {
            var key = generateKeyInternal();
            var state = stateHistory || windowInternal.history.state;
            windowInternal.history.pushState({ key: key, state: state }, null, url);
            windowInternal.dispatchEvent(CreateEventInternal('popstate'));
        },
    };
    var enhanceProps = __assign({ history: oidcHistory, location: windowInternal.location }, props);
    return react_1.default.createElement(Component, __assign({}, enhanceProps));
}; }; };
exports.default = exports.withRouter(window, exports.CreateEvent(window, document), generateKey);
