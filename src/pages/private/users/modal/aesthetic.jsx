import React from "react";
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import PropTypes from "prop-types";
import "./aesthetic.css";

const imageURLS = {
  M: "/images/profile/boy.png",
  F: "/images/profile/girl.png",
};

function Aesthetic({ gender, ...rest }) {
  if (!imageURLS[gender]) return null;
  return (
    <Box className="pop-up" {...rest}>
      <CardMedia
        component="img"
        width="100%"
        image={imageURLS[gender]}
        alt="IMAGE"
      />
    </Box>
  );
}

export default Aesthetic;

Aesthetic.defaultProps = {
  gender: null,
};
// Typechecking props of the MDAlert
Aesthetic.propTypes = {
  gender: PropTypes.string,
};
