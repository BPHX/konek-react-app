import { useMemo } from "react";
import { useConfig } from "../context/config";
import { useUser } from "../context/user";

export default function useAuth() {
  const [config] = useConfig();
  const [, setUser] = useUser();
  const authService = useMemo(
    () => ({
      login: () =>
        // return axios.post();
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              id: 1,
            });
          }, 1000);
        }).then((u) => {
          setUser(u);
        }),
      verify: () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              id: 1,
            });
          }, 1000);
        })
          .then((u) => {
            setUser(u);
          })
          .catch(() => {
            setUser({});
            sessionStorage.clear();
          }),
    }),
    [config]
  );

  return authService;
}
