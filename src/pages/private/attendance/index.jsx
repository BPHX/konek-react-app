import React from "react";
import { Grid } from "@mui/material";
import AttendanceSheet from "./attendance";

function Attendance() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AttendanceSheet />
      </Grid>
    </Grid>
  );
}

export default Attendance;
