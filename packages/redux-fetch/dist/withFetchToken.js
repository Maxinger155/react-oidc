"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var recompose_1 = require("recompose");
var react_oidc_fetch_core_1 = require("@3rdparty/react-oidc-fetch-core");
var mapStateToProps = function (state) { return ({ user: state.oidc.user }); };
var enhance = function (fetch) {
    return recompose_1.compose(react_redux_1.connect(mapStateToProps, null), recompose_1.withProps(react_oidc_fetch_core_1.fetchToken(fetch)));
};
exports.default = enhance;
