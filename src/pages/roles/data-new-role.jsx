import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Skeleton, Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "permission", headerName: "Permission", width: 300 },
  {
    field: "ability",
    headerName: "Enable/Disable",
    width: 130,
    type: "checkbox",
  },
];

const rows = [{ id: 1, permission: "Snow", firstName: "Jon" }];

export default function DataNewRole() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div style={{ height: 450, width: "100%" }}>
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
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      )}
    </div>
  );
}
