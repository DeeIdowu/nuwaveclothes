import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/DirectorySelector";

import "./directory.scss";

import MenuItem from "../menu-item/MenuItem";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {//importing section items into menu
    sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
