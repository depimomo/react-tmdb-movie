import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: replace with your own config
const firebaseConfig = {
  apiKey: "AIzaSyCD4RpVpSY-S2kXvX9fDGc0b1WlIWHA6xA",
  authDomain: "mood-meter-13966.firebaseapp.com",
  projectId: "mood-meter-13966",
  storageBucket: "mood-meter-13966.appspot.com",
  messagingSenderId: "17422836348",
  appId: "1:17422836348:web:25d2fbcb86bbaddb759ff9",
  measurementId: "G-YKPBJ9XBLH",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
