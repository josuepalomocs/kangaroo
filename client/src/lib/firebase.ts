import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdKFCoSee5vNN6mIyiXtTrU9cbfYzuC54",
  authDomain: "kangaroo-65564.firebaseapp.com",
  projectId: "kangaroo-65564",
  storageBucket: "kangaroo-65564.appspot.com",
  messagingSenderId: "651235243066",
  appId: "1:651235243066:web:8a16f5223ff11a6e79b103",
  measurementId: "G-FKDWMJPYWR",
};

const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
