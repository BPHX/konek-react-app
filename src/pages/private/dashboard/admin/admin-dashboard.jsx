import React from "react";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import LineGraph from "../../../../components/graphs/line-graph";
import BarGraph from "../../../../components/graphs/bar-graph";
import UsersList from "../../../../components/graphs/user-list";
import Widget from "../../../../components/widget/widget";

export default function AdminDashboard() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Widget sx={{ minHeight: 400 }}>
          {loading ? (
            <>
              <Box p={3}>
                <Skeleton width="100px" height="50px">
                  <Typography>.</Typography>
                </Skeleton>
              </Box>
              <Box mx={3} mt={-5}>
                <Skeleton width="100%" height="300px">
                  <Typography>.</Typography>
                </Skeleton>
              </Box>
              <Box mx={3} mt={-6}>
                <Skeleton width="100%" height="30px">
                  <Typography>.</Typography>
                </Skeleton>
              </Box>
            </>
          ) : (
            <Widget title="Users">
              <LineGraph />
            </Widget>
          )}
        </Widget>
      </Grid>

      <Grid item xs={12} md={4}>
        <Widget sx={{ minHeight: 400 }}>
          {loading ? (
            <>
              <Box p={3}>
                <Skeleton width="100px" height="50px">
                  <Typography>.</Typography>
                </Skeleton>
              </Box>
              <Box mx={3} mt={-5}>
                <Skeleton width="100%" height="300px">
                  <Typography>.</Typography>
                </Skeleton>
              </Box>
              <Box mx={3} mt={-6}>
                <Skeleton width="100%" height="30px">
                  <Typography>.</Typography>
                </Skeleton>
              </Box>
            </>
          ) : (
            <Widget title="Website Traffic">
              <BarGraph />
            </Widget>
          )}
        </Widget>
      </Grid>
      <Grid item xs={12} md={12}>
        <Widget sx={{ minHeight: 400 }}>
          {loading ? (
            <Box mx={1}>
              <Box
                sx={{
                  flexDirection: "row",
                  display: "flex",
                }}
              >
                {Array(4).fill(
                  <Skeleton
                    width="200px"
                    height="50px"
                    sx={{ marginRight: 2, marginTop: 2 }}
                  >
                    <Typography>.</Typography>
                  </Skeleton>
                )}
              </Box>
              {Array(3).fill(
                <Skeleton width="100%" height="70px">
                  <Typography>.</Typography>
                </Skeleton>
              )}
            </Box>
          ) : (
            <Widget>
              <UsersList />
            </Widget>
          )}
        </Widget>
      </Grid>
    </Grid>
  );
}
