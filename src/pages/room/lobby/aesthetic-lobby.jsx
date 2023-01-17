import React from "react";
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import ImagBoy from "./img/boy.png";
import ImagGirl from "./img/girl.png";
import "./css/index.css";

function AestheticLobby() {
  return (
    <Box className="pop-up">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          left: 0,
        }}
      >
        <CardMedia component="img" height="290" image={ImagGirl} alt="IMAGE" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "absolute",
          right: 0,
        }}
      >
        <CardMedia component="img" height="300" image={ImagBoy} alt="IMAGE" />
      </Box>
    </Box>
  );
}

export default AestheticLobby;
