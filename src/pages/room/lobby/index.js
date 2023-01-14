import React from "react";
import { Box, Paper, Grid, Typography, Button } from "@mui/material";
import AgoraRTC from "agora-rtc-sdk-ng";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../components/logo/logo";
import ParticipantInfo from "./participant-info";
import useAuth from "../../../hooks/use-auth";

export default function ConferenceLobby() {
  const location = useLocation();
  const [loading, auth] = useAuth();
  const [video, setVideo] = React.useState(null);
  const ref = React.createRef(null);

  const disabledAction = loading;

  React.useEffect(() => {
    AgoraRTC.createCameraVideoTrack().then((v) => setVideo(v));
  }, []);

  React.useEffect(() => {
    video?.play?.(ref.current);
  }, [video, ref]);

  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        height: "100vh",
        width: "100wv",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          width: "90vw",
          maxWidth: "800px",
          height: "100vh",
          maxHeight: "520px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container sx={{ height: "100%" }}>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  height: "100%",
                  textAlign: "center",
                  px: 5,
                  py: 5,
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box sx={{ flexGrow: 2 }}>
                  <Logo lg />
                </Box>
                <Box sx={{ flexGrow: 2 }}>
                  <Typography mt={2}>class title here</Typography>
                  <Typography mt={2}>Adviser Name here</Typography>
                  <Typography mt={4}>Schedule Here</Typography>
                  <Typography>Elapsed Time Here</Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <ParticipantInfo user={auth} loading={loading} />
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: 3,
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Typography>Video Preview</Typography>
                <Box
                  ref={ref}
                  sx={{
                    backgroundColor: "black",
                    width: "300px",
                    height: "180px",
                  }}
                />
                <Typography my={2}>Live controls here</Typography>
                <Typography>Volume Adjustments here</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ height: 60, px: 5 }}>
          <Grid container sx={{ height: "100%" }}>
            <Grid item xs={6} />
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Button variant="text">Exit</Button>
              {disabledAction && (
                <Button variant="contained" sx={{ width: 100 }} disabled>
                  Join
                </Button>
              )}
              {!disabledAction && (
                <Link to={`${location.pathname}/session`}>
                  <Button
                    variant="contained"
                    sx={{ width: 100 }}
                    disabled={disabledAction}
                  >
                    Join
                  </Button>
                </Link>
              )}
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
}
