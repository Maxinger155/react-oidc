"use strict";
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
exports.signinSilent = exports.logoutUser = exports.authenticateUserSilent = exports.authenticateUserPopup = exports.authenticateUser = exports.isRequireSignin = exports.isRequireAuthentication = void 0;
var loggerService_1 = require("./loggerService");
var userRequested = false;
var numberAuthentication = 0;
exports.isRequireAuthentication = function (user, isForce) {
    return isForce || !user || (user && user.expired === true);
};
exports.isRequireSignin = function (oidcUser, isForce) { return isForce || !oidcUser; };
exports.authenticateUser = function (userManager, location, history, user) {
    if (user === void 0) { user = null; }
    return function (isForce, callbackPath) {
        if (isForce === void 0) { isForce = false; }
        if (callbackPath === void 0) { callbackPath = null; }
        return __awaiter(void 0, void 0, void 0, function () {
            var oidcUser, url, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oidcUser = user;
                        if (!!oidcUser) return [3 /*break*/, 2];
                        return [4 /*yield*/, userManager.getUser()];
                    case 1:
                        oidcUser = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (userRequested) {
                            loggerService_1.oidcLog.info('User is already requested. No new request will be sent.');
                            return [2 /*return*/];
                        }
                        numberAuthentication++;
                        url = callbackPath || location.pathname + (location.search || '');
                        if (!exports.isRequireSignin(oidcUser, isForce)) return [3 /*break*/, 4];
                        loggerService_1.oidcLog.info('authenticate user...');
                        userRequested = true;
                        return [4 /*yield*/, userManager.signinRedirect({ data: { url: url } })];
                    case 3:
                        _a.sent();
                        userRequested = false;
                        return [3 /*break*/, 12];
                    case 4:
                        if (!(oidcUser && oidcUser.expired)) return [3 /*break*/, 12];
                        userRequested = true;
                        _a.label = 5;
                    case 5:
                        _a.trys.push([5, 7, , 11]);
                        return [4 /*yield*/, userManager.signinSilent()];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 7:
                        error_1 = _a.sent();
                        if (!(numberAuthentication <= 1)) return [3 /*break*/, 9];
                        return [4 /*yield*/, userManager.signinRedirect({ data: { url: url } })];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        userRequested = false;
                        loggerService_1.oidcLog.warn("session lost " + error_1.toString());
                        history.push("/authentication/session-lost?path=" + encodeURI(url));
                        _a.label = 10;
                    case 10: return [3 /*break*/, 11];
                    case 11:
                        userRequested = false;
                        _a.label = 12;
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
};
exports.authenticateUserPopup = function (userManager, location, history, user) {
    if (user === void 0) { user = null; }
    return function (isForce, callbackPath) {
        if (isForce === void 0) { isForce = false; }
        if (callbackPath === void 0) { callbackPath = null; }
        return __awaiter(void 0, void 0, void 0, function () {
            var oidcUser, url, e_1, error_2, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oidcUser = user;
                        if (!!oidcUser) return [3 /*break*/, 2];
                        return [4 /*yield*/, userManager.getUser()];
                    case 1:
                        oidcUser = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (userRequested) {
                            loggerService_1.oidcLog.info('User is already requested. No new request will be sent.');
                            return [2 /*return*/];
                        }
                        numberAuthentication++;
                        url = callbackPath || location.pathname + (location.search || '');
                        if (!exports.isRequireSignin(oidcUser, isForce)) return [3 /*break*/, 7];
                        loggerService_1.oidcLog.info('authenticate user...');
                        userRequested = true;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, userManager.signinPopup({ data: { url: url } })];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        userRequested = false;
                        return [3 /*break*/, 6];
                    case 6:
                        userRequested = false;
                        return [3 /*break*/, 18];
                    case 7:
                        if (!(oidcUser && oidcUser.expired)) return [3 /*break*/, 18];
                        userRequested = true;
                        _a.label = 8;
                    case 8:
                        _a.trys.push([8, 10, , 17]);
                        return [4 /*yield*/, userManager.signinSilent()];
                    case 9:
                        _a.sent();
                        return [3 /*break*/, 17];
                    case 10:
                        error_2 = _a.sent();
                        if (!(numberAuthentication <= 1)) return [3 /*break*/, 15];
                        _a.label = 11;
                    case 11:
                        _a.trys.push([11, 13, , 14]);
                        return [4 /*yield*/, userManager.signinPopup({ data: { url: url } })];
                    case 12:
                        _a.sent();
                        return [3 /*break*/, 14];
                    case 13:
                        e_2 = _a.sent();
                        userRequested = false;
                        return [3 /*break*/, 14];
                    case 14: return [3 /*break*/, 16];
                    case 15:
                        userRequested = false;
                        loggerService_1.oidcLog.warn("session lost " + error_2.toString());
                        history.push("/authentication/session-lost?path=" + encodeURI(url));
                        _a.label = 16;
                    case 16: return [3 /*break*/, 17];
                    case 17:
                        userRequested = false;
                        _a.label = 18;
                    case 18: return [2 /*return*/];
                }
            });
        });
    };
};
exports.authenticateUserSilent = function (userManager, location, history, user) {
    if (user === void 0) { user = null; }
    return function (isForce, callbackPath) {
        if (isForce === void 0) { isForce = false; }
        if (callbackPath === void 0) { callbackPath = null; }
        return __awaiter(void 0, void 0, void 0, function () {
            var oidcUser, url, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loggerService_1.oidcLog.info('Login Silent');
                        oidcUser = user;
                        if (!!oidcUser) return [3 /*break*/, 2];
                        return [4 /*yield*/, userManager.getUser()];
                    case 1:
                        oidcUser = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (userRequested) {
                            loggerService_1.oidcLog.info('User is already requested. No new request will be sent.');
                            return [2 /*return*/];
                        }
                        numberAuthentication++;
                        url = callbackPath || location.pathname + (location.search || '');
                        if (!exports.isRequireSignin(oidcUser, isForce)) return [3 /*break*/, 7];
                        loggerService_1.oidcLog.info('authenticate user...');
                        userRequested = true;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, userManager.signinSilent()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        e_3 = _a.sent();
                        userRequested = false;
                        return [3 /*break*/, 6];
                    case 6:
                        userRequested = false;
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
};
exports.logoutUser = function (userManager) { return __awaiter(void 0, void 0, void 0, function () {
    var oidcUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!userManager || !userManager.getUser) {
                    return [2 /*return*/];
                }
                return [4 /*yield*/, userManager.getUser()];
            case 1:
                oidcUser = _a.sent();
                if (!oidcUser) return [3 /*break*/, 3];
                loggerService_1.oidcLog.info('Logout user...');
                return [4 /*yield*/, userManager.signoutRedirect()];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.signinSilent = function (getUserManager) { return function (data) {
    if (data === void 0) { data = undefined; }
    return getUserManager().signinSilent(data);
}; };
