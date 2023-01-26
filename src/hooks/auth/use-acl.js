import React, { createContext } from "react";
import PropTypes from "prop-types";
import useToken from "./use-token";
import useUserService from "../user/use-user-service";

const AclContext = createContext(null);

export function AclProvider({ children }) {
  const [token] = useToken();
  const userService = useUserService();
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (token) {
      setLoading(true);
      userService
        .getCurrentUserPermissions()
        .then((p) =>
          setTimeout(() => {
            setLoading(false);
            setData(p);
          }, 3000)
        )
        .catch((err) => {
          setError(err);
        });
    } else {
      setLoading(false);
    }
  }, [token]);

  const value = React.useMemo(
    () => [loading, data, error],
    [data, loading, error]
  );
  return <AclContext.Provider value={value}>{children}</AclContext.Provider>;
}

AclProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function useACL() {
  const context = React.useContext(AclContext);
  if (!context)
    throw new Error(
      "This hook should only be use inside AuthProvider instance"
    );
  return context;
}
