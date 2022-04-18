// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { getAuth, GoogleAuthProvider} from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBIUgjn19zO1BkMhulyPaOwrA7Ed8ogihE",
  authDomain: "note-app-bd716.firebaseapp.com",
  projectId: "note-app-bd716",
  storageBucket: "note-app-bd716.appspot.com",
  messagingSenderId: "533043909156",
  appId: "1:533043909156:web:718a1250a00de62f843eb1"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()


