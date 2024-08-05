import { createContext, ReactNode, useState } from "react";



interface DataContextProviderProps {
    children: ReactNode;
}



interface IUserData {
    userEmail: string;
    userName: string;
    userPassword: string;
}

interface IDataContext {
    userData: IUserData;
    setUserData: React.Dispatch<React.SetStateAction<IUserData>>;
}

export const DataContext = createContext<IDataContext | null>(null);



export default function DataContextProvider({ children }: DataContextProviderProps) {
    const defaultUserData = {
        userEmail: '',
        userName: '',
        userPassword: ''
    }
    const [userData, setUserData] = useState<IUserData>(defaultUserData);

    return (
        <DataContext.Provider value={{ userData, setUserData }}>
            {children}
        </DataContext.Provider>
    );
}
