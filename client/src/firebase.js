// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ritzyuv.firebaseapp.com",
  projectId: "ritzyuv",
  storageBucket: "ritzyuv.appspot.com",
  messagingSenderId: "771022468117",
  appId: "1:771022468117:web:4349f88435a1e0e8b58a1c",
  measurementId: "G-1Q1QVYJQDS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);