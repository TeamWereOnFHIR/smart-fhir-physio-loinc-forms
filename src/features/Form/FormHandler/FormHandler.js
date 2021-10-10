import * as Yup from "yup";

import { Form, Formik } from "formik";
import { Panels, initialValues } from "../formConstants";
import React, { useState } from "react";

import Button from "@components/Button/Button";
import FormNav from "../FormNav/FormNav";
import FormPanel from "../FormPanel/FormPanel";

const FormHandler = () => {
  // Control navigation of form, updates select and panel.
  const [activePanel, setActivePanel] = useState("panel-76453-0");
  const [activeSelect, setActiveSelect] = useState("select-76453-0");

  const onSubmit = (values) => {
    //  alert(JSON.stringify(values, null, 2));
  };

  const onSelect = (e) => {
    const activePanelId = `panel-${e.target.id}`;
    const activeSelectId = `select-${e.target.id}`;
    setActivePanel(activePanelId);
    setActiveSelect(activeSelectId);
  };

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
          <Form className="bg-green-200">
            <div className="flex-1 flex-col items-center space-x-2">
              {/* START Row flex section for nav and form panels */}
              <div className="flex items-start flex-row space-x-4 justify-center flex-grow bg-green-100">
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
              <div className="w-full py-2">
                {/* TODO: do better with button panel, alignment etc. */}
                <div className="flex items-start flex-row space-x-4 justify-end flex-grow content-between bg-green-200 mr-9">
                  <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><Button buttonType="secondary">Print</Button></div>
                  <Button
                    buttonType="primary"
                    handleClick={formik.handleSubmit}
                  >
                    Submit
                  </Button>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Submit
                  </button>
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
