import {
  RecordContextProvider,
  SimpleShowLayout,
  TextField,
  Title,
  useGetIdentity,
  useTranslate,
} from "react-admin";
import Avatar from "@mui/material/Avatar";

export const Profile = (props: any) => {
  const translate = useTranslate();
  const { identity } = useGetIdentity();

  return (
    <RecordContextProvider value={identity}>
      <Title title={translate("profile.title")} />
      <SimpleShowLayout>
        <Avatar
          alt={identity?.fullName}
          src={identity?.picture}
          sx={{ width: 96, height: 96 }}
        />
        <TextField
          label={translate("profile.property.fullName.label")}
          source="fullName"
        />
        <TextField label={translate("profile.property.givenName.label")} source="given_name" />
        <TextField label={translate("profile.property.familyName.label")} source="family_name" />
        <TextField label={translate("profile.property.email.label")} source="email" />
        <TextField label={translate("profile.property.emailVerified.label")} source="email_verified" />
        <TextField label={translate("profile.property.locale.label")} source="locale" />
        <TextField label={translate("profile.property.subject.label")} source="sub" />
        <TextField label={translate("profile.property.picture.label")} source="picture" />
      </SimpleShowLayout>
    </RecordContextProvider>
  );
};
