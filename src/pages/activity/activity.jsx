import React from "react";
import { Box, Card, Grid } from "@mui/material";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import IconButton from "@mui/material/IconButton";
import ActivityModal from "./modal-activity";

function AddActivity() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
      <ActivityModal open={open} onClose={handleClose} />
      <Grid container>
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
      </Grid>
    </Box>
  );
}

export default AddActivity;
