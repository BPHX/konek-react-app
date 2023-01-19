/* eslint-disable no-unused-vars */
import React from "react";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuidv4 } from "uuid";
import {
  Card,
  Box,
  List,
  ListItem,
  InputBase,
  IconButton,
  Divider,
  CardHeader,
  CardContent,
  CircularProgress,
} from "@mui/material";
import useChat from "../../../hooks/use-chat";
import ChatMessages from "./chat-messages";
import useAuth from "../../../hooks/use-auth";

export default function Chatbox() {
  const [chatState, { setVisible, addMessage }] = useChat();
  const [loading, auth] = useAuth();
  const [value, setValue] = React.useState("");
  const sendMessage = () => {
    addMessage({
      id: uuidv4(),
      user: auth,
      timestamp: new Date(),
      body: {
        type: "text",
        value,
      },
      status: "Sending",
    });
    setValue("");
  };

  const handleChange = (evt) => {
    setValue(evt?.target?.value);
  };

  const handleDown = (evt) => {
    if (evt.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <Card sx={{ height: "100%", position: "relative" }}>
      {loading && (
        <Box
          position="absolute"
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor="rgba(255,255,255,0.8)"
          zIndex={1}
        >
          <CircularProgress />
        </Box>
      )}
      <Box display="flex" flexDirection="column" height="100%">
        <CardHeader
          action={
            <IconButton>
              <CloseIcon onClick={() => setVisible(false)} />
            </IconButton>
          }
          title="Valorant 101"
        />
        <Divider sx={{ height: 5, width: "100%" }} />
        <Box flexGrow={1} sx={{ overflowY: "auto" }}>
          <ChatMessages />
        </Box>
        <Divider sx={{ height: 5, width: "100%" }} />
        <Box
          className="controls"
          height="35px"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxSizing="border-box"
          px={2}
        >
          Toolbox Here
        </Box>
        <Divider sx={{ height: 5, width: "100%" }} />
        <Box
          className="messaging"
          height="65px"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxSizing="border-box"
          px={2}
        >
          <Box className="header-title" flexGrow={1}>
            <InputBase
              sx={{ width: "100%" }}
              placeholder="Send a Message"
              value={value}
              onChange={handleChange}
              onKeyDown={handleDown}
            />
          </Box>
          <Box className="header-exit" width="30px">
            <IconButton
              color="primary"
              sx={{ p: 0 }}
              onClick={() => sendMessage()}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
