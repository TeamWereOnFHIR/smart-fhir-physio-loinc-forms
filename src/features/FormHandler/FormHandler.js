import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const ProductReviewForm = () => {
  const products = ["Product 1", "Product 2", "Product 3", "Product 4"];

  const validationSchema = Yup.object({
    product: Yup.string().required("Please select a product").oneOf(products),
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    title: Yup.string().required(),
    review: Yup.string().required(),
    rating: Yup.number().min(1).max(10).required(),
    date: Yup.date().default(() => new Date()),
    wouldRecommend: Yup.boolean().default(false),
  });

  const initialValues = {
    name: "",
    email: "",
    title: "",
    review: "",
    rating: "",
    date: new Date(),
    wouldRecommend: false,
    product: "",
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const productOptions = products.map((product, key) => (
    <option value={product} key={key}>
      {product}
    </option>
  ));

  const renderError = (message) => <p className="help is-danger">{message}</p>;

  return (
    <Formik
      class="md:grid md:grid-cols-3 md:gap-6"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values);
        resetForm();
      }}
    >
      <Form>
        <div
          className="container"
          style={{
            width: "60%",
          }}
        >
          <div className="field">
            <div className="control">
              <Field name="product" as="select" className="select is-fullwidth">
                Label 1<option value={""}>Select a product</option>
                {productOptions}
              </Field>
              <ErrorMessage name="product" render={renderError} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <Field name="product" as="select" className="select is-fullwidth">
                Label 1<option value={""}>Select a product</option>
                {productOptions}
              </Field>
              <ErrorMessage name="product" render={renderError} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <Field name="product" as="select" className="select is-fullwidth">
                Label 1<option value={""}>Select a product</option>
                {productOptions}
              </Field>
              <ErrorMessage name="product" render={renderError} />
            </div>
          </div>

          <button type="submit" className="button is-primary">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};
export default ProductReviewForm;
