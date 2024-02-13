// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAswT3fOvPEboHvT8GzdxpUuuIDOcDlpMQ",
  authDomain: "mern-blog-a4084.firebaseapp.com",
  projectId: "mern-blog-a4084",
  storageBucket: "mern-blog-a4084.appspot.com",
  messagingSenderId: "378038140970",
  appId: "1:378038140970:web:9eef2825eb4c42a6798353"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);