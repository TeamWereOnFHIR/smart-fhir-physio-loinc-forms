import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const ProductReviewForm = () => {
  const option1 = [
    "Hospital",
    "Deparment of Motor Vechiles",
    "Social Security Adminstration",
  ];
  const option2 = [
    "Hospital",
    "Deparment of Motor Vechiles",
    "Social Security Adminstration",
  ];
  const options3 = [
    "Hospital",
    "Deparment of Motor Vechiles",
    "Social Security Adminstration",
  ];

  const validationSchema = Yup.object({
    product: Yup.string().required("Please select a option").oneOf(option1),
    /* name: Yup.string().required(),
    email: Yup.string().email().required(),
    title: Yup.string().required(),
    review: Yup.string().required(),
    rating: Yup.number().min(1).max(10).required(),
    date: Yup.date().default(() => new Date()),
    wouldRecommend: Yup.boolean().default(false),*/
  });

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

  const renderError = (message) => <p className="help is-danger">{message}</p>;

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
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="mt-5 md:mt-0 md:col-span-2">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Person assigning athority
                      </label>
                      <div className="control">
                        <label htmlFor="email"></label>
                        <Field
                          name="product"
                          as="select"
                          className="select is-fullwidth mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          Label 1<option value={""}>Select a option</option>
                          {productOptions1}
                        </Field>
                        <ErrorMessage name="product" render={renderError} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 button is-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};
export default ProductReviewForm;
