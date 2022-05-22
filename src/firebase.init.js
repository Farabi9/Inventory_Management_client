// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQPKoFTIb4tXjqDRx8Yg9TDAn_DMmaP7Y",
  authDomain: "phone-parts-manufacturer.firebaseapp.com",
  projectId: "phone-parts-manufacturer",
  storageBucket: "phone-parts-manufacturer.appspot.com",
  messagingSenderId: "960888732198",
  appId: "1:960888732198:web:8ebefa5f15a7b884a104e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;