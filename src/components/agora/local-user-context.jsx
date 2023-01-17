import React from "react";
import PropTypes from "prop-types";
import { MaxUidContext, MinUidContext } from "agora-react-uikit";

export const LocalUserContext = React.createContext({});

export function LocalUserProvider({ children }) {
  const min = React.useContext(MinUidContext);
  const max = React.useContext(MaxUidContext);
  const value = React.useMemo(() => {
    if (max[0]?.uid === 0) {
      return max[0];
    }
    return min?.find?.((u) => u.uid === 0) || null;
  }, [min, max]);
  return (
    <LocalUserContext.Provider value={value}>
      {children}
    </LocalUserContext.Provider>
  );
}

LocalUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
