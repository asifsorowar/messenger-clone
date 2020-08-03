import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBxalAEFzn_j_nh18DHROFySNAouty12CE",
  authDomain: "messenger-clone-b55ae.firebaseapp.com",
  databaseURL: "https://messenger-clone-b55ae.firebaseio.com",
  projectId: "messenger-clone-b55ae",
  storageBucket: "messenger-clone-b55ae.appspot.com",
  messagingSenderId: "835221913642",
  appId: "1:835221913642:web:291ddeeae79e76f4afc353",
  measurementId: "G-9VY7JB5FFQ",
});

const db = firebaseApp.firestore();

export default db;
