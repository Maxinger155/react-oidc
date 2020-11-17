import { ComponentType, FC, PropsWithChildren } from 'react';
export declare const oidcSecure: (Component: ComponentType) => (props: any) => JSX.Element;
declare type OidcSecureProps = PropsWithChildren<{
    /**
     * Enable secure authentication for component
     */
    isEnabled?: boolean;
    /**
     * Custom Authenticating Component
     */
    authenticating?: ComponentType;
}>;
declare const OidcSecure: FC<OidcSecureProps>;
export default OidcSecure;
//# sourceMappingURL=OidcSecure.d.ts.map