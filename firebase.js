
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCJ0znnc1IwNYMuAEbFZIlVu0RxXc4zLto',
  authDomain: 'volcano-next-js.firebaseapp.com',
  projectId: 'volcano-next-js',
  storageBucket: 'volcano-next-js.appspot.com',
  messagingSenderId: '761976507703',
  appId: '1:761976507703:web:53faf9031f80749b6ddeb2'
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
