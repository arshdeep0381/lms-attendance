# React Admin Example: Authentication using OIDC.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![FOSSA Status](https://app.fossa.com/api/projects/custom%2B31163%2Fgithub.com%2Fbwgz%2Fra-example-oidc.svg?type=shield)](https://app.fossa.com/projects/custom%2B31163%2Fgithub.com%2Fbwgz%2Fra-example-oidc?ref=badge_shield) [![TypeScript](https://img.shields.io/badge/--3178C6?logo=typescript&logoColor=ffffff)](https://www.typescriptlang.org/)


This application implements a [react-admin](https://marmelab.com/react-admin/) authentication provider for OIDC.

See the react-admin documentation of details on [Auth Providers](https://marmelab.com/react-admin/Authentication.html).

It uses [oidc-client-ts](https://github.com/authts/oidc-client-ts) to interface with a OAuth 2.0 Authorization Server.

This example was written to use Google OAuth 2.0 Authorization Server. It can be modified to use any OAuth 2.0.

Before running the application you'll need to establish an OAuth 2.0 Client ID using the [Google Cloud Platform](https://console.cloud.google.com). If you plan to use another OAuth 2.0 Authorization Server then you'll need to do the equivalent.

Before running the application set the following environment variables using values supplied by the vendor (i.e. Google).

* REACT_APP_CLIENT_ID
* REACT_APP_CLIENT_SECRET

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## About the app
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). And then modified to use [react-admin](https://marmelab.com/react-admin/)

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B31163%2Fgithub.com%2Fbwgz%2Fra-example-oidc.svg?type=large)](https://app.fossa.com/projects/custom%2B31163%2Fgithub.com%2Fbwgz%2Fra-example-oidc?ref=badge_large)
