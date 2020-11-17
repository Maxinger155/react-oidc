import { User, UserManager, Logger } from 'oidc-client';
export interface OidcState {
    oidcUser: User | null;
    userManager: UserManager;
    isLoading: boolean;
    error: string;
    isLoggingOut: boolean;
}
export interface UseAuthenticationContextStateType {
    onError: Function;
    loadUser: Function;
    onLoading: Function;
    unloadUser: Function;
    onLogout: Function;
    oidcState: OidcState;
}
export declare const useAuthenticationContextState: (userManagerInt: UserManager) => UseAuthenticationContextStateType;
declare type OidcFunctions = Omit<UseAuthenticationContextStateType, 'oidcState'>;
export declare const onErrorEvent: (oidcLog: Logger, onErrorInt: Function) => (error: Error) => void;
export declare const onUserLoadedEvent: (oidcLog: Logger, loadUserInt: Function) => (user: User | null) => void;
export declare const onUserUnloadedEvent: (oidcLog: Logger, unloadUserInternal: Function) => () => void;
export declare const onAccessTokenExpiredEvent: (oidcLog: Logger, unloadUserInternal: Function, userManager: UserManager) => () => Promise<void>;
export declare const useOidcEvents: (oidcLog: Logger, userManager: UserManager, oidcFunctions: OidcFunctions) => {
    addOidcEvents: () => void;
    removeOidcEvents: () => void;
};
export {};
//# sourceMappingURL=AuthenticationContext.hooks.d.ts.map