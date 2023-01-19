import React from "react";
import { Box } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import PropTypes from "prop-types";
import ImagUserBoy from "./img/image-profile.png";
import ImagUserGirl from "./img/image-profile-girl.png";
import "./css/index.css";

function Aesthetic({ gender, ...rest }) {
  return (
    <Box className="pop-up" {...rest}>
      <CardMedia
        component="img"
        height="250"
        image={gender === "M" ? ImagUserBoy : ImagUserGirl}
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
