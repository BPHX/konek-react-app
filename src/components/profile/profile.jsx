import React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Avatar, Tooltip } from "@mui/material";
import "./profile.css";
import UserMenu from "./menu";

export default function Profile() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <Toolbar className="avatar">
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://drive.google.com/uc?export=view&id=1omB8yTn99Y3mIuwREHZHjbHUAqPF9CaB"
          />
        </IconButton>
      </Tooltip>
      <UserMenu anchor={anchorElUser} onClose={handleCloseUserMenu} />
    </Toolbar>
  );
}
