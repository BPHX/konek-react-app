import { string, object } from "yup";

const RoleSchema = object().shape({
  role: string().required("Required"),
  description: string().required("Required"),
});

export const initialRole = {
  role: "",
  description: "",
};
export default RoleSchema;
