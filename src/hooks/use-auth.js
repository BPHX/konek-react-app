import React, { createContext } from "react";
import PropTypes from "prop-types";
import useToken from "./use-token";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token] = useToken();
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (token) {
      setLoading(true);
      Promise.resolve(123).then(() =>
        setTimeout(() => {
          setLoading(false);
          setData({});
        }, 3000)
      );
    } else {
      setLoading(false);
    }
  }, [token]);

  const value = React.useMemo(() => [loading, data], [data, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context)
    throw new Error(
      "This hook should only be use inside AuthProvider instance"
    );
  return context;
}

export function withAuth(Element) {
  return function ElementWithToken() {
    return (
      <AuthProvider>
        <Element />
      </AuthProvider>
    );
  };
}
