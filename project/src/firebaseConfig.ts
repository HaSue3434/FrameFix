import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBTzJMlQBTVeK1aW7R2DwFVqLoTn2e9yao",
  authDomain: "framefix.firebaseapp.com",
  projectId: "framefix",
  storageBucket: "framefix.appspot.com",
  messagingSenderId: "298162225357",
  appId: "1:298162225357:web:f554f5124919d723e0a984",
  measurementId: "G-7CBWCZNX5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };