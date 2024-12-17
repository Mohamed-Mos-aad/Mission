// MissionContextProvider.tsx
import { ReactNode, useEffect, useState } from "react";
import { IMissionLocalStorage, missionContext } from "./missionContext";

interface MissionContextProviderProps {
  children: ReactNode;
}

export function MissionContextProvider({ children }: MissionContextProviderProps) {
  // ** Defaults
  const defaultValues: IMissionLocalStorage = {
    user: {
      name: null,
      email: null,
      photoUrl: null,
      password: null,
      theme: "light", // Default theme is light
    },
    lists: [],
    tasks: [],
    calendar: [],
    pomodoro: {
      sessionTime: 25,
      breakTime: 5,
    },
    matrices: {
      importantUrgent: [],
      importantNotUrgent: [],
      notImportantUrgent: [],
      notImportantNotUrgent: [],
    },
    habits: [],
  };

  // States
  const [missionLocalStorage, setMissionLocalStorage] =
    useState<IMissionLocalStorage>(defaultValues);

  // Effect for loading from localStorage and setting initial data
  useEffect(() => {
    const availableData = localStorage.getItem("mission");
    if (availableData) {
      setMissionLocalStorage(JSON.parse(availableData));
    } else {
      localStorage.setItem("mission", JSON.stringify(defaultValues)); // Store defaults if no data
    }
  }, []);

  // Whenever missionLocalStorage changes, update localStorage
  useEffect(() => {
    localStorage.setItem("mission", JSON.stringify(missionLocalStorage));
  }, [missionLocalStorage]);

  return (
    <missionContext.Provider value={missionLocalStorage}>
      {children}
    </missionContext.Provider>
  );
}
