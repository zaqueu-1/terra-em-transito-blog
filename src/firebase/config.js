import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBs8-sszIAwYJH3FiUKze52C4_tJSKoJg",
  authDomain: "mini-blog-9bb2e.firebaseapp.com",
  projectId: "mini-blog-9bb2e",
  storageBucket: "mini-blog-9bb2e.appspot.com",
  messagingSenderId: "1090168391140",
  appId: "1:1090168391140:web:4249591c3e3c29df9c33f1",
  measurementId: "G-K1SPKTZP1N"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
