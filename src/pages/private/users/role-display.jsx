import React from "react";
import { Box, Chip } from "@mui/material";
import PropTypes from "prop-types";

function RoleDisplay({ value }) {
  return (
    <Box>
      {value.map((x) => (
        <Chip
          label={x.name}
          key={x.id}
          variant="outlined"
          color="info"
          sx={{ mr: 1 }}
        />
      ))}
    </Box>
  );
}

RoleDisplay.defaultProps = {
  value: [],
};

RoleDisplay.propTypes = {
  value: PropTypes.arrayOf(PropTypes.object),
};

export default RoleDisplay;
