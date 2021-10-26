import "react-datepicker/dist/react-datepicker.css";

import { formPlaceholder, formTypes, subPanelKeys } from "../formConstants";

import DatePickerField from "../DatePicker/DatePicker";
import { Field } from "formik";
import { useSelector } from "react-redux";

const panelStyles = {
  panel: "bg-white w-7/12 shadow-md rounded px-8 pt-6 pb-8 mb-4 overflow-y-scroll h-96",
  fieldDiv: "col-span-6 sm:col-span-3",
  label: "block text-gray-700 font-bold text-sm mt-2 mb-2",
  panelH2: "block text-gray-700 font-bold mb-2 text-2xl mt-4",
  panelH3: "block text-gray-700 font-bold mb-2 text-xl mt-4",
  inputField:
    "text-sm shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
  options: "text-xs",
};

/**
 * Form Panels component.
 *
 * Gets all relevant fields and renders accordingly.
 *
 * Values connected to Formik state.
 *
 * @param panel - Panel that this form panel will create and render.
 * @returns
 */
const FormPanel = ({ panel }) => {
  // Form Data State
  const loincForm = useSelector((state) => state.loincForm);
  // Panel parameters
  const panelFieldKey = panel.key;
  const panelLinkId = panel.id;
  const panelTitle = panel.title;
  const panelId = panel.panelId;
  const panelObj = loincForm.formPanels.filter((panel) => {
    if (panel.code) {
      return panel.code[0].code === panelLinkId;
    } else {
      return panel.linkId === panelLinkId;
    }
  });
  const panelItems = panelObj[0]?.item || [];

  // console.log(panelItems);

  /**
   * Renders a single form field based on type.
   *
   * @param item - form field to render.
   * @param panelKey - formik name/key for this field.
   * @returns form field components.
   */
  const renderFormField = (item, panelKey) => {
    if (item.code) {
      switch (item.type) {
        case formTypes.fhir.string:
          return renderTextInput(item, panelKey);
        case formTypes.fhir.number:
          if (formTypes.dateTypeIds.includes(item.code[0].code)) {
            return renderDateInput(item, panelKey);
          }
          return renderTextInput(item, panelKey);
        case formTypes.fhir.select:
          return renderSelect(item, panelKey);
        case formTypes.fhir.group:
          return renderSubGroup(item, panelKey);
        default:
          return (
            <label className={panelStyles.label}>
              {`${item.type} ${item.text} [${item.code[0].code}] (Placeholder)`}
            </label>
          );
      }
    }
  };

  /**
   * Renders text field input for strings and numbers.
   *
   * @param item - form field to render.
   * @param panelKey - formik name/key for this field.
   * @returns form field components.
   */
  const renderTextInput = (item, panelKey) => {
    const placeholderText =
      item.type === formTypes.fhir.number
        ? formPlaceholder.number
        : formPlaceholder.text;
    let valueCode = "";
    if (item.extension && item.extension[0]?.valueCoding) {
      valueCode =
        `(${item.extension?.[0]?.valueCoding?.code.replace(/[{}]/g, "")})` ||
        "";
    }

    return (
      <div key={item.code[0].code} className={panelStyles.fieldDiv}>
        <label className={panelStyles.label}>
          {`${item.text} [${item.code[0].code}] ${valueCode}`}
        </label>
        <Field
          as="input"
          className={panelStyles.inputField}
          name={`${panelKey}.${item.code[0].code}`}
          id={`${item.code[0].code}`}
          placeholder={placeholderText}
        />
      </div>
    );
  };

  /**
   * Renders a select box with options from form panel fhir data.
   *
   * @param item - form field to render.
   * @param panelKey - formik name/key for this field.
   * @returns Select box component populated with value coded options from fhir.
   */
  const renderSelect = (item, panelKey) => {
    const placeholderText = formPlaceholder.select;

    if (item.answerOption) {
      return (
        <div key={item.code[0].code} className={panelStyles.fieldDiv}>
          <label className={panelStyles.label}>
            {`${item.text} [${item.code[0].code}]`}
          </label>
          <Field
            as="select"
            className={panelStyles.inputField}
            name={`${panelKey}.${item.code[0].code}`}
            id={`${item.code[0].code}`}
          >
            <option value={""}>{placeholderText}</option>
            {item.answerOption.map((option) => (
              <option
                className={panelStyles.options}
                key={option.valueCoding.code}
                value={`${option.valueCoding.code}`}
              >{`${option.valueCoding.code} - ${option.valueCoding.display}`}</option>
            ))}
          </Field>
        </div>
      );
    }
    // No answer options due to custom options required.
    return renderTextInput(item);
  };

  /**
   * Renders react-datepicker component.
   *
   * @param item - date field to render.
   * @param panelKey - formik name/key for this field.
   * @returns react-datepicker custom component.
   */
  const renderDateInput = (item, panelKey) => {
    return (
      <div key={item.code[0].code} className={panelStyles.fieldDiv}>
        <label className={panelStyles.label}>
          {`${item.text} [${item.code[0].code}]`}
        </label>
        <DatePickerField
          name={`${panelKey}.${item.code[0].code}`}
          id={`${item.code[0].code}`}
          isClearable
          dateFormat="dd/MM/yyyy"
          showYearDropdown
        />
      </div>
    );
  };

  /**
   * Parses and renders sub panels that are within main panels.
   *
   * Sub panel will render inside the main panel with its own heading.
   *
   * @param subPanel - sub panel object from fhir
   * @param panelKey - parent formik name/key for this sub panel
   * @returns Sub Panel rendering for main panel to render
   */
  const renderSubGroup = (subPanel, panelKey) => {
    const subPanelItems = subPanel.item;
    const subPanelCode = subPanel.code[0].code;
    const subPanelKey = `${panelKey}.${subPanelKeys[subPanelCode]}`;
    return (
      <>
        <label className={panelStyles.panelH3}>
          {`${subPanel.text} [${subPanel.code[0].code}]`}
        </label>
        {subPanelItems.map((item) => renderFormField(item, subPanelKey))}
      </>
    );
  };

  return (
    <div id={panelId} className={panelStyles.panel}>
      <h2 className={panelStyles.panelH2}>{panelTitle}</h2>
      {panelItems.map((item) => renderFormField(item, panelFieldKey))}
    </div>
  );
};

export default FormPanel;
