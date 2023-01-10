import React, { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const initalUser = {};

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = React.useState(initalUser);
  const value = useMemo(() => [user, setUser], [user, setUser]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  return context;
}

export default UserContext;

// AppProvider.defaultProps = {
//   open: ,
// };

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
