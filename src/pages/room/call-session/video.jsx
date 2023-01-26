/* eslint-disable no-unused-vars */
import React from "react";
import { Card } from "@mui/material";
import { useParams } from "react-router-dom";
import AgoraSession from "../../../components/agora/session";
import useConfig from "../../../hooks/use-config";
import useRoomService from "../../../hooks/room/use-room-service";
import RoomLoader from "./loader";

export default function Video() {
  const { agoraAppId } = useConfig();
  const { id: roomid } = useParams();
  const [loading, setLoading] = React.useState(true);
  const [access, setAccess] = React.useState(null);
  const [error, setError] = React.useState(null);
  const roomService = useRoomService();

  React.useEffect(() => {
    roomService
      .getRoomToken(roomid)
      .then((d) => setAccess(d))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [roomid, agoraAppId]);

  const callbacks = {
    EndCall: () => {},
  };
  const styleProps = {
    localBtnContainer: { display: "none" },
  };

  if (loading) return <RoomLoader />;
  if (error) return "Error";

  const rtcProps = {
    appId: agoraAppId,
    uid: access.uuid,
    channel: access.channel, // your agora channel
    token: access.token,
  };

  const rtmProps = {
    uid: access.uuid,
  };

  return (
    <Card sx={{ height: "100%", position: "relative", bgcolor: "#000" }}>
      <AgoraSession
        rtcProps={rtcProps}
        rtmProps={rtmProps}
        callbacks={callbacks}
      />
    </Card>
  );
}
