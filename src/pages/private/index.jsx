import React from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Box, List } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SecurityIcon from "@mui/icons-material/Security";
import QuizIcon from "@mui/icons-material/Quiz";
import BookIcon from "@mui/icons-material/Book";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AppLoader from "../../components/loader/app-loader";
import useAuth, { withAuth } from "../../hooks/auth/use-auth";
import useToken, { SESSION_TOKEN_KEY, withToken } from "../../hooks/auth/use-token";
import DashboardPage from "./dashboard/dashboard-page";
import MiniAppBar from "../../components/appbar/appbar";
import MiniDrawer from "../../components/drawer/drawer";
import DrawerListItem from "../../components/drawer/list-item";
import useUserService from "../../hooks/use-user-service";
import UserRegistration from "./users";
import AuditLogs from "./logs";
import RolesPage from "./role";
import Activity from "./activity";
import Calendar from "./calendar";
import Attendance from "./attendance";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const childRoutes = [
  {
    path: "/",
    element: <DashboardPage />,
    name: "Dashboard",
    icon: DashboardIcon,
    permissions: [],
  },
  {
    path: "/users",
    element: <UserRegistration />,
    name: "Users",
    icon: GroupIcon,
    permissions: ["user:create"],
  },
  {
    path: "/roles",
    element: <RolesPage />,
    name: "Roles",
    icon: SecurityIcon,
    permissions: ["role:create"],
  },
  {
    path: "/audit",
    element: <AuditLogs />,
    name: "Audit Logs",
    icon: BookIcon,
    permissions: ["audit:view"],
  },
  {
    path: "/question",
    element: <Activity />,
    name: "Question",
    icon: QuizIcon,
    permissions: ["activity:create"],
  },
  {
    path: "/calendar",
    element: <Calendar />,
    name: "My Calendar",
    icon: CalendarMonthIcon,
    permissions: [],
  },
  {
    path: "/attendance",
    element: <Attendance />,
    name: "Attendance",
    icon: FolderOpenIcon,
    permissions: [],
  },
];

function getPermittedRoutes(permissions) {
  return childRoutes.filter((route) => {
    if (!route.permissions?.length) return true;
    if (!permissions?.length) return false;
    const acls = route.permissions;
    const granted = acls.filter((acl) => permissions.indexOf(acl) > -1);
    return granted.length === acls.length;
  });
}

function PrivateLayout() {
  const [token] = useToken();
  const [loading, user] = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const userService = useUserService();
  const [permissions, setPermissions] = React.useState([]);
  const [menuLoading, setMenuLoading] = React.useState(false);

  React.useEffect(() => {
    setMenuLoading(true);
    if (token)
      userService
        .getCurrentUserPermissions()
        .then((p) => setPermissions(p))
        .finally(() => setMenuLoading(false));
  }, []);

  const [open, setOpen] = React.useState(false);
  const [allowed, drawer] = React.useMemo(() => {
    const pRoutes = getPermittedRoutes(permissions);
    return [
      !!pRoutes.find((route) => route.path === location.pathname),
      pRoutes.map((route, index) => (
        <DrawerListItem
          key={route?.path || route?.name || index}
          text={route.name}
          icon={route?.icon}
          selected={location.pathname === route.path}
          open={open}
          onClick={() => navigate(route.path)}
        />
      )),
    ];
  }, [permissions, location, open]);

  const handleDrawerOpen = (b) => {
    setOpen(b);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (!token) return <Navigate to="/landing" />;

  if (loading || menuLoading) return <AppLoader />;

  if (token && !user) {
    localStorage.removeItem(SESSION_TOKEN_KEY);
    return (
      <Navigate
        to="/sign-in"
        state={{ message: "Invalid User / Session Expired" }}
      />
    );
  }

  if (!allowed) {
    return (
      <Navigate
        to="/403"
        state={{ message: "User Not Allowed to access this page" }}
      />
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflowY: "auto",
        backgroundColor: "#eee",
      }}
    >
      <CssBaseline />
      <MiniAppBar open={open} onMenuClick={handleDrawerOpen} />
      <MiniDrawer open={open} onDrawerClose={handleDrawerClose}>
        <List className="padding">{drawer}</List>
      </MiniDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: "80%" }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}

const PrivateRoute = withToken(withAuth(PrivateLayout));

const privateRoutes = [
  {
    path: "/",
    element: <PrivateRoute />,
    children: childRoutes,
  },
];

export default privateRoutes;
