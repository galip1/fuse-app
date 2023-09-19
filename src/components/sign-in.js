import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Grid,
  Link as MuiLink,
  Box,
  Checkbox,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../assets/img/logo/logo.png";
import { Link } from "react-router-dom";
import { CiTwitter } from "react-icons/ci";
import { PiGithubLogoLight } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import "./sign-in.scss";
const SignIn = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "admin@fusetheme.com",
      password: "12345",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("You must enter a email")
        .required("You must enter a email"),
      password: Yup.string().required("Please enter your password."),
    }),
    onSubmit: (values) => {
      // Form submit logic
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form-signin">
      <img src={logo} alt="logo" />

      <Typography className="sign" variant="h4">
        Sign in
      </Typography>

      <Grid item className="mb-4 text-align-left">
        <Typography variant=""> Don't have an account? </Typography>
        <MuiLink
          className="sign-link"
          component={Link}
          to="/signup"
          variant="body2"
        >
          Sign up
        </MuiLink>
      </Grid>
      <TextField
        className="mb-4"
        label="Email"
        name="email"
        fullWidth
        {...formik.getFieldProps("email")}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        fullWidth
        {...formik.getFieldProps("password")}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />

      <Box mt={1} className="box-container">
        <div className="remember-me-container">
          <div className="remember-me">
            <Checkbox
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
              color="primary"
            />
            <Typography variant="body2">Remember me</Typography>
          </div>
          <MuiLink
            component={Link}
            to="/forgot-password"
            variant="body2"
            className="forgot-password"
          >
            Forgot password?
          </MuiLink>
        </div>
      </Box>

      <Button
        className="mt-4 btn-sign-in"
        type="submit"
        variant="contained"
        color="primary"
      >
        Sign in
      </Button>

      <Box mt={2} className="button-container">
        <Typography className="my-4" variant="body2">
          Or continue in with
        </Typography>
        <div className="buttons">
          <Button variant="outlined">
            <SlSocialFacebook />
          </Button>
          <Button variant="outlined">
            <CiTwitter />
          </Button>
          <Button variant="outlined" className="github-icon">
            <PiGithubLogoLight />
          </Button>
        </div>
      </Box>
    </form>
  );
};

export default SignIn;
