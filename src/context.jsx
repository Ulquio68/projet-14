import React, { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

export function useAppContext() {
    return useContext(AppContext);
}

export function AppProvider({ children }) {
    const [donnees, setDonnees] = useState([]);

    return (
        <AppContext.Provider value={{ donnees, setDonnees }}>
            {children}
        </AppContext.Provider>
    );
}
