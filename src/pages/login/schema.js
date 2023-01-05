import { string, object } from "yup";

const LoginSchema = object().shape({
  username: string().required("Required"),
  password: string().required("Required"),
});

export const initialLogin = {
  username: "",
  password: "",
};
export default LoginSchema;
