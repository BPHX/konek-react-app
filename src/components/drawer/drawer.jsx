import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ClassIcon from "@mui/icons-material/Class";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import List from "@mui/material/List";
import { useNavigate, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PropTypes from "prop-types";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import QuizIcon from "@mui/icons-material/Quiz";
import DrawerListItem from "./list-item";
import "./drawer.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ open }) {
  const activeRole = "student";

  const getMenuItems = (role) => {
    if (role === "admin") {
      return [
        { text: "Home", icon: HomeIcon, path: "" },
        { text: "Profile", icon: AccountBoxIcon, path: "profile" },
        { text: "User", icon: ContactEmergencyIcon, path: "user" },
        { text: "Roles", icon: VerifiedUserIcon, path: "roles" },
        { text: "Logs", icon: ReceiptLongIcon, path: "logs" },
      ];
    }
    if (role === "student") {
      return [
        { text: "Home", icon: HomeIcon, path: "" },
        { text: "Profile", icon: AccountBoxIcon, path: "profile" },
        { text: "Classroom", icon: ClassIcon, path: "classroom" },
        { text: "Calendar", icon: CalendarMonthIcon, path: "calendar" },
      ];
    }
    if (role === "instructor") {
      return [
        { text: "Home", icon: HomeIcon, path: "" },
        { text: "Profile", icon: AccountBoxIcon, path: "profile" },
        { text: "Classroom", icon: ClassIcon, path: "classroom" },
        { text: "Activity", icon: QuizIcon, path: "activity" },
        { text: "Calendar", icon: CalendarMonthIcon, path: "calendar" },
      ];
    }
    if (role === "coordinator") {
      return [
        { text: "Home", icon: HomeIcon, path: "" },
        { text: "Teachers", icon: PeopleAltIcon, path: "teachers" },
        { text: "Calendar", icon: CalendarMonthIcon, path: "calendar" },
      ];
    }
    throw new Error("Invalid Role");
  };

  const items = getMenuItems(activeRole);

  const navigate = useNavigate();

  const location = useLocation();
  return (
    <Drawer
      variant="permanent"
      open={open}
      classes={{ paper: "drawer-container" }}
    >
      <DrawerHeader>{/* TBA */}</DrawerHeader>
      <Divider />

      <List className="padding">
        {items.map((item) => (
          <DrawerListItem
            key={item.text}
            open={open}
            text={item.text}
            icon={item.icon}
            onClick={() => navigate(item.path)}
            selected={
              location.pathname.replace("/dashboard", "").replace("/", "") ===
              item.path
            }
          />
        ))}
      </List>
    </Drawer>
  );
}

MiniDrawer.defaultProps = {
  open: false,
};
// Typechecking props of the MDAlert
MiniDrawer.propTypes = {
  open: PropTypes.bool,
};
