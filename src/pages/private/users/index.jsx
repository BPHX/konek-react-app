import React from "react";
import { Card, Grid } from "@mui/material";
import UserData from "./data-user";
import { UserFormProvider } from "../../../hooks/use-user-form";

function UserRegistration() {
  return (
    <UserFormProvider>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <UserData />
          </Card>
        </Grid>
      </Grid>
    </UserFormProvider>
  );
}
export default UserRegistration;
