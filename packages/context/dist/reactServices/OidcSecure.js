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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withOidcSecure = exports.OidcSecureWithInjectedFunctions = exports.useOidcSecure = void 0;
var react_1 = __importStar(require("react"));
var react_oidc_core_1 = require("@3rdparty/react-oidc-core");
var withServices_1 = __importDefault(require("../withServices"));
var oidcContext_1 = require("../oidcContext");
exports.useOidcSecure = function (authenticateUserInternal, userManager, location, history, oidcLogInternal, AuthenticatingInternal, isRequireAuthenticationInternal, WrappedComponent) {
    var _a = react_1.useContext(oidcContext_1.AuthenticationContext), isEnabled = _a.isEnabled, oidcUser = _a.oidcUser, authenticating = _a.authenticating, isLoggingOut = _a.isLoggingOut;
    react_1.useEffect(function () {
        oidcLogInternal.info('Protection : ', isEnabled);
        if (isEnabled && !isLoggingOut) {
            oidcLogInternal.info('Protected component mounted');
            authenticateUserInternal(userManager, location, history)();
        }
        return function () {
            oidcLogInternal.info('Protected component unmounted');
        };
    }, [isEnabled, authenticateUserInternal, userManager, oidcLogInternal, location, history, isLoggingOut]);
    var requiredAuth = react_1.useMemo(function () { return isRequireAuthenticationInternal(oidcUser, false) && isEnabled; }, [
        isEnabled,
        isRequireAuthenticationInternal,
        oidcUser,
    ]);
    var AuthenticatingComponent = authenticating || AuthenticatingInternal;
    return requiredAuth ? AuthenticatingComponent : WrappedComponent;
};
exports.OidcSecureWithInjectedFunctions = function (_a) {
    var children = _a.children, location = _a.location, history = _a.history, authenticateUserInternal = _a.authenticateUserInternal, getUserManagerInternal = _a.getUserManagerInternal, isRequireAuthenticationInternal = _a.isRequireAuthenticationInternal, AuthenticatingInternal = _a.AuthenticatingInternal;
    var userManager = getUserManagerInternal();
    var WrappedComponent = react_1.useMemo(function () { return function () { return react_1.default.createElement(react_1.default.Fragment, null, children); }; }, [children]);
    var ReactOidcComponent = exports.useOidcSecure(authenticateUserInternal, userManager, location, history, react_oidc_core_1.oidcLog, AuthenticatingInternal, isRequireAuthenticationInternal, WrappedComponent);
    return react_1.default.createElement(ReactOidcComponent, null);
};
var OidcSecure = react_oidc_core_1.withRouter(withServices_1.default(exports.OidcSecureWithInjectedFunctions, {
    authenticateUserInternal: react_oidc_core_1.authenticateUser,
    getUserManagerInternal: react_oidc_core_1.getUserManager,
    isRequireAuthenticationInternal: react_oidc_core_1.isRequireAuthentication,
    AuthenticatingInternal: react_oidc_core_1.Authenticating,
}));
exports.withOidcSecure = function (WrappedComponent) { return function (props) { return (react_1.default.createElement(OidcSecure, null,
    react_1.default.createElement(WrappedComponent, __assign({}, props)))); }; };
exports.default = OidcSecure;
