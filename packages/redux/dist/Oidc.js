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
exports.OidcBase3rdparty = void 0;
var react_1 = __importDefault(require("react"));
var redux_oidc_1 = require("redux-oidc");
var prop_types_1 = __importDefault(require("prop-types"));
var react_oidc_core_1 = require("@3rdparty/react-oidc-core");
var AuthenticationCallback_1 = __importDefault(require("./AuthenticationCallback"));
var propTypes = {
    notAuthenticated: prop_types_1.default.elementType,
    notAuthorized: prop_types_1.default.elementType,
    callbackComponentOverride: prop_types_1.default.elementType,
    sessionLostComponent: prop_types_1.default.elementType,
    // eslint-disable-next-line react/require-default-props
    configuration: react_oidc_core_1.configurationPropTypes,
    store: prop_types_1.default.object.isRequired,
    isEnabled: prop_types_1.default.bool,
    children: prop_types_1.default.node,
    UserStore: prop_types_1.default.func,
};
var defaultPropsObject = {
    notAuthenticated: null,
    notAuthorized: null,
    callbackComponentOverride: null,
    sessionLostComponent: null,
    isEnabled: true,
    children: null,
    UserStore: null,
};
var withComponentOverrideProps = function (Component, customProps) { return function (props) { return (react_1.default.createElement(Component, __assign({ callbackComponentOverride: customProps }, props))); }; };
exports.OidcBase3rdparty = function (props) {
    var isEnabled = props.isEnabled, children = props.children, store = props.store, callbackComponentOverride = props.callbackComponentOverride, configuration = props.configuration, notAuthenticated = props.notAuthenticated, notAuthorized = props.notAuthorized, sessionLostComponent = props.sessionLostComponent, UserStore = props.UserStore, loadUser3rdparty = props.loadUser3rdparty, authenticationService3rdparty = props.authenticationService3rdparty;
    var _a = react_1.default.useState(false), ready = _a[0], setReady = _a[1];
    react_1.default.useEffect(function () {
        if (isEnabled) {
            var userManager = authenticationService3rdparty(configuration, UserStore);
            loadUser3rdparty(store, userManager);
            setReady(true);
        }
    }, [UserStore, configuration, isEnabled, store, loadUser3rdparty, authenticationService3rdparty]);
    return ready ? (react_1.default.createElement(redux_oidc_1.OidcProvider, { store: store, userManager: react_oidc_core_1.getUserManager() },
        react_1.default.createElement(react_oidc_core_1.OidcRoutes, { configuration: configuration, notAuthenticated: notAuthenticated, notAuthorized: notAuthorized, sessionLost: sessionLostComponent, callbackComponent: withComponentOverrideProps(AuthenticationCallback_1.default, callbackComponentOverride) }, children))) : (react_1.default.createElement(react_1.default.Fragment, null, children));
};
exports.OidcBase3rdparty.propTypes = __assign(__assign({}, propTypes), { loadUser3rdparty: prop_types_1.default.func.isRequired, authenticationService3rdparty: prop_types_1.default.func.isRequired });
var OidcBase = function (props) { return (react_1.default.createElement(exports.OidcBase3rdparty, __assign({ loadUser3rdparty: redux_oidc_1.loadUser, authenticationService3rdparty: react_oidc_core_1.authenticationService }, props))); };
// @ts-ignore
OidcBase.propTypes = propTypes;
OidcBase.defaultProps = defaultPropsObject;
exports.default = OidcBase;
