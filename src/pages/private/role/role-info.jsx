import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Skeleton,
  IconButton,
  Modal,
  Card,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";
import Permissionlist from "./permission-list";
import RoleSchema, { initialRole } from "./schema/role-schema";
import authRoutes from "../../auth";

export default function RoleInfo({ open, onClose, onSuccess }) {
  const [loading, setLoading] = React.useState(true);
  const handleClose = () => {
    onClose?.();
  };

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const formik = useFormik({
    initialValues: initialRole,

    validationSchema: RoleSchema,
    onSubmit: () => {
      setLoading(true);
      authRoutes
        .then(() => {
          onSuccess?.();
        })
        .catch(() => {})
        .finally(() => {
          setLoading(false);
        });
    },
  });
  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      sx={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="100vh"
      >
        <form id="join-form" autoComplete="off" onSubmit={formik?.handleSubmit}>
          <Box
            border={4}
            borderLeft={0}
            borderRight={0}
            borderColor="primary.light"
            borderRadius="7px"
          >
            <Card>
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
              <Grid container>
                <Grid item xs={6}>
                  {loading ? (
                    <Box pl={3} pt={1}>
                      <Skeleton width="20vw" height="7vh">
                        <Typography>.</Typography>
                      </Skeleton>
                    </Box>
                  ) : (
                    <Typography
                      variant="h5"
                      sx={{ paddingTop: 3, paddingLeft: 3, fontWeight: 600 }}
                    >
                      New Role
                    </Typography>
                  )}
                </Grid>
              </Grid>
              <Box>
                <Box ml={7} mr={3} sx={{ maxHeight: 40 }}>
                  <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                      {loading ? (
                        <Box>
                          <Skeleton width="30vh" height="7vh">
                            <Typography>.</Typography>
                          </Skeleton>
                        </Box>
                      ) : (
                        <TextField
                          id="outlined-basic"
                          label="Role"
                          name="role"
                          fullWidth
                          disabled={loading}
                          value={formik.values.role}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBLur}
                          error={
                            formik.touched.role && Boolean(formik.errors.role)
                          }
                          helperText={formik.touched.role && formik.errors.role}
                          variant="standard"
                          sx={{ pr: 4 }}
                        />
                      )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {loading ? (
                        <Box>
                          <Skeleton width="30vh" height="7vh">
                            <Typography>.</Typography>
                          </Skeleton>
                        </Box>
                      ) : (
                        <TextField
                          id="outlined-basic"
                          label="Description"
                          name="description"
                          disabled={loading}
                          value={formik?.values?.description}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBLur}
                          error={
                            formik.touched.description &&
                            Boolean(formik.errors.description)
                          }
                          helperText={
                            formik.touched.description &&
                            formik.errors.description
                          }
                          variant="standard"
                          fullWidth
                          sx={{ pr: 4 }}
                        />
                      )}
                    </Grid>
                  </Grid>
                </Box>
                <Box mx={1} mt={1}>
                  <Permissionlist />
                </Box>
                <Box m={1} sx={{ textAlign: "right" }}>
                  {loading ? (
                    <Box
                      mt={-2}
                      mr={1}
                      sx={{
                        display: "flex",
                        justifyContent: "end",
                      }}
                    >
                      <Skeleton width="80px" height="7vh">
                        <Typography>.</Typography>
                      </Skeleton>
                    </Box>
                  ) : (
                    <Button variant="contained" color="primary" type="submit">
                      <SaveIcon sx={{ marginRight: 1 }} /> Save
                    </Button>
                  )}
                </Box>
              </Box>
            </Card>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}

RoleInfo.defaultProps = {
  open: false,
  onClose: () => {},
  onSuccess: () => {},
};
// Typechecking props of the MDAlert
RoleInfo.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSuccess: PropTypes.func,
};
