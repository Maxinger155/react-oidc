import { compose, withProps } from 'recompose';
import { withOidcUser } from '@3rdparty/react-oidc-context';
import { fetchToken } from '@3rdparty/react-oidc-fetch-core';

type WindowFetch = typeof fetch;

const enhance = (fetch: WindowFetch) =>
  compose(
    withOidcUser,
    withProps(({ oidcUser }) => ({
      user: oidcUser,
    })),
    withProps(fetchToken(fetch))
  );

export default enhance;
