const ShopActionTypes = {
  //new types deriving from redux-thunk for asynchronous actions
  FETCH_COLLECTIONS_START: "FETCH_COLLECTIONS_START", //before api call
  FETCH_COLLECTIONS_SUCCESS: "FETCH_COLLECTIONS_SUCCESS", //upon successful call
  FETCH_COLLECTIONS_FAILURE: "FETCH_COLLECTIONS_FAILURE" //upon failure of retrieving call
};

export default ShopActionTypes;
