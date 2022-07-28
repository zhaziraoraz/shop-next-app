import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyBw8oYv7rQGPREqNz_CojIsN80EZinmX_M",
  authDomain: "example-723f7.firebaseapp.com",
  databaseURL: "https://example-723f7-default-rtdb.firebaseio.com",
  projectId: "example-723f7",
  storageBucket: "example-723f7.appspot.com",
  messagingSenderId: "1006764177598",
  appId: "1:1006764177598:web:ddce7deae82fd8cc9b46ef",
  measurementId: "G-6KZ0TK8DMN"
});

export const auth = getAuth(app);

