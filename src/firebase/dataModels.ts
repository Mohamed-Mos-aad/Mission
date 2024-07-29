export interface Task {
    id: string;
    title: string;
    description: string;
    date: string;
    tag: string;
    media: string;
    priority: string;
    completed: boolean;
}

export interface UserSettings {
    focusTime: number;
    shortBreak: number;
    longBreak: number;
    numSections: number;
}

export interface UserMatrices {
    importantUrgent: string;
    importantUnurgent: string;
    unimportantUrgent: string;
    unimportantUnurgent: string;
}

export interface UserData {
    tasks: Task[];
    completedTasks: string;
    lists: string;
    settings: UserSettings;
    matrices: UserMatrices;
    habits: string;
}
