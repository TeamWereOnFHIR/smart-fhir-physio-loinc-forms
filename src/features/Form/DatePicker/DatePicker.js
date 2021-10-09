import { useField, useFormikContext } from "formik";

import DatePicker from "react-datepicker";
import React from "react";
import { formPlaceholder } from "../formConstants";

const dateStyle = {
  field:
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
};

/**
 * Date Picker field to link react-datepicker to Formik forms and context using hooks.
 *
 * Source: https://stackoverflow.com/a/58650742
 */
const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      className={dateStyle.field}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      placeholderText={formPlaceholder.date}
    />
  );
};

export default DatePickerField;
