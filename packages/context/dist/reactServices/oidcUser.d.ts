import React from 'react';
import { User } from 'oidc-client';
export declare type WithOidcUserProps = {
    oidcUser: User | null;
    login: Function;
    loginPopup: Function;
    loginSilent: Function;
};
export declare function withOidcUser<T extends WithOidcUserProps = WithOidcUserProps>(WrappedComponent: React.ComponentType<T>): {
    (props: Omit<T, keyof WithOidcUserProps>): JSX.Element;
    displayName: string;
};
//# sourceMappingURL=oidcUser.d.ts.map