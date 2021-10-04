import * as Yup from "yup";
import option1 from "./formVariables";
/* Varaible for the dropdown inputs of the form */

/* Validation Schema for the form */
const validationSchema = Yup.object({
  product: Yup.string().required("Please select a option").oneOf(option1),
});
export default validationSchema;
