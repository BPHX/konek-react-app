/* eslint-disable no-unused-vars */
import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ConfirmModal from "../components/dialog/confirm/confirm-dialog";

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

    function initLogout() {
      sendConfirm({
        title: "Logging out",
        message: "Are you sure you want to logout ?",
        onConfirm: () => navigate("/sign-out"),
      });
    }
    return { sendConfirm, initLogout };
  }, []);

  const handleConfirm = () => {
    event?.onConfirm?.();
    setOpen(false);
  };

  return (
    <MessengerContext.Provider value={value}>
      {children}
      <ConfirmModal
        keepMounted
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleConfirm}
        message={event?.message}
        title={event?.title}
      />
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
