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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryWebStorage = exports.authenticationService = exports.authenticationServiceInternal = exports.getUserManager = exports.setUserManager = void 0;
var oidc_client_1 = require("oidc-client");
Object.defineProperty(exports, "InMemoryWebStorage", { enumerable: true, get: function () { return oidc_client_1.InMemoryWebStorage; } });
var loggerService_1 = require("./loggerService");
var userManager;
exports.setUserManager = function (userManagerToSet) {
    userManager = userManagerToSet;
};
exports.getUserManager = function () { return userManager; };
exports.authenticationServiceInternal = function (WebStorageStateStoreInt) { return function (configuration, UserStore) {
    if (userManager) {
        return userManager;
    }
    var overriddenConfiguration = __assign({}, configuration);
    if (UserStore) {
        overriddenConfiguration.userStore = new WebStorageStateStoreInt({ store: new UserStore() });
    }
    loggerService_1.oidcLog.debug('overriddenConfiguration', overriddenConfiguration);
    userManager = new oidc_client_1.UserManager(overriddenConfiguration);
    return userManager;
}; };
exports.authenticationService = exports.authenticationServiceInternal(oidc_client_1.WebStorageStateStore);
