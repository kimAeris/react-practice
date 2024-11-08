// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD3qecB6KDG66uRX0UiOoym34WNC6VEaw",
  authDomain: "react-disney-plus-app-62ea3.firebaseapp.com",
  projectId: "react-disney-plus-app-62ea3",
  storageBucket: "react-disney-plus-app-62ea3.firebasestorage.app",
  messagingSenderId: "232504292947",
  appId: "1:232504292947:web:6e4ca20e6346211a3878a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
