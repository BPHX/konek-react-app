import React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import UserListing from "./user-listing";
import useUserForm, { withUserForm } from "../../../hooks/user/use-user-form";
import Page from "../../../components/page/page";
import useUserService from "../../../hooks/user/use-user-service";

function UserRegistration() {
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [userForm] = useUserForm();

  const userService = useUserService();

  const handleSearch = () => {
    userService
      .getUsers(search)
      .then((u) => setUsers(u))
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
      title="User Registration"
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
      <UserListing data={users} loading={loading} onEdit={handleSearch} />
    </Page>
  );
}

export default withUserForm(UserRegistration);
