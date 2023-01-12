import React, { createContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AgoraRTC from "agora-rtc-sdk-ng";

// import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import useConfig from "./use-config";
import useAuth from "./use-auth";
import useMessenger from "./use-messenger";

const AgoraContext = createContext(null);

export function AgoraProvider({ children }) {
  const { agoraAppId } = useConfig();
  const [authLoading, auth] = useAuth();
  const messenger = useMessenger();
  const navigate = useNavigate();
  const [engine, setEngine] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { id } = useParams();
  // const [params] = useSearchParams();
  // const guestToken = params.get("inviteToken");

  React.useEffect(() => {
    if (!authLoading) {
      if (!auth?.id) {
        messenger.sendConfirm({
          title: "Invalid User",
          message: "User is unauthorized, sending back to login page",
          onConfirm: () => navigate("/sign-in"),
        });
      } else {
        const client = AgoraRTC.createClient({
          mode: "rtc",
          codec: "vp8",
        });
        setEngine(client);
        setLoading(false);
      }
    }
  }, [authLoading, auth, agoraAppId, id]);

  const value = React.useMemo(() => {
    function join(token) {
      return engine.join(agoraAppId, `konek-${id}`, token, auth.id);
    }
    return [loading, engine, join];
  }, [loading, engine]);

  return (
    <AgoraContext.Provider value={value}>{children}</AgoraContext.Provider>
  );
}

AgoraProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function useAgora() {
  const context = React.useContext(AgoraContext);
  if (!context)
    throw new Error(
      "This hook should only be use inside AgoraProvider instance"
    );
  return context;
}
