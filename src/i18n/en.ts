import { TranslationMessages } from "react-admin";
import englishMessages from "ra-language-english";

export const customEnglishMessages: TranslationMessages = {
  ...englishMessages,
  profile: {
    menu: "Profile",
    title: "Profile",
    property: {
      fullName: {
        label: "Full Name",
      },
      familyName: {
        label: "Family Name",
      },
      givenName: {
        label: "Given Name",
      },
      email: {
        label: "email",
      },
      emailVerified: {
        label: "email verified",
      },
      locale: {
        label: "locale",
      },
      subject: {
        label: "Subject (sub)",
      },
      picture: {
        label: "Picture Link",
      },
    },
  },
};
