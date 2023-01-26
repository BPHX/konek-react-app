import React from "react";
import { Grid } from "@mui/material";
import AddActivity from "./add-activity";

export default function Activity() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AddActivity />
      </Grid>
    </Grid>
  );
}
