import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz8B_n14Z6n_GVXwWVMtojazkPUPe6d-c",
    authDomain: "dialogixengine-f4f5d.firebaseapp.com",
    projectId: "dialogixengine-f4f5d",
    storageBucket: "dialogixengine-f4f5d.appspot.com",
    messagingSenderId: "998899468840",
    appId: "1:998899468840:web:7c34ad92e2c086fdaf431d"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };