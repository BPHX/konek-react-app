import React from "react";
import { Grid, Box } from "@mui/material";
import CustomizedTables from "../../../../components/graphs/custome";
import Widget from "../../../../components/widget/widget";

export default function InstructorDashboard() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    // <Divider orientation="vertical" flexItem />

    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <Widget loading={loading}>
          <Box className="vertical-line">
            <CustomizedTables />
          </Box>
        </Widget>
      </Grid>
    </Grid>
  );
}
