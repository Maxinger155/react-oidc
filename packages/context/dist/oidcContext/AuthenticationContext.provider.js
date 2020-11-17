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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationProviderInt = exports.withComponentOverrideProps = void 0;
var react_1 = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var react_oidc_core_1 = require("@3rdparty/react-oidc-core");
var Callback_1 = require("../Callback");
var withServices_1 = __importDefault(require("../withServices"));
var AuthenticationContext_1 = require("./AuthenticationContext");
var AuthenticationContext_hooks_1 = require("./AuthenticationContext.hooks");
var propTypes = {
    notAuthenticated: prop_types_1.default.elementType,
    notAuthorized: prop_types_1.default.elementType,
    authenticating: prop_types_1.default.elementType,
    callbackComponentOverride: prop_types_1.default.elementType,
    sessionLostComponent: prop_types_1.default.elementType,
    configuration: react_oidc_core_1.configurationPropTypes,
    isEnabled: prop_types_1.default.bool,
    loggerLevel: prop_types_1.default.number,
    logger: prop_types_1.default.shape({
        info: prop_types_1.default.func.isRequired,
        warn: prop_types_1.default.func.isRequired,
        error: prop_types_1.default.func.isRequired,
        debug: prop_types_1.default.func.isRequired,
    }),
    UserStore: prop_types_1.default.func,
};
var defaultProps = {
    notAuthenticated: null,
    notAuthorized: null,
    authenticating: null,
    callbackComponentOverride: null,
    sessionLostComponent: null,
    isEnabled: true,
    loggerLevel: 0,
    logger: console,
    configuration: react_oidc_core_1.configurationDefaultProps,
};
exports.withComponentOverrideProps = function (Component, customCallback) { return function (props) { return (react_1.default.createElement(Component, __assign({ callbackComponentOverride: customCallback }, props))); }; };
exports.AuthenticationProviderInt = function (_a) {
    var location = _a.location, history = _a.history, configuration = _a.configuration, isEnabled = _a.isEnabled, UserStore = _a.UserStore, loggerLevel = _a.loggerLevel, logger = _a.logger, sessionLostComponent = _a.sessionLostComponent, authenticating = _a.authenticating, notAuthenticated = _a.notAuthenticated, notAuthorized = _a.notAuthorized, callbackComponentOverride = _a.callbackComponentOverride, children = _a.children, 
    // Injected
    authenticationServiceInt = _a.authenticationServiceInt, CallbackInt = _a.CallbackInt, setLoggerInt = _a.setLoggerInt, OidcRoutesInt = _a.OidcRoutesInt, oidcLogInt = _a.oidcLogInt, authenticateUserInt = _a.authenticateUserInt, logoutUserInt = _a.logoutUserInt;
    var userManager = authenticationServiceInt(configuration, UserStore);
    var _b = AuthenticationContext_hooks_1.useAuthenticationContextState(userManager), oidcState = _b.oidcState, loadUser = _b.loadUser, onError = _b.onError, onLoading = _b.onLoading, unloadUser = _b.unloadUser, onLogout = _b.onLogout;
    var oidcFunctions = { loadUser: loadUser, onError: onError, onLoading: onLoading, unloadUser: unloadUser, onLogout: onLogout };
    var _c = AuthenticationContext_hooks_1.useOidcEvents(oidcLogInt, userManager, oidcFunctions), addOidcEvents = _c.addOidcEvents, removeOidcEvents = _c.removeOidcEvents;
    react_1.useEffect(function () {
        onLoading();
        setLoggerInt(loggerLevel, logger);
        addOidcEvents();
        var mount = true;
        userManager.getUser().then(function (user) {
            if (mount) {
                loadUser(user);
            }
        });
        return function () {
            removeOidcEvents();
            mount = false;
        };
    }, [addOidcEvents, loadUser, logger, loggerLevel, onLoading, removeOidcEvents, setLoggerInt, userManager]);
    var CallbackComponent = react_1.default.useMemo(function () { return (callbackComponentOverride ? exports.withComponentOverrideProps(CallbackInt, callbackComponentOverride) : CallbackInt); }, [CallbackInt, callbackComponentOverride]);
    var loginCallback = react_1.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    onLoading();
                    oidcLogInt.info('Login requested');
                    return [4 /*yield*/, authenticateUserInt(userManager, location, history)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [authenticateUserInt, history, location, oidcLogInt, onLoading, userManager]);
    var loginPopupCallback = react_1.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    onLoading();
                    oidcLogInt.info('Login requested');
                    return [4 /*yield*/, react_oidc_core_1.authenticateUserPopup(userManager, location, history)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [react_oidc_core_1.authenticateUserPopup, history, location, oidcLogInt, onLoading, userManager]);
    var loginSilentCallback = react_1.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    onLoading();
                    oidcLogInt.info('Silent Login requested');
                    return [4 /*yield*/, react_oidc_core_1.authenticateUserSilent(userManager, location, history)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, [react_oidc_core_1.authenticateUserSilent, history, location, oidcLogInt, onLoading, userManager]);
    var logoutCallback = react_1.useCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    onLogout();
                    return [4 /*yield*/, logoutUserInt(userManager)];
                case 1:
                    _a.sent();
                    oidcLogInt.info('Logout successfull');
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    onError(error_1.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); }, [logoutUserInt, oidcLogInt, onError, onLogout, userManager]);
    return (react_1.default.createElement(AuthenticationContext_1.AuthenticationContext.Provider, { value: __assign(__assign({}, oidcState), { authenticating: authenticating,
            isEnabled: isEnabled, login: loginCallback, loginSilent: loginSilentCallback, loginPopup: loginPopupCallback, logout: logoutCallback, events: oidcState.userManager.events }) },
        react_1.default.createElement(OidcRoutesInt, { notAuthenticated: notAuthenticated, notAuthorized: notAuthorized, callbackComponent: CallbackComponent, sessionLost: sessionLostComponent, configuration: configuration }, children)));
};
var AuthenticationProvider = react_oidc_core_1.withRouter(withServices_1.default(exports.AuthenticationProviderInt, {
    CallbackInt: Callback_1.Callback,
    authenticationServiceInt: react_oidc_core_1.authenticationService,
    setLoggerInt: react_oidc_core_1.setLogger,
    OidcRoutesInt: react_oidc_core_1.OidcRoutes,
    oidcLogInt: react_oidc_core_1.oidcLog,
    authenticateUserInt: react_oidc_core_1.authenticateUser,
    logoutUserInt: react_oidc_core_1.logoutUser,
}));
// @ts-ignore
AuthenticationProvider.propTypes = propTypes;
AuthenticationProvider.defaultProps = defaultProps;
AuthenticationProvider.displayName = 'AuthenticationProvider';
exports.default = AuthenticationProvider;
