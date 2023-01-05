import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader() {
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
        backgroundColor: "rgba(255,255,255,0.9)",
        zIndex: 999,
      }}
    >
      <CircularProgress />
    </Box>
  );
}
