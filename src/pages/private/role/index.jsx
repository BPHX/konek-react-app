import React from "react";
import { Card, Grid } from "@mui/material";
import Roles from "./role-search";

function RolesPage() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          <Roles />
        </Card>
      </Grid>
    </Grid>
  );
}
export default RolesPage;
