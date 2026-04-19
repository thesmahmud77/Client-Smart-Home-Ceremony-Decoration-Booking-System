// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJulyXBOhEhXtILXVA1p5CDNGF-NKy2so",
  authDomain: "smart-home-ed6cd.firebaseapp.com",
  projectId: "smart-home-ed6cd",
  storageBucket: "smart-home-ed6cd.firebasestorage.app",
  messagingSenderId: "576625634946",
  appId: "1:576625634946:web:40676dc66e0816d9bb4e9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
