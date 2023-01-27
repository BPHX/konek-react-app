import { string, object, array } from "yup";

const RoleSchema = object().shape({
  name: string().required("Required"),
  description: string().required("Required"),
  permissions: array().of(string()),
});

export const initialRole = {
  name: "",
  description: "",
};
export default RoleSchema;
