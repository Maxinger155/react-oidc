/// <reference types="recompose" />
declare type WindowFetch = typeof fetch;
declare const enhance: (fetch: WindowFetch) => import("recompose").ComponentEnhancer<unknown, unknown>;
export default enhance;
//# sourceMappingURL=withAuthentication.d.ts.map