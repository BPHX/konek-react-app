import React from "react";
import { Grid } from "@mui/material";
import CalendarScheduler from "./calendar-scheduler";

function Calendar() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CalendarScheduler />
      </Grid>
    </Grid>
  );
}

export default Calendar;
