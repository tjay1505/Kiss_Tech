// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaKXELbEW3jCcTGvQ3R58yfxGXRa2-rm0",
  authDomain: "kisstutorial-abf6d.firebaseapp.com",
  projectId: "kisstutorial-abf6d",
  storageBucket: "kisstutorial-abf6d.firebasestorage.app",
  messagingSenderId: "928621420037",
  appId: "1:928621420037:web:163cb04aa3f1cbd2d0866c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)