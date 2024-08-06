import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup  } from "firebase/auth";
import { auth, database } from "./firebaseConfig";
import { get, ref, set } from "firebase/database";
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


export const isEmailRegisteredInDatabase = async (email: string): Promise<boolean> => {
    try {
    const dbRef = ref(database);
    const snapshot = await get(dbRef);

    if (snapshot.exists()) {
        const users = snapshot.val();
        for (const userId in users) {
        if (users[userId].email === email) {
            return true;
        }
        }
        return false;
    } else {
        console.log("No data available");
        return false;
    }
    } catch (error) {
        return false;
    }
};


export const signUpWithEmailPassword = async (userName: string, email: string, password: string) => {
    try {
        // Create the user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save additional user data to Realtime Database
        await set(ref(database, user.uid), {
            ...userData,
            userName: userName,
            email: email,
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
    


export const logInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
        // Sign in with Google
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // Check if user data exists in the database
        const dbRef = ref(database, user.uid);
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            // Return user data from the Realtime Database
            console.log(snapshot.val());
            return snapshot.val();
        } 

        return user;
    } catch (error) {
        console.error('Error logging in with Google:', error);
        return null;
    }
};



export const logInWithEmailPassword = async (email: string, password: string): Promise<UserData | null> => {
    try {
        // Sign in with email and password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Reference to the user's data in the Realtime Database
        const dbRef = ref(database, user.uid);
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
            // Return user data from the Realtime Database
            console.log(snapshot.val());
            return snapshot.val();
        } else {
            console.log('User data not found in database.');
            return null;
        }
    } catch (error) {
        console.error('Error logging in with email and password:', error);
        return null;
    }
};