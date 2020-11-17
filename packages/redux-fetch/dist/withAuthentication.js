"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recompose_1 = require("recompose");
var react_oidc_fetch_core_1 = require("@3rdparty/react-oidc-fetch-core");
var withFetchToken_1 = require("./withFetchToken");
var enhance = function (fetch) {
    return recompose_1.compose(withFetchToken_1.default(fetch), react_oidc_fetch_core_1.withFetchSilentAuthenticateAndRetryOn401(), react_oidc_fetch_core_1.withFetchRedirectionOn403());
};
exports.default = enhance;
