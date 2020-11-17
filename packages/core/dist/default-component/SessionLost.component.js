"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionLostContainer = exports.SessionLost = void 0;
var react_1 = __importDefault(require("react"));
var withRouter_1 = __importDefault(require("../routes/withRouter"));
var services_1 = require("../services");
exports.SessionLost = function (_a) {
    var onAuthenticate = _a.onAuthenticate;
    return (react_1.default.createElement("div", { className: "oidc-session-lost" },
        react_1.default.createElement("div", { className: "oidc-session-lost__container" },
            react_1.default.createElement("h1", { className: "oidc-session-lost__title" }, "Session expir\u00E9e"),
            react_1.default.createElement("p", { className: "oidc-session-lost__content" }, "Votre session est expir\u00E9e. Veuillez vous r\u00E9-authentifier."),
            react_1.default.createElement("button", { className: "oidc-session-lost__button", type: "button", onClick: onAuthenticate }, "R\u00E9-authentifier"))));
};
exports.SessionLostContainer = function (_a) {
    var location = _a.location, history = _a.history;
    var callbackPath = location.search.replace('?path=', '');
    var onAuthenticate = function () {
        services_1.authenticateUser(services_1.getUserManager(), location, history)(true, callbackPath);
    };
    return react_1.default.createElement(exports.SessionLost, { onAuthenticate: onAuthenticate });
};
exports.default = withRouter_1.default(exports.SessionLostContainer);
