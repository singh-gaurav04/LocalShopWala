// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZDrdAlY3lfiCJARpirePUQ09g0mm9v4o",
  authDomain: "localshopwala-2024.firebaseapp.com",
  projectId: "localshopwala-2024",
  storageBucket: "localshopwala-2024.firebasestorage.app",
  messagingSenderId: "239625402017",
  appId: "1:239625402017:web:546216d00b2d627ea1e2e0",
  measurementId: "G-73LCMGZ45Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get auth instance
const auth = getAuth(app);

export { auth };
