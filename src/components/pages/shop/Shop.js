import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import CollectionsOverviewContainer from "../../collections-overview/CollectionsOverviewContainer";
import CollectionContainer from "../category/CollectionContainer";
import { connect } from "react-redux";
import { fetchCollectionStart } from "../../../redux/shop/ShopActions";

const Shop = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
});

export default connect(
  null,
  mapDispatchToProps
)(Shop);
