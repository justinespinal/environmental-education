// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClgnFIagZeeUs3DVBzvEjTnj-tzZv5cRI",
  authDomain: "environmental-596ac.firebaseapp.com",
  databaseURL: "https://environmental-596ac-default-rtdb.firebaseio.com",
  projectId: "environmental-596ac",
  storageBucket: "environmental-596ac.appspot.com",
  messagingSenderId: "534196200307",
  appId: "1:534196200307:web:2a8abb72d139adae1c1b06",
  measurementId: "G-NL3YMH7YCB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
