import React, { ComponentType, FC } from 'react';
import { oidcLog, ReactOidcHistory } from '@3rdparty/react-oidc-core';
import { User, UserManager } from 'oidc-client';
export declare const onRedirectSuccess: (history: ReactOidcHistory, oidcLogInternal: typeof oidcLog) => (user: User) => void;
export declare const onRedirectError: (history: ReactOidcHistory, oidcLogInternal: typeof oidcLog) => ({ message }: {
    message: string;
}) => void;
declare type CallbackContainerCoreProps = {
    history: ReactOidcHistory;
    getUserManager: () => UserManager | undefined;
    oidcLog: typeof oidcLog;
    callbackComponentOverride: ComponentType;
};
export declare const CallbackContainerCore: FC<CallbackContainerCoreProps>;
declare const _default: React.MemoExoticComponent<(props: any) => JSX.Element>;
export default _default;
//# sourceMappingURL=Callback.container.d.ts.map