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
import Aesthetic from "./aesthetic";
import TextFieldDatePicker from "./date-picker";
import UserSchema, { initialUser } from "./schema/user-schema";

function InputRegistration({
  open,
  onClose,
  user,
  acceptText,
  onSubmit,
  onSuccess,
}) {
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
    formik?.setValues(user || {});
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
        <form id="join-form" autoComplete="off" onSubmit={formik?.handleSubmit}>
          <Box
            border={4}
            borderLeft={0}
            borderRight={0}
            borderColor="primary.light"
            width="100%"
            maxWidth="550px"
            borderRadius="6px"
          >
            <Card sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                py={2}
                px={1}
                className="modal-header"
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
              <Box ml={7} mr={3} sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                  <Grid item xs={12} md={6} pt={3}>
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
                      helperText={
                        formik.touched.username && formik.errors.username
                      }
                      variant="standard"
                      sx={{ pr: 4 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} pt={3}>
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
                      helperText={
                        formik.touched.firstname && formik.errors.firstname
                      }
                      variant="standard"
                      sx={{ pr: 4 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} pt={3}>
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
                      helperText={
                        formik.touched.lastname && formik.errors.lastname
                      }
                      variant="standard"
                      fullWidth
                      sx={{ pr: 4 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} pt={3}>
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
                      helperText={
                        formik.touched.middlename && formik.errors.middlename
                      }
                      variant="standard"
                      sx={{ pr: 4 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} pt={3}>
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
                      helperText={formik.touched.email && formik.errors.email}
                      variant="standard"
                      sx={{ pr: 4 }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} pt={3}>
                    <TextFieldDatePicker
                      name="dob"
                      disabled={loading}
                      value={formik.values.dob}
                      onChange={(evt) =>
                        formik?.setFieldValue("dob", evt?.toISOString(), true)
                      }
                      maxDate={new Date()}
                      error={formik.touched.dob && Boolean(formik.errors.dob)}
                      helperText={formik.touched.dob && formik.errors.dob}
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} pt={3}>
                    <FormControl>
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
                        helperText={
                          formik.touched.gender && formik.errors.gender
                        }
                        variant="standard"
                        sx={{ pr: 5.5 }}
                      >
                        <MenuItem value="M">M</MenuItem>
                        <MenuItem value="F">F</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6} pt={3}>
                    <Aesthetic gender={formik?.values?.gender} />
                  </Grid>
                </Grid>
              </Box>
              <Box p={2} sx={{ textAlign: "right" }}>
                {error}
                <Button variant="contained" color="primary" type="submit">
                  {acceptText || "Register"}
                </Button>
              </Box>
            </Card>
          </Box>
        </form>
      </Box>
    </Modal>
  );
}

export default InputRegistration;

InputRegistration.defaultProps = {
  open: false,
  onClose: () => {},
  user: null,
  acceptText: "",
  onSubmit: () => {},
  onSuccess: () => {},
};

InputRegistration.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  user: PropTypes.object,
  acceptText: PropTypes.string,
  onSubmit: PropTypes.func,
  onSuccess: PropTypes.func,
};
