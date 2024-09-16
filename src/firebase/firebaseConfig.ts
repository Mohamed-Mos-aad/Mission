// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getDatabase, Database } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAauKIpVgUTO7nW7vXUkGlLol7gW8JCc7M",
    authDomain: "mission-70e9c.firebaseapp.com",
    databaseURL: "https://mission-70e9c-default-rtdb.firebaseio.com",
    projectId: "mission-70e9c",
    storageBucket: "mission-70e9c.appspot.com",
    messagingSenderId: "278624071497",
    appId: "1:278624071497:web:98acc5f5b5adfc6ac43498",
    measurementId: "G-6HQZRSYFS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Realtime Database
const auth: Auth = getAuth(app);
const database: Database = getDatabase(app);

export { auth, database };
