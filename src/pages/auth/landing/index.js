import { Button, Typography, Box, Slide, Zoom } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import SignInForm from "../sign-in/form";
import "./index.css";

function LandingPage() {
  const location = useLocation();
  const open = location.pathname === "/sign-in";
  return (
    <Box className="landing-page">
      <Slide in={open} direction="right">
        <Box>
          <SignInForm />
        </Box>
      </Slide>
      <Zoom in={!open}>
        <Box className="intro">
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
          <Link to="/sign-in">
            <Button variant="outlined" className="btn">
              KONEK
            </Button>
          </Link>
        </Box>
      </Zoom>
    </Box>
  );
}

export default LandingPage;
