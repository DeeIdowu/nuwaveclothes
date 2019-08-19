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

//to extract the o-auth from google and placed into firebase database:
export const createdUserProfileDocument = async (userAuth, additonalData) => {
  //save to database when they log in not when signed out, evaluating the null return
  if (!userAuth) return;

  //if user exists, query through database/document to confirm if it exist - queryreference/query snapshot
  //these return in a format of document or collection of from the database.
  //determinant of rerun of data.
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  //to obtain snapshot of the user ref in the document
  const snapShot = await userRef.get();

  //if the snapshot doesnt exist do this:
  if (!snapShot.exists) {
    //utilizing documentRef to confirm data & id:
    //what properties do we want to store
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    //asynchronous request to database to store user if the user doesnt exist, then set the user data below:
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  //return the userRef for future use
  return userRef;
};

firebase.initializeApp(config);

//new collection to store the store items:
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  //to obtain collection key
  const collectionRef = firestore.collection(collectionKey);
  //batch method:
  const batch = firestore.batch();
  //loop the objects via forEach method:
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    //new id being creating
    //batch the new id:
    batch.set(newDocRef, obj);
  });
  //to fire batch call:
  return await batch.commit(); //returns a promise upon succession
};
//for new snapshot function to use within Shop.js:
export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//google auth
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
