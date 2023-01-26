import React from "react";
import { Card, Grid } from "@mui/material";
import UserListing from "./listing/user-listing";
import { UserFormProvider } from "../../../hooks/user/use-user-form";

function UserRegistration() {
  return (
    <UserFormProvider>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card>
            <UserListing />
          </Card>
        </Grid>
      </Grid>
    </UserFormProvider>
  );
}
export default UserRegistration;
