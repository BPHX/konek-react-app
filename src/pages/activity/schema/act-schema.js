import { string, object } from "yup";

const ActSchema = object().shape({
  question: string().required("Required"),
  answerA: string().required("Required"),
  answerB: string().required("Required"),
  answerC: string().required("Required"),
  answerD: string().required("Required"),
});

export const initialAct = {
  question: "",
  answerA: "",
  answerB: "",
  answerC: "",
  answerD: "",
};
export default ActSchema;
