import * as PropTypes from 'prop-types';
export declare const configurationPropTypes: PropTypes.Validator<PropTypes.InferProps<{
    client_id: PropTypes.Validator<string>;
    redirect_uri: PropTypes.Requireable<string>;
    popup_redirect_uri: PropTypes.Requireable<string>;
    popupWindowFeatures: PropTypes.Requireable<string>;
    response_type: PropTypes.Validator<string>;
    scope: PropTypes.Validator<string>;
    authority: PropTypes.Validator<string>;
    silent_redirect_uri: PropTypes.Validator<string>;
    automaticSilentRenew: PropTypes.Requireable<boolean>;
    loadUserInfo: PropTypes.Requireable<boolean>;
    triggerAuthFlow: PropTypes.Requireable<boolean>;
    storeJwtInMemory: PropTypes.Requireable<boolean>;
    metadata: PropTypes.Requireable<PropTypes.InferProps<{
        issuer: PropTypes.Requireable<string>;
        jwks_uri: PropTypes.Requireable<string>;
        authorization_endpoint: PropTypes.Requireable<string>;
        token_endpoint: PropTypes.Requireable<string>;
        userinfo_endpoint: PropTypes.Requireable<string>;
        end_session_endpoint: PropTypes.Requireable<string>;
        revocation_endpoint: PropTypes.Requireable<string>;
        introspection_endpoint: PropTypes.Requireable<string>;
    }>>;
}>>;
export declare const configurationDefaultProps: {
    automaticSilentRenew: boolean;
    loadUserInfo: boolean;
    triggerAuthFlow: boolean;
    storeJwtInMemory: boolean;
};
//# sourceMappingURL=configurationPropTypes.d.ts.map