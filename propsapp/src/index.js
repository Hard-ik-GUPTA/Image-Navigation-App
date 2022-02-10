import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0lcfbya-MJtJsl5CTjov-iw83tUOMX4k",
  authDomain: "fir-react-63483.firebaseapp.com",
  projectId: "fir-react-63483",
  storageBucket: "fir-react-63483.appspot.com",
  messagingSenderId: "804211417530",
  appId: "1:804211417530:web:fd8b63bb5606df4d99fd83",
  measurementId: "G-R572KYFLSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
