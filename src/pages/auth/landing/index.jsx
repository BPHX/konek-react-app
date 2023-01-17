import React from "react";
import {
  Button,
  Typography,
  Box,
  Slide,
  Zoom,
  Snackbar,
  Alert,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../components/logo/logo";
import SignInForm from "../sign-in/form";
import "./index.css";

function LandingPage() {
  const location = useLocation();
  const open = location.pathname === "/sign-in";
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    if (open && location?.state?.message) setShow(true);
  }, [open, location.state]);

  return (
    <Box className="landing-page">
      <Slide in={open} direction="right">
        <Box>
          <SignInForm />
        </Box>
      </Slide>
      <Zoom in={!open}>
        <Box className="intro">
          <Box mb="10vw">
            <Link to="/landing">
              <Logo lg />
            </Link>
          </Box>
          <Typography variant="h1" component="h1" className="color-swap">
            Online Learning
          </Typography>

          <Typography variant="title" component="h3" className="title">
            Made More Fun!
          </Typography>

          <Typography
            variant="subtitle1"
            component="p"
            className="subtitle"
            mt={5}
          >
            KONEK lets teachers and students conduct a video conferencing
            session for their lesson discussions and testing the students on
            what they have have learned with regards to their lesson in a form
            of enjoyable interactive games
          </Typography>
          <Link to="/sign-in" state={{ from: "/landing" }}>
            <Button variant="outlined" className="btn">
              KONEK
            </Button>
          </Link>
        </Box>
      </Zoom>
      <Snackbar
        open={show}
        onClose={() => setShow(false)}
        autoHideDuration={6000}
        severity="success"
      >
        <Alert
          onClose={() => setShow(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {location?.state?.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default LandingPage;
