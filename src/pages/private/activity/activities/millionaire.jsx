import {
  Box,
  TextField,
  Paper,
  Grid,
  Radio,
  Typography,
  RadioGroup,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import React from "react";

export default function Millionaire({
  info,
  allowDelete,
  onDelete,
  autoFocus,
}) {
  // eslint-disable-next-line no-unused-vars
  const [item, setItem] = React.useState(info || {});
  const [value, setValue] = React.useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box>
      {/* <form id="join-form" autoComplete="off" onSubmit={formik?.handleSubmit}> */}
      <Paper elevation={1} sx={{ marginBottom: 1 }}>
        <Box p={1} pb={0}>
          <Box sx={{ bgcolor: "primary.main", borderRadius: "5px" }}>
            <Typography color="white.darker" ml={2}>
              Question #
              <IconButton onClick={() => onDelete?.(item)}>
                <DeleteIcon
                  color="error"
                  disabled={allowDelete}
                  sx={{ cursor: "pointer" }}
                />
              </IconButton>
            </Typography>
          </Box>
        </Box>
        <Box mt={1} p={2} pt={0}>
          <TextField
            id="standard-basic"
            multiline
            maxRows={2}
            variant="standard"
            name="question"
            // value={formik.values.question}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBLur}
            // error={formik.touched.question && Boolean(formik.errors.question)}
            // helperText={formik.touched.question && formik.errors.question}
            sx={{ width: "100%" }}
            autoFocus={autoFocus}
          />
        </Box>
        <Box p={2} pt={0}>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography ml={2}>A</Typography>
                  <Radio value="A" name="radio-buttons" />
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    name="answerA"
                    // value={formik.values.answerA}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBLur}
                    // error={
                    //   formik.touched.answerA && Boolean(formik.errors.answerA)
                    // }
                    // helperText={
                    //   formik.touched.answerA && formik.errors.answerA
                    // }
                    sx={{ width: "70%" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography ml={2}>B</Typography>
                  <Radio value="B" name="radio-buttons" />
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    name="answerB"
                    // value={formik.values.answerB}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBLur}
                    // error={
                    //   formik.touched.answerB && Boolean(formik.errors.answerB)
                    // }
                    // helperText={
                    //   formik.touched.answerB && formik.errors.answerB
                    // }
                    sx={{ width: "70%" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography ml={2}>C</Typography>
                  <Radio value="C" name="radio-buttons" />
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    name="answerC"
                    // value={formik.values.answerC}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBLur}
                    // error={
                    //   formik.touched.answerC && Boolean(formik.errors.answerC)
                    // }
                    // helperText={
                    //   formik.touched.answerC && formik.errors.answerC
                    // }
                    sx={{ width: "70%" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography ml={2}>D</Typography>
                  <Radio value="D" name="radio-buttons" />
                  <TextField
                    id="standard-basic"
                    variant="standard"
                    name="answerD"
                    // value={formik.values.answerD}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBLur}
                    // error={
                    //   formik.touched.answerD && Boolean(formik.errors.answerD)
                    // }
                    // helperText={
                    //   formik.touched.answerD && formik.errors.answerD
                    // }
                    sx={{ width: "70%" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </RadioGroup>
        </Box>
      </Paper>
    </Box>
  );
}

Millionaire.defaultProps = {
  info: () => {},
  allowDelete: false,
  onDelete: () => {},
  autoFocus: false,
};
// Typechecking props of the MDAlert
Millionaire.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  info: PropTypes.object,
  allowDelete: PropTypes.bool,
  onDelete: PropTypes.func,
  autoFocus: PropTypes.bool,
};
