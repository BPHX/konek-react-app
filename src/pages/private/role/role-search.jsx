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
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import useRoleService from "../../../hooks/use-role-service";
import RoleInfo from "./role-info";

export default function RoleSearch() {
  // eslint-disable-next-line no-unused-vars
  const [selected, setSelected] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [role, setRole] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

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
          icon={<Switch />}
          onClick={() => setSelected(params?.row)}
          label="Switch"
        />,
      ],
    },
    { field: "name", headerName: "Name", width: 250 },
    { field: "description", headerName: "Description", width: 220 },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      // eslint-disable-next-line react/no-unstable-nested-components
      getActions: () => [
        <GridActionsCellItem icon={<EditIcon />} label="Update" />,
      ],
    },
  ];

  const userRole = useRoleService();

  React.useEffect(() => {
    userRole
      .getRoles()
      .then((r) => setRole(r))
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
      <RoleInfo open={open} onClose={handleClose} />
      <Box mx={1}>
        <Grid container>
          <Grid item xs={1}>
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
                Roles
              </Typography>
            )}
          </Grid>
          <Grid item xs={4} sx={{ p: 1 }}>
            <Button variant="contained" color="success" sx={{ ml: 2 }}>
              <AddIcon sx={{ mr: 1 }} />
              Add Roles
            </Button>
          </Grid>
          <Grid item xs={7} sx={{ textAlign: "right" }}>
            {loading ? (
              <Box pl={3} ml={5}>
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
              rows={role}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[5]}
            />
          )}
        </div>
      </Box>
    </Box>
  );
}
