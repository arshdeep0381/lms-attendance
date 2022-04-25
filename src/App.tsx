import { Route } from "react-router";
import {
  Resource,
  ListGuesser,
  CustomRoutes,
  Admin,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import polyglotI18nProvider from "ra-i18n-polyglot";
import {
  customEnglishMessages as englishMessages,
} from "./i18n";
import { AdminLayout } from "./layout";
import { authProvider, OidcLoginPage } from "./auth";
import { Profile } from "./profile";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const i18nProvider = polyglotI18nProvider((locale) => {
  return englishMessages;
}, "en");

const App = () => {
  return (
    <Admin
      authProvider={authProvider}
      loginPage={OidcLoginPage}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      layout={AdminLayout}
    >
      <CustomRoutes>
        <Route path="/profile" element={<Profile />} />
      </CustomRoutes>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
};

export default App;
