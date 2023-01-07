import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LoginSchema, { initialLogin } from "./schema";
import "./style.css";
import useAuth from "../../auth";

export default function LoginForm() {
  const [loading, setLoading] = React.useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: initialLogin,

    validationSchema: LoginSchema,
    onSubmit: () => {
      setLoading(true);
      auth
        ?.login()
        .then(() => {
          navigate("/dashboard");
        })
        .catch(() => {
          // console.log("ERROR");
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });
  return (
    <form id="join-form" autoComplete="off" onSubmit={formik?.handleSubmit}>
      <div className="textfields">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: 400 },
            borderColor: "#fff",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="txt-user"
            label="Username"
            name="username"
            color="secondary"
            // inputlabelprops={{ className: "txt_user" }}
            disabled={loading}
            value={formik?.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBLur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            sx={{ color: "fff" }}
          />
          <TextField
            id="txt-pass"
            label="Password"
            type="password"
            color="secondary"
            name="password"
            // inputlabelprops={{ className: "txt_pass" }}
            disabled={loading}
            value={formik?.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBLur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </Box>
      </div>

      <div className="button">
        <Button
          className="btn-submit"
          inputlabelprops={{ className: "btn_submit" }}
          type="submit"
          color="secondary"
        >
          Login
        </Button>
      </div>

      <div className="signup-text">
        <Typography>
          Dont have an account yet?
          <Link to="/sign-up" className="signup-link">
            {" "}
            Sign up
          </Link>
        </Typography>
      </div>

      {/* <div id="apis">
        <Link to="/google">
          <Button id="api-google-btn" type="submit">
            Sign in with google
          </Button>
        </Link>
        <Link to="/facebook">
          <Button id="api-fb-btn" type="submit">
            Sign in with facebook
          </Button>
        </Link>
      </div> */}
    </form>
  );
}
