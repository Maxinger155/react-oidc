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
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var default_component_1 = require("../default-component");
var route_utils_1 = require("./route-utils");
var callbacks_1 = require("../callbacks");
var propTypes = {
    notAuthenticated: prop_types_1.default.elementType,
    notAuthorized: prop_types_1.default.elementType,
    callbackComponent: prop_types_1.default.elementType.isRequired,
    configuration: prop_types_1.default.shape({
        redirect_uri: prop_types_1.default.string,
        popup_redirect_uri: prop_types_1.default.string,
        popupWindowFeatures: prop_types_1.default.string,
        silent_redirect_uri: prop_types_1.default.string.isRequired,
    }).isRequired,
    children: prop_types_1.default.node,
};
var defaultProps = {
    notAuthenticated: null,
    notAuthorized: null,
};
var OidcRoutes = function (_a) {
    var notAuthenticated = _a.notAuthenticated, notAuthorized = _a.notAuthorized, CallbackComponent = _a.callbackComponent, sessionLost = _a.sessionLost, configuration = _a.configuration, children = _a.children;
    var _b = react_1.useState(window.location.pathname), path = _b[0], setPath = _b[1];
    var setNewPath = function () { return setPath(window.location.pathname); };
    react_1.useEffect(function () {
        setNewPath();
        window.addEventListener('popstate', setNewPath, false);
        return function () { return window.removeEventListener('popstate', setNewPath, false); };
    });
    var NotAuthenticatedComponent = notAuthenticated || default_component_1.NotAuthenticated;
    var NotAuthorizedComponent = notAuthorized || default_component_1.NotAuthorized;
    var SessionLostComponent = sessionLost || default_component_1.SessionLost;
    var silentCallbackPath = route_utils_1.getPath(configuration.silent_redirect_uri);
    var callbackPath = null;
    if (configuration.redirect_uri !== undefined && configuration.redirect_uri !== null) {
        callbackPath = route_utils_1.getPath(configuration.redirect_uri);
    }
    else if (configuration.popup_redirect_uri !== undefined && configuration.popup_redirect_uri !== null) {
        callbackPath = route_utils_1.getPath(configuration.popup_redirect_uri);
    }
    else {
        throw TypeError("redirect_uri or popup_redirect_uri have to be set in the configuration!");
    }
    switch (path) {
        case callbackPath:
            return react_1.default.createElement(CallbackComponent, null);
        case silentCallbackPath:
            return react_1.default.createElement(callbacks_1.SilentCallback, null);
        case '/authentication/not-authenticated':
            return react_1.default.createElement(NotAuthenticatedComponent, null);
        case '/authentication/not-authorized':
            return react_1.default.createElement(NotAuthorizedComponent, null);
        case '/authentication/session-lost':
            return react_1.default.createElement(SessionLostComponent, null);
        default:
            return react_1.default.createElement(react_1.default.Fragment, null, children);
    }
};
// @ts-ignore
OidcRoutes.propTypes = propTypes;
OidcRoutes.defaultProps = defaultProps;
exports.default = react_1.default.memo(OidcRoutes);
