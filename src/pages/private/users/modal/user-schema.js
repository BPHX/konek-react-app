import { string, object, date, array } from "yup";

const UserSchema = object().shape({
  username: string().required("Required"),
  email: string().required("Required"),
  lastname: string().required("Required"),
  firstname: string().required("Required"),
  middlename: string().required("Required"),
  gender: string().required("Required"),
  dob: date(),
  roles: array().required("Required"),
});

export const initialUser = {
  username: "",
  lastname: "",
  firstname: "",
  middlename: "",
  gender: "",
  email: "",
  dob: new Date(),
  roles: [],
};
export default UserSchema;
