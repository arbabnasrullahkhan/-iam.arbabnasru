// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO54U5WtwR3rfDDHFgDbPzwF-V27Ml5m4",
  authDomain: "portfolio-87299.firebaseapp.com",
  projectId: "portfolio-87299",
  storageBucket: "portfolio-87299.appspot.com", // Corrected bucket name
  messagingSenderId: "458111444495",
  appId: "1:458111444495:web:f290b11f480e6ad1fe657a",
  measurementId: "G-6EYBX1VE63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the services you'll use
export const auth = getAuth(app);
export const db = getFirestore(app);