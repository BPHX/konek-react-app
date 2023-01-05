import React, { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const initalConfig = {
  apiUrl: "http://localhost:3000",
};

const ConfigContext = createContext();

export function ConfigProvider({ children }) {
  const [config, setConfig] = React.useState(initalConfig);
  const value = useMemo(() => [config, setConfig], [config, setConfig]);
  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
}

export function useConfig() {
  const context = useContext(ConfigContext);
  return context;
}

export default ConfigContext;

// AppProvider.defaultProps = {
//   open: ,
// };

ConfigProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
