import React from "react";
import SignIn from "../../sign-in/SignIn";
import SignUp from "../../signupcomponent/SignUp";
import "./signinsignout.scss";

const SignInSignOut = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignOut;
