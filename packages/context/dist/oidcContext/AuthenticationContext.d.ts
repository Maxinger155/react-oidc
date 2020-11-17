import React, { ComponentType } from 'react';
import { User, UserManagerEvents, UserManager } from 'oidc-client';
export declare type oidcContext = {
    oidcUser: User | null;
    isEnabled: boolean;
    login: Function;
    loginSilent: Function;
    loginPopup: Function;
    logout: Function;
    events: UserManagerEvents;
    authenticating: ComponentType;
    isLoading: boolean;
    isLoggingOut: boolean;
    userManager: UserManager;
    error: string;
};
export declare const AuthenticationContext: React.Context<oidcContext>;
export declare const useReactOidc: () => {
    isEnabled: boolean;
    login: Function;
    loginSilent: Function;
    loginPopup: Function;
    logout: Function;
    oidcUser: User;
    events: UserManagerEvents;
};
//# sourceMappingURL=AuthenticationContext.d.ts.map