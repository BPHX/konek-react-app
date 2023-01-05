import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

function isLoggedIn() {
  return true; // TO-DO: Check session
}
function Protected(props) {
  const { component: Component } = props;

  if (!isLoggedIn()) {
    return <Navigate to="/" />;
  }

  return <Component />;
}

export default Protected;

// Typechecking props of the MDAlert
Protected.propTypes = {
  component: PropTypes.element.isRequired,
};
