import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import Logo from "../logo/logo";

export default function AppLoader() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0, 0, 0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Logo lg sx={{ marginLeft: 2 }} />
      <Typography
        variant="title"
        component="h3"
        className="title"
        sx={{ color: "#fff", marginTop: 2 }}
      >
        Loading
      </Typography>
      <CircularProgress color="secondary" sx={{ marginTop: 2 }} />
    </Box>
  );
}
