import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK4FWNVWVS0ZwQlttLhryrTZoChfMEPWU",
  authDomain: "cs322-browser-instrument.firebaseapp.com",
  projectId: "cs322-browser-instrument",
  storageBucket: "cs322-browser-instrument.firebasestorage.app",
  messagingSenderId: "158799767909",
  appId: "1:158799767909:web:71590a212217ef4570998c",
  measurementId: "G-64NR9TXFN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);