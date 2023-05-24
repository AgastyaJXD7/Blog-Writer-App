import { useEffect, useRef } from "react";
import { useLogin } from "@pankod/refine-core";
import { Container, Box, Typography,} from "@pankod/refine-mui";

import {yariga} from '../assets' 

import { CredentialResponse } from "../interfaces/google";
import LoginPageLottie from "assets/LoginPageLottie";

export const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();

  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        return;
      }

      try {
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });
        window.google.accounts.id.renderButton(divRef.current, {
          theme: "filled_blue",
          size: "medium",
          type: "standard",
        });
      } catch (error) {
        console.log(error);
      }
    }, []); // you can also add your client id as dependency here

    return <div ref={divRef} />;
  };

  return (
    <Box
      component="div"
      sx={{
        backgroundImage: "linear-gradient(to right, #3e8573, #539685, #68a797, #7cb9aa, #91cbbd);"
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Box mt={4} mb={1}>
            <Typography fontSize={24} fontWeight={700} color="#11142d" mt={1}>Welcome</Typography>
     
            <LoginPageLottie/>
            <img src={yariga} alt="Yariga Logo" />
          </Box>
          <Box mt={4} mb={2}>
            <GoogleButton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
