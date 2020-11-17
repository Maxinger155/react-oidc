/// <reference types="recompose" />
declare const enhance: (fetch?: ((input: RequestInfo, init?: RequestInit) => Promise<Response>) & typeof fetch) => import("recompose").ComponentEnhancer<unknown, unknown>;
export default enhance;
//# sourceMappingURL=withFetchSilentAuthenticateAndRetryOn401.d.ts.map