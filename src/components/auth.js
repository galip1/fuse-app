import React from "react";
import "./auth.scss";
import SignIn from "./sign-in";
import { Container, Grid } from "@mui/material";
import Sidebar from "./sidebar";
import SignUp from "./sign-up";

const Auth = () => {
  return (
    <div className="auth-container">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <SignIn />
          </Grid>
          <Grid item xs={12} md={7}>
            <div className="sidebar-container">
              <Sidebar />
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Auth;
