import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  InputBase,
  // Snackbar,
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

  // const action = (
  //   <IconButton
  //     size="small"
  //     aria-label="close"
  //     color="inherit"
  //     onClick={handleClose}
  //   >
  //     <CloseIcon fontSize="small" />
  //   </IconButton>
  // );

  return (
    <Box className="content" ml={2}>
      <Card sx={{ height: "93.5vh" }}>
        <CardHeader
          action={
            <IconButton onClick={handleClose}>
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
              height: "100%",
            }}
          >
            <Box
              pt={2}
              sx={{
                borderRadius: "5px",
              }}
            >
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
            <Box
              className="data-messages"
              px={1}
              sx={{ overflow: "auto", maxHeight: "485px", flexGrow: 1 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
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
            <Box
              mt={2}
              sx={{
                backgroundColor: "#eee",
                borderRadius: "50px",
              }}
            >
              <Grid container>
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
            {/* <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={!!message}
              autoHideDuration={6000}
              onClose={handleClose}
              message={message}
              action={action}
            /> */}
          </Box>
        </CardContent>
      </Card>
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
