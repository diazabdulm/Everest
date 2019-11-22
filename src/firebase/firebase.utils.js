import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA4IxOY6L0AurRFQ_WkdEAIuLpmamCkTxY",
  authDomain: "everest-1db20.firebaseapp.com",
  databaseURL: "https://everest-1db20.firebaseio.com",
  projectId: "everest-1db20",
  storageBucket: "everest-1db20.appspot.com",
  messagingSenderId: "33476943878",
  appId: "1:33476943878:web:0da7dea4f5243afb7b2387"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
