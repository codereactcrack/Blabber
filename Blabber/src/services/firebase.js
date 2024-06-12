import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAuisnhNveQV7OVXLDO1h2iirro_ohwhbI",
  authDomain: "blabber-2ebf9.firebaseapp.com",
  projectId: "blabber-2ebf9",
  storageBucket: "blabber-2ebf9.appspot.com",
  messagingSenderId: "488295297723",
  appId: "1:488295297723:web:0d8bb08f8fd88d9cb6ef9e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth,provider}