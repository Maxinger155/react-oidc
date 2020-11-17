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
Object.defineProperty(exports, "__esModule", { value: true });
exports.configurationDefaultProps = exports.configurationPropTypes = void 0;
var PropTypes = __importStar(require("prop-types"));
exports.configurationPropTypes = PropTypes.shape({
    client_id: PropTypes.string.isRequired,
    redirect_uri: PropTypes.string,
    popup_redirect_uri: PropTypes.string,
    popupWindowFeatures: PropTypes.string,
    response_type: PropTypes.string.isRequired,
    scope: PropTypes.string.isRequired,
    authority: PropTypes.string.isRequired,
    silent_redirect_uri: PropTypes.string.isRequired,
    automaticSilentRenew: PropTypes.bool,
    loadUserInfo: PropTypes.bool,
    triggerAuthFlow: PropTypes.bool,
    storeJwtInMemory: PropTypes.bool,
    metadata: PropTypes.shape({
        issuer: PropTypes.string,
        jwks_uri: PropTypes.string,
        authorization_endpoint: PropTypes.string,
        token_endpoint: PropTypes.string,
        userinfo_endpoint: PropTypes.string,
        end_session_endpoint: PropTypes.string,
        revocation_endpoint: PropTypes.string,
        introspection_endpoint: PropTypes.string,
    }),
}).isRequired;
exports.configurationDefaultProps = {
    automaticSilentRenew: true,
    loadUserInfo: true,
    triggerAuthFlow: true,
    storeJwtInMemory: false
};
