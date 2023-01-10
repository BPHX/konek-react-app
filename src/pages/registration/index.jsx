import React from "react";
import { Card, Grid } from "@mui/material";
import InputRegistration from "./inputs";
import UserData from "./data-user";

function UserRegistration() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <Card>
          <InputRegistration />
        </Card>
      </Grid>
      <Grid item xs={7}>
        <Card>
          <UserData />
        </Card>
      </Grid>
    </Grid>
  );
}
export default UserRegistration;
