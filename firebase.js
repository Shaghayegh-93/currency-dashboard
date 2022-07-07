import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "currency-dashboard-app-63e87.firebaseapp.com",
  projectId: "currency-dashboard-app-63e87",
  storageBucket: "currency-dashboard-app-63e87.appspot.com",
  messagingSenderId: "148620085183",
  appId: "1:148620085183:web:afbcd4c5ceac1791e9430a",
};

const app = initializeApp(firebaseConfig);
