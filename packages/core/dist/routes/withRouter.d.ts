import React from 'react';
declare const generateKey: () => string;
export declare type WindowInternal = Window & {
    CustomEvent?: new <T>(typeArg: string, eventInitDict?: CustomEventInit<T>) => CustomEvent<T>;
    Event: typeof Event;
};
declare type InitCustomEventParams<T = any> = {
    bubbles: boolean;
    cancelable: boolean;
    detail: T;
};
export declare const CreateEvent: (windowInternal: WindowInternal, documentInternal: Document) => (event: string, params: InitCustomEventParams) => CustomEvent;
declare type WindowHistoryState = typeof window.history.state;
export interface ReactOidcHistory {
    push: (url?: string | null, stateHistory?: WindowHistoryState) => void;
}
export declare const withRouter: (windowInternal: WindowInternal, CreateEventInternal: (event: string, params?: InitCustomEventParams) => CustomEvent, generateKeyInternal: typeof generateKey) => (Component: React.ComponentType) => (props: any) => JSX.Element;
declare const _default: (Component: React.ComponentType<{}>) => (props: any) => JSX.Element;
export default _default;
//# sourceMappingURL=withRouter.d.ts.map