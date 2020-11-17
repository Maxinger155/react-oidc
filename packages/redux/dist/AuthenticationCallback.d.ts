import * as React from 'react';
import { User } from 'oidc-client';
import { ReactOidcHistory } from '@3rdparty/react-oidc-core';
export declare const success: (oidcLogInjected: {
    error: (msg: string) => void;
}) => (history: ReactOidcHistory) => (user: User | null) => void;
declare const _default: React.ComponentType<unknown>;
export default _default;
//# sourceMappingURL=AuthenticationCallback.d.ts.map