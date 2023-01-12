import axios from "axios";
import React from "react";
import useConfig from "./use-config";
import useToken from "./use-token";

export default function useRoomService() {
  const config = useConfig();
  const [token] = useToken();

  const service = React.useMemo(() => {
    const client = axios.create({
      baseURL: config.apiUrl,
      headers: {
        authorization: token,
      },
    });

    function getRoom(id) {
      return client.get(`/room/${id}`).then(({ data }) => data);
    }

    function getRoomToken(id) {
      return client
        .post(`/room/${id}/token`, {
          publisher: true,
        })
        .then(({ data }) => data);
    }

    return {
      getRoom,
      getRoomToken,
    };
  }, [config]);

  return service;
}
