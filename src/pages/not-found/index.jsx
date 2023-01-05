import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <Box className="bg_color">
      <Box className="cont_principal">
        <Box className="cont_error">
          <Typography variant="h1" component="h1" className="oops">
            Oops!
          </Typography>
          <Typography variant="h2" component="h2" className="not">
            404 Not Found
          </Typography>
          <Typography variant="p" component="p" className="p">
            The page youre looking for isnt here.
          </Typography>
          <Stack spacing={2} direction="row" className="buttons">
            <Button
              onClick={goBack}
              variant="contained"
              sx={{
                padding: "10px 40px",
                borderRadius: "20px",
                fontSize: "15px",
                marginRight: "100px",
              }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              sx={{
                padding: "10px 40px",
                borderRadius: "20px",
                fontSize: "15px",
              }}
            >
              <Link to="/">Home</Link>
            </Button>
          </Stack>
        </Box>

        <Box className="cont_aura_1" />
        <Box className="cont_aura_2" />
      </Box>
    </Box>
  );
}
