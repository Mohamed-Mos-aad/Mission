// src/services/databaseService.ts
import { database } from "../firebase/firebase";
import {
ref,
set,
push,
update,
remove,
onValue,
DataSnapshot,
} from "firebase/database";

// Type for generic object data
type DataObject = Record<string, unknown>;

// Add Data (Create)
export const addData = async (path: string, data: DataObject): Promise<string | null> => {
const dbRef = ref(database, path);
const newRef = push(dbRef);
await set(newRef, data);
return newRef.key;
};

// Get Data (Read)
export const getData = (
path: string,
callback: (data: DataObject | null) => void
): void => {
const dbRef = ref(database, path);
onValue(dbRef, (snapshot: DataSnapshot) => {
    const value = snapshot.val();
    callback(value as DataObject | null);
});
};

// Update Data
export const updateData = async (path: string, data: DataObject): Promise<void> => {
const dbRef = ref(database, path);
await update(dbRef, data);
};

// Delete Data
export const deleteData = async (path: string): Promise<void> => {
const dbRef = ref(database, path);
await remove(dbRef);
};
