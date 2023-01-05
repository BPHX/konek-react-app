import React from "react";
import { Card, Grid } from "@mui/material";
import MyProfile from "./profile";
import Aesthetic from "./aesthetic";

function IndexProfile() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <Card>
          <MyProfile />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Aesthetic />
      </Grid>
    </Grid>
  );
}
export default IndexProfile;
