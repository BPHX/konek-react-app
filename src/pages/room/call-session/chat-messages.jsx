/* eslint-disable no-unused-vars */
import React from "react";
import {
  Card,
  Box,
  List,
  ListItem,
  Typography,
  ListItemText,
} from "@mui/material";
import useChat from "../../../hooks/room/use-chat";

export default function ChatMessages() {
  const [chat] = useChat();
  return (
    <List>
      {chat?.messages?.map((msg) => (
        <ListItem key={msg.id}>
          <ListItemText
            primary={`${msg?.user?.firstname} ${msg?.user?.lastname}`}
            secondary={
              <Box>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {msg.body.value}
                </Typography>
                <Typography
                  sx={{ display: "block" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sending
                </Typography>
              </Box>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}
