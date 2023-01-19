import { string, object } from "yup";

const RoleSchema = object().shape({
  name: string().required("Required"),
  description: string().required("Required"),
});

export const initialRole = {
  name: "",
  description: "",
};
export default RoleSchema;
