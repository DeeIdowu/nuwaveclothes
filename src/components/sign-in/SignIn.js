//responsible for authentication via FireBase:
import React from "react";
//import form input
import FormInput from "../form-input/FormInput";
//importing custom button
import CustomButton from "../custom-buttom/CustomButton";
import "./signin.scss";
//use of firebase:
import { signInWithGoogle } from "../../firebase/firebase.utils";

//stateful due to acquring user input
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }
  //submit on form - just as a preventative for misfire of event for now:
  handleSubmit = event => {
    this.setState({ email: "", password: "" });
  };
  //for the event of input for email and password field:
  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit" value="Submit Form">
            Sign In
          </CustomButton>
          <CustomButton
            onClick={signInWithGoogle}
            value="Submit Form"
            isGoogleSignIn
          >
            {""}
            Sign In With Google{""}
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
