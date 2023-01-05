import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Snackbar,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { useTheme } from "@mui/material/styles";
import RoomLoader from "./room-loader";
import RoomActions from "./room-actions";

export default function Room() {
  const [id, setId] = React.useState(3);

  const [audioEnabled, setAudioEnabled] = React.useState(false);

  const [videoEnabled, setVideoEnabled] = React.useState(false);

  const [messageEnabled, setMessageEnabled] = React.useState(false);

  const [students, setStudents] = React.useState([]);

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setStudents([
      {
        id: "1",
        name: "Jude Batista",
        image:
          "https://drive.google.com/uc?export=view&id=1omB8yTn99Y3mIuwREHZHjbHUAqPF9CaB",
      },
      {
        id: "2",
        name: "Matthew Gay",
        image:
          "https://drive.google.com/uc?export=view&id=1omB8yTn99Y3mIuwREHZHjbHUAqPF9CaB",
      },
    ]);
  }, []);

  const join = () => {
    setStudents([
      ...students,
      {
        id,
        name: `user ${id}`,
        image:
          "https://drive.google.com/uc?export=view&id=1omB8yTn99Y3mIuwREHZHjbHUAqPF9CaB",
      },
    ]);
    setId(id + 1);
  };

  const [hover, setHover] = React.useState(false);
  const theme = useTheme();

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

  return (
    <Paper
      elevation={1}
      sx={{ minHeight: 300, position: "relative", width: "100%" }}
    >
      {loading && <RoomLoader />}
      <div className="widget-container">
        <Box
          sx={{
            display: "flex",
            overflowY: "auto",
            backgroundColor: theme.palette.primary.dark,
            height: "100vh",
          }}
        >
          <Grid
            container
            spacing={0}
            m={3}
            sx={{ justifyContent: "space-evenly" }}
          >
            <Grid
              item
              xs={12}
              md={9}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.gray.dark,
                  borderRadius: "5px",
                  height: "100%",
                  position: "relative",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    backgroundImage:
                      "url(https://drive.google.com/uc?export=view&id=1omB8yTn99Y3mIuwREHZHjbHUAqPF9CaB)",
                    backgroundPosition: "center",
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    height: "100%",
                    borderRadius: "5px",
                  }}
                >
                  <Box
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    sx={{
                      opacity: hover ? 1 : 0,
                      transition: "ease 0.3s",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                      }}
                    >
                      <AvatarGroup max={4}>
                        {students.map((student) => (
                          <Avatar alt={student.name} src={student.image} />
                        ))}
                        <Avatar
                          alt="Travis Howard"
                          src="https://drive.google.com/uc?export=view&id=1omB8yTn99Y3mIuwREHZHjbHUAqPF9CaB"
                        />
                        <Avatar
                          alt="Cindy Baker"
                          src="https://drive.google.com/uc?export=view&id=1omB8yTn99Y3mIuwREHZHjbHUAqPF9CaB"
                        />
                        <Avatar
                          alt="Agnes Walker"
                          src="https://drive.google.com/uc?export=view&id=1omB8yTn99Y3mIuwREHZHjbHUAqPF9CaB"
                        />
                        <Avatar
                          alt="Trevor Henderson"
                          src="https://drive.google.com/uc?export=view&id=1omB8yTn99Y3mIuwREHZHjbHUAqPF9CaB"
                        />
                      </AvatarGroup>
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                      }}
                    >
                      <RoomActions
                        onEnd={join}
                        audioEnabled={audioEnabled}
                        onAudioToggle={(e) => setAudioEnabled(e)}
                        videoEnabled={videoEnabled}
                        onVideoToggle={(e) => setVideoEnabled(e)}
                        messageEnabled={messageEnabled}
                        onMessageToggle={(e) => setMessageEnabled(e)}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/* <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexGrow: 2,
                  marginTop: 2,
                }}
              >
                {students.map((student) => (
                  <RoomParticipant
                    key={student.id}
                    image={student.image}
                    name={student.name}
                  />
                ))}
              </Grid> */}
            </Grid>
            {messageEnabled && (
              <Grid item xs={12} md={3}>
                <Box sx={{ height: "100%", marginLeft: 2 }}>
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
                        <Box
                          mt={2}
                          sx={{ backgroundColor: "#eee", borderRadius: "50px" }}
                        >
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
              </Grid>
            )}
          </Grid>
        </Box>
      </div>
    </Paper>
  );
}
