import React, { createContext } from "react";
import PropTypes from "prop-types";

const ConfigContext = createContext(null);

export function ConfigProvider({ children }) {
  const value = React.useMemo(
    () => ({
      apiUrl: process.env.REACT_APP_API_URL,
      apiKey: process.env.REACT_APP_SYS_KEY,
      agoraAppId: process.env.REACT_APP_AGORA_APP_ID,
    }),
    []
  );
  if (!value?.apiUrl) throw new Error("Cannot locate API URL");
  if (!value?.apiKey) throw new Error("Invalid API Key");
  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
}

ConfigProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function useConfig() {
  const context = React.useContext(ConfigContext);
  if (!context)
    throw new Error(
      "This hook should only be use inside ConfigProvider instance"
    );
  return context;
}
