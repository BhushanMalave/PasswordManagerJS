import "./Signin.css";
import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

export const Signin = () => {
  const navigate = useNavigate();
  const SignupSchema = Yup.object().shape({
    mobileNo: Yup.string()

      .matches(/(\d){10}\b/, "Enter a valid mobile number")
      .max(10, ({ max }) => `mobile number must be${max} of characters`)
      .required("Mobile number is required"),
    mPin: Yup.string()

      .matches(/(\d){4}\b/, "mPin must have a number")
      .max(4, `mPin must be of 4 characters`)
      .required("mPin is required"),
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
          <p className="text2">SIGN IN TO YOUR ACCOUNT</p>
          <div className="inputcontainer">
            <Formik
              initialValues={{
                mobileNo: "",
                mPin: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                console.log(values);
                navigate("/Home");
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <Field
                    name="mobileNo"
                    type="text"
                    placeholder="   Mobile Number"
                    className="inputField1"
                  />
                  {errors.mobileNo && touched.mobileNo ? (
                    <div>{errors.mobileNo}</div>
                  ) : null}
                  <Field
                    name="mPin"
                    type="password"
                    placeholder="   Password"
                    className="inputField2"
                  />
                  {errors.mPin && touched.mPin ? (
                    <div>{errors.mPin}</div>
                  ) : null}
                  <p className="text3">Forgot your password?</p>
                  <div style={{ borderWidth: 5 }}>
                    <button className="button" type="submit">
                      <p className="buttontext">SIGN IN</p>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <p>
            <Link to="/signUp" className="text4">
              Don’t have a Account? SIGNUP
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
