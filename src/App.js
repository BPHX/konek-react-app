import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/home";
import DashboardHome from "./pages/dashboard/home";
import About from "./pages/about";
import DashBoard from "./pages/dashboard";
import Protected from "./components/routes/protected";
import NotFound from "./pages/not-found";
import theme from "./theming";
import Login from "./pages/login/index";
import Room from "./components/room/room";
import { ConfigProvider } from "./context/config";
import { UserProvider } from "./context/user";
import Classroom from "./pages/dashboard/classroom";
import User from "./pages/dashboard/user";
import Logs from "./pages/dashboard/logs";
import Instructors from "./pages/dashboard/instructor-data";
import Calendar from "./pages/calendar.jsx";
import IndexProfile from "./pages/profile";
import Roles from "./pages/roles";
import Activity from "./pages/activity";

function App() {
  return (
    <ConfigProvider>
      <UserProvider>
        <Router>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route
                path="/dashboard"
                element={<Protected component={DashBoard} />}
              >
                <Route path="/dashboard" element={<DashboardHome />} />
                <Route path="/dashboard/classroom" element={<Classroom />} />
                <Route path="/dashboard/user" element={<User />} />
                <Route path="/dashboard/Logs" element={<Logs />} />
                <Route path="/dashboard/profile" element={<IndexProfile />} />
                <Route path="/dashboard/teachers" element={<Instructors />} />
                <Route path="/dashboard/calendar" element={<Calendar />} />
                <Route path="/dashboard/roles" element={<Roles />} />
                <Route path="/dashboard/activity" element={<Activity />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/room/:id" element={<Room />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="/" element={<Home />} exact />
              <Route path="*" element={<Navigate to="/404" />} />
              <Route path="/room" element={<Room />} />
            </Routes>
          </ThemeProvider>
        </Router>
      </UserProvider>
    </ConfigProvider>
  );
}
export default App;
