import { ComponentType, PropsWithChildren } from 'react';
import { UserManager } from 'oidc-client';
import { Authenticating, getUserManager, authenticateUser, isRequireAuthentication, oidcLog, ReactOidcHistory } from '@3rdparty/react-oidc-core';
declare type OidcComponentProps = PropsWithChildren<{
    location: Location;
    history: ReactOidcHistory;
    authenticateUserInternal: typeof authenticateUser;
    getUserManagerInternal: typeof getUserManager;
    isRequireAuthenticationInternal: typeof isRequireAuthentication;
    AuthenticatingInternal: typeof Authenticating;
}>;
export declare const useOidcSecure: (authenticateUserInternal: typeof authenticateUser, userManager: UserManager, location: Location, history: ReactOidcHistory, oidcLogInternal: typeof oidcLog, AuthenticatingInternal: typeof Authenticating, isRequireAuthenticationInternal: typeof isRequireAuthentication, WrappedComponent: ComponentType) => ComponentType;
export declare const OidcSecureWithInjectedFunctions: ({ children, location, history, authenticateUserInternal, getUserManagerInternal, isRequireAuthenticationInternal, AuthenticatingInternal, }: OidcComponentProps) => JSX.Element;
declare const OidcSecure: (props: any) => JSX.Element;
export declare const withOidcSecure: (WrappedComponent: ComponentType) => (props: PropsWithChildren<any>) => JSX.Element;
export default OidcSecure;
//# sourceMappingURL=OidcSecure.d.ts.map