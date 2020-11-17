import { User, UserManager } from 'oidc-client';
import { ReactOidcHistory } from '../routes/withRouter';
export declare const isRequireAuthentication: (user: User, isForce?: boolean) => boolean;
export declare const isRequireSignin: (oidcUser: User, isForce?: boolean) => boolean;
export declare const authenticateUser: (userManager: UserManager, location: Location, history?: ReactOidcHistory, user?: User) => (isForce?: boolean, callbackPath?: string) => Promise<void>;
export declare const authenticateUserPopup: (userManager: UserManager, location: Location, history?: ReactOidcHistory, user?: User) => (isForce?: boolean, callbackPath?: string) => Promise<void>;
export declare const authenticateUserSilent: (userManager: UserManager, location: Location, history?: ReactOidcHistory, user?: User) => (isForce?: boolean, callbackPath?: string) => Promise<void>;
export declare const logoutUser: (userManager: UserManager) => Promise<void>;
export declare const signinSilent: (getUserManager: () => UserManager) => (data?: any) => Promise<User>;
//# sourceMappingURL=oidcServices.d.ts.map