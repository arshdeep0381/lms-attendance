import { useEffect, useRef } from "react";
import { LoginClasses, useCheckAuth, useLogin, useRedirect } from "react-admin";
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";
import { OidcLoginForm } from "./OidcLoginForm";

export const OidcLoginPage = (props: any) => {
  const containerRef = useRef<HTMLDivElement>();
  const checkAuth = useCheckAuth();
  const login = useLogin();
  const redirect = useRedirect();

  useEffect(() => {
    checkAuth({})
      .then(() => {
        // already authenticated, redirect to the home page
        redirect("/");
      })
      .catch(() => {});
  }, [checkAuth, redirect]);

  return (
    <Root {...props} ref={containerRef}>
      <Card className={LoginClasses.card}>
        <OidcLoginForm login={login} />
      </Card>
    </Root>
  );
};

const PREFIX = "RaLogin";

const Root = styled("div", {
  name: PREFIX,
  overridesResolver: (props, styles) => styles.root,
})(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  height: "1px",
  alignItems: "center",
  justifyContent: "flex-start",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage:
    "radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)",

  [`& .${LoginClasses.card}`]: {
    minWidth: 300,
    margin: "6em",
    display: "flex",
    justifyContent: "center",
  },
}));
