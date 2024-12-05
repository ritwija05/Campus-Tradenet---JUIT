// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD15nnMH2fnzIVBoVJ9Fb9f-GO_cIGabfE",
  authDomain: "collegeolx-872a6.firebaseapp.com",
  databaseURL: "https://collegeolx-872a6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "collegeolx-872a6",
  storageBucket: "collegeolx-872a6.appspot.com",
  messagingSenderId: "597821346679",
  appId: "1:597821346679:web:1bfa6ab7deeb7199ef4772",
  measurementId: "G-VP30HG8DPX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
