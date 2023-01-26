/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Modal,
  Card,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import TextFieldDatePicker from "../../date-picker/date-picker";
import UserSchema, { initialUser } from "./user-schema";
import Aesthetic from "./aesthetic";

function UserModal({ open, onClose, user, acceptText, onSubmit, onSuccess }) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const handleClose = () => {
    onClose?.();
  };

  const formik = useFormik({
    initialValues: user || initialUser,
    validationSchema: UserSchema,
    onSubmit: () => {
      setError("");
      setLoading(true);
      onSubmit?.({ ...user, ...formik?.values })
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
    if (!user) {
      formik.resetForm();
    } else {
      formik?.setValues({ ...user, gender: user.gender || "M" });
    }
  }, [user]);

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
        <Box
          border={4}
          borderLeft={0}
          borderRight={0}
          borderColor="primary.light"
          width="100%"
          maxWidth="900px"
          borderRadius="6px"
          component="form"
          autoComplete="off"
          onSubmit={formik?.handleSubmit}
        >
          <Card sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              className="modal-header"
              py={2}
              px={1}
              sx={{ display: "flex", maxHeight: "200px" }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, flexGrow: 1, marginLeft: 2 }}
              >
                User Registration
              </Typography>
              <IconButton width="50px" onClick={handleClose}>
                <CloseIcon color="error" sx={{ cursor: "pointer" }} />
              </IconButton>
            </Box>
            <Box
              className="modal-content"
              flexGrow={1}
              display="flex"
              flexDirection="row"
            >
              <Box
                width="400px"
                display={{ xs: "none", md: "block" }}
                p={3}
                ml={3}
              >
                <Aesthetic gender={formik.values?.gender} />
              </Box>
              <Box
                flexGrow={1}
                p={5}
                maxHeight="70vh"
                sx={{ overflowY: "auto" }}
              >
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="outlined-basic"
                      label="Username"
                      name="username"
                      fullWidth
                      disabled={loading}
                      value={formik.values.username}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBLur}
                      error={
                        formik.touched.username &&
                        Boolean(formik.errors.username)
                      }
                      helpertext={
                        formik.touched.username && formik.errors.username
                      }
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="outlined-basic"
                      label="Email (Required)"
                      name="email"
                      fullWidth
                      disabled={loading}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBLur}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helpertext={formik.touched.email && formik.errors.email}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="outlined-basic"
                      label="Firstname"
                      name="firstname"
                      fullWidth
                      disabled={loading}
                      value={formik.values.firstname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBLur}
                      error={
                        formik.touched.firstname &&
                        Boolean(formik.errors.firstname)
                      }
                      helpertext={
                        formik.touched.firstname && formik.errors.firstname
                      }
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="outlined-basic"
                      label="Lastname"
                      name="lastname"
                      disabled={loading}
                      value={formik?.values?.lastname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBLur}
                      error={
                        formik.touched.lastname &&
                        Boolean(formik.errors.lastname)
                      }
                      helpertext={
                        formik.touched.lastname && formik.errors.lastname
                      }
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      id="outlined-basic"
                      label="Middlename"
                      name="middlename"
                      fullWidth
                      disabled={loading}
                      value={formik.values.middlename}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBLur}
                      error={
                        formik.touched.middlename &&
                        Boolean(formik.errors.middlename)
                      }
                      helpertext={
                        formik.touched.middlename && formik.errors.middlename
                      }
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextFieldDatePicker
                      label="Birthday"
                      width="100%"
                      name="dob"
                      disabled={loading}
                      value={formik.values.dob}
                      onChange={(evt) =>
                        formik?.setFieldValue("dob", evt?.toISOString(), true)
                      }
                      maxDate={new Date()}
                      error={formik.touched.dob && Boolean(formik.errors.dob)}
                      helpertext={formik.touched.dob && formik.errors.dob}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl sx={{ width: "100%" }}>
                      <InputLabel
                        id="demo-simple-select-label"
                        sx={{ marginLeft: -2 }}
                      >
                        Gender
                      </InputLabel>
                      <Select
                        id="outlined-basic"
                        label="Gender"
                        name="gender"
                        disabled={loading}
                        value={formik.values.gender}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBLur}
                        error={
                          formik.touched.gender && Boolean(formik.errors.gender)
                        }
                        helpertext={
                          formik.touched.gender && formik.errors.gender
                        }
                        variant="standard"
                      >
                        <MenuItem value="M">Male</MenuItem>
                        <MenuItem value="F">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Box p={2} sx={{ textAlign: "right" }}>
              {error}
              <Button variant="contained" color="primary" type="submit">
                {acceptText || "Register"}
              </Button>
            </Box>
          </Card>
        </Box>
      </Box>
    </Modal>
  );
}

UserModal.defaultProps = {
  open: false,
  onClose: () => {},
  user: null,
  acceptText: "",
  onSubmit: () => {},
  onSuccess: () => {},
};

UserModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object,
  acceptText: PropTypes.string,
  onSubmit: PropTypes.func,
  onSuccess: PropTypes.func,
};

export default UserModal;
