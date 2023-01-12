import React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Skeleton,
  Switch,
} from "@mui/material";
import useUserService from "../../../hooks/use-user-service";

export default function UserData() {
  // eslint-disable-next-line no-unused-vars
  const [selected, setSelected] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState([]);
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "active",
      headerName: "Active",
      width: 130,
      type: "actions",
      // eslint-disable-next-line react/no-unstable-nested-components
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Switch value={params.enabled} readOnly />}
          label="Switch"
        />,
      ],
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "firstname", headerName: "First name", width: 200 },
    { field: "lastname", headerName: "Last name", width: 200 },
  ];

  const userService = useUserService();

  React.useEffect(() => {
    userService
      .getUsers()
      .then((u) => setUsers(u))
      .finally(() => setLoading(false));
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
                User Information
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
              rows={users}
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
