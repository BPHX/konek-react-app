import { string, object } from "yup";

const ActSchema = object().shape({
  widget: string().required("Required"),
});

export const initialAct = {
  widget: "",
};
export default ActSchema;
