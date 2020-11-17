import React, { ComponentType, FC, PropsWithChildren } from 'react';
import { OidcProvider, loadUser } from 'redux-oidc';
import PropTypes from 'prop-types';
import {
  OidcRoutes,
  authenticationService,
  getUserManager,
  configurationPropTypes,
  UserStoreType,
} from '@3rdparty/react-oidc-core';
import AuthenticationCallback from './AuthenticationCallback';

const propTypes = {
  notAuthenticated: PropTypes.elementType,
  notAuthorized: PropTypes.elementType,
  callbackComponentOverride: PropTypes.elementType,
  sessionLostComponent: PropTypes.elementType,
  // eslint-disable-next-line react/require-default-props
  configuration: configurationPropTypes,
  store: PropTypes.object.isRequired,
  isEnabled: PropTypes.bool,
  children: PropTypes.node,
  UserStore: PropTypes.func,
};

const defaultPropsObject: Partial<OidcBaseProps> = {
  notAuthenticated: null,
  notAuthorized: null,
  callbackComponentOverride: null,
  sessionLostComponent: null,
  isEnabled: true,
  children: null,
  UserStore: null,
};

const withComponentOverrideProps = (Component: ComponentType, customProps: any) => (props: any) => (
  <Component callbackComponentOverride={customProps} {...props} />
);

export const OidcBase3rdparty = (props: any) => {
  const {
    isEnabled,
    children,
    store,
    callbackComponentOverride,
    configuration,
    notAuthenticated,
    notAuthorized,
    sessionLostComponent,
    UserStore,
    loadUser3rdparty,
    authenticationService3rdparty,
  } = props;

  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    if (isEnabled) {
      const userManager = authenticationService3rdparty(configuration, UserStore);
      loadUser3rdparty(store, userManager);
      setReady(true);
    }
  }, [UserStore, configuration, isEnabled, store, loadUser3rdparty, authenticationService3rdparty]);

  return ready ? (
    <OidcProvider store={store} userManager={getUserManager()}>
      <OidcRoutes
        configuration={configuration}
        notAuthenticated={notAuthenticated}
        notAuthorized={notAuthorized}
        sessionLost={sessionLostComponent}
        callbackComponent={withComponentOverrideProps(
          AuthenticationCallback,
          callbackComponentOverride
        )}
      >
        {children}
      </OidcRoutes>
    </OidcProvider>
  ) : (
    <>{children}</>
  );
};

OidcBase3rdparty.propTypes = {
  ...propTypes,
  loadUser3rdparty: PropTypes.func.isRequired,
  authenticationService3rdparty: PropTypes.func.isRequired,
};

type OidcBaseProps = PropsWithChildren<{
  notAuthenticated?: ComponentType | null;
  notAuthorized?: ComponentType | null;
  callbackComponentOverride?: ComponentType | null;
  sessionLostComponent?: ComponentType | null;
  configuration: any;
  store: any;
  isEnabled: boolean;
  UserStore: UserStoreType;
}>;

const OidcBase: FC<OidcBaseProps> = props => (
  <OidcBase3rdparty
    loadUser3rdparty={loadUser}
    authenticationService3rdparty={authenticationService}
    {...props}
  />
);

// @ts-ignore
OidcBase.propTypes = propTypes;
OidcBase.defaultProps = defaultPropsObject;

export default OidcBase;
