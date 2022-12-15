// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE28dKsY0OQVxomrIFC_gvdldqTGCdkKA",
  authDomain: "twitter-clone-3813e.firebaseapp.com",
  projectId: "twitter-clone-3813e",
  storageBucket: "twitter-clone-3813e.appspot.com",
  messagingSenderId: "619701670951",
  appId: "1:619701670951:web:fdf06877b57f2d8d71ea02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)