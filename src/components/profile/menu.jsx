import { Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import useMessenger from "../../hooks/use-messenger";

export default function UserMenu(props) {
  const { anchor, onClose } = props;

  const settings = ["Profile", "Account", "Logout"];
  const messenger = useMessenger();

  const handleClick = (evt) => () => {
    if (evt === "Logout") {
      messenger.initLogout();
    }
    onClose();
  };

  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={anchor}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchor)}
      onClose={onClose}
    >
      {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleClick(setting)}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
}

UserMenu.defaultProps = {
  anchor: null,
  onClose: () => {},
};

UserMenu.propTypes = {
  anchor: PropTypes.element,
  onClose: PropTypes.func,
};
