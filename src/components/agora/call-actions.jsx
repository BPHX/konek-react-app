import React from "react";
import Box from "@mui/material/Box";
import MicIcon from "@mui/icons-material/Mic";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CallEndIcon from "@mui/icons-material/CallEnd";
import { Grid, IconButton } from "@mui/material";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamOffOutlinedIcon from "@mui/icons-material/VideocamOffOutlined";
import MessageIcon from "@mui/icons-material/Message";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import { useTheme } from "@mui/material/styles";
import {
  RtcContext,
  muteAudio,
  muteVideo,
  PropsContext,
} from "agora-react-uikit";
import { useNavigate } from "react-router-dom";
import useChat from "../../hooks/use-chat";
import { LocalUserContext } from "./local-user-context";
import useMessenger from "../../hooks/use-messenger";

export default function RoomActions() {
  const { dispatch, localAudioTrack, localVideoTrack } =
    React.useContext(RtcContext);
  const local = React.useContext(LocalUserContext);
  const { callbacks } = React.useContext(PropsContext);
  const [chat, chatService] = useChat();
  const theme = useTheme();
  const messenger = useMessenger();

  const navigate = useNavigate();

  const handleMuteToggle = () => {
    if (localAudioTrack) muteAudio(local, dispatch, localAudioTrack, callbacks);
  };

  const handleVideo = () => {
    if (localVideoTrack) muteVideo(local, dispatch, localVideoTrack, callbacks);
  };

  const handleEnd = () => {
    messenger.sendConfirm({
      title: "Exit Call",
      message: "Are you sure you want to exit from the call?",
      onConfirm: () => {
        navigate("/");
      },
    });
  };

  const handleMessage = () => {
    chatService.setVisible(!chat?.visible);
  };

  return (
    <Grid sx={{ display: "flex", flexDirection: "column", flexGrow: 2 }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100%",
          backgroundImage: "linear-gradient(transparent, black 90%)",
          opacity: 0.7,
          borderRadius: "5px",
          marginTop: 2,
        }}
      >
        <Box px={2}>
          <IconButton
            onClick={handleMuteToggle}
            size="large"
            sx={{
              color: theme.palette.white.main,
            }}
          >
            {local?.hasAudio === 1 ? <MicIcon /> : <MicOffIcon />}
          </IconButton>
        </Box>
        <Box px={2}>
          <IconButton
            onClick={handleVideo}
            size="large"
            sx={{ color: theme.palette.white.main }}
          >
            {local?.hasVideo === 1 ? (
              <VideocamOutlinedIcon />
            ) : (
              <VideocamOffOutlinedIcon />
            )}
          </IconButton>
        </Box>
        <Box px={2}>
          <IconButton
            onClick={handleEnd}
            size="small"
            sx={{ color: theme.palette.white.main }}
          >
            <CallEndIcon
              sx={{
                backgroundColor: "red",
                borderRadius: "50px",
                padding: 1,
              }}
            />
          </IconButton>
        </Box>
        <Box sx={{ position: "absolute", right: 10 }}>
          <IconButton
            onClick={handleMessage}
            size="large"
            sx={{ color: theme.palette.white.main }}
          >
            {chat?.visible ? <MessageIcon /> : <ChatBubbleIcon />}
          </IconButton>
        </Box>
      </Box>
    </Grid>
  );
}
