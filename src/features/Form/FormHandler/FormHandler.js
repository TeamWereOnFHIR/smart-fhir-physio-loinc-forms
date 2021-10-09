import Button from "@components/Button/Button";
import {
  Document,
  Page,
  PDFViewer,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import ReactDOM from "react-dom";
import { initialValues, Panels } from "../formConstants";
import FormNav from "../FormNav/FormNav";
import FormPanel from "../FormPanel/FormPanel";
import validationSchema from "./validationSchema";
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
                {/* DEMO ONLY we will need to sort out panel components 
              and seeing how formik works with sub components */}
                {isPanelActive("panel-72989") ? (
                  <div className="bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <FormPanel panel={Panels.GlobalPhysicalFuncPanel} />
                  </div>
                ) : null}
                {isPanelActive("panel-72988") ? (
                  <div className="bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <FormPanel panel={Panels.ConditionPopulationPanel} />
                  </div>
                ) : null}
                {isPanelActive("panel-72990") ? (
                  <div className="bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <FormPanel panel={Panels.SelfCareMobilityPanel} />
                  </div>
                ) : null}
                {isPanelActive("panel-111748") ? (
                  <div className="bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <FormPanel panel={Panels.PatientGoalsPanel} />
                  </div>
                ) : null}
                {isPanelActive("panel-111728") ? (
                  <div className="bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <FormPanel panel={Panels.PlannedInterventionPanel} />
                  </div>
                ) : null}
                {isPanelActive("panel-100794") ? (
                  <div className="bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <FormPanel panel={Panels.InterventionServicesPanel} />
                  </div>
                ) : null}
                {isPanelActive("panel-100804") ? (
                  <div className="bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <FormPanel panel={Panels.BillingPanel} />
                  </div>
                ) : null}

                {/* Yeah we really need to component form panels 
                so we can do <FormPanel ...anyPropsWeNeed /> */}
                {isPanelActive("panel-76453-0") ? (
                  <>
                    <div className="bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                      <h1 className="block text-gray-700 font-bold mb-2 text-xl">
                        Patient Billing info details
                      </h1>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Patient identifier [76435-7]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="input"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="InitialPanel.76435-7"
                            id="76435-7"
                            type="text"
                            placeholder="Type a Value"
                            required
                          ></Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Patient identifier assigning authority [76698-0]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="select"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="   Patient identifier assigning authority [76698-0]"
                            id="   Patient identifier assigning authority [76698-0]"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            required
                          >
                            Label 1<option value={""}>Select a option</option>
                          </Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Organization EOC unique ID [76471-2]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="input"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name=" Organization EOC unique ID [76471-2]"
                            id=" Organization EOC unique ID [76471-2]"
                            type="text"
                            placeholder="Type a Value"
                            required
                          ></Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Physical therapy organization federal tax ID [76470-4]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="input"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="       Physical therapy organization federal tax ID [76470-4]"
                            id="       Physical therapy organization federal tax ID [76470-4]"
                            type="text"
                            placeholder="Type a Value"
                            required
                          ></Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Physical therapy facility name [76696-4]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="input"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="  Physical therapy facility name [76696-4]"
                            id="  Physical therapy facility name [76696-4]"
                            type="text"
                            placeholder="Type a Value"
                            required
                          ></Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Date of first visit [76423-3]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <DatePicker />
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Provider First name [76417-5]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="input"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="Provider First name [76417-5]"
                            id="Provider First name [76417-5]"
                            type="text"
                            placeholder="Type a Value"
                            required
                          ></Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Provider Last name [76419-1]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="input"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="  Provider Last name [76419-1]"
                            id="  Provider Last name [76419-1]"
                            type="text"
                            placeholder="Type a Value"
                            required
                          ></Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Provider NPI [45952-9]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="input"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="    Provider NPI [45952-9]"
                            id="    Provider NPI [45952-9]"
                            type="text"
                            placeholder="Type a Value"
                            required
                          ></Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Provider role [86637-6]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="select"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="   Provider role [86637-6]"
                            id="   Provider role [86637-6]"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            required
                          >
                            Label 1<option value={""}>Select a option</option>
                          </Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Diagnosis.primary [18630-4]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="select"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name=" Diagnosis.primary [18630-4]"
                            id=" Diagnosis.primary [18630-4]"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            required
                          >
                            Label 1<option value={""}>Select a option</option>
                          </Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Dx.secondary [81885-6]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="input"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="  Dx.secondary [81885-6]"
                            id="  Dx.secondary [81885-6]"
                            type="text"
                            placeholder="Type a Value"
                            required
                          ></Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Movement system dx [89177-0]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="input"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="  Movement system dx [89177-0]"
                            id="  Movement system dx [89177-0]"
                            type="text"
                            placeholder="Type a Value"
                            required
                          ></Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Primary health cond [76442-3]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="select"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name=" Primary health cond [76442-3]"
                            id=" Primary health cond [76442-3]"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            required
                          >
                            Label 1<option value={""}>Select a option</option>
                          </Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Other health condition [76472-0]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="select"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="   Other health condition [76472-0]"
                            id="   Other health condition [76472-0]"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            required
                          >
                            Label 1<option value={""}>Select a option</option>
                          </Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Problem Body function ICF code [76444-9]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="select"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name=" Problem Body function ICF code [76444-9]"
                            id=" Problem Body function ICF code [76444-9]"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            required
                          >
                            Label 1<option value={""}>Select a option</option>
                          </Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Problem Body structure ICF code [76445-6]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="select"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="  Problem Body structure ICF code [76445-6]"
                            id="  Problem Body structure ICF code [76445-6]"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            required
                          >
                            Label 1<option value={""}>Select a option</option>
                          </Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Problem Activities and participation ICF code
                          [76446-4]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="select"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="  Problem Activities and participation ICF code [76446-4]"
                            id="  Problem Activities and participation ICF code [76446-4]"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            required
                          >
                            Label 1<option value={""}>Select a option</option>
                          </Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Clinical presentation status [89189-5]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="select"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name=" Clinical presentation status [89189-5]"
                            id=" Clinical presentation status [89189-5]"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            required
                          >
                            Label 1<option value={""}>Select a option</option>
                          </Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Medication documentation status [89188-7]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="select"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="         Medication documentation status [89188-7]"
                            id="         Medication documentation status [89188-7]"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            required
                          >
                            Label 1<option value={""}>Select a option</option>
                          </Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Prescriptions [57828-6]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="input"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name=" Prescriptions [57828-6]"
                            id=" Prescriptions [57828-6]"
                            type="text"
                            placeholder="Type a Value"
                            required
                          ></Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Prognosis for rehabilitation [92725-1]
                        </label>
                        <div classNameName="control">
                          <label htmlFor="email"></label>
                          <Field
                            as="select"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name="  Prognosis for rehabilitation [92725-1]"
                            id="  Prognosis for rehabilitation [92725-1]"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            required
                          >
                            Label 1<option value={""}>Select a option</option>
                          </Field>
                          <ErrorMessage name="product" render={renderError} />
                        </div>
                      </div>
                    </div>
                  </>
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
