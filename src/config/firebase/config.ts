import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "depos",
  authDomain: "depos",
  projectId: "dede",
  storageBucket: "dede",
  messagingSenderId: "dedede",
  appId: "dedede"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
