//testing the database and use of the database:
import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

//to grab user from specific ID:
firestore.collection("users").doc("vzApCChtDD5dO9qvirdE");
//to grab user from specific ID/cart item/cart-item id
firestore
  .collection("users")
  .doc("vzApCChtDD5dO9qvirdE")
  .collection("cart-items")
  .doc("IwMLKQquNAKn9wsINJHZ");

//Alternate way to query for a specific document:
firestore.doc("/users/vzApCChtDD5dO9qvirdE/IwMLKQquNAKn9wsINJHZ");
//Alternate way to just obtain the collection if cart-item
firestore.collection(
  "/users/vzApCChtDD5dO9qvirdE/IwMLKQquNAKn9wsINJHZ/cart-items"
);

//Above are the two main methods.
