import { string, object, date } from "yup";

const UserSchema = object().shape({
  username: string().required("Required"),
  lastname: string().required("Required"),
  firstname: string().required("Required"),
  middlename: string().required("Required"),
  email: string().required("Required"),
  gender: string().required("Required"),
  dob: date(),
});

export const initialUser = {
  username: "",
  lastname: "",
  firstname: "",
  middlename: "",
  gender: "",
  email: "",
  dob: new Date(),
};
export default UserSchema;
