import { useLocation } from "react-router-dom";

const FormPDF = (props) => {
  const location = useLocation();
  return <div>Form PDF: {JSON.stringify(location.state.formValues)}</div>;
};

export default FormPDF;
