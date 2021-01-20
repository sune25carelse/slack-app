// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBAX-13BIY_Rju2vFzXV1q0c64OTgSyND0",
    authDomain: "slack-app-1da1a.firebaseapp.com",
    projectId: "slack-app-1da1a",
    storageBucket: "slack-app-1da1a.appspot.com",
    messagingSenderId: "1009541660066",
    appId: "1:1009541660066:web:1b89f8a3aada6f741b86fb",
    measurementId: "G-LC486ZK3HP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;