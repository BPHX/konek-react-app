import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";

export default function SelectWidget(props) {
  return (
    <Box sx={{ pr: 7 }}>
      <FormControl fullWidth>
        <InputLabel>Select Widget</InputLabel>
        <Select label="Select Widget" sx={{ py: 1.5 }} {...props}>
          <MenuItem value="millionaire">Millionaire</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
