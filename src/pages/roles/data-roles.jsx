import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Skeleton, Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataRoles() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div style={{ height: "85vh", width: "100%" }}>
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
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      )}
    </div>
  );
}
