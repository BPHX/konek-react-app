import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

export default function Millionaire({ info }) {
  // eslint-disable-next-line no-unused-vars
  const [item, setItem] = React.useState(info || {});

  return <Box />;
}

Millionaire.defaultProps = {
  info: () => {},
};
// Typechecking props of the MDAlert
Millionaire.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  info: PropTypes.object,
};
