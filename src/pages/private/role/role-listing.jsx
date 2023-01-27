import React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import PropTypes from "prop-types";
import EditIcon from "@mui/icons-material/Edit";
import TableSkeleton from "../../../components/skeleton/table-skeleton";
import useRoleForm from "../../../hooks/role/use-role-form";

export default function RoleListing({ data, loading, onEdit }) {
  const [roleForm] = useRoleForm();

  const handleEdit = () => {
    onEdit?.();
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
          onClick={() => roleForm.update(params?.row, handleEdit)}
        />,
      ],
    },
    { field: "name", headerName: "Name", width: 250 },
    { field: "description", headerName: "Description", width: 220 },
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

RoleListing.defaultProps = {
  data: [],
  loading: false,
  onEdit: () => {},
};

RoleListing.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  data: PropTypes.arrayOf(PropTypes.any),
  loading: PropTypes.bool,
  onEdit: PropTypes.func,
};
