import "./Signup.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export const Signup = () => {
  const SignupSchema = Yup.object().shape({
    mobileNo: Yup.string()

      .matches(/(\d){10}\b/, "Enter a valid mobile number")
      .max(10, ({ max }) => `mobile number must be${max} of characters`)
      .required("Phone number is required"),
    mPin: Yup.string()

      .matches(/(\d){4}\b/, "mPin must have a number")
      .max(4, ({ max }) => `mPin must be${max} of characters`)
      .required("mPin is required"),
    confirmMPin: Yup.string()

      .oneOf([Yup.ref("mpin")], "mPin do not match")
      .required("Confirm mPin is required"),
  });

  return (
    <div className="signin-container">
      <div className="container">
        <div className="container1">
          <div className="logodiv">
            <img
              src={require("../images/logo.png")}
              alt="Logo"
              className="logo"
            />
            <img
              src={require("../images/logo1.png")}
              alt="Logo"
              className="logo1"
            />
          </div>
          <p className="text1">
            Protect & Manage every password in your business
          </p>
        </div>
        <div className="tabBar0">
          <NavLink to="/signIn" className="tabBar1">
            <p className="tabBartext1">SIGN IN</p>
          </NavLink>
          <NavLink to="/signUp" className="tabBar2">
            <p className="tabBartext2"> SIGN UP </p>
          </NavLink>
        </div>
        <div className="container2">
          <p className="text2">SIGN UP</p>
          <div className="inputcontainer">
            <Formik
              initialValues={{
                mobileNo: "",
                mPin: "",
                confirmMPin: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field
                    name="mobileNo"
                    type="text"
                    placeholder="   Enter Mobile Number"
                    className="inputField1"
                  />
                  {errors.mobileNo && touched.mobileNo ? (
                    <div>{errors.mobileNo}</div>
                  ) : null}
                  <Field
                    name="mPin"
                    type="password"
                    placeholder="   Enter 4 Digit MPin"
                    className="inputField2"
                  />
                  {errors.mPin && touched.mPin ? (
                    <div>{errors.mPin}</div>
                  ) : null}

                  <Field
                    name="confirmMPin"
                    type="password"
                    placeholder="   Re-Enter 4 Digit MPin"
                    className="inputField2"
                  />
                  {errors.confirmMPin && touched.confirmMPin ? (
                    <div>{errors.confirmMPin}</div>
                  ) : null}
                  <div style={{ borderWidth: 5, marginTop: 20 }}>
                    <button className="button">
                      <p className="buttontext">SIGN UP</p>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
