import React from "react";
import axios from "axios";
import { withFormik } from "formik";
import * as Yup from "yup";

import TheForm from "./Form";

const Login = ({ errors, touched, values, history }) => {
  return (
    <div>
      <div>Login</div>
      <TheForm errors={errors} touched={touched} values={values} />
    </div>
  );
};

export default withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().required()
  }),
  handleSubmit(values, { resetForm, props }) {
    axios
      .post("http://localhost:8000/api/login", values)
      .then(res => {
        console.log(`login success`, res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/users");
      })
      .catch(err => {
        console.log(`login failed`, err);
        resetForm();
      });
  }
})(Login);
