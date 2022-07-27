import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore}  from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "dashboard-cda.firebaseapp.com",
  projectId: "dashboard-cda",
  storageBucket: "dashboard-cda.appspot.com",
  messagingSenderId: "342993087466",
  appId: "1:342993087466:web:defc392952d96a955ea093"
};

export const app = initializeApp(firebaseConfig);

/* la variable auth sirve para autenticar usuarios con firebase: */
export const auth = getAuth(app);
/* la variable db nos permite obtener los datos de nuestra base de datos para cargarlos donde
creamos conveniente */
export const db = getFirestore(app);
