import { Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function UserMenu(props) {
  // KUNG MADAMI ANG PROPS
  const { anchor, onClose } = props;

  const settings = ["Profile", "Account", "Logout"];

  const navigate = useNavigate();

  const handleClick = (evt) => () => {
    if (evt === "Logout") {
      navigate("/");
      return;
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
// Typechecking props of the MDAlert
UserMenu.propTypes = {
  anchor: PropTypes.element,
  onClose: PropTypes.func,
};
