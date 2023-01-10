import React from "react";
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

export default function Question({ title, autoFocus }) {
  const [value, setValue] = React.useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Paper elevation={1} sx={{ marginBottom: 1 }}>
      <Box p={1} pb={0}>
        {title}
        <IconButton>
          <DeleteIcon color="error" sx={{ cursor: "pointer" }} />
        </IconButton>
      </Box>
      <Box mt={1} p={2} pt={0}>
        <TextField
          id="standard-basic"
          multiline
          maxRows={2}
          variant="standard"
          name="question"
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
                  sx={{ width: "70%" }}
                />
              </Box>
            </Grid>
          </Grid>
        </RadioGroup>
      </Box>
    </Paper>
  );
}

Question.defaultProps = {
  title: "",
  autoFocus: () => {},
};
// Typechecking props of the MDAlert
Question.propTypes = {
  title: PropTypes.string,
  autoFocus: PropTypes.func,
};
