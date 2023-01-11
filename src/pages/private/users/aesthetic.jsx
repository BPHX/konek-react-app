import React from "react";
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import ImagUser from "./img/image-profile.png";
import "./css/index.css";

function Aesthetic() {
  return (
    <Box className="pop-up">
      <CardMedia component="img" height="250" image={ImagUser} alt="IMAGE" />
    </Box>
  );
}

export default Aesthetic;
