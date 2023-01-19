import React from "react";
import { Button, Box, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Logo from "../../../components/logo/logo";
import LoginSchema, { initialLog } from "./schema";
import useSignIn from "../../../hooks/use-signin";

function SignInForm() {
  const navigate = useNavigate();
  const signIn = useSignIn();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const formik = useFormik({
    initialValues: initialLog,

    validationSchema: LoginSchema,
    onSubmit: ({ username, password }) => {
      setLoading(true);
      signIn(username, password)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          setError(err?.response?.data.message || err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  return (
    <Box className="frm-sign-in">
      <Box className="frm-bg" />
      <Box
        className="frm-container"
        component="form"
        onSubmit={formik.handleSubmit}
        autoComplete="off"
      >
        <Link to="/landing">
          <Logo lg />
        </Link>
        <TextField
          id="txt-user"
          label="Username"
          name="username"
          disabled={loading}
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBLur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helpertext={formik.touched.username && formik.errors.username}
          color="white"
          sx={{
            display: "block",
            marginTop: 4,
            color: "#fff",
          }}
        />
        <TextField
          id="txt-pass"
          label="Password"
          type="password"
          name="password"
          color="white"
          disabled={loading}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBLur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helpertext={formik.touched.password && formik.errors.password}
          sx={{
            display: "block",
            marginTop: 2,
            color: "#fff",
          }}
        />
        {error && (
          <Box sx={{ display: "block", marginTop: 3 }}>
            <Typography variant="title" component="h3" className="title">
              {error}
            </Typography>
          </Box>
        )}
        <Box sx={{ display: "block", marginTop: 3 }}>
          <Button
            className="btn-submit"
            type="submit"
            color="white"
            variant="outlined"
            disabled={loading}
            sx={{ width: 130, color: "#fff" }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default SignInForm;
