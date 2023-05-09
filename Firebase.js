import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configuración de Firebase
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAy8coAvpHzrxYwq2K3ANkwBkfUBaDSDGQ",
  authDomain: "realtimedatabase-18f89.firebaseapp.com",
  databaseURL: "https://realtimedatabase-18f89-default-rtdb.firebaseio.com",
  projectId: "realtimedatabase-18f89",
  storageBucket: "realtimedatabase-18f89.appspot.com",
  messagingSenderId: "483489557135",
  appId: "1:483489557135:web:ac0504db754568edd21efa",
  measurementId: "G-BZ2W694EDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;
