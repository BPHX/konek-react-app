/* eslint-disable no-unused-vars */
import axios from "axios";
import md5 from "md5";
import React from "react";
import useConfig from "./use-config";
import { SESSION_TOKEN_KEY } from "./use-token";

export default function useSignIn() {
  const config = useConfig();

  const fnSignIn = React.useMemo(() => {
    const client = axios.create({
      baseURL: config.apiUrl,
      headers: {
        "x-api-key": config.apiKey,
      },
    });

    function signIn(username, password) {
      return client
        .post(`/signin`, {
          username,
          secret: md5(password),
        })
        .then(({ data }) => data)
        .then((user) => {
          const { type, token, ...rest } = user;
          localStorage.setItem(SESSION_TOKEN_KEY, `${type} ${token}`);
          return rest;
        });
    }

    return signIn;
  }, [config]);

  return fnSignIn;
}
