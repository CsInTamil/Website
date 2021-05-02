import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDMNcc9ptNnfRnlGQnMvIlbKL13KYDMzJE",
  authDomain: "csintamil-1cdc5.firebaseapp.com",
  projectId: "csintamil-1cdc5",
  storageBucket: "csintamil-1cdc5.appspot.com",
  messagingSenderId: "183558462803",
  appId: "1:183558462803:web:ce72f0f449b8fd21a4d5a6",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
