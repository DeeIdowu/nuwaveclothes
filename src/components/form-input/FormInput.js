import React from "react";

import "./forminput.scss";
//functional component as no state, the state is being passed as props deriving from SignIn Component:
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {//for returning the value of label input
    //shrink property is for whenever an user has typed anything in
    label ? (
      <label
        className={`${otherProps.value.length ? "shrink" : ""}form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
