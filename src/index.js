import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from "firebase/app";
import "firebase/firestore";


// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjl03lbtMuGZ4Xzcf_3C2lwzeZtnYMRZY",
  authDomain: "cart-577c9.firebaseapp.com",
  projectId: "cart-577c9",
  storageBucket: "cart-577c9.appspot.com",
  messagingSenderId: "780516389322",
  appId: "1:780516389322:web:b92ef0f38b82cebed19f33"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

