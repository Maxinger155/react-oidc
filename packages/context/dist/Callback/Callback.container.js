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
exports.CallbackContainerCore = exports.onRedirectError = exports.onRedirectSuccess = void 0;
var react_1 = __importStar(require("react"));
var react_oidc_core_1 = require("@3rdparty/react-oidc-core");
var withServices_1 = __importDefault(require("../withServices"));
exports.onRedirectSuccess = function (history, oidcLogInternal) { return function (user) {
    oidcLogInternal.info('Successfull login Callback', user);
    if (user != undefined && user.state.url) {
        history.push(user.state.url);
    }
    else {
        oidcLogInternal.warn('no location in state');
        react_oidc_core_1.getUserManager().clearStaleState();
    }
}; };
exports.onRedirectError = function (history, oidcLogInternal) { return function (_a) {
    var message = _a.message;
    oidcLogInternal.error("There was an error handling the token callback: " + message);
    history.push("/authentication/not-authenticated?message=" + encodeURIComponent(message));
}; };
exports.CallbackContainerCore = function (_a) {
    var history = _a.history, getUserManagerInternal = _a.getUserManager, oidcLogInternal = _a.oidcLog, CallbackComponentOverride = _a.callbackComponentOverride;
    var onSuccess = exports.onRedirectSuccess(history, oidcLogInternal);
    var onError = exports.onRedirectError(history, oidcLogInternal);
    react_1.useEffect(function () {
        var handle = function () { return __awaiter(void 0, void 0, void 0, function () {
            var userManager;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getUserManagerInternal()];
                    case 1:
                        userManager = _a.sent();
                        if (userManager.settings != null && userManager.settings.popup_redirect_uri != null) {
                            react_oidc_core_1.oidcLog.info('Using popup callback');
                            userManager
                                .signinPopupCallback(window.location.href.split('?')[1])
                                .then(onSuccess, onError);
                        }
                        else {
                            react_oidc_core_1.oidcLog.info('Using redirect callback');
                            userManager
                                .signinRedirectCallback()
                                .then(onSuccess, onError);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        handle();
    }, [getUserManagerInternal, onError, onSuccess]);
    return CallbackComponentOverride ? react_1.default.createElement(CallbackComponentOverride, null) : react_1.default.createElement(react_oidc_core_1.Callback, null);
};
var CallbackContainer = react_oidc_core_1.withRouter(withServices_1.default(exports.CallbackContainerCore, {
    getUserManager: react_oidc_core_1.getUserManager,
    oidcLog: react_oidc_core_1.oidcLog,
}));
exports.default = react_1.default.memo(CallbackContainer);
