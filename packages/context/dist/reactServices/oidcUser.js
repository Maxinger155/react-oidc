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
Object.defineProperty(exports, "__esModule", { value: true });
exports.withOidcUser = void 0;
var react_1 = __importStar(require("react"));
var oidcContext_1 = require("../oidcContext");
function withOidcUser(WrappedComponent) {
    var displayName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    var ComponentWithOidcUser = function (props) {
        var _a = react_1.useContext(oidcContext_1.AuthenticationContext), oidcUser = _a.oidcUser, login = _a.login, loginPopup = _a.loginPopup, loginSilent = _a.loginSilent;
        return react_1.default.createElement(WrappedComponent, __assign({ oidcUser: oidcUser, login: login, loginPopup: loginPopup, loginSilent: loginSilent }, props));
    };
    ComponentWithOidcUser.displayName = "withOidcUser(" + displayName + ")";
    return ComponentWithOidcUser;
}
exports.withOidcUser = withOidcUser;
