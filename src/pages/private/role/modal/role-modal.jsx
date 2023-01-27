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
import RoleSchema, { initialRole } from "./role-schema";
import useRoleService from "../../../../hooks/role/use-role-service";

export default function RoleInfo({
  open,
  onClose,
  role,
  onSubmit,
  onSuccess,
  acceptText,
}) {
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const service = useRoleService();
  const handleClose = () => {
    if (!loading) onClose?.();
  };

  const formik = useFormik({
    initialValues: role || initialRole,
    validationSchema: RoleSchema,
    onSubmit: () => {
      setError("");
      setLoading(true);
      onSubmit?.({ ...role, ...formik?.values })
        .then(() => {
          formik?.resetForm();
          onClose?.();
          onSuccess?.();
        })
        .catch((err) => {
          setError(err?.message);
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });

  React.useEffect(() => {
    if (!role?.id) {
      formik.resetForm();
      setLoading(false);
    } else {
      setLoading(true);
      service
        .getRolePermissions(role.id)
        .then((p) => {
          formik?.setValues({
            ...(role || {}),
            permissions: p.filter(Boolean),
          });
        })
        .finally(() => setLoading(false));
    }
  }, [role]);

  const handlePermmissionChange = (permissions) => {
    formik.setFieldValue("permissions", permissions.filter(Boolean));
  };

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      sx={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <Box
        component="form"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="100vh"
        id="join-form"
        autoComplete="off"
        onSubmit={formik?.handleSubmit}
      >
        <Box
          border={4}
          borderLeft={0}
          borderRight={0}
          borderColor="primary.light"
          borderRadius="7px"
          width="100%"
          maxWidth={1000}
        >
          <Card>
            <Box className="modal-header" display="flex">
              <Typography
                variant="h5"
                py={2}
                px={1}
                sx={{ fontWeight: 600, flexGrow: 1, marginLeft: 2 }}
              >
                Role Registration
              </Typography>
              <Box>
                <IconButton
                  width="50px"
                  onClick={handleClose}
                  disabled={loading}
                >
                  <CloseIcon
                    color="error"
                    sx={{ cursor: "pointer", alignSelf: "start" }}
                  />
                </IconButton>
              </Box>
            </Box>
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
                        name="name"
                        fullWidth
                        disabled={loading}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.name && Boolean(formik.errors.name)
                        }
                        helpertext={formik.touched.name && formik.errors.name}
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
                        onBlur={formik.handleBlur}
                        error={
                          formik.touched.description &&
                          Boolean(formik.errors.description)
                        }
                        helpertext={
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
              <Box p={2} mt={3}>
                <Permissionlist
                  value={formik.values.permissions}
                  onChange={handlePermmissionChange}
                />
              </Box>
              {error}
              <Box m={1} sx={{ textAlign: "right" }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={loading}
                >
                  <SaveIcon sx={{ marginRight: 1 }} /> {acceptText || "Save"}
                </Button>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
    </Modal>
  );
}

RoleInfo.defaultProps = {
  open: false,
  onClose: () => {},
  onSuccess: () => {},
  onSubmit: () => {},
  role: null,
  acceptText: "",
};

RoleInfo.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSuccess: PropTypes.func,
  onSubmit: PropTypes.func,
  acceptText: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  role: PropTypes.object,
};
