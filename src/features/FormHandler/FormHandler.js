import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import option1 from "./formVariables";
import validationSchema from "./validationSchema";

const ProductReviewForm = () => {
  const initialValues = {
    date: new Date(),
    product: "",
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const productOptions1 = option1.map((product, key) => (
    <option value={product} key={key}>
      {product}
    </option>
  ));

  const renderError = (message) => (
    <p classNameName="help is-danger">{message}</p>
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values);
        resetForm();
      }}
    >
      <Form>
        <div className="flex items-center flex-col justify-center flex-grow">
          <div className="bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h1 className="block text-gray-700 font-bold mb-2 text-xl">
              Form Pannel Title
            </h1>
            <div className="col-span-6 sm:col-span-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Person assigning athority
              </label>
              <div classNameName="control">
                <label htmlFor="email"></label>
                <Field
                  as="select"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Ingresa tu nombre"
                  required
                >
                  Label 1<option value={""}>Select a option</option>
                  {productOptions1}
                </Field>
                <ErrorMessage name="product" render={renderError} />
              </div>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Person assigning athority
              </label>
              <div classNameName="control">
                <label htmlFor="email"></label>
                <Field
                  as="select"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Ingresa tu nombre"
                  required
                >
                  Label 1<option value={""}>Select a option</option>
                  {productOptions1}
                </Field>
                <ErrorMessage name="product" render={renderError} />
              </div>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Person assigning athority
              </label>
              <div classNameName="control">
                <label htmlFor="email"></label>
                <Field
                  as="select"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Ingresa tu nombre"
                  required
                >
                  Label 1<option value={""}>Select a option</option>
                  {productOptions1}
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
  );
};
export default ProductReviewForm;
