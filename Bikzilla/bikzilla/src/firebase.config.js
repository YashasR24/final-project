// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXLiocImBci625O4ySak7M0eBVsoJ70Gg",
  authDomain: "bikzilla-40b67.firebaseapp.com",
  projectId: "bikzilla-40b67",
  storageBucket: "bikzilla-40b67.appspot.com",
  messagingSenderId: "580275003614",
  appId: "1:580275003614:web:ed0192c66e7bdf906ae24f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();