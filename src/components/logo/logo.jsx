import { Typography } from "@mui/material";
import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import "./logo.css";

export default function Logo({ lg, className }) {
  return (
    <div className={classNames({ className, logo: true, lg })}>
      <img src="/images/logo.png" alt="Konek" />
      <Typography
        component="span"
        variant="title"
        className="text"
        sx={{ display: { xs: "none", sm: "inline" } }}
      />
    </div>
  );
}

Logo.defaultProps = {
  lg: false,
  className: "",
};
// Typechecking props of the MDAlert
Logo.propTypes = {
  lg: PropTypes.bool,
  className: PropTypes.string,
};
