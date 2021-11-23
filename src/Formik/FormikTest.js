import React from "react";

import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

import MyTextInput from "./MyTextInput";
import MySelect from "./MySelect";
import MyCheckbox from "./MyCheckBox";

import "./formStyle.css";
//

function FormikTest() {
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false, // added for our checkbox
          jobType: "", // added for our select
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string()
            .oneOf(
              ["designer", "development", "product", "other"],
              "Invalid Job Type"
            )
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className="form-control">
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div className="form-control">
            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Doe"
            />
          </div>

          <div className="form-control">
            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="jane@formik.com"
            />
          </div>
          <div className="form-control">
            <MySelect label="Job Type" name="jobType">
              <option value="">Select a job type</option>
              <option value="designer">Designer</option>
              <option value="development">Developer</option>
              <option value="product">Product Manager</option>
              <option value="other">Other</option>
            </MySelect>
          </div>

          <div className="form-control">
            <MyCheckbox name="acceptedTerms">
              I accept the terms and conditions
            </MyCheckbox>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}

export default FormikTest;
