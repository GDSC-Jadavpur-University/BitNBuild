// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdiQqdWEzEmC_TO8P74bDUHVb0svSZx0I",
  authDomain: "gdsc-ju.firebaseapp.com",
  projectId: "gdsc-ju",
  storageBucket: "gdsc-ju.appspot.com",
  messagingSenderId: "667962365008",
  appId: "1:667962365008:web:779edd71f364cc8431ed55",
  measurementId: "G-G6B79EB3XF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);