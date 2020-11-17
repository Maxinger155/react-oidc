"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReactOidc = exports.AuthenticationContext = void 0;
var react_1 = __importDefault(require("react"));
exports.AuthenticationContext = react_1.default.createContext(null);
exports.useReactOidc = function () {
    var _a = react_1.default.useContext(exports.AuthenticationContext), isEnabled = _a.isEnabled, login = _a.login, loginSilent = _a.loginSilent, loginPopup = _a.loginPopup, logout = _a.logout, oidcUser = _a.oidcUser, events = _a.events;
    return { isEnabled: isEnabled, login: login, loginSilent: loginSilent, loginPopup: loginPopup, logout: logout, oidcUser: oidcUser, events: events };
};
