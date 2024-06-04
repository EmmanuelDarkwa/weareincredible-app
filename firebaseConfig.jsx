// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACaLK-p6T7aE09snY5XawqB0No_XkD_Go",
  authDomain: "we-are-incredible.firebaseapp.com",
  projectId: "we-are-incredible",
  storageBucket: "we-are-incredible.appspot.com",
  messagingSenderId: "534630183432",
  appId: "1:534630183432:web:e3caaf80a1b5150816d7bd",
  measurementId: "G-3W4SLJJQEB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
