import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../../redux/shop/ShopSelector";
import "./collection.scss";
//to display the items but categorized
import CollectionItem from "../../collection-item/CollectionItem";

const Collection = () => (
  <div className="category">
    <h1>Collection</h1>
  </div>
);
//grabbing property of component via ownProps
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
