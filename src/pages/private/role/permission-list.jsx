import React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import {
  Box,
  Switch,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useRoleService from "../../../hooks/use-role-service";

export default function Permissionlist() {
  // eslint-disable-next-line no-unused-vars
  const [selected, setSelected] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState("");
  const [permissions, setPermissions] = React.useState([]);

  const columns = [
    { field: "id", headerName: "Permission", width: 250 },
    { field: "description", headerName: "Description", width: 830 },
    {
      field: "ability",
      headerName: "Enable/Disable",
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
  ];

  const roleService = useRoleService();

  const handleSearch = () => {
    Promise.all([roleService.getPermissions()])
      .then(([all, allowed]) =>
        setPermissions(
          all.map((p) => ({ ...p, allowed: allowed?.indexOf(p?.id) > -1 }))
        )
      )
      .finally(() => setLoading(false));
  };

  const handleSearchChange = (evt) => {
    setSearch(evt.target.value);
  };
  React.useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sx={{ textAlign: "right" }}>
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
        </Grid>
      </Grid>
      <div style={{ height: 400, width: "80vw" }}>
        <DataGrid
          rows={permissions}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          loading={loading}
        />
      </div>
    </Box>
  );
}
