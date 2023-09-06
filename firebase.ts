import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAu6c-Vx3UREm7Pvzeva21OWCT5xPEhQzE",
    authDomain: "dialogixengine.firebaseapp.com",
    projectId: "dialogixengine",
    storageBucket: "dialogixengine.appspot.com",
    messagingSenderId: "432277787249",
    appId: "1:432277787249:web:8f7d337e4721f04de781d0"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };