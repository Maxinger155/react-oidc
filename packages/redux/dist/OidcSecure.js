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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.oidcSecure = void 0;
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_oidc_core_1 = require("@3rdparty/react-oidc-core");
var react_redux_1 = require("react-redux");
var recompose_1 = require("recompose");
var AuthenticationLiveCycle = function (_a) {
    var location = _a.location, oidc = _a.oidc, children = _a.children, history = _a.history, authenticating = _a.authenticating;
    var isLoadingUser = oidc.isLoadingUser, user = oidc.user;
    var isShouldAuthenticate = !isLoadingUser && react_oidc_core_1.isRequireAuthentication(user);
    var isLoading = isLoadingUser || isShouldAuthenticate;
    react_1.useEffect(function () {
        if (isShouldAuthenticate) {
            var userManager = react_oidc_core_1.getUserManager();
            react_oidc_core_1.authenticateUser(userManager, location, history, user)();
        }
    }, [isShouldAuthenticate, location, user]);
    var AuthenticatingComponent = authenticating || react_oidc_core_1.Authenticating;
    return isLoading ? react_1.default.createElement(AuthenticatingComponent, null) : react_1.default.createElement(react_1.default.Fragment, null, children);
};
var mapStateToProps = function (state) { return ({
    oidc: state.oidc,
}); };
var oidcCompose = recompose_1.compose(react_redux_1.connect(mapStateToProps, null), react_oidc_core_1.withRouter);
var Secure = oidcCompose(AuthenticationLiveCycle);
exports.oidcSecure = function (Component) { return function (props) {
    return (react_1.default.createElement(Secure, null,
        react_1.default.createElement(Component, __assign({}, props))));
}; };
var propTypesOidcSecure = {
    isEnabled: prop_types_1.default.bool,
    children: prop_types_1.default.node,
};
var defaultPropsOidcSecure = {
    isEnabled: true,
};
var OidcSecure = function (props) {
    var isEnabled = props.isEnabled, children = props.children, configProps = __rest(props, ["isEnabled", "children"]);
    if (isEnabled) {
        return react_1.default.createElement(Secure, __assign({}, configProps), children);
    }
    return react_1.default.createElement(react_1.default.Fragment, null, children);
};
OidcSecure.propTypes = propTypesOidcSecure;
OidcSecure.defaultProps = defaultPropsOidcSecure;
exports.default = OidcSecure;
