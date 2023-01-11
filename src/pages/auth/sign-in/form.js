import { Button, Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../../components/logo/logo";

function SignInForm() {
  return (
    <Box className="frm-sign-in">
      <Box className="frm-bg" />
      <Box className="frm-container" component="form">
        <Link to="/landing">
          <Logo lg />
        </Link>
        <TextField
          id="txt-user"
          label="Username"
          name="username"
          color="white"
          helperText=""
          sx={{
            display: "block",
            marginTop: 3,
            color: "#fff",
          }}
        />
        <TextField
          id="txt-pass"
          label="Password"
          type="password"
          name="password"
          color="white"
          sx={{
            display: "block",
            marginTop: 1,
            color: "#fff",
          }}
        />
        <Box
          sx={{
            display: "block",
            marginTop: 2,
          }}
        >
          <Button
            className="btn-submit"
            type="submit"
            color="success"
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
