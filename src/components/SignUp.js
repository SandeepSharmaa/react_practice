import { Field, Form, Formik, ErrorMessage } from "formik";
import React, { Fragment } from "react";
import * as yup from "yup";

const SignUp = () => {
  const defaultValue = {
    name: "",
    email: "",
    password: "",
    gender: "",
    terms:false ,
    transport:""
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup
      .string()
      .required("Please enter email")
      .email("Please enter valid email"),
    password: yup.string().required("Please enter password"),
    gender: yup.string().required("Please select gender"),
    terms:yup.boolean().oneOf([true,'Please acccept terms and condition']),
    transport:yup.string().required("Please select transport mode")
  });

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="col-md-12 text-center mt-5">
          <h1>Welcome to Aham Health</h1>

          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="col-md-12 mt-4">
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="name" />
                </p>
              </div>

              <div className="col-md-12 mt-4">
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="email" />
                </p>
              </div>

              <div className="col-md-12 mt-4">
                <Field
                  type="text"
                  name="password"
                  placeholder="Enter your pasword"
                  className="form-control"
                />
                <p className="text-danger">
                  <ErrorMessage name="password" />
                </p>
              </div>

              <div className="col-md-12 mt-4">
                <Field
                  component="select"
                  name="gender"
                  placeholder="Select your gender"
                  className="form-control"
                >
                  <option value="" disabled>
                    Please select gender
                  </option>
                  <option value="name">Male</option>
                  <option value="female">Female</option>
                </Field>
                <p className="text-danger">
                  <ErrorMessage name="gender" />
                </p>
              </div>

              <div className="col-md-12 mt-4">
                <label className="form-inline">
                  <Field type="checkbox" name="terms">

                  </Field>Accept Terms and Condition
                </label>
                <p className="text-danger">
                  <ErrorMessage name="terms"/>
                </p>
              </div>

              <div className="col-md-12 mt-4">
                <label>
                  <Field type="radio" name="transport" value="bike"></Field>
                  Bike
                </label>
                { "  "}

                <label>
                  <Field type="radio" name="transport" value="car"></Field>
                  Car
                </label>

                <p className="text-danger">
                  <ErrorMessage name="transport"/>
                </p>

              </div>

          

              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;
