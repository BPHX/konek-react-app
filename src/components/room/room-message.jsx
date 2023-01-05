import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  InputBase,
  Snackbar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

export default function RoomMessage() {
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    setTimeout(() => {
      setMessage("Jude Kalbo Joined");
    }, 3000);
  }, []);

  React.useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage("");
      }, 5000);
    }
  }, [message]);

  const handleClose = () => {
    setMessage("");
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  // eslint-disable-next-line no-unused-vars
  const [messageEnabled, setMessageEnabled] = React.useState(false);

  return (
    <Box
      sx={{
        height: "100%",
        marginLeft: 2,
        transition: "width 2s transform 2s",
      }}
    >
      <Card sx={{ height: "100%" }}>
        <CardHeader
          action={
            <IconButton onClick={() => setMessageEnabled(false)}>
              <CloseIcon />
            </IconButton>
          }
          title="Valorant 101"
        />
        <CardContent sx={{ height: "100%", paddingTop: 0 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "88%",
            }}
          >
            <Box
              p={2}
              sx={{
                backgroundColor: "#eee",
                flexGrow: 1,
                borderRadius: "5px",
              }}
            >
              Messages
            </Box>
            <Box mt={2} sx={{ backgroundColor: "#eee", borderRadius: "50px" }}>
              <InputBase
                sx={{ ml: 2, pr: 7.5, flex: 1 }}
                placeholder="Send a Message"
              />
              <IconButton color="primary" sx={{ p: "10px" }}>
                <SendIcon />
              </IconButton>
            </Box>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={!!message}
              autoHideDuration={6000}
              onClose={handleClose}
              message={message}
              action={action}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
