import axios from "axios";
import React from "react";
import useToken from "../auth/use-token";
import useConfig from "../use-config";

export class RestService {
  constructor(client) {
    this.client = client;
  }
}

export default function useRestService(Service = RestService) {
  const config = useConfig();
  const [token] = useToken();

  const service = React.useMemo(() => {
    const client = axios.create({
      baseURL: config.apiUrl,
      headers: {
        authorization: token,
      },
    });
    return new Service(client);
  }, [config]);

  return service;
}
