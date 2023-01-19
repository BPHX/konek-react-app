import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

export default function DrawerListItem({
  open,
  text,
  icon: Icon,
  onClick,
  selected,
  hideBorderTop,
  hideBorderBottom,
}) {
  const theme = useTheme();
  const [hover, setHover] = React.useState(false);

  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <ListItemButton
        onClick={() => onClick?.(text)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
          backgroundColor: selected || hover ? "#eee" : "inherit",
          color: selected || hover ? theme.palette.primary.main : "#eee",
          "&:hover": {
            color: theme.palette.primary.main,
            backgroundColor: "#eee",
          },
        }}
      >
        {Icon && (
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <Icon color={selected || hover ? "primary" : "gray"} />
          </ListItemIcon>
        )}
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>

      {(selected || hover) && [
        !hideBorderTop && <div className="trapezoid" />,
        !hideBorderBottom && <div className="trapezoid bottom" />,
      ]}
    </ListItem>
  );
}

DrawerListItem.defaultProps = {
  open: false,
  text: "",
  icon: null,
  onClick: () => {},
  selected: false,
  hideBorderTop: false,
  hideBorderBottom: false,
};

DrawerListItem.propTypes = {
  open: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  hideBorderTop: PropTypes.bool,
  hideBorderBottom: PropTypes.bool,
};
