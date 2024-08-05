import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAauKIpVgUTO7nW7vXUkGlLol7gW8JCc7M",
    authDomain: "mission-70e9c.firebaseapp.com",
    databaseURL: "https://mission-70e9c-default-rtdb.firebaseio.com",
    projectId: "mission-70e9c",
    storageBucket: "mission-70e9c",
    messagingSenderId: "278624071497",
    appId: "1:278624071497:web:98acc5f5b5adfc6ac43498",
    measurementId: "G-6HQZRSYFS6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getDatabase(app);
