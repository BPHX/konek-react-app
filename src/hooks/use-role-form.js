import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import RoleInfo from "../pages/private/role/role-info";
import useConfig from "./use-config";
import useToken from "./use-token";

export const UserRoleContext = React.createContext([]);

export function RoleFormProvider({ children }) {
  const [open, setOpen] = React.useState(false);
  const [role, setRole] = React.useState(null);
  const [type, setType] = React.useState("add");
  const config = useConfig();
  const [token] = useToken();
  const [callback, setCallback] = React.useState(null);
  const value = React.useMemo(() => {
    function add(c) {
      setRole(null);
      setCallback({ run: c });
      setType("add");
      setOpen(true);
    }
    function update(u, c) {
      setRole(u);
      setCallback({ run: c });
      setType("update");
      setOpen(true);
    }
    return [
      {
        add,
        update,
      },
    ];
  }, []);

  const service = React.useMemo(() => {
    const client = axios.create({
      baseURL: config.apiUrl,
      headers: {
        authorization: token,
      },
    });
    function createUser(r) {
      return client.post(`/role/`, r).then(({ data }) => data);
    }

    function updateUser(r) {
      return client.put(`/role/${r?.id}`, r).then(({ data }) => data);
    }

    return { createUser, updateUser };
  }, [token, config]);

  return (
    <UserRoleContext.Provider value={value}>
      {children}
      <RoleInfo
        open={open}
        role={role}
        onClose={() => setOpen(false)}
        acceptText={type === "add" ? "Register" : "Save"}
        onSubmit={type === "add" ? service.createUser : service.updateUser}
        onSuccess={callback?.run}
      />
    </UserRoleContext.Provider>
  );
}

export default function useRoleForm() {
  return React.useContext(UserRoleContext);
}

RoleFormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
