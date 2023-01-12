/* eslint-disable no-unused-vars */
import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import RoleInfo from "../pages/private/role/role-info";

const MessengerContext = createContext(null);

export function MessengerProvider({ children }) {
  const [open, setOpen] = React.useState(false);
  const [event, setEvent] = React.useState({});
  const navigate = useNavigate();
  const value = React.useMemo(() => {
    function sendConfirm(evt) {
      setEvent(evt);
      setOpen(true);
    }

    return { sendConfirm };
  }, []);

  const handleConfirm = () => {
    event?.onConfirm?.();
    setOpen(false);
  };

  return (
    <MessengerContext.Provider value={value}>
      {children}
      <RoleInfo keepMounted open={open} onClose={() => setOpen(false)} />
    </MessengerContext.Provider>
  );
}

MessengerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function useMessenger() {
  const context = React.useContext(MessengerContext);
  if (!context)
    throw new Error(
      "This hook should only be use inside MessengerContext instance"
    );
  return context;
}
