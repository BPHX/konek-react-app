import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "date", headerName: "Date", flex: 1 },
  { field: "id", headerName: "UserID", flex: 1 },
  { field: "description", headerName: "Description", flex: 6 },
];

const rows = [
  { id: 1000, date: "9/20/2022", description: "shiye has logged-in" },
  { id: 1001, date: "9/21/2022", description: "user (2313) has been created" },
  { id: 1002, date: "9/22/2022", description: "ray has logged-in" },
  { id: 1003, date: "9/23/2022", description: "matthew has logged-in" },
];

export default function UsersList() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
