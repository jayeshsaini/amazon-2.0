import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB87AhpY9GwgM_0au1p2mLyrWHfoREFpvM",
  authDomain: "amzn-2-d2e0a.firebaseapp.com",
  projectId: "amzn-2-d2e0a",
  storageBucket: "amzn-2-d2e0a.appspot.com",
  messagingSenderId: "579194933234",
  appId: "1:579194933234:web:4b92d069ba9e16a661a56b"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;