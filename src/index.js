import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARxtJ3DjqYD8T8BTmLeP7fdnOWHPNLI44",
  authDomain: "react-ecommerse-jk.firebaseapp.com",
  projectId: "react-ecommerse-jk",
  storageBucket: "react-ecommerse-jk.appspot.com",
  messagingSenderId: "40197434812",
  appId: "1:40197434812:web:7e3898ad1fe865c149cfb9",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
