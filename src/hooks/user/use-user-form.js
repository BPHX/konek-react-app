import React from "react";
import PropTypes from "prop-types";
import UserModal from "../../pages/private/users/modal/user-modal";
import useUserService from "./use-user-service";

export const UserFormContext = React.createContext([]);

export function UserFormProvider({ children }) {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const [type, setType] = React.useState("add");
  const [callback, setCallback] = React.useState(null);
  const service = useUserService();

  const value = React.useMemo(() => {
    function add(c) {
      setUser(null);
      setCallback({ run: c });
      setType("add");
      setOpen(true);
    }
    function update(u, c) {
      setUser({ ...u, roles: u.roles.map((x) => x.id) });
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

  const handleSubmit = React.useCallback(
    (v) => {
      if (type === "add") {
        return service.create(v);
      }
      return service.update(v);
    },
    [type]
  );

  return (
    <UserFormContext.Provider value={value}>
      {children}
      <UserModal
        open={open}
        user={user}
        onClose={() => setOpen(false)}
        acceptText={type === "add" ? "Register" : "Save"}
        onSubmit={handleSubmit}
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

export function withUserForm(Element) {
  return function ElementWithToken() {
    return (
      <UserFormProvider>
        <Element />
      </UserFormProvider>
    );
  };
}
