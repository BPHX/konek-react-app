import React from "react";
import { Card, Grid } from "@mui/material";
import Roles from "./role-search";
import { RoleFormProvider } from "../../../hooks/use-role-form";

function RolesPage() {
  return (
    <RoleFormProvider>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <Roles />
          </Card>
        </Grid>
      </Grid>
    </RoleFormProvider>
  );
}
export default RolesPage;
