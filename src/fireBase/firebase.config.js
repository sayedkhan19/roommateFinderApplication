// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqMa7dS6CKmeGbUtaEiWGHKkhRBkB1MYw",
  authDomain: "orange-auth-project.firebaseapp.com",
  projectId: "orange-auth-project",
  storageBucket: "orange-auth-project.firebasestorage.app",
  messagingSenderId: "868775599623",
  appId: "1:868775599623:web:95b7c9a09510558de394a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;