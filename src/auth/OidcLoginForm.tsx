import { useEffect, useState } from "react";
import { useRedirect } from "react-admin";
import { CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CircularProgress } from "@mui/material";

const PARAM_CODE = 'code';
const PARAM_STATE = 'state';

type OidcLoginFormProps = {
  login: (params: any, pathName?: string) => Promise<any>;
};

export const OidcLoginForm = ({ login }: OidcLoginFormProps) => {
  const [message, setMessage] = useState('Please wait.')
  const redirect = useRedirect();

  useEffect(() => {
    const { searchParams } = new URL(window.location.href);
    const code = searchParams.get(PARAM_CODE);
    const state = searchParams.get(PARAM_STATE);

    // If code is present, we came back from the provider
    if (code && state) {
      login({ code, state }).then(() => redirect(window.location.origin));
    } else {
      setMessage('One moment. You will be redirected to the login page');
      login({}); // Did not provide code, trigger the redirection
    }
  }, [login, redirect]);

  return (
    <Root>
      <CardContent className={LoginFormClasses.content}>
        <Typography variant="h6">{message}</Typography>
        <CircularProgress />
      </CardContent>
    </Root>
  );
};

const PREFIX = "RaLoginForm";

export const LoginFormClasses = {
  content: `${PREFIX}-content`,
};

const Root = styled("div", {
  name: PREFIX,
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  [`& .${LoginFormClasses.content}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
}));
