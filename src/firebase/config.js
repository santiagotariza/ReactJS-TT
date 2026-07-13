import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Importamos el módulo de autenticación
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Inicializamos Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos la Base de Datos
const db = getFirestore(app);

// Inicializamos la Autenticación
const auth = getAuth(app);

// Exportamos AMBAS herramientas para que el resto de tu app las pueda usar
export { db, auth };