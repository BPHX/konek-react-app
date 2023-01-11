import axios from "axios";
import React from "react";
import useConfig from "./use-config";
import useToken from "./use-token";

export default function useUserService() {
  const config = useConfig();
  const [token] = useToken();

  const userService = React.useMemo(() => {
    const client = axios.create({
      baseURL: config.apiUrl,
      headers: {
        authorization: token,
      },
    });

    function getCurrentUser() {
      return client.get(`/whoami`).then(({ data }) => data);
    }

    function isAuthorized(permissions) {
      return client.post(`/verify`, { permissions }).then(({ data }) => data);
    }

    function getCurrentUserPermissions() {
      return client.get(`/whoami/permissions`).then(({ data }) => data);
    }

    return {
      getCurrentUser,
      isAuthorized,
      getCurrentUserPermissions,
    };
  }, [config]);

  return userService;
}
