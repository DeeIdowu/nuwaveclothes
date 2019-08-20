//responsible for authentication via FireBase:
import React, { useState } from "react";
//import form input
import FormInput from "../form-input/FormInput";
//importing custom button
import CustomButton from "../custom-buttom/CustomButton";
import "./signin.scss";
//from redux sagas
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/userActions"; //dispatch via connect/map
import { connect } from "react-redux";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const { email, password } = userCredentials;
  //submit on form - just as a preventative for misfire of event for now:
  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  };
  //for the event of input for email and password field:
  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  //destructuring for email and password:

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          label="email"
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          label="password"
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit" value="Submit Form">
            Sign In
          </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            value="Submit Form"
            isGoogleSignIn
          >
            {""}
            Sign In With Google{""}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
