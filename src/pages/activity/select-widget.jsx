import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectWidget(props) {
  return (
    <Box sx={{ pr: 7 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Widget</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          sx={{ py: 1.5 }}
          {...props}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="millionaire">Millionaire</MenuItem>
          <MenuItem value="quiz">Quiz</MenuItem>
          <MenuItem value="roll">Roll</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
