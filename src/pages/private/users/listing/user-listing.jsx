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
import useUserForm from "../../../../hooks/user/use-user-form";
import RoleDisplay from "./role-display";
import TableSkeleton from "./table-skeleton";
import useUserService from "../../../../hooks/user/use-user-service";

const GENDER = {
  M: "Male",
  F: "Female",
};

export default function UserListing() {
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [userForm] = useUserForm();

  const userService = useUserService();

  const handleSearch = () => {
    userService
      .getUsers(search)
      .then((u) => setUsers(u))
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
          onClick={() => userForm.update(params?.row, handleSearch)}
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
          icon={<Switch value={params.enabled} readOnly />}
          label="Switch"
        />,
      ],
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "firstname", headerName: "First name", width: 200 },
    { field: "lastname", headerName: "Last name", width: 200 },
    {
      field: "gender",
      headerName: "Gender",
      valueGetter: (p) => GENDER[p.value] || GENDER.M,
      width: 200,
    },
    {
      field: "roles",
      headerName: "Roles",
      renderCell: (p) => <RoleDisplay value={p.value} />,
      width: 200,
    },
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
                <Skeleton width="200px" height="7vh" />
              </Box>
            ) : (
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Typography
                  variant="h5"
                  sx={{ paddingTop: 1.5, paddingLeft: 3, fontWeight: 600 }}
                >
                  User Information
                </Typography>
                <Box>
                  <IconButton
                    variant="contained"
                    color="success"
                    onClick={() => userForm.add(handleSearch)}
                  >
                    <AddCircleIcon sx={{ fontSize: "40px" }} />
                  </IconButton>
                </Box>
              </Box>
            )}
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "right" }}>
            {loading ? (
              <Box ml={50}>
                <Skeleton width="250px" height="7vh" />
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
            <TableSkeleton />
          ) : (
            <DataGrid
              rows={users}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[10]}
            />
          )}
        </div>
      </Box>
    </Box>
  );
}
