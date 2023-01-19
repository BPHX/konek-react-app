import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import InputRegistration from "../pages/private/users/modal/user-modal";
import useConfig from "./use-config";
import useToken from "./use-token";

export const UserFormContext = React.createContext([]);

export function UserFormProvider({ children }) {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [type, setType] = React.useState("add");
  const [callback, setCallback] = React.useState(null);
  const config = useConfig();
  const [token] = useToken();

  const value = React.useMemo(() => {
    function add(c) {
      setUser(null);
      setCallback({ run: c });
      setType("add");
      setOpen(true);
    }
    function update(u, c) {
      setUser(u);
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
    function createUser(u) {
      return client.post(`/user/`, u).then(({ data }) => data);
    }

    function updateUser(u) {
      return client.put(`/user/${u?.id}`, u).then(({ data }) => data);
    }
    return { createUser, updateUser };
  }, [token, config]);

  return (
    <UserFormContext.Provider value={value}>
      {children}
      <InputRegistration
        open={open}
        user={user}
        onClose={() => setOpen(false)}
        acceptText={type === "add" ? "Register" : "Save"}
        onSubmit={type === "add" ? service.createUser : service.updateUser}
        onSuccess={callback?.run}
      />
    </UserFormContext.Provider>
  );
}

export default function useUserForm() {
  return React.useContext(UserFormContext);
}

UserFormProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
