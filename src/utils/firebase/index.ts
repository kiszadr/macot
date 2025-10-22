// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "macot-91358.firebaseapp.com",
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: "macot-91358.firebasestorage.app",
  messagingSenderId: process.env.VUE_APP_Messaging_Sender_Id,
  appId: "1:332971064767:web:bf9a3ea9840fd856da750a",
  measurementId: "G-D79GH72VKG",
  databaseURL: `https://${process.env.VUE_APP_DATABASE_NAME}.${process.env.VUE_APP_DATABASE_REGION}.firebasedatabase.app`,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
