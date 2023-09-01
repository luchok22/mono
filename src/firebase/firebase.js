import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeB04Vj8VvUzaAxatxshhPloCuaUz-V6o",
  authDomain: "mono-7be5b.firebaseapp.com",
  projectId: "mono-7be5b",
  storageBucket: "mono-7be5b.appspot.com",
  messagingSenderId: "480384840297",
  appId: "1:480384840297:web:43b48a67b3fafd660968f8",
  measurementId: "G-SQ1P12FY6G"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

