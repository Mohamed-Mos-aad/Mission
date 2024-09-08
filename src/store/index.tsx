import { createContext, ReactNode, useContext, useEffect, useState } from "react";

// ** Interfaces
interface RegistrationData {
    userName: string;
    userEmail: string;
}
interface AppContextType {
    registrationData: RegistrationData| null;
    setRegistrationData: (registrationData:RegistrationData| null) => void;
}



const AppContext = createContext<AppContextType | undefined>(undefined);


export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export function AppContextProvider({ children }: { children: ReactNode }){
    const [registrationData, setRegistrationData] = useState<RegistrationData| null>(null);

    useEffect(()=>{
        if(registrationData)
        {
            console.log(registrationData);
        }
    },[registrationData])

    const appValues = { 
        registrationData, setRegistrationData 
    };

    return (
        <AppContext.Provider value={appValues}>
            {children}
        </AppContext.Provider>
    )
}
