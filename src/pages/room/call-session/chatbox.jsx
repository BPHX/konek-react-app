import React from "react";
import { Card, Box, List, ListItem } from "@mui/material";
import useChat from "../../../hooks/use-chat";

export default function Chatbox() {
  const [chatState] = useChat();
  const messages = chatState.messages || [];

  return (
    <Card sx={{ height: "100%" }}>
      <Box sx={{ bgcolor: "black", width: "100%" }} />
      <List>
        {messages.map((msg, index) => (
          <ListItem key={msg?.id || index}>{msg.text}</ListItem>
        ))}
      </List>
    </Card>
  );
}
