// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8FmuUnFYQGpzwb6tF22NiMMjTqGckbJk",
  authDomain: "skillfinder-624d1.firebaseapp.com",
  projectId: "skillfinder-624d1",
  storageBucket: "skillfinder-624d1.appspot.com",
  messagingSenderId: "957513778784",
  appId: "1:957513778784:web:7068107c94764b34cce505"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)


