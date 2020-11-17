import { UserManager, WebStorageStateStore, InMemoryWebStorage, UserManagerSettings } from 'oidc-client';
export declare const setUserManager: (userManagerToSet: UserManager) => void;
export declare const getUserManager: () => UserManager;
export declare type UserStoreType = any;
export declare const authenticationServiceInternal: (WebStorageStateStoreInt: typeof WebStorageStateStore) => (configuration: UserManagerSettings, UserStore?: UserStoreType) => UserManager;
export declare const authenticationService: (configuration: UserManagerSettings, UserStore?: UserStoreType) => UserManager;
export { InMemoryWebStorage };
//# sourceMappingURL=authenticationService.d.ts.map