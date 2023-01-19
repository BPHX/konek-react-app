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
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import useRoleForm from "../../../hooks/use-role-form";
import useRoleService from "../../../hooks/use-role-service";

export default function RoleSearch() {
  // eslint-disable-next-line no-unused-vars
  const [selected, setSelected] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState("");
  const [role, setRole] = React.useState([]);
  const [useRole] = useRoleForm();

  const roleService = useRoleService();

  const handleSearch = () => {
    setLoading(true);
    roleService
      .getRoles(search)
      .then((r) => setRole(r))
      .finally(() => setLoading(false));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "actions",
      headerName: "Action",
      width: 130,
      type: "actions",
      // eslint-disable-next-line react/no-unstable-nested-components
      getActions: (params) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Update"
          onClick={() => useRole.update(params?.row, handleSearch)}
        />,
      ],
    },
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
  ];

  const handleSearchChange = (evt) => {
    setSearch(evt.target.value);
  };
  React.useEffect(() => {
    handleSearch();
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
                <Skeleton width="130px" height="7vh">
                  <Typography>.</Typography>
                </Skeleton>
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  variant="h5"
                  sx={{ paddingTop: 1.5, paddingLeft: 2, fontWeight: 600 }}
                >
                  Roles
                </Typography>
                <IconButton
                  variant="contained"
                  color="success"
                  onClick={() => useRole.add(handleSearch)}
                >
                  <AddCircleIcon sx={{ fontSize: "40px" }} />
                </IconButton>
              </Box>
            )}
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            {loading ? (
              <Box ml={50}>
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
                    <InputAdornment position="start">
                      <IconButton onClick={handleSearch}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ m: 1 }}
                onChange={handleSearchChange}
                value={search}
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
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          )}
        </div>
      </Box>
    </Box>
  );
}
