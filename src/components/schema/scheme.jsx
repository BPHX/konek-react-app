import * as yup from "yup";

const passwordSequence = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}$/;
// min 8 characters , 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const LoginSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email.").required("Required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordSequence, "Please include capital letters and digits.")
    .required("Required"),
});

export default LoginSchema;
