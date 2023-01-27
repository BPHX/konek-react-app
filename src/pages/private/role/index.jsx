import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import Page from "../../../components/page/page";
import useRoleForm, { withRoleForm } from "../../../hooks/role/use-role-form";
import useRoleService from "../../../hooks/role/use-role-service";
import RoleListing from "./role-listing";

function RoleRegistration() {
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState("");
  const [roles, setRoles] = React.useState([]);
  const [userForm] = useRoleForm();

  const roleService = useRoleService();

  const handleSearch = () => {
    roleService
      .list(search)
      .then((u) => setRoles(u))
      .finally(() => setLoading(false));
  };

  const handleSearchChange = (evt) => {
    setSearch(evt.target.value);
  };

  const handleAdd = () => {
    userForm.add(handleSearch);
  };

  React.useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Page
      title="Role Registration"
      left={
        <IconButton
          variant="contained"
          color="success"
          disabled={loading}
          sx={{ padding: 0 }}
          onClick={handleAdd}
        >
          <AddCircleIcon sx={{ fontSize: "40px" }} />
        </IconButton>
      }
      right={
        <TextField
          sx={{ width: { xs: "100%", md: "auto" } }}
          size="small"
          label="Search"
          disabled={loading}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      }
    >
      <RoleListing data={roles} loading={loading} onEdit={handleSearch} />
    </Page>
  );
}

export default withRoleForm(RoleRegistration);
