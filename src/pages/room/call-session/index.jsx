/* eslint-disable no-unused-vars */
import React from "react";
import { Box, useTheme, Button } from "@mui/material";
import Chatbox from "./chatbox";
import Video from "./video";

export default function Session() {
  const [chatVisible, setChatVisible] = React.useState(true);
  const theme = useTheme();
  const smoothTransition = {
    transition: theme.transitions.create("all", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  };

  return (
    <Box
      sx={{
        height: "100vh",
        bgcolor: "primary.dark",
        display: "flex",
      }}
    >
      <Box
        position="absolute"
        height="100vh"
        width={{
          md: chatVisible ? "calc(100% - 400px)" : "100%",
          xs: "100%",
        }}
        top={0}
        left={0}
        p={3}
        style={smoothTransition}
        boxSizing="border-box"
      >
        <Video />
      </Box>
      <Box
        display={{ xs: "none", md: "block" }}
        style={smoothTransition}
        position="absolute"
        height="100vh"
        width={chatVisible ? "400px" : "0"}
        overflow="hidden"
        top={0}
        right={0}
        p={3}
        pl={0}
        boxSizing="border-box"
      >
        <Chatbox />
      </Box>
    </Box>
  );
}
