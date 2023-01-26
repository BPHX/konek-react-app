import React from "react";
import PropTypes from "prop-types";
import RoleInfo from "../../pages/private/role/role-info";
import useRoleService from "./use-role-service";

export const UserRoleContext = React.createContext([]);

export function RoleFormProvider({ children }) {
  const [open, setOpen] = React.useState(false);
  const [role, setRole] = React.useState(null);
  const [type, setType] = React.useState("add");
  const [callback, setCallback] = React.useState(null);
  const service = useRoleService();
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
