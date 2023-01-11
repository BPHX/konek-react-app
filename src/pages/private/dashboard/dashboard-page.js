import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
// import useAuth from "../../auth";
import MiniAppBar from "../../../components/appbar/appbar";
import MiniDrawer from "../../../components/drawer/drawer";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function DashboardPage() {
  const [open, setOpen] = React.useState(false);
  // const auth = useAuth();
  // const [user] = useUser();
  // const [loading, setLoading] = React.useState(true);

  const handleDrawerOpen = (b) => {
    setOpen(b);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const handleMessage = (msg) => {
  //   alert(msg.text);
  // };

  // React.useEffect(() => {
  //   auth.verify().finally(() => setLoading(false));
  // }, []);

  // if (loading) {
  //   return "loading";
  // }

  // if (!user?.id) {
  //   return <Navigate to="/login" />;
  // }

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
      <MiniDrawer open={open} onDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: "80%" }}>
        <DrawerHeader />
        <div>
          <Outlet />
        </div>
      </Box>
    </Box>
  );
}
