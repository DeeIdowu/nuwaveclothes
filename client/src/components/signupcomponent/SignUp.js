import React, { useState } from "react";
import { connect } from "react-redux";
//drawing from form-input component:
import FormInput from "../form-input/FormInput";
//drawing from custom button component as well:
import CustomButton from "../custom-buttom/CustomButton";
//import action via redux saga
import { signUpStart } from "../../redux/user/userActions";
import "./signup.scss";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  //creating functions for the functionality of the form/inputs:
  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password dont match");
      return;
    }
    signUpStart({ displayName, email, password });
  };

  //handleChange method:
  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  //destructuring input types:
  const { displayName, email, password, confirmPassword } = userCredentials;
  return (
    <div className="sign-up">
      <h2 className="title"> I do not have an account</h2>
      <span>Sign up with your e-mail and password!</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="E-mail"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
