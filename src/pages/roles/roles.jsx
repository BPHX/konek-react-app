import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Skeleton,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import SaveIcon from "@mui/icons-material/Save";
import SearchIcon from "@mui/icons-material/Search";
import useAuth from "../../auth";
import DataNewRole from "./data-new-role";
import RoleSchema, { initialRole } from "./schema/role-schema";

function UserRoles() {
  const [loading, setLoading] = React.useState(true);
  const auth = useAuth();

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
      auth
        .then(() => {
          console.log("DITO");
        })
        .catch(() => {
          console.log("ERROR");
        })
        .finally(() => {
          setLoading(false);
        });
    },
  });
  return (
    <Box>
      <form id="join-form" autoComplete="off" onSubmit={formik?.handleSubmit}>
        <Box
          border={4}
          borderLeft={0}
          borderRight={0}
          borderColor="primary.main"
          sx={{ height: "85vh" }}
        >
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
            <Grid item={6}>
              <Box ml={2}>
                {loading ? (
                  <Box pt={1}>
                    <Skeleton width="20vw" height="7vh">
                      <Typography>.</Typography>
                    </Skeleton>
                  </Box>
                ) : (
                  <TextField
                    label="Search"
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment>
                          <IconButton>
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{ mt: 2, width: 280 }}
                  />
                )}
              </Box>
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
                      error={formik.touched.role && Boolean(formik.errors.role)}
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
                        formik.touched.description && formik.errors.description
                      }
                      variant="standard"
                      fullWidth
                      sx={{ pr: 4 }}
                    />
                  )}
                </Grid>
              </Grid>
            </Box>
            <Box mx={1} mt={4}>
              <DataNewRole />
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
        </Box>
      </form>
    </Box>
  );
}

export default UserRoles;
