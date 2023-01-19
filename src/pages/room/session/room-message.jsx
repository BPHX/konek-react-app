import React from "react";
import {
  Box,
  CardContent,
  CardHeader,
  IconButton,
  InputBase,
  Grid,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import SendIcon from "@mui/icons-material/Send";
import "./index.css";

export default function RoomMessage({ onClose }) {
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
    onClose?.();
    setMessage("");
  };
  return (
    <Box>
      <CardContent sx={{ height: "100%", paddingTop: 0 }}>
        <Box mb={2} sx={{ borderRadius: "5px", height: "110px" }}>
          <CardHeader
            action={
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            }
            title="Valorant 101"
          />
          <Box
            sx={{
              backgroundColor: "#eee",
              px: 3,
              py: 2,
              borderRadius: "5px",
              textAlign: "center",
            }}
          >
            In-call Messages
          </Box>
        </Box>
        <Box className="data-messages" px={1} sx={{ overflow: "auto" }}>
          <Box sx={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
            <Box mr={2} sx={{ fontWeight: 600 }}>
              {" "}
              Jude Bautista{" "}
            </Box>
            <Typography> 2:48 AM</Typography>
          </Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
          <Box>qwe</Box>
        </Box>
        <Box height="110px">
          <Grid
            container
            mt={2}
            sx={{
              backgroundColor: "#eee",
              borderRadius: "50px",
            }}
          >
            <Grid item xs={6} my={1}>
              <Box>
                <InputBase sx={{ ml: 2 }} placeholder="Send a Message" />
              </Box>
            </Grid>
            <Grid item xs={6} mt={1.5} pr={2} sx={{ textAlign: "right" }}>
              <Box>
                <IconButton color="primary" sx={{ p: 0 }}>
                  <SendIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Box>
  );
}

RoomMessage.defaultProps = {
  onClose: () => {},
};
// Typechecking props of the MDAlert
RoomMessage.propTypes = {
  onClose: PropTypes.func,
};
