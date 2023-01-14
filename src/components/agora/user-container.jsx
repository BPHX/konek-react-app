import PropTypes from "prop-types";
import { Paper, Box } from "@mui/material";

function UserContainer({ children, sx, ...rest }) {
  return (
    <Paper
      sx={{ height: 130, width: 220, display: "inline-block", ...sx }}
      {...rest}
    >
      <Box display="flex" width="100%" height="100%">
        {children}
      </Box>
    </Paper>
  );
}

UserContainer.defaultProps = {
  children: null,
  sx: {},
};

UserContainer.propTypes = {
  children: PropTypes.node,
  // eslint-disable-next-line react/forbid-prop-types
  sx: PropTypes.object,
};

export default UserContainer;
