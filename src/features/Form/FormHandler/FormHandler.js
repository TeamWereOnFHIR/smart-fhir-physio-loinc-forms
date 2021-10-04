import "react-datepicker/dist/react-datepicker-cssmodules.css";

import * as Yup from "yup";

import { ErrorMessage, Field, Form, Formik } from "formik";

import DatePicker from "react-datepicker";
import FormNav from "../FormNav/FormNav";
import React from "react";

const FormHandler = () => {
  const initialValues = {
    date: new Date(),
    product: "",
  };

  const onSubmit = (values) => {
    //  alert(JSON.stringify(values, null, 2));
  };

  /*const formOptions1 = option1.map((product, key) => (
    <option value={product} key={key}>
      {product}
    </option>
  ));
  const formOptions2 = option2.map((product, key) => (
    <option value={product} key={key}>
      {product}
    </option>
  ));*/
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
        <Form>
          <div className="flex items-start flex-row space-x-4 justify-center flex-grow">
            <FormNav />
            <div className="bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <h1 className="block text-gray-700 font-bold mb-2 text-xl">
                Patient initial visit details
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
                    name="Patient identifier [76435-7]"
                    id="Patient identifier [76435-7]"
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
                  Problem Activities and participation ICF code [76446-4]
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
          </div>
          <div classNameName="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              classNameName="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 button is-primary"
            >
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
};
export default FormHandler;
