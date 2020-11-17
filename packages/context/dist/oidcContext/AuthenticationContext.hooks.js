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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOidcEvents = exports.onAccessTokenExpiredEvent = exports.onUserUnloadedEvent = exports.onUserLoadedEvent = exports.onErrorEvent = exports.useAuthenticationContextState = void 0;
var react_1 = require("react");
var ON_LOADING = 'ON_LOADING';
var ON_ERROR = 'ON_ERROR';
var ON_LOAD_USER = 'ON_LOAD_USER';
var ON_UNLOAD_USER = 'ON_UNLOAD_USER';
var ON_LOGOUT = 'ON_LOGOUT';
var getDefaultState = function (userManagerInt) {
    return {
        oidcUser: null,
        userManager: userManagerInt,
        isLoading: false,
        error: '',
        isLoggingOut: false,
    };
};
var oidcReducer = function (oidcState, action) {
    switch (action.type) {
        case ON_ERROR:
            return __assign(__assign({}, oidcState), { error: action.message, isLoading: false });
        case ON_LOADING:
            return __assign(__assign({}, oidcState), { isLoading: true });
        case ON_LOAD_USER:
            return __assign(__assign({}, oidcState), { oidcUser: action.user, isLoading: false });
        case ON_UNLOAD_USER:
            return __assign(__assign({}, oidcState), { oidcUser: null, isLoading: false });
        case ON_LOGOUT:
            return __assign(__assign({}, oidcState), { isLoggingOut: true });
        default:
            return oidcState;
    }
};
var onError = function (dispatch) { return function (message) { return dispatch({ type: 'ON_ERROR', message: message }); }; };
var loadUser = function (dispatch) { return function (user) { return dispatch({ type: 'ON_LOAD_USER', user: user }); }; };
var onLoading = function (dispatch) { return function () { return dispatch({ type: 'ON_LOADING' }); }; };
var unloadUser = function (dispatch) { return function () { return dispatch({ type: 'ON_UNLOAD_USER' }); }; };
var onLogout = function (dispatch) { return function () { return dispatch({ type: 'ON_LOGOUT' }); }; };
exports.useAuthenticationContextState = function (userManagerInt) {
    var defaultState = getDefaultState(userManagerInt);
    var _a = react_1.useReducer(oidcReducer, defaultState), oidcState = _a[0], dispatch = _a[1];
    return {
        onError: react_1.useCallback(function (error) { return onError(dispatch)(error); }, []),
        loadUser: react_1.useCallback(function (user) { return loadUser(dispatch)(user); }, []),
        onLoading: react_1.useCallback(function () { return onLoading(dispatch)(); }, []),
        unloadUser: react_1.useCallback(function () { return unloadUser(dispatch)(); }, []),
        onLogout: react_1.useCallback(function () { return onLogout(dispatch)(); }, []),
        oidcState: oidcState,
    };
};
exports.onErrorEvent = function (oidcLog, onErrorInt) { return function (error) {
    oidcLog.error("Error : " + error.message);
    onErrorInt(error.message);
}; };
exports.onUserLoadedEvent = function (oidcLog, loadUserInt) { return function (user) {
    oidcLog.info('User Loaded');
    loadUserInt(user);
}; };
exports.onUserUnloadedEvent = function (oidcLog, unloadUserInternal) { return function () {
    oidcLog.info('User unloaded');
    unloadUserInternal();
}; };
exports.onAccessTokenExpiredEvent = function (oidcLog, unloadUserInternal, userManager) { return function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                oidcLog.info('AccessToken Expired');
                unloadUserInternal();
                return [4 /*yield*/, userManager.signinSilent()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); }; };
exports.useOidcEvents = function (oidcLog, userManager, oidcFunctions) {
    var addOidcEvents = react_1.useCallback(function () {
        userManager.events.addUserLoaded(exports.onUserLoadedEvent(oidcLog, oidcFunctions.loadUser));
        userManager.events.addSilentRenewError(exports.onErrorEvent(oidcLog, oidcFunctions.onError));
        userManager.events.addUserUnloaded(exports.onUserUnloadedEvent(oidcLog, oidcFunctions.unloadUser));
        userManager.events.addUserSignedOut(exports.onUserUnloadedEvent(oidcLog, oidcFunctions.unloadUser));
        userManager.events.addAccessTokenExpired(exports.onAccessTokenExpiredEvent(oidcLog, oidcFunctions.unloadUser, userManager));
    }, [oidcFunctions.loadUser, oidcFunctions.onError, oidcFunctions.unloadUser, oidcLog, userManager]);
    var removeOidcEvents = react_1.useCallback(function () {
        userManager.events.removeUserLoaded(exports.onUserLoadedEvent(oidcLog, oidcFunctions.loadUser));
        userManager.events.removeSilentRenewError(exports.onErrorEvent(oidcLog, oidcFunctions.onError));
        userManager.events.removeUserUnloaded(exports.onUserUnloadedEvent(oidcLog, oidcFunctions.unloadUser));
        userManager.events.removeUserSignedOut(exports.onUserUnloadedEvent(oidcLog, oidcFunctions.unloadUser));
        userManager.events.removeAccessTokenExpired(exports.onAccessTokenExpiredEvent(oidcLog, oidcFunctions.unloadUser, userManager));
    }, [oidcFunctions.loadUser, oidcFunctions.onError, oidcFunctions.unloadUser, oidcLog, userManager]);
    return { addOidcEvents: addOidcEvents, removeOidcEvents: removeOidcEvents };
};
