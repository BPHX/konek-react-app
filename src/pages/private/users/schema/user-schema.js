import { string, object, date } from "yup";

const UserSchema = object().shape({
  lastName: string().required("Required"),
  firstName: string().required("Required"),
  middleName: string().required("Required"),
  email: string().required("Required"),
  birthday: date(),
  suffix: string().required("Required"),
});

export const initialUser = {
  lastName: "",
  firstName: "",
  middleName: "",
  email: "",
  birthday: new Date(),
  suffix: "",
};
export default UserSchema;
