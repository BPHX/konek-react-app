import React from "react";
import {
  Box,
  Modal,
  Card,
  IconButton,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import SelectWidget from "./select-widget";

function ActivityModal({ open, onClose }) {
  const handleClose = () => {
    onClose?.();
  };

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      sx={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          maxHeight: "100vh",
          overflowX: "auto",
        }}
      >
        <Card
          sx={{
            width: "120vh",
            height: "70vh",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <Box
            border={6}
            borderLeft={0}
            borderRight={0}
            borderColor="primary.light"
            sx={{ flexGrow: 1 }}
          >
            <Box sx={{ height: "100%" }}>
              <Box
                className="modal-header"
                sx={{ textAlign: "right", fontSize: "25px" }}
              >
                <IconButton>
                  <CloseIcon
                    color="error"
                    onClick={handleClose}
                    sx={{ cursor: "pointer" }}
                  />
                </IconButton>
              </Box>
              <Box>
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{ fontSize: 25, mt: 2, ml: 4 }}
                >
                  Add Activity
                </Typography>
              </Box>
              <Box className="modal-content" sx={{ flexGrow: 1 }}>
                <Grid containe spacing={0}>
                  <Grid xs={12} md={6} mt={3} ml={5}>
                    <SelectWidget sx={{ width: "200px" }} />
                  </Grid>
                  <Grid xs={12} mt={3} mx={5}>
                    <Box border={4} sx={{ height: 250 }}>
                      Content
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box
                className="modal-action"
                sx={{ textAlign: "right", height: 100 }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  sx={{ mr: 2, mt: 2, width: 80 }}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ mr: 2, mt: 2, width: 80 }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    </Modal>
  );
}
export default ActivityModal;

ActivityModal.defaultProps = {
  open: false,
  onClose: () => {},
};
// Typechecking props of the MDAlert
ActivityModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
