import React from "react";
import { Card, Grid } from "@mui/material";
import UserRoles from "./roles";
import DataRoles from "./data-roles";

function Roles() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Card>
          <UserRoles />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <DataRoles />
        </Card>
      </Grid>
    </Grid>
  );
}
export default Roles;
