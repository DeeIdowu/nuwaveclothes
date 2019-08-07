import React from "react";
import { selectCollections } from "../../../redux/shop/ShopSelector";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PreviewCollection from "../../preview-collection/PreviewCollection";

const Shop = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(Shop);
