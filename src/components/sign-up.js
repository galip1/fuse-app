import React from "react";
import {
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link as MuiLink,
  Grid,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import logo from "../assets/img/logo/logo.png";
import { Link } from "react-router-dom";
import "./sign-up.scss";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
    validationSchema: Yup.object({
      displayName: Yup.string().required("Invalid name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Invalid email address"),
      password: Yup.string().required("Invalid password"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Invalid password"),
      agreeToTerms: Yup.boolean()
        .oneOf([true], "Must accept Terms and Conditions")
        .required("Must accept Terms and Conditions"),
    }),
    onSubmit: (values) => {
      // Form submit logic
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form-signup">
      <img src={logo} alt="logo" />
      <Typography variant="h4">Sign up</Typography>

      <Grid item className="mb-4">
        <Typography variant=""> Already have an account? </Typography>
        <MuiLink component={Link} to="/" variant="body2">
          Sign in
        </MuiLink>
      </Grid>
      <TextField
        label="Display Name"
        name="displayName"
        className="mb-4"
        fullWidth
        {...formik.getFieldProps("displayName")}
        error={formik.touched.displayName && Boolean(formik.errors.displayName)}
        helperText={formik.touched.displayName && formik.errors.displayName}
      />
      <TextField
        label="Email"
        name="email"
        className="mb-4"
        fullWidth
        {...formik.getFieldProps("email")}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        className="mb-4"
        fullWidth
        {...formik.getFieldProps("password")}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <TextField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        className="mb-4"
        fullWidth
        {...formik.getFieldProps("confirmPassword")}
        error={
          formik.touched.confirmPassword &&
          Boolean(formik.errors.confirmPassword)
        }
        helperText={
          formik.touched.confirmPassword && formik.errors.confirmPassword
        }
      />
      <FormControlLabel
        control={
          <Checkbox
            name="agreeToTerms"
            checked={formik.values.agreeToTerms}
            onChange={formik.handleChange}
            color="primary"
          />
        }
        label="I agree to the Terms of Service and Privacy Policy"
      />
      <Button type="submit" variant="contained" color="primary">
        Create your free account
      </Button>
    </form>
  );
};

export default SignUp;