import { Box, Typography } from "@mui/material";
import React from "react";
import useAuth from "../../../hooks/use-auth";
import AdminDashboard from "./admin/admin-dashboard";
import StudentDashboard from "./student/student-dashboard";
import InstructorDashboard from "./teacher/teacher-dashboard";

export default function DashboardPage() {
  const [, user] = useAuth();
  return (
    <Box>
      <Typography variant="h5" sx={{ padding: 3, fontWeight: 600 }}>
        Welcome {user.firstname},
      </Typography>
      <AdminDashboard />
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h5" sx={{ padding: 3, fontWeight: 600 }}>
          Welcome student,
        </Typography>
        <StudentDashboard />
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h5" sx={{ padding: 3, fontWeight: 600 }}>
          Welcome Teacher,
        </Typography>
        <InstructorDashboard />
      </Box>
    </Box>
  );
}
