import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA5GZpzlydKdPdUHZX9GpOPQha3V5AVCxM",
  authDomain: "spotify-clone-aba28.firebaseapp.com",
  projectId: "spotify-clone-aba28",
  storageBucket: "spotify-clone-aba28.appspot.com",
  messagingSenderId: "1012432128818",
  appId: "1:1012432128818:web:824ce94eb1ced7d7e8e52b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth , app}