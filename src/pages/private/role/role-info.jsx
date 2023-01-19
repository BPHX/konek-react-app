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
import useRoleService from "../../../hooks/use-role-service";

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
    onClose?.();
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

  console.log(formik.errors);

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
                <IconButton onClick={handleClose}>
                  <CloseIcon color="error" sx={{ cursor: "pointer" }} />
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
                          name="name"
                          fullWidth
                          disabled={loading}
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBLur}
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
                          onBlur={formik.handleBLur}
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
                <Box mx={1} mt={1}>
                  <Permissionlist
                    value={formik.values.permissions}
                    onChange={handlePermmissionChange}
                  />
                </Box>
                {error}
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
                      <SaveIcon sx={{ marginRight: 1 }} />{" "}
                      {acceptText || "Save"}
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
