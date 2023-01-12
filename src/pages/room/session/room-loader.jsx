import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function RoomLoader() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#202124",
        zIndex: 999,
      }}
    >
      <CircularProgress />
      <Typography p={1} color="#fff" fontSize="40px" fontWeight={250}>
        Joining...
      </Typography>
    </Box>
  );
}
