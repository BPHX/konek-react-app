import React from "react";
import Toolbar from "@mui/material/Toolbar";
import { Avatar, Tooltip } from "@mui/material";
import "./profile.css";
import UserMenu from "./menu";
import useAuth from "../../hooks/use-auth";

export default function Profile() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [, user] = useAuth();
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <Toolbar className="avatar">
      <Tooltip title="Open settings">
        <Avatar
          alt={user?.firstname || ""}
          // src="https://drive.google.com/uc?export=view&id=1omB8yTn99Y3mIuwREHZHjbHUAqPF9CaB"
          onClick={handleOpenUserMenu}
          sx={{ bgcolor: "orange" }}
        >
          {user?.firstname?.[0].toUpperCase()}
        </Avatar>
      </Tooltip>
      <UserMenu anchor={anchorElUser} onClose={handleCloseUserMenu} />
    </Toolbar>
  );
}
