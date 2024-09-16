import { database } from './firebaseConfig';
import { ref, set, get, update, remove, push } from "firebase/database";

// Define the Task interface
export interface Task {
    id: string;
    title: string;
    description: string;
    date: string;
    tag: string[];
    media: string;
    priority: string;
    completed: boolean;
}

// Create (Add Data)
export const createTask = async (userId: string, task: Task): Promise<string | undefined> => {
    try {
    const taskRef = push(ref(database, `users/${userId}/tasks`));
    await set(taskRef, task);
    return taskRef.key ?? undefined; // Return the task ID (key), handle `null` case by converting it to `undefined`
    } catch (error) {
    console.error("Error creating task:", error);
    throw error;
    }
};
    

// Read (Get Data)
export const getTasks = async (userId: string): Promise<Task[] | null> => {
    try {
        const tasksRef = ref(database, `users/${userId}/tasks`);
        const snapshot = await get(tasksRef);
        if (snapshot.exists()) {
        return Object.values(snapshot.val()) as Task[]; // Return tasks data
        } else {
        console.log("No data available");
        return null;
        }
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
};

// Update (Modify Data)
export const updateTask = async (
    userId: string,
    taskId: string,
    updatedTask: Partial<Task>
    ): Promise<void> => {
    try {
        const taskRef = ref(database, `users/${userId}/tasks/${taskId}`);
        await update(taskRef, updatedTask);
    } catch (error) {
        console.error("Error updating task:", error);
        throw error;
    }
};

// Delete (Remove Data)
export const deleteTask = async (userId: string, taskId: string): Promise<void> => {
    try {
        const taskRef = ref(database, `users/${userId}/tasks/${taskId}`);
        await remove(taskRef);
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
};
