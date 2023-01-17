import { Avatar, AvatarGroup, Box, Grid, Paper } from "@mui/material";
import AgoraRTC from "agora-rtc-sdk-ng";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import RoomLoader from "./room-loader";
import RoomMessage from "./room-message";
import useAgora from "../../../hooks/use-agora";
import useRoomService from "../../../hooks/use-room-service";
import RoomMillionaire from "../../private/activity/activities/room-millionaire";
import RoomActions from "../../../components/agora/call-actions";

export default function ConferenceSession() {
  const videoRef = React.createRef();
  const [audioEnabled, setAudioEnabled] = React.useState(null);
  const [audioPlayer, setAudioPlayer] = React.useState(null);

  const [videoEnabled, setVideoEnabled] = React.useState(null);
  const [videoPlayer, setVideoPlayer] = React.useState(null);

  const [messageEnabled, setMessageEnabled] = React.useState(false);

  const [millionaireEnabled, setMillionaireEnabled] = React.useState(false);

  const [students, setStudents] = React.useState([]);

  const [loadingToken, setLoadingToken] = React.useState(false);

  const roomService = useRoomService();

  const [loadingAgora, engine, join] = useAgora();

  const [loading, setLoading] = React.useState(true);

  const { id: roomid } = useParams();

  const [token, setToken] = React.useState(null);

  React.useEffect(() => {
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

  const [hover, setHover] = React.useState(false);
  const theme = useTheme();

  React.useEffect(() => {
    setLoadingToken(true);
    roomService
      .getRoomToken(roomid)
      .then((d) => setToken(d.token))
      .finally(() => setLoadingToken(false));
  }, []);

  React.useEffect(() => {
    if (!loadingToken && token && videoRef) {
      join(token).then(() => {
        const video = AgoraRTC.createCameraVideoTrack();
        const audio = AgoraRTC.createMicrophoneAudioTrack();
        Promise.all([video, audio]).then(([v, a]) => {
          engine.publish([a, v]).then(() => {
            setVideoPlayer(v);
            setAudioPlayer(a);
            setLoading(false);
            v.play(videoRef.current);
          });
        });
      });
    }
  }, [token, loadingToken, videoRef]);

  React.useEffect(() => {
    videoPlayer?.setEnabled(videoEnabled);
  }, [videoEnabled, videoPlayer]);

  React.useEffect(() => {
    audioPlayer?.setEnabled(audioEnabled);
  }, [audioEnabled, audioPlayer]);

  return (
    <Paper
      elevation={1}
      sx={{ minHeight: 300, position: "relative", width: "100%" }}
    >
      {(loadingAgora || loadingToken || loading) && <RoomLoader />}
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
                {millionaireEnabled && (
                  <Grid item xs={12} md={3}>
                    <RoomMillionaire />
                  </Grid>
                )}
                <Box
                  position="relative"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  sx={{
                    height: "100%",
                    borderRadius: "5px",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      top: 0,
                      left: 0,
                    }}
                    ref={videoRef}
                  />
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
                        // onEnd={joinCall}
                        audioEnabled={audioEnabled}
                        onAudioToggle={setAudioEnabled}
                        videoEnabled={videoEnabled}
                        onVideoToggle={setVideoEnabled}
                        messageEnabled={messageEnabled}
                        onMessageToggle={(e) => setMessageEnabled(e)}
                        millionaireEnabled={millionaireEnabled}
                        onMillionaireToggle={(e) => setMillionaireEnabled(e)}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {!messageEnabled && (
              <Grid item xs={12} md={3}>
                <RoomMessage />
              </Grid>
            )}
          </Grid>
        </Box>
      </div>
    </Paper>
  );
}
