import { Button, Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Logo from "../../../components/logo/logo";
import LoginSchema, { initialLog } from "./schema";
import useAuth from "../../../hooks/use-auth";

function SignInForm() {
  const formik = useFormik({
    initialValues: initialLog,

    validationSchema: LoginSchema,
    onSubmit: () => {
      useAuth
        .then(() => {})
        .catch(() => {})
        .finally(() => {});
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
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBLur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
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
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBLur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          sx={{
            display: "block",
            marginTop: 2,
            color: "#fff",
          }}
        />
        <Box sx={{ display: "block", marginTop: 3 }}>
          <Button
            className="btn-submit"
            type="submit"
            color="white"
            variant="outlined"
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
