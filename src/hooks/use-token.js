import React, { createContext } from "react";
import PropTypes from "prop-types";

export const SESSION_TOKEN_KEY = "ACCESS_TOKEN";

const TokenContext = createContext(null);

export function TokenProvider({ children }) {
  const [token, setToken] = React.useState(
    sessionStorage.getItem(SESSION_TOKEN_KEY)
  );

  const value = React.useMemo(() => [token, setToken], [token, setToken]);
  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
}

TokenProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function useToken() {
  const context = React.useContext(TokenContext);
  if (!context)
    throw new Error(
      "This hook should only be use inside TokenProvider instance"
    );
  return context;
}

export function withToken(Element) {
  return function ElementWithToken() {
    return (
      <TokenProvider>
        <Element />
      </TokenProvider>
    );
  };
}
