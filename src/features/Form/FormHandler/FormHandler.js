import Button from "@components/Button/Button";
import { Form, Formik } from "formik";
import { useState } from "react";
import { initialValues, Panels } from "../formConstants";
import FormNav from "../FormNav/FormNav";
import FormPanel from "../FormPanel/FormPanel";
import validationSchema from "./validationSchema";

const FormHandler = () => {
  // Control navigation of form, updates select and panel.
  const [activePanel, setActivePanel] = useState("panel-76453-0");
  const [activeSelect, setActiveSelect] = useState("select-76453-0");

  const onSubmitForm = (values) => {
    //  alert(JSON.stringify(values, null, 2));
    console.log(values);
  };

  const onPrint = (values) => {
    console.log(values);
  };

  const onSelect = (e) => {
    const activePanelId = `panel-${e.target.id}`;
    const activeSelectId = `select-${e.target.id}`;
    setActivePanel(activePanelId);
    setActiveSelect(activeSelectId);
  };

  const isPanelActive = (id) => id === activePanel;
  const renderError = (message) => <p className="help is-danger">{message}</p>;

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {(formik) => (
          <Form className="bg-white">
            <div className="flex-1 flex-col items-center space-x-2">
              {/* START Row flex section for nav and form panels */}
              <div className="flex items-start flex-row space-x-4 justify-center flex-grow bg-green-50">
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
              {/* <div className="fixed w-full max-w-7xl"> */}
                {/* TODO: do better with button panel, alignment etc. */}
                <div className="fixed flex items-start flex-row w-full max-w-6xl space-x-4 justify-end flex-grow content-between bg-white">
                  <Button
                    buttonType="secondary"
                    handleClick={() => onPrint(formik.values)}
                  >
                    Print
                  </Button>
                  <Button
                    buttonType="primary"
                    handleClick={() => onSubmitForm(formik.values)}
                  >
                    Submit
                  </Button>
                </div>
              {/* </div> */}
              {/* END MAIN FLEX */}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default FormHandler;
