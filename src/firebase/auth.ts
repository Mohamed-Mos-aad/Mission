import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { auth, database } from "./firebaseConfig";
import { ref, set } from "firebase/database";
import { UserData } from "./dataModels";

const userData:UserData = {
    tasks: [{
        id: '',
        title: '',
        description: '',
        date: '',
        tag: '',
        media: '',
        priority: '',
        completed: false,
    }],
    completedTasks: '',
    lists: '',
    settings: {
        focusTime: 25,
        shortBreak: 5,
        longBreak: 15,
        numSections: 4
    },
    matrices: {
        importantUrgent: '',
        importantUnurgent: '',
        unimportantUrgent: '',
        unimportantUnurgent: ''
    },
    habits: '',
}



export const signUpWithEmailPassword = async (userName: string, email: string, password: string) => {
    try {
        // Check if the email is already registered
        const signInMethods = await fetchSignInMethodsForEmail(auth, email);
        if (signInMethods.length > 0) {
            // Email already registered
            console.error('Email is already registered');
            return false;
        }

        // Create the user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save additional user data to Realtime Database
        await set(ref(database, user.uid), {
            ...userData,
            userName: userName,
            email: email,
            password: password,
            photoURL: ''
        });

        return true;
    } catch (error) {
        console.error('Error signing up:', error);
        return false;
    }
};


export const signUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
    // Sign in with Google
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Save user data to Realtime Database
    await set(ref(database, user.uid), {
        email: user.email,
        userName: user.displayName,
        photoURL: user.photoURL,
        ...userData,
    });

    } catch (error) {
    console.error('Error signing in with Google:', error);
    }
};
    