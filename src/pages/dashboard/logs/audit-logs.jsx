import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Skeleton,
} from "@mui/material";

const columns = [
  { field: "id", headerName: "#", width: 70 },
  { field: "eventId", headerName: "Event ID", width: 300 },
  { field: "username", headerName: "Username", width: 300 },
  { field: "eventType", headerName: "Event Type", width: 300 },
  { field: "timestamp", headerName: "Timestamp", width: 300 },
];

const rows = [
  { id: 1, eventId: "123", username: "Snow", firstName: "Jon", timestamp: 35 },
];

export default function LogsData() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <Box
      border={4}
      borderLeft={0}
      borderRight={0}
      borderColor="primary.main"
      height="85vh"
    >
      <Box mx={1}>
        <Grid container>
          <Grid item xs={6}>
            {loading ? (
              <Box pl={3}>
                <Skeleton width="200px" height="7vh">
                  <Typography>.</Typography>
                </Skeleton>
              </Box>
            ) : (
              <Typography
                variant="h5"
                sx={{ paddingTop: 2, paddingLeft: 3, fontWeight: 600 }}
              >
                Audit Logs
              </Typography>
            )}
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            {loading ? (
              <Box pl={3} ml={12}>
                <Skeleton width="250px" height="7vh">
                  <Typography>.</Typography>
                </Skeleton>
              </Box>
            ) : (
              <TextField
                size="small"
                label="Search"
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ m: 1 }}
              />
            )}
          </Grid>
        </Grid>
        <div style={{ height: 570, width: "100%", position: "relative" }}>
          {loading ? (
            <Box m={1}>
              <Box
                sx={{
                  flexDirection: "row",
                  display: "flex",
                }}
              >
                {Array(7).fill(
                  <Skeleton width="200px" height="50px" sx={{ marginRight: 2 }}>
                    <Typography>.</Typography>
                  </Skeleton>
                )}
              </Box>
              {Array(7).fill(
                <Skeleton width="100%" height="70px">
                  <Typography>.</Typography>
                </Skeleton>
              )}
            </Box>
          ) : (
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[5]}
              // checkboxSelection
            />
          )}
        </div>
      </Box>
    </Box>
  );
}
