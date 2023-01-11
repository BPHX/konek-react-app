import React from "react";
import { Card, Grid } from "@mui/material";
import LogsData from "./logs-data";

export default function AuditLogs() {
  return (
    <Grid item xs={5}>
      <Card>
        <LogsData />
      </Card>
    </Grid>
  );
}
