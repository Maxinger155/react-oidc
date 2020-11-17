import { User } from 'oidc-client';
declare const getAccessToken: (user: User | null) => () => string | null;
declare type Fetch = typeof window.fetch;
export declare const fetchWithToken: (fetch: Fetch, getAccessTokenInjected: () => string | null) => (url: RequestInfo, options?: RequestInit) => Promise<Response>;
interface ComponentWithFetchProps {
    fetch: Fetch;
    user?: User | null;
}
export declare const fetchWrapper: (fetchWithTokenInjected: typeof fetchWithToken) => (getAccessTokenInjected: typeof getAccessToken) => (fetch?: Fetch) => (props: ComponentWithFetchProps) => {
    fetch: (url: RequestInfo, options?: RequestInit) => Promise<Response>;
};
declare const _default: (fetch?: Fetch) => (props: ComponentWithFetchProps) => {
    fetch: (url: RequestInfo, options?: RequestInit) => Promise<Response>;
};
export default _default;
//# sourceMappingURL=fetchToken.d.ts.map