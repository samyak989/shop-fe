// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAclASok_1SPmfDcgkeEwZ7M2RBW3Xpyng",
  authDomain: "meme-t.firebaseapp.com",
  projectId: "meme-t",
  storageBucket: "meme-t.appspot.com",
  messagingSenderId: "104523235635",
  appId: "1:104523235635:web:0bbc9bedaf50cac1a5be46",
  measurementId: "G-F9GYP4NPD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export default app