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
import WithSpinner from "../../../components/with-spinner/WithSpinner";

//for the spinner:
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

class Shop extends React.Component {
  //fetching collection from database via mount lifecycle
  unsubscribeFromSnapshot = null;
  //setting value of true or false of the loading of spinner
  state = {
    loading: true
  };
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    //to obtain the data via get method
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      //state for spinner
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
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
