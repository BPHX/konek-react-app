import React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Box, Skeleton, Typography, Switch } from "@mui/material";
import useRoleService from "../../../hooks/use-role-service";

export default function Permissionlist() {
  // eslint-disable-next-line no-unused-vars
  const [selected, setSelected] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [permissions, setPermissions] = React.useState([]);

  const columns = [
    { field: "id", headerName: "Permission", width: 250 },
    { field: "description", headerName: "Description", width: 300 },
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

  React.useEffect(() => {
    Promise.all([roleService.getPermissions()])
      .then(([all, allowed]) =>
        setPermissions(
          all.map((p) => ({ ...p, allowed: allowed?.indexOf(p?.id) > -1 }))
        )
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ height: 500, width: "80vw" }}>
      {loading ? (
        <Box mx={1}>
          <Box
            sx={{
              flexDirection: "row",
              display: "flex",
            }}
          >
            {Array(7).fill(
              <Skeleton
                width="200px"
                height="50px"
                sx={{ marginRight: 2, marginTop: 2 }}
              >
                <Typography>.</Typography>
              </Skeleton>
            )}
          </Box>
          {Array(5).fill(
            <Skeleton width="100%" height="70px">
              <Typography>.</Typography>
            </Skeleton>
          )}
        </Box>
      ) : (
        <DataGrid
          // checkboxSelection
          rows={permissions}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      )}
    </div>
  );
}
