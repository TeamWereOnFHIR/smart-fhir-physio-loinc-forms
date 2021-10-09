import "react-datepicker/dist/react-datepicker.css";

import { formPlaceholder, formTypes } from "../formConstants";

import DatePickerField from "../DatePicker/DatePicker";
import { Field } from "formik";
import { useSelector } from "react-redux";

const panelStyles = {
  panel: "bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8 mb-4",
  fieldDiv: "col-span-6 sm:col-span-3",
  label: "block text-gray-700 text-sm font-bold mb-2",
  panelH2: "block text-gray-700 font-bold mb-2 text-xl",
  inputField:
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
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
  const panelItems = loincForm.formPanels.filter((panel) => {
    if (panel.code) {
      return panel.code[0].code === panelLinkId;
    } else {
      return panel.linkId === panelLinkId;
    }
  })[0].item;

  // console.log(panelItems);

  /**
   * Renders a single form field based on type.
   *
   * @param item - form field to render.
   * @returns form field components.
   */
  const renderFormField = (item) => {
    if (item.code) {
      switch (item.type) {
        case formTypes.fhir.string:
          return renderTextInput(item);
        case formTypes.fhir.number:
          if (formTypes.dateTypeIds.includes(item.code[0].code)) {
            return renderDateInput(item);
          }
          return renderTextInput(item);
        case formTypes.fhir.select:
          return renderSelect(item);
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
   * @returns form field components.
   */
  const renderTextInput = (item) => {
    const placeholderText =
      item.type === formTypes.fhir.string
        ? formPlaceholder.text
        : formPlaceholder.number;
    return (
      <div key={item.code[0].code} className={panelStyles.fieldDiv}>
        <label className={panelStyles.label}>
          {`${item.text} [${item.code[0].code}]`}
        </label>
        <Field
          as="input"
          className={panelStyles.inputField}
          name={`${panelFieldKey}.${item.code[0].code}`}
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
   * @returns Select box component populated with value coded options from fhir.
   */
  const renderSelect = (item) => {
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
            name={`${panelFieldKey}.${item.code[0].code}`}
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
   * @returns react-datepicker custom component.
   */
  const renderDateInput = (item) => {
    return (
      <div key={item.code[0].code} className={panelStyles.fieldDiv}>
        <label className={panelStyles.label}>
          {`${item.text} [${item.code[0].code}]`}
        </label>
        <DatePickerField
          name={`${panelFieldKey}.${item.code[0].code}`}
          id={`${item.code[0].code}`}
          isClearable
          dateFormat="dd/MM/yyyy"
          showYearDropdown
        />
      </div>
    );
  };

  return (
    <div id={panelId} className={panelStyles.panel}>
      <h2 className={panelStyles.panelH2}>{panelTitle}</h2>
      {panelItems.map((item) => renderFormField(item))}
    </div>
  );
};

export default FormPanel;
