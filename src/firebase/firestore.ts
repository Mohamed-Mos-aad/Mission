// import { db } from './firebaseConfig';
// import { doc, setDoc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
// import { UserData, Task } from './dataModels';

// // Initialize user data in Firestore
// export const initializeUserData = (userId: string, userData: UserData): Promise<void> => {
//     return setDoc(doc(db, 'users', userId), userData);
// };

// // Get User Data
// export const getUserData = (userId: string): Promise<UserData | null> => {
//     return getDoc(doc(db, 'users', userId))
//         .then(userDoc => userDoc.exists() ? userDoc.data() as UserData : null);
// };

// // Update User Data
// export const updateUserData = (userId: string, updatedData: Partial<UserData>): Promise<void> => {
//     return updateDoc(doc(db, 'users', userId), updatedData);
// };

// // Add Task
// export const addTask = async (userId: string, task: Task): Promise<void> => {
//     const userDoc = await getUserData(userId);
//     if (userDoc) {
//         userDoc.tasks.push(task);
//         await updateUserData(userId, { tasks: userDoc.tasks });
//     }
// };

// // Get Tasks
// export const getTasks = async (userId: string): Promise<Task[]> => {
//     const userDoc = await getUserData(userId);
//     return userDoc ? userDoc.tasks : [];
// };

// // Update Task
// export const updateTask = async (userId: string, taskId: string, updatedTask: Task): Promise<void> => {
//     const userDoc = await getUserData(userId);
//     if (userDoc) {
//         const taskIndex = userDoc.tasks.findIndex(task => task.id === taskId);
//         if (taskIndex > -1) {
//             userDoc.tasks[taskIndex] = updatedTask;
//             await updateUserData(userId, { tasks: userDoc.tasks });
//         }
//     }
// };

// // Delete Task
// export const deleteTask = async (userId: string, taskId: string): Promise<void> => {
//     const userDoc = await getUserData(userId);
//     if (userDoc) {
//         userDoc.tasks = userDoc.tasks.filter(task => task.id !== taskId);
//         await updateUserData(userId, { tasks: userDoc.tasks });
//     }
// };
