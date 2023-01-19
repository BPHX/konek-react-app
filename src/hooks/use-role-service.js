import axios from "axios";
import React from "react";
import useConfig from "./use-config";
import useToken from "./use-token";

export default function useRoleService() {
  const config = useConfig();
  const [token] = useToken();

  const service = React.useMemo(() => {
    const client = axios.create({
      baseURL: config.apiUrl,
      headers: {
        authorization: token,
      },
    });

    function getRolePermissions(id) {
      return client.get(`/role/${id}/permissions`).then(({ data }) => data);
    }

    function getPermissions() {
      return client.get(`/permission`).then(({ data }) => data);
    }

    function getRoles(search) {
      return client
        .get(`/role`, { params: { search } })
        .then(({ data }) => data);
    }

    return {
      getRoles,
      getRolePermissions,
      getPermissions,
    };
  }, [config]);

  return service;
}
