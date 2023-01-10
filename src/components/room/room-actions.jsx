import React from "react";
import Box from "@mui/material/Box";
import MicIcon from "@mui/icons-material/Mic";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CallEndIcon from "@mui/icons-material/CallEnd";
import { Grid, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamOffOutlinedIcon from "@mui/icons-material/VideocamOffOutlined";
import MessageIcon from "@mui/icons-material/Message";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import VideogameAssetOffIcon from "@mui/icons-material/VideogameAssetOff";
import { useTheme } from "@mui/material/styles";

export default function RoomActions({
  audioEnabled,
  onAudioToggle,
  onEnd,
  videoEnabled,
  onVideoToggle,
  messageEnabled,
  onMessageToggle,
  millionaireEnabled,
  onMillionaireToggle,
}) {
  const theme = useTheme();

  const handleMuteToggle = () => {
    onAudioToggle?.(!audioEnabled);
  };

  const handleEnd = () => {
    onEnd?.();
  };

  const handleVideo = () => {
    onVideoToggle?.(!videoEnabled);
  };

  const handleMessage = () => {
    onMessageToggle?.(!messageEnabled);
  };

  const handleGame = () => {
    onMillionaireToggle?.(!millionaireEnabled);
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
            {audioEnabled ? <MicIcon /> : <MicOffIcon />}
          </IconButton>
        </Box>
        <Box px={2}>
          <IconButton
            onClick={handleVideo}
            size="large"
            sx={{ color: theme.palette.white.main }}
          >
            {videoEnabled ? (
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
            {messageEnabled ? <MessageIcon /> : <ChatBubbleIcon />}
          </IconButton>
        </Box>
        <Box sx={{ position: "absolute", left: 10 }}>
          <IconButton
            onClick={handleGame}
            size="large"
            sx={{ color: theme.palette.white.main }}
          >
            {millionaireEnabled ? (
              <VideogameAssetIcon />
            ) : (
              <VideogameAssetOffIcon />
            )}
          </IconButton>
        </Box>
      </Box>
    </Grid>
  );
}

RoomActions.defaultProps = {
  audioEnabled: false,
  videoEnabled: false,
  messageEnabled: false,
  onAudioToggle: () => {},
  onEnd: () => {},
  onVideoToggle: () => {},
  onMessageToggle: () => {},
  millionaireEnabled: () => {},
  onMillionaireToggle: () => {},
};
// Typechecking props of the MDAlert
RoomActions.propTypes = {
  audioEnabled: PropTypes.bool,
  videoEnabled: PropTypes.bool,
  messageEnabled: PropTypes.bool,
  onAudioToggle: PropTypes.func,
  onEnd: PropTypes.func,
  onVideoToggle: PropTypes.func,
  onMessageToggle: PropTypes.func,
  millionaireEnabled: PropTypes.func,
  onMillionaireToggle: PropTypes.func,
};
