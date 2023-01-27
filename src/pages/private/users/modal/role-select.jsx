/* eslint-disable react/prop-types */
import React from "react";
import { MenuItem, Select, Checkbox, ListItemText } from "@mui/material";

export default function RoleSelect({ value, items, ...props }) {
  return (
    <Select value={value || []} {...props} multiple>
      {(items || []).map((i) => (
        <MenuItem value={i.id}>
          <Checkbox checked={value.indexOf(i.id) > -1} />
          <ListItemText primary={i.name} />
        </MenuItem>
      ))}
    </Select>
  );
}
