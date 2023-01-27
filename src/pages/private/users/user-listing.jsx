import React from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Switch } from "@mui/material";
import PropTypes from "prop-types";
import EditIcon from "@mui/icons-material/Edit";
import useUserForm from "../../../hooks/user/use-user-form";
import RoleDisplay from "./role-display";
import TableSkeleton from "../../../components/skeleton/table-skeleton";

const GENDER = {
  M: "Male",
  F: "Female",
};

export default function UserListing({ data, loading, onEdit }) {
  const [userForm] = useUserForm();

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
          onClick={() => userForm.update(params?.row, handleEdit)}
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

UserListing.defaultProps = {
  data: [],
  loading: false,
  onEdit: () => {},
};

UserListing.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  data: PropTypes.arrayOf(PropTypes.any),
  loading: PropTypes.bool,
  onEdit: PropTypes.func,
};
