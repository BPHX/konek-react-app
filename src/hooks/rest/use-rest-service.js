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
      transformResponse: [
        function onData(data) {
          return JSON.parse(data);
        },
      ],
    });
    return new Service({
      get: (...props) => client.get(...props).then(({ data }) => data),
      post: (...props) => client.post(...props).then(({ data }) => data),
      put: (...props) => client.put(...props).then(({ data }) => data),
      delete: (...props) => client.delete(...props).then(({ data }) => data),
    });
  }, [config]);

  return service;
}
