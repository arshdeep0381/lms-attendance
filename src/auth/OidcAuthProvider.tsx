import { User } from "oidc-client-ts";
import { AuthProvider, UserIdentity } from "react-admin";
import { mgr as userManager } from "./OidcUserManager";

const login = (params: any): Promise<void> => {
  return new Promise<void>((resolve) => {
    const { code, state } = params;

    if (!code && !state) {
      // 1. Redirect to the issuer to ask authentication
      userManager.signinRedirect().catch((error) => console.error(error));
    } else {
      // 2. We came back from the issuer with code and state
      userManager
        .signinCallback()
        .then((user: User | void) => {
          userManager
            .storeUser(user as User)
            .then(() => userManager.clearStaleState())
            .finally(() => resolve());
        })
        .catch((error) => {
          console.error(`login error: ${error}`);
        });
    }
  });
};

const logout = () => {
  return new Promise<void | false | string>((resolve) => {
    userManager.removeUser();
    resolve();
  });
};

const checkAuth = (params: any) => {
  return new Promise<void>((resolve, reject) =>
    userManager
      .getUser()
      .then((user) => (user ? resolve() : reject({ message: false })))
  );
};

const toUserIdentity = (user: User) => {
  const { profile } = user;
  const { family_name, given_name, name, picture, sub } = profile;
  const fullName = name || `${given_name} ${family_name}`;
  const avatar = picture;
  return { id: sub, fullName, avatar, ...profile };
};

const getIdentity = () => {
  return new Promise<UserIdentity>((resolve, reject) =>
    userManager
      .getUser()
      .then((user: User | null) =>
        user ? resolve(toUserIdentity(user)) : reject("user not found")
      )
  );
};

export const authProvider: AuthProvider = {
  login: (params: any) => login(params),
  logout: () => logout(),
  checkAuth: (params: any) => checkAuth(params),
  checkError: (error: any) => Promise.resolve(),
  getIdentity: () => getIdentity(),
  getPermissions: () => Promise.resolve(),
  getRoles: () => Promise.resolve(),
};