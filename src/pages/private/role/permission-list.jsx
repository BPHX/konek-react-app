/* eslint-disable no-unused-vars */
import React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import {
  Box,
  Switch,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useRoleService from "../../../hooks/role/use-role-service";

export default function PermissionList({ value, onChange }) {
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState("");
  const [permissions, setPermissions] = React.useState([]);

  const handleChange = (id) => (evt) => {
    const val = evt?.target?.checked;
    if (val) {
      onChange?.([...value, id]);
    } else {
      onChange?.(value.filter((x) => x !== id));
    }
  };

  const columns = [
    { field: "id", headerName: "Permission", width: 250 },
    { field: "description", headerName: "Description", width: 830 },
    {
      field: "ability",
      headerName: "Enable/Disable",
      width: 130,
      type: "actions",
      // eslint-disable-next-line react/no-unstable-nested-components
      getActions: (params) => {
        const result = value.indexOf(params.id) > -1;
        return [
          <GridActionsCellItem
            icon={
              <Switch checked={result} onChange={handleChange(params.id)} />
            }
            label="Switch"
          />,
        ];
      },
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

PermissionList.defaultProps = {
  value: [],
  onChange: () => {},
};

PermissionList.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};
