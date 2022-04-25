import {
  Log,
  OidcMetadata,
  UserManager,
  WebStorageStateStore,
} from "oidc-client-ts";

const client_id = process.env.REACT_APP_CLIENT_ID || '';
const client_secret = process.env.REACT_APP_CLIENT_SECRET || undefined;

const authority: string = "https://accounts.google.com/o/oauth2/v2/auth";
const redirect_uri: string = "http://localhost:3000/login";
const scope: string = "openid email profile";
const response_type: string = "code";
const userStore = new WebStorageStateStore({ store: window.localStorage });
const automaticSilentRenew = true;
const filterProtocolClaims = true;

const authorization_endpoint = authority;
const jwks_uri = "https://accounts.google.com/.well-known/openid-configuration";
const token_endpoint = "https://www.googleapis.com/oauth2/v4/token";

const metadata: Partial<OidcMetadata> = {
  authorization_endpoint,
  jwks_uri,
  token_endpoint,
};

const log = console.log;
Log.setLogger(console);

export const mgr = new UserManager({
  authority,
  client_id,
  client_secret,
  metadata,
  scope,
  redirect_uri,
  response_type,
  userStore,
  automaticSilentRenew,
  filterProtocolClaims,
});

mgr.events.addAccessTokenExpiring(function () {
  log("token expiring");

  mgr
    .signinSilent()
    .then(function (user) {
      log("silent renew success", user);
    })
    .catch(function (e) {
      log("silent renew error", e.message);
    });
});

mgr.events.addAccessTokenExpired(function () {
  log("token expired");
});

mgr.events.addSilentRenewError(function (e) {
  log("silent renew error", e.message);
});

mgr.events.addUserLoaded(function (user) {
  log("user loaded", user);
  mgr
    .getUser()
    .then((user) =>
      log(
        `getUser loaded user ${JSON.stringify(user || {})} after userLoaded event fired`
      )
    );
});

mgr.events.addUserUnloaded(() => {
  log("user unloaded");
});

mgr.events.addUserSignedIn(() => {
  log("user logged in to the token server");
});
mgr.events.addUserSignedOut(() => {
  log("user logged out of the token server");
});
