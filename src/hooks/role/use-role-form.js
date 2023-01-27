import React from "react";
import PropTypes from "prop-types";
import RoleModal from "../../pages/private/role/modal/role-modal";
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

  const handleSubmit = React.useCallback(
    (v) => {
      if (type === "add") {
        return service.add(v);
      }
      return service.update(v);
    },
    [type]
  );

  return (
    <UserRoleContext.Provider value={value}>
      {children}
      <RoleModal
        open={open}
        role={role}
        onClose={() => setOpen(false)}
        acceptText={type === "add" ? "Register" : "Save"}
        onSubmit={handleSubmit}
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

export function withRoleForm(Element) {
  return function ElementWithToken() {
    return (
      <RoleFormProvider>
        <Element />
      </RoleFormProvider>
    );
  };
}
