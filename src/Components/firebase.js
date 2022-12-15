// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Database1
// const firebaseConfig = {
//   apiKey: "AIzaSyCE28dKsY0OQVxomrIFC_gvdldqTGCdkKA",
//   authDomain: "twitter-clone-3813e.firebaseapp.com",
//   projectId: "twitter-clone-3813e",
//   storageBucket: "twitter-clone-3813e.appspot.com",
//   messagingSenderId: "619701670951",
//   appId: "1:619701670951:web:fdf06877b57f2d8d71ea02"
// };

const firebaseConfig = {
    apiKey: "AIzaSyAzdc7Lh4ieBmtMIlAdkXz9SFTeYhBEl8A",
    authDomain: "twitter-clone-data-2.firebaseapp.com",
    projectId: "twitter-clone-data-2",
    storageBucket: "twitter-clone-data-2.appspot.com",
    messagingSenderId: "627408247261",
    appId: "1:627408247261:web:8ac03b48e1379447f73e34"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app)