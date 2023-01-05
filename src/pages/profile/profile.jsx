import { Avatar, Grid, Box, Typography, Skeleton } from "@mui/material";
import React from "react";

function MyProfile() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <Box>
      <Box
        border={4}
        borderLeft={0}
        borderRight={0}
        borderColor="primary.main"
        sx={{ height: "85vh" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ flexDirection: "row", display: "flex" }}>
              {loading ? (
                <Box m={3}>
                  <Skeleton variant="circular">
                    <Avatar sx={{ padding: 4 }} />
                  </Skeleton>
                </Box>
              ) : (
                <Avatar
                  alt="J"
                  src="public/images/bg.jpg"
                  sx={{ padding: 4, margin: 3 }}
                />
              )}
              <Box
                sx={{
                  flexDirection: "column",
                  display: "flex",
                  marginTop: 3.3,
                }}
              >
                {loading ? (
                  <Skeleton width="20vw" height="5vh">
                    <Typography>.</Typography>
                  </Skeleton>
                ) : (
                  <Typography variant="h5" sx={{ fontWeight: 600 }}>
                    Jude Bautista
                  </Typography>
                )}
                {loading ? (
                  <Skeleton width="20vw" height="3vh">
                    <Typography>.</Typography>
                  </Skeleton>
                ) : (
                  <Typography variant="subtitle1">Admin</Typography>
                )}
              </Box>
            </Box>
          </Grid>
          <Box ml={7}>
            <Grid container spacing={2}>
              <Grid item xs={12} mt={2}>
                {loading ? (
                  <Skeleton width="20vw" height="5vh">
                    <Typography>.</Typography>
                  </Skeleton>
                ) : (
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Personal Information
                  </Typography>
                )}
              </Grid>
              <Grid item xs={12} pr={10}>
                <Box ml={4}>
                  {loading ? (
                    <Box>
                      {Array(7).fill(
                        <Skeleton width="430px" height="40px">
                          <Typography>.</Typography>
                        </Skeleton>
                      )}
                    </Box>
                  ) : (
                    <>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Full Name:
                      </Typography>
                      <Box sx={{ backgroundColor: "#eee", borderRadius: 2 }}>
                        <Typography m={1}>Jude Bautista</Typography>
                      </Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Email:{" "}
                      </Typography>
                      <Box sx={{ backgroundColor: "#eee", borderRadius: 2 }}>
                        <Typography m={1}>Judekalbo@gmail.com</Typography>
                      </Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Birthday:{" "}
                      </Typography>
                      <Box sx={{ backgroundColor: "#eee", borderRadius: 2 }}>
                        <Typography m={1}>December 31, 1872</Typography>
                      </Box>
                    </>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

export default MyProfile;
