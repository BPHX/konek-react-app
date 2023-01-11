import React from "react";
import { Box, Card, Grid, Skeleton, Typography } from "@mui/material";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import IconButton from "@mui/material/IconButton";
import ActivityModal from "./modal-activity";

function AddActivity() {
  const [loading, setLoading] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <Box>
      <ActivityModal open={open} onClose={handleClose} />
      <Grid container>
        {loading ? (
          <Box>
            <Box
              mt={-5}
              sx={{
                flexDirection: "row",
                display: "flex",
              }}
            >
              {Array(4).fill(
                <Skeleton width="340px" height="250px" sx={{ marginRight: 2 }}>
                  <Typography>.</Typography>
                </Skeleton>
              )}
            </Box>
          </Box>
        ) : (
          <Grid xs={3}>
            <Box sx={{ borderRadius: "20px" }}>
              <Card sx={{ height: "150px" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 2,
                  }}
                >
                  <IconButton onClick={handleOpen}>
                    <AddCircleOutlinedIcon
                      color="primary"
                      sx={{ fontSize: 100 }}
                    />
                  </IconButton>
                </Box>
              </Card>
            </Box>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default AddActivity;
