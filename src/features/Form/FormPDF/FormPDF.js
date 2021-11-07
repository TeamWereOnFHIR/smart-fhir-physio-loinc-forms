import { Document, Page } from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { initialValues, Panels } from "../formConstants";
//const FormPDF = (props) => {
//  return <div>Form PDF: {JSON.stringify(location.state.formValues)}</div>;
//};

const pdfStyles = {};

const FormPDF = (data) => {
  const location = useLocation();
  const loincForm = useSelector((state) => location.state.loincForm);
  // get title and panelID -- Form Metta data
  //const formMetaData = location.state.formValues;
  // const formPanels = location.state.LoincForm; //array of form pannel objects
  //console.log(formMetaData);

  //filter a specific pannel
  // const initalPanel = formPanels.filter((panel) =>
  //  panel.linkId.includes(InitalPanelId)
  //);
  //
  //const intialPanelFeilds = initalPanel.item;
  //initialPanel.filter((feild) => feild.linkID.inludes(idfromvalueobject));
  // get text
  // print panel title
  // print values of form
  // panelKeys.map(key => {
  // i want to access the value
  //formValues[key]
  //}
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
    console.log("READ THIS DATA" + Object.entries(data));
    console.log("READ THIS DATA 2" + Object.entries(key));
    console.log("READ THIS DATA 2!!!!" + value);
    var inputs = [];
    // window.print();
    //filter as type group for the massive panel!
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
        //for (var i = 0; item.length; i++) {
        //console.log(item);
        //Object.keys(item)[i]].linkId;
        //item[Object.keys(item)[i]].text;
        // }
        //ask james!
        //for (var i = 0; loincForm2[dataPosition].item.length; i++) {
        //  if (loincForm2[dataPosition].item[i].code[0].code == key) {
        //    key = loincForm2[dataPosition].item[i].code[0].value;
        //  }
        //}
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

    //return );
  };
  setTimeout(function () {
    window.print();
  }, 1000);
  //{panels.map((panel) => renderPanelTitles(panel.key, panel.title))}
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
