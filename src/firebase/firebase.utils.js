import firebase from "firebase/app";
import "firebase/firestore"; //database
import "firebase/auth"; //auth

const config = {
  apiKey: "AIzaSyAizwvlWQxAcUuJ-CodGoya7GzzuK7IDfY",
  authDomain: "commerce-db.firebaseapp.com",
  databaseURL: "https://commerce-db.firebaseio.com",
  projectId: "commerce-db",
  storageBucket: "",
  messagingSenderId: "109010889992",
  appId: "1:109010889992:web:75e1df474250c1c1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
