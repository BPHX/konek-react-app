import { Box } from "@mui/material";
import React from "react";
import useAuth from "../../../hooks/use-auth";
import AdminDashboard from "./admin/admin-dashboard";
import StudentDashboard from "./student/student-dashboard";
import InstructorDashboard from "./teacher/teacher-dashboard";

export default function DashboardPage() {
  const [, user] = useAuth();
  return (
    <Box>
      Welcome {user.firstname},
      <AdminDashboard />
      <Box sx={{ marginTop: 2 }}>
        <StudentDashboard />
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <InstructorDashboard />
      </Box>
    </Box>
  );
}
