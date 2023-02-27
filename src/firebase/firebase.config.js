// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDqhoF7bxaRsy8NPhgN5z7DO4WYn9mHD3E",
  authDomain: "delivery-app-c3eba.firebaseapp.com",
  databaseURL: "https://delivery-app-c3eba-default-rtdb.firebaseio.com",
  projectId: "delivery-app-c3eba",
  storageBucket: "delivery-app-c3eba.appspot.com",
  messagingSenderId: "453002001853",
  appId: "1:453002001853:web:3513828bfa0c53abb766d4",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

