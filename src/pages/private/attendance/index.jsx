import React from "react";
import { Card, Grid } from "@mui/material";
import AttendanceSheet from "./attendance";

function Attendance() {
  return (
    <Grid item xs={12}>
      <Card>
        <AttendanceSheet />
      </Card>
    </Grid>
  );
}

export default Attendance;
