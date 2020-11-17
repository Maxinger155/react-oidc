# Modified Version of https://github.com/AxaGuilDEv/react-oidc 
# with a popup login function in the context-package


## 3rdparty/react-oidc

<p align="center">
  A set of react components and HOC to make Oidc (OpenID Connect) client easy. It aim to simplify OAuth authentication between multiples providers.
</p>

- [About](#about)
- [Getting Started](#getting-started)
- [How It Works](#how-it-works)
- Packages
  - [`3rdparty/react-oidc-context`](./packages/context#readme.md)
  - [`3rdparty/react-oidc-context-fetch`](./packages/context-fetch#readme.md)
  - [`3rdparty/react-oidc-redux`](./packages/redux#readme.md) 
  - [`3rdparty/react-oidc-redux-fetch`](./packages/redux-fetch#readme.md)
  - [`3rdparty/react-oidc-fetch-observable`](./packages/fetch-observable#readme.md) 
  - [`3rdparty/vanilla-oidc`](./packages/vanilla#readme.md)
- [Concepts](#concepts)
- [Contribute](#contribute)

## About

These components is used to manage client authentication.
It uses the libraries ["oidc client"](https://github.com/IdentityModel/oidc-client-js).

Two version of the component with different "State management" are available :

- with redux
- with react context api

## Getting Started

- [`3rdparty/react-oidc-context`](./packages/context#readme)
- [`3rdparty/react-oidc-context-fetch`](./packages/context-fetch#readme)
- [`3rdparty/react-oidc-redux`](./packages/redux#readme)
- [`3rdparty/react-oidc-redux-fetch`](./packages/redux-fetch#readme)
- [`3rdparty/react-oidc-fetch-observable`](./packages/fetch-observable#readme)
- [`3rdparty/vanilla-oidc`](./packages/vanilla#readme)

## Examples

- [`create react app & context api`](./examples/context)
- [`create react app & redux`](./examples/redux)
- [`create react app & vanilla`](./examples/vanilla)

## How It Works

These components encapsulate the use of "oidc client" in order to hide workfow complexity.
Internally, native History API is used to be router library agnostic.

## Concept

A set of react components and HOC to make Oidc client easy!

The purpose of the component is :

- Simple set up
- React component protection (by composing)
- Standardize the "Routes" used by the oauth flow
- Manage the recovery of tokens and different exchanges with "openid connect" server
- Flexible : You can customize routes and redirect components if you need it
- HOC => override "fetch" in order to retrieve a new "fetch" that will be able to manage http 401 and http 403 response.

## Contribute

- [How to run the solution and to contribute](./CONTRIBUTING.md)
- [Please respect our code of conduct](./CODE_OF_CONDUCT.md)