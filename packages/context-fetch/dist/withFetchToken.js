"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recompose_1 = require("recompose");
var react_oidc_context_1 = require("@3rdparty/react-oidc-context");
var react_oidc_fetch_core_1 = require("@3rdparty/react-oidc-fetch-core");
var enhance = function (fetch) {
    return recompose_1.compose(react_oidc_context_1.withOidcUser, recompose_1.withProps(function (_a) {
        var oidcUser = _a.oidcUser;
        return ({
            user: oidcUser,
        });
    }), recompose_1.withProps(react_oidc_fetch_core_1.fetchToken(fetch)));
};
exports.default = enhance;
