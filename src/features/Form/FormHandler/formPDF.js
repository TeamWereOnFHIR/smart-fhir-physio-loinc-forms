import { initialValues, Panels } from "../formConstants";
const pdfStyles = {};

const FormPDF = ({ data }) => {
  const panelKeys = Object.keys(data);
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

  const renderPanelData = (title, data) => {
    return (
      <>
        <h1 key={title}>{title}</h1>
      </>
    );
  };
  return (
    <div>
      {panels.map((panel) => renderPanelData(panel.title, data[panel.key]))}
      {InitialValues.map((InitialValues) =>
        renderPanelData(InitialValues.title, data[InitialValues.key])
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
