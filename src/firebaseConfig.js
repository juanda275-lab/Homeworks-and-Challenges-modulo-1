import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBm4McR2cYPS9BC592g3fVIVxCsduunhyY",
  authDomain: "estados-y-servicios-en-n-acc6d.firebaseapp.com",
  projectId: "estados-y-servicios-en-n-acc6d",
  storageBucket: "estados-y-servicios-en-n-acc6d.appspot.com",
  messagingSenderId: "209181087586",
  appId: "1:209181087586:web:ad1096a4d9f7d05a8cbe3b",
  measurementId: "G-ZDE19SL99Q"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

try {
  console.log("Firebase inicializado correctamente");
} catch (error) {
  console.error("Error al inicializar Firebase:", error);
}

export { auth };


