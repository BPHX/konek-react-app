import React from "react";
import { Card, Grid } from "@mui/material";
import LogsData from "./audit-logs";

export default function Logs() {
  return (
    <Grid item xs={5}>
      <Card>
        <LogsData />
      </Card>
    </Grid>
  );
}
