import { Form, Formik } from "formik";
import { Panels, initialValues } from "../formConstants";
import { useEffect, useState } from "react";

import Button from "@components/Button/Button";
import FormNav from "../FormNav/FormNav";
import FormPanel from "../FormPanel/FormPanel";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import validationSchema from "./validationSchema";

/**
 * FormHandler is the main form container and controls form logic and decides what to render.
 */
const FormHandler = () => {
  // Router history navigator
  const history = useHistory();
  // Form navigation state
  const [activePanel, setActivePanel] = useState("panel-76453-0");
  const [activeSelect, setActiveSelect] = useState("select-76453-0");
  // Redux - Patient State
  const patient = useSelector((state) => state.patient);
  // Redux - User State
  const user = useSelector((state) => state.user);
  // Redux - Form Data
  const loincForm = useSelector((state) => state.loincForm);
  // Form values state
  const [formikValues, setFormikValues] = useState(initialValues);
  /**
   * Effect called on first form render.
   */
  useEffect(() => {
    // Prepopulate patient details
    prefillPatient();
    prefillProvider();
  }, []);

  const prefillPatient = () => {
    const initialPanel = loincForm.formPanels[0];
    const patientData = patient.patientData;
    const newFormikValues = formikValues;
    // Initial Panel Prefill
    // Patient Identifier
    const medicalRecordNum = patientData.identifier.filter((ident) =>
      ident.system.includes("hospital")
    )[0];
    newFormikValues.InitialPanel["76435-7"] = medicalRecordNum?.value || "";

    // Patient Identifier assigning authority
    if (medicalRecordNum) {
      const authorityOptions = initialPanel.item.filter((item) =>
        item.linkId.includes("76698-0")
      )[0]?.answerOption;
      if (authorityOptions) {
        const authorityCode = authorityOptions[0].valueCoding.code;
        const authorityText = authorityOptions[0].valueCoding.display;
        newFormikValues.InitialPanel[
          "76698-0"
        ] = `${authorityCode}_${authorityText}`;
      }
    }

    setFormikValues(newFormikValues);
  };

  const prefillProvider = () => {
    const initialPanel = loincForm.formPanels[0];
    const providerData = user.userData;
    const newFormikValues = formikValues;
    // Initial Panel Prefill
    // Provider Names
    const providerName = providerData.name[0];
    newFormikValues.InitialPanel["76417-5"] = providerName.given[0];
    newFormikValues.InitialPanel["76419-1"] = providerName.family;

    // Provider NPI - id
    const providerId = providerData.identifier.filter((ident) =>
      ident.system.includes("npi")
    )[0];
    newFormikValues.InitialPanel["45952-9"] = providerId?.value || "";

    // Provider Role
    const roleOptions = initialPanel.item.filter((item) =>
      item.linkId.includes("86637-6")
    )[0]?.answerOption;
    if (roleOptions) {
      const providerCode = roleOptions[5].valueCoding.code;
      const providerText = roleOptions[5].valueCoding.display;
      newFormikValues.InitialPanel[
        "86637-6"
      ] = `${providerCode}_${providerText}`;
    }

    setFormikValues(newFormikValues);
  };

  /**
   * Calls when submit button is clicked.
   *
   * @param values - formik values object containing current form values.
   */
  const onSubmitForm = (values) => {
    //  alert(JSON.stringify(values, null, 2));
    console.log(values);
  };

  /**
   * Calls when print button is clicked.
   *
   * @param values - formik values object containing current form values.
   */
  const onPrint = (values) => {
    console.log(values);
    history.push("/form/print", { formValues: values });
  };

  /**
   * Updates active panel on select in navigation.
   *
   * @param e - select event.
   */
  const onSelect = (e) => {
    const activePanelId = `panel-${e.target.id}`;
    const activeSelectId = `select-${e.target.id}`;
    setActivePanel(activePanelId);
    setActiveSelect(activeSelectId);
  };

  /**
   * Helper function checks if a panel is currently active.
   *
   * @param id - string id of panel
   * @returns True if panel is set to active, false otherwise.
   */
  const isPanelActive = (id) => id === activePanel;

  return (
    <>
      <Formik
        initialValues={formikValues}
        validationSchema={validationSchema}
        enableReinitialize={true}
      >
        {(formik) => (
<<<<<<< HEAD
          <Form>
            {/* <div className="items-center space-x-2 max-h-screen"> */}
=======
          <Form className="bg-white">
            <div className="flex-1 flex-col items-center space-x-2 max-h-48">
>>>>>>> f675f8897afb64cab8c86e592a2819156a3f041f
              {/* START Row flex section for nav and form panels */}
              <div className="flex flex-row">
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
<<<<<<< HEAD
                {/* TODO: do better with button panel, alignment etc. */}
                <div className="flex flex row items-start flex-row w-full max-w-6xl -my-18 justify-end space-x-1 flex-grow content-between">
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
=======
              {/* TODO: do better with button panel, alignment etc. */}
              <div className="fixed flex items-start flex-row w-full max-w-6xl space-x-4 justify-end flex-grow content-between">
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
>>>>>>> f675f8897afb64cab8c86e592a2819156a3f041f
              {/* </div> */}
              {/* END MAIN FLEX */}
            {/* </div> */}
          </Form>
        )}
      </Formik>
    </>
  );
};
export default FormHandler;
