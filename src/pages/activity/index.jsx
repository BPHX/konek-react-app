import React from "react";
import { Grid } from "@mui/material";
import AddActivity from "./activity";

function Activity() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AddActivity />
      </Grid>
    </Grid>
  );
}

export default Activity;
