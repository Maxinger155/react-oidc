/// <reference types="recompose" />
import { ReactOidcHistory } from '@3rdparty/react-oidc-core';
export declare const fetchWithRedirectionOn403: (fetch: ((input: RequestInfo, init?: RequestInit) => Promise<Response>) & typeof fetch, history: ReactOidcHistory) => (url: RequestInfo, options?: RequestInit) => Promise<Response>;
export declare const wrapAuthenticating: (fetchWithRedirectionOn403Injected: typeof fetchWithRedirectionOn403) => (fetch?: ((input: RequestInfo, init?: RequestInit) => Promise<Response>) & typeof fetch) => (props: any) => {
    fetch: (url: RequestInfo, options?: RequestInit) => Promise<Response>;
};
declare const enhance: (fetch?: ((input: RequestInfo, init?: RequestInit) => Promise<Response>) & typeof fetch) => import("recompose").ComponentEnhancer<unknown, unknown>;
export default enhance;
//# sourceMappingURL=withFetchRedirectionOn403.d.ts.map