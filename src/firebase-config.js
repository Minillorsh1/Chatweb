// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDusDjKKoQoeBupblVduoJ5MI8uEUS830g",
  authDomain: "chatweb-df5c9.firebaseapp.com",
  projectId: "chatweb-df5c9",
  storageBucket: "chatweb-df5c9.appspot.com",
  messagingSenderId: "1092637731055",
  appId: "1:1092637731055:web:d6a36987e0f35baf65131a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();