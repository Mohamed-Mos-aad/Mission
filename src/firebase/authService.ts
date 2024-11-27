// src/services/authService.ts
import {
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    AuthError,
    User,
  } from "firebase/auth";
import { auth } from "../firebase/firebase";

// Type for Firebase user
export type FirebaseUser = User;

// Google Sign-In
export const loginWithGoogle = async (): Promise<FirebaseUser> => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result.user;
};

// Email/Password Registration
export const registerWithEmail = async (
    email: string,
    password: string
): Promise<FirebaseUser> => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
};

// Email/Password Login
export const loginWithEmail = async (
    email: string,
    password: string
): Promise<FirebaseUser> => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
};

// Check if Email is Registered
export const isEmailRegistered = async (email: string): Promise<boolean> => {
    try {
    await createUserWithEmailAndPassword(auth, email, "temporaryPassword");
    return false; // If no error, the email is not already registered
    } catch (error) {
    const authError = error as AuthError;
    if (authError.code === "auth/email-already-in-use") {
        return true; // Email is already registered
    }
    throw authError; // Re-throw other errors
    }
};
