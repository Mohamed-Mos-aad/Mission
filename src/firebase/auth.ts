import { auth, database } from './firebaseConfig';
import { ref, set } from "firebase/database";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    User
} from "firebase/auth";

// Write user data to the Realtime Database after registration or login
const writeUserData = (userId: string, userData: unknown): void => {
    set(ref(database, `users/${userId}`), userData);
};

// Register with email and password, and write user data to Realtime Database
export const registerWithEmailAndPassword = async (
    email: string,
    password: string,
    username: string // additional user data
): Promise<User> => {
    try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Write initial user data to the database
    writeUserData(user.uid, {
        email: user.email,
        username,
        createdAt: new Date().toISOString(),
        completedTasks: false,
        habits: false,
        lists: false,
        matrices: {
            importantUnurgent: false,
            importantUrgent: false,
            unimportantUnurgent: false,
            unimportantUrgent: false
        },
        photoURL: user.photoURL,
        settings: {
            focusTime: 25,
            longBreak: 15,
            numSections: 4,
            shortBreak: 5
        },
        tasks: []
        });

        return user;
    } catch (error) {
        console.error("Error registering with email and password:", error);
        throw error;
    }
};

// Login with email and password
export const loginWithEmailAndPassword = async (
    email: string,
    password: string
    ): Promise<User> => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Error logging in with email and password:", error);
        throw error;
    }
};

// Login or Register with Google and write user data to Realtime Database
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async (): Promise<User> => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;

        // Write initial user data to the database
        writeUserData(user.uid, {
        email: user.email,
        username: user.displayName,
        createdAt: new Date().toISOString(),
        completedTasks: false,
        habits: false,
        lists: false,
        matrices: {
            importantUnurgent: false,
            importantUrgent: false,
            unimportantUnurgent: false,
            unimportantUrgent: false
        },
        photoURL: user.photoURL,
        settings: {
            focusTime: 25,
            longBreak: 15,
            numSections: 4,
            shortBreak: 5
        },
        tasks: []
        });

        return user;
    } catch (error) {
        console.error("Error logging in with Google:", error);
        throw error;
    }
};
