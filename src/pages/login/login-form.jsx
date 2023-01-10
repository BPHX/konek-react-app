import React from "react";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
          console.log("DITO");
          navigate("/dashboard");
        })
        .catch(() => {
          console.log("ERROR");
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });
  return (
    <form id="join-form" autoComplete="off" onSubmit={formik?.handleSubmit}>
      <Box className="textfields">
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
            disabled={loading}
            value={formik?.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBLur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            focused
            sx={{
              "& .MuiInputBase-root": {
                color: "white.main",
              },
            }}
          />
          <TextField
            id="txt-pass"
            label="Password"
            type="password"
            color="secondary"
            name="password"
            disabled={loading}
            value={formik?.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBLur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            focused
            sx={{
              "& .MuiInputBase-root": {
                color: "white.main",
              },
            }}
          />
        </Box>
      </Box>

      <Box mt={2}>
        <Button
          className="btn-submit"
          inputlabelprops={{ className: "btn_submit" }}
          type="submit"
          color="secondary"
          variant="outlined"
        >
          Login
        </Button>
      </Box>
    </form>
  );
}
