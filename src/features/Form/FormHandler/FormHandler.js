import Button from "@components/Button/Button";
import {
  Document,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as Yup from "yup";
import { initialValues, Panels } from "../formConstants";
import FormNav from "../FormNav/FormNav";
import FormPanel from "../FormPanel/FormPanel";
const FormHandler = () => {
  // Control navigation of form, updates select and panel.
  const [activePanel, setActivePanel] = useState("panel-76453-0");
  const [activeSelect, setActiveSelect] = useState("select-76453-0");

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
    onPrint(values);
  };
  function onPrint(values) {
    const styles = StyleSheet.create({
      page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
      },
      section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
      },
    });

    // Create Document Component
    const MyDocument = () => (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>
              {Object.keys(values).map((panel) => {
                // return <Text>{Panels[panel]}</Text>;
              })}
            </Text>
          </View>
          <View style={styles.section}>
            <Text>
              {Object.keys(values.panel).map((item) => {
                //  return <Text>{item}</Text>;
                //  return <Text>{values.panel[item]}</Text>;
              })}
            </Text>
          </View>
        </Page>
      </Document>
    );
    const App = () => (
      <PDFViewer>
        <MyDocument />
      </PDFViewer>
    );

    ReactDOM.render(<App />, document.getElementById("root"));
  }
  const onSelect = (e) => {
    const activePanelId = `panel-${e.target.id}`;
    const activeSelectId = `select-${e.target.id}`;
    setActivePanel(activePanelId);
    setActiveSelect(activeSelectId);
  };
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
  });

  // Create Document Component
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );

  const isPanelActive = (id) => id === activePanel;

  const validationSchema = Yup.object().shape({});
  const renderError = (message) => <p className="help is-danger">{message}</p>;

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          await onSubmit(values);
          resetForm();
        }}
      >
        {(formik) => (
          <Form>
            <div className="flex-1 flex-col items-center space-x-2">
              {/* START Row flex section for nav and form panels */}
              <div className="flex items-start flex-row space-x-4 justify-center flex-grow">
                <FormNav handleSelect={onSelect} activeSelect={activeSelect} />
                {/* Render panels if selected in form nav. */}
                {isPanelActive("panel-76453-0") ? (
                  <FormPanel panel={Panels.InitialPanel} />
                ) : null}
                {isPanelActive("panel-77574-2") ? (
                  <FormPanel panel={Panels.GlobalPhysicalFuncPanel} />
                ) : null}
                {isPanelActive("panel-77575-9") ? (
                  <FormPanel panel={Panels.ConditionPopulationPanel} />
                ) : null}
                {isPanelActive("panel-77576-7") ? (
                  <FormPanel panel={Panels.SelfCareMobilityPanel} />
                ) : null}
                {isPanelActive("panel-92562-8") ? (
                  <FormPanel panel={Panels.PatientGoalsPanel} />
                ) : null}
                {isPanelActive("panel-92566-9") ? (
                  <FormPanel panel={Panels.PlannedInterventionPanel} />
                ) : null}
                {isPanelActive("panel-89176-2") ? (
                  <FormPanel panel={Panels.InterventionServicesPanel} />
                ) : null}
                {isPanelActive("panel-89175-4") ? (
                  <FormPanel panel={Panels.BillingPanel} />
                ) : null}
                {/* END Form Panel and Form Nav */}
              </div>
              {/* Button Panel */}
              <div className="bg-gray-200 w-full py-2">
                {/* TODO: do better with button panel, alignment etc. */}
                <div className="flex-row content-between">
                  <Button buttonType="secondary">Print</Button>
                  <Button
                    buttonType="primary"
                    handleClick={formik.handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </div>
              {/* END MAIN FLEX */}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default FormHandler;
