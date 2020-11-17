import { ComponentType, FC, PropsWithChildren } from 'react';
import PropTypes from 'prop-types';
import { UserStoreType } from '@3rdparty/react-oidc-core';
export declare const OidcBase3rdparty: {
    (props: any): JSX.Element;
    propTypes: {
        loadUser3rdparty: PropTypes.Validator<(...args: any[]) => any>;
        authenticationService3rdparty: PropTypes.Validator<(...args: any[]) => any>;
        notAuthenticated: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        notAuthorized: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        callbackComponentOverride: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        sessionLostComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        configuration: PropTypes.Validator<PropTypes.InferProps<{
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
        store: PropTypes.Validator<object>;
        isEnabled: PropTypes.Requireable<boolean>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        UserStore: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
declare type OidcBaseProps = PropsWithChildren<{
    notAuthenticated?: ComponentType | null;
    notAuthorized?: ComponentType | null;
    callbackComponentOverride?: ComponentType | null;
    sessionLostComponent?: ComponentType | null;
    configuration: any;
    store: any;
    isEnabled: boolean;
    UserStore: UserStoreType;
}>;
declare const OidcBase: FC<OidcBaseProps>;
export default OidcBase;
//# sourceMappingURL=Oidc.d.ts.map