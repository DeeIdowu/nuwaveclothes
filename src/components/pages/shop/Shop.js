import React from "react";
import { Route } from "react-router-dom";
import Collection from "../category/Collection";
import CollectionsOverview from "../../collections-overview/CollectionsOverview";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../../redux/shop/ShopActions";

class Shop extends React.Component {
  //fetching collection from database via mount lifecycle
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    //to obtain the data via snapShot method
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(Shop);
