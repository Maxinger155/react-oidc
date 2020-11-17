import { compose } from 'recompose';
import {
  withFetchRedirectionOn403,
  withFetchSilentAuthenticateAndRetryOn401,
} from '@3rdparty/react-oidc-fetch-core';
import withFetchToken from './withFetchToken';

type WindowFetch = typeof fetch;

const enhance = (fetch: WindowFetch) =>
  compose(
    withFetchToken(fetch),
    withFetchSilentAuthenticateAndRetryOn401(),
    withFetchRedirectionOn403()
  );

export default enhance;
