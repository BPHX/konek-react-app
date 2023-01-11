import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PropTypes from "prop-types";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function TextFieldDatePicker({ value, onChange, ...rest }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Birthday"
        value={value}
        onChange={(newValue) => {
          onChange?.(newValue);
        }}
        renderInput={(params) => (
          <TextField variant="standard" {...params} sx={{ pr: 4 }} />
        )}
        {...rest}
      />
    </LocalizationProvider>
  );
}

TextFieldDatePicker.defaultProps = {
  value: null,
  onChange: () => {},
};
// Typechecking props of the MDAlert
TextFieldDatePicker.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
