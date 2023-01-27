import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import TableSkeleton from "../../../components/skeleton/table-skeleton";

export default function AuditListing({ data, loading }) {
  const columns = [
    { field: "id", headerName: "Event ID", width: 100 },
    {
      field: "type",
      headerName: "Event Type",
      width: 200,
      valueGetter: (p) => p.value?.replace("_", " "),
    },
    {
      field: "user",
      headerName: "Username",
      width: 180,
      valueGetter: (p) => p.value?.username,
    },
    {
      field: "context",
      headerName: "Context",
      flex: 1,
      valueGetter: (p) => (p.value && JSON.stringify(p.value)) || "",
    },
    { field: "timestamp", headerName: "Timestamp", width: 200 },
  ];

  if (loading) return <TableSkeleton />;

  return (
    <DataGrid
      sx={{
        minHeight: {
          xs: "calc(95vh - 200px)",
        },
      }}
      rows={data}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
    />
  );
}

AuditListing.defaultProps = {
  data: [],
  loading: false,
};

AuditListing.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  data: PropTypes.arrayOf(PropTypes.any),
  loading: PropTypes.bool,
};
