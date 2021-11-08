import { Document, Page } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { initialValues, Panels } from "../formConstants";

const pdfStyles = {};
/**
 * Renders the form as a PDF
 * @param {*} data - the data from the form object
 *
 */
const FormPDF = (data) => {
  const location = useLocation();
  const loincForm = useSelector((state) => location.state.loincForm);

  const panelKeys = Object.keys(location.state.formValues);
  const panelValues = Object.values(location.state.formValues);
  const loincForm2 = useSelector((state) => state.loincForm.formPanels);

  console.log(loincForm2);
  console.log("Data" + panelKeys);
  const panels = [
    Panels.InitialPanel,
    Panels.GlobalPhysicalFuncPanel,
    Panels.ConditionPopulationPanel,
    Panels.SelfCareMobilityPanel,
    Panels.PatientGoalsPanel,
    Panels.PlannedInterventionPanel,
    Panels.InterventionServicesPanel,
    Panels.BillingPanel,
  ];
  const InitialValues = [
    initialValues.InitialPanel,
    initialValues.GlobalPhysicalFuncPanel,
    initialValues.SelfCareMobilityPanel,
    initialValues.PatientGoalsPanel,
    initialValues.PlannedInterventionPanel,
    initialValues.InterventionServicesPanel,
    initialValues.BillingInfoPanel,
  ];
  console.log(panelValues);
  /**
   *  Render the Titles of Each Panel for the form PDF
   * @param {*} key: the key of the object
   * @param {*} data
   * @returns A HTML component of the heading of each panel
   */
  const renderPanelTitles = (key, data) => {
    console.log(data);
    return (
      <>
        <h1 key={key}>{data}</h1>
      </>
    );
  };
  const printOutValues = (key, value, title) => {
    return (
      <div>
        <h3>
          <strong>{key[0]}</strong>
        </h3>
        <h3> {key[1]} </h3>
      </div>
    );
  };
  let dataPosition = 0;
  const renderPanelValues = (key, data, value) => {
    var inputs = [];

    for (let [key, value] of Object.entries(data)) {
      if (
        (typeof value === "string" || value instanceof String) &&
        value != ""
      ) {
        console.log(loincForm2);
        console.log(loincForm2[Object.keys(loincForm2)[dataPosition]].item);
        var item = loincForm2[Object.keys(loincForm2)[dataPosition]].item;
        for (var i = 0; i < item.length; i++) {
          if (item[Object.keys(item)[i]].linkId.replace("/", "") == key) {
            key = item[Object.keys(item)[i]].text;
          }
        }

        inputs.push([key, value]);
      }
    }
    const title = value[dataPosition];
    const inputs2 = inputs.map((key, value) => printOutValues(key, value));
    dataPosition++;

    return (
      <div>
        <h1>{title}</h1>
        <h3> {inputs2}</h3>
      </div>
    );
  };
  setTimeout(function () {
    window.print();
  }, 1000);

  return (
    <Document>
      <Page size="A4">
        <div>
          {panelValues.map((key, value) =>
            renderPanelValues(key, panelValues[value], panelKeys)
          )}
        </div>
      </Page>
    </Document>
  );
};

export default FormPDF;
