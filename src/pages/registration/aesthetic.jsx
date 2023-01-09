import React from "react";
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import ImageProfile from "./img/image-profile.png";

function Aesthetic() {
  return (
    <Box className="pop-up">
      <CardMedia
        component="img"
        height="250"
        image={ImageProfile}
        alt="IMAGE"
      />
    </Box>
  );
}

export default Aesthetic;
