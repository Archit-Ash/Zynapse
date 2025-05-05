// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDAyuuU98HfbWCpmrxcEH0w3P4eKSRxJMA",
  authDomain: "zynapse-983d2.firebaseapp.com",
  projectId: "zynapse-983d2",
  storageBucket: "zynapse-983d2.firebasestorage.app",
  messagingSenderId: "289882262253",
  appId: "1:289882262253:web:43b436ff944d880d93dae4",
  measurementId: "G-7H86DZHYE2",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
