import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Navigate, Outlet } from "react-router-dom";
import Drawer from "../../components/drawer/drawer";
import AppBar from "../../components/appbar/appbar";
import "./index.css";
// import WebSocketClient from "../../components/web-socket/web-socket";
import { useUser } from "../../context/user";
import useAuth from "../../auth";

// const SOCKET_URL = "http://localhost:5000";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function DashBoard() {
  const [open, setOpen] = React.useState(false);
  const auth = useAuth();
  const [user] = useUser();
  const [loading, setLoading] = React.useState(true);

  const handleDrawerOpen = (b) => {
    setOpen(b);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const handleMessage = (msg) => {
  //   alert(msg.text);
  // };

  React.useEffect(() => {
    auth.verify().finally(() => setLoading(false));
  }, []);

  if (loading) {
    return "loading";
  }

  if (!user?.id) {
    return <Navigate to="/login" />;
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
      {/* <WebSocketClient url={SOCKET_URL} onReceive={handleMessage} /> */}
      <AppBar open={open} onMenuClick={handleDrawerOpen} />
      <Drawer open={open} onDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: "80%" }}>
        <DrawerHeader />
        <div>
          <Outlet />
        </div>
      </Box>
    </Box>
  );
}
