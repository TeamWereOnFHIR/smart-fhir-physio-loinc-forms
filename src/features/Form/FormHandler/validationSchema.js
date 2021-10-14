import * as Yup from "yup";
/* Varaible for the dropdown inputs of the form */

/* Validation Schema for the form */
const validationSchema = Yup.object().shape({
  "76471-2": Yup.number().required(),
  "45952-9": Yup.number().required(),
  "79529-4": Yup.number().required(),
  "79530-2": Yup.number().required(),
  "79532-8": Yup.number().required(),
  "79533-6": Yup.number().required(),
  "79535-1": Yup.number().required(),
  "79536-9": Yup.number().required(),
  "79421-4": Yup.number().required(),
  "79422-2": Yup.number().required(),
  "77866-2": Yup.number().required(),
  "77874-6": Yup.number().required(),
  "91721-1": Yup.number().required(),
  "77580-9": Yup.number().required(),
  "92391-2": Yup.number().required(),
  "92448-0": Yup.number().required(),
  "91612-2": Yup.number().required(),
  "77578-3": Yup.number().required(),
  "90705-5": Yup.number().required(),
  "90884-8": Yup.number().required(),
  "77579-1": Yup.number().required(),
  "71971-6": Yup.number().required(),
  "71969-0": Yup.number().required(),
  "77865-4": Yup.number().required(),
  "89950-0": Yup.number().required(),
  "89936-9": Yup.number().required(),
});
export default validationSchema;
