import { initialValues, Panels } from "../formConstants";
const pdfStyles = {};

const FormPDF = ({ data }) => {
  const panelKeys = Object.keys(data);
  const panelValues = Object.values(data);
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
   * @param {*} key
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
  const printOutValues = (key) => {
    return (
      <div>
        <h2>
          <strong>{key}</strong>
        </h2>
      </div>
    );
  };
  const renderPanelValues = (key, data) => {
    console.log(data);
    var inputs = [];
    for (let [key, value] of Object.entries(data)) {
      if ((typeof value === "string" || value instanceof String) && value != "")
        inputs.push(key, value);
    }
    console.log(inputs + "INPUUUTTSS");
    return inputs.map((key, value) => printOutValues(key, value));
  };
  //
  return (
    <div>
      {panels.map((panel) => renderPanelTitles(panel.key, panel.title))}
      {panelValues.map((key, value) =>
        renderPanelValues(key, panelValues[value])
      )}
    </div>
  );
};

export default FormPDF;

// // Create Document Component
// const MyDocument = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>
//           {Object.keys(values).map((panel) => {
//             // return <Text>{Panels[panel]}</Text>;
//           })}
//         </Text>
//       </View>
//       <View style={styles.section}>
//         <Text>
//           {Object.keys(values.panel).map((item) => {
//             //  return <Text>{item}</Text>;
//             //  return <Text>{values.panel[item]}</Text>;
//             // Map keys values.map(panel => {
//             // render heading renderHeading(panelText) Panel[panel].title
//             // Map keys(panel).map(item => {
//             // render field and value
//           })}
//         </Text>
//       </View>
//     </Page>
//   </Document>
