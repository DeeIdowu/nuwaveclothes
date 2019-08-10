import ShopActionTypes from "./ShopTypes";

//update collections:
export const updateCollections = collectionsMap => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
