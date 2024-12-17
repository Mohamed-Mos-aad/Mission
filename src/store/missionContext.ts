import { createContext } from "react";

interface ITask{
    id: number;
    listId: number;
    title: string;
    description: string;
    done: boolean;
    date: string; // Task due date
    priority: "High" | "Medium" | "Low"; // Task priority
    tags: string[]; // Task tags
}

interface ICalendarEvent{
    id: number;
    date: string; // Event date
    title: string;
    description: string;
}

interface IHabits{
    habitId: number;
    habitName: string;
    completedDates: string[]; // Array of dates when habit was completed
}

export interface IMissionLocalStorage{
    user: {
        name: string | null;
        email: string | null;
        photoUrl: string | null; // User photo URL
        password: string | null;
        theme: "light" | "dark"; // Theme preference
    };
    lists: Array<{
        id: number;
        title: string;
        description: string;
    }>;
    tasks: ITask[]; // Array of tasks
    calendar: ICalendarEvent[]; // Calendar events
    pomodoro: {
        sessionTime: number; // Session time in minutes
        breakTime: number; // Break time in minutes
    };
    matrices: {
        importantUrgent: ITask[];
        importantNotUrgent: ITask[];
        notImportantUrgent: ITask[];
        notImportantNotUrgent: ITask[];
    };
    habits: IHabits[]; // User habits tracking
}

    const defaultValues: IMissionLocalStorage = {
    user: {
        name: null,
        email: null,
        photoUrl: null,
        password: null,
        theme: "light",
    },
    lists: [],
    tasks: [],
    calendar: [],
    pomodoro: {
        sessionTime: 25, // Default Pomodoro session time
        breakTime: 5,    // Default Pomodoro break time
    },
    matrices: {
        importantUrgent: [],
        importantNotUrgent: [],
        notImportantUrgent: [],
        notImportantNotUrgent: [],
    },
    habits: [],
};

export const missionContext = createContext<IMissionLocalStorage>(defaultValues);
