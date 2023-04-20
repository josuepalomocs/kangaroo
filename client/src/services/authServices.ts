import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { firebaseAuth } from "../lib/firebase";

export function logInUsingGooglePopup(): void {
  const googleAuthProvider = new GoogleAuthProvider();
  signInWithPopup(firebaseAuth, googleAuthProvider)
    .then((result) => {
      console.log("User logged in successfully", result.user);
    })
    .catch((error) => {
      console.log(error.code);
    });
}

export function logInUsingEmailAndPassword(
  email: string,
  password: string
): void {
  signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      console.log("User logged in successfully", userCredential.user);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function registerUser(
  username: string,
  email: string,
  password: string,
  cpassword: string
): void {
  if (password != cpassword) {
    throw new Error("Passwords do not match");
  }
  createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      console.log("User registered successfully", userCredential.user);
    })
    .catch((error) => {
      console.log(error);
    });
}
