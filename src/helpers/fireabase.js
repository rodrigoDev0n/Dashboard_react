import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdnR3_eNjWSaIHgmYLaV1EHSddtA1ocwc",
  authDomain: "dashboard-cda.firebaseapp.com",
  projectId: "dashboard-cda",
  storageBucket: "dashboard-cda.appspot.com",
  messagingSenderId: "342993087466",
  appId: "1:342993087466:web:defc392952d96a955ea093"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);