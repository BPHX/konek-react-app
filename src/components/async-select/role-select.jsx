/* eslint-disable no-unused-vars */
import React from "react";
import useRoleService from "../../hooks/use-role-service";

function RoleSelect() {
  const service = useRoleService();
  const [roles, setRoles] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    // service.getRoles().;
  }, [service]);

  return null;
}

export default RoleSelect;
