import React, { createContext, ReactNode, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

interface IAuthContext {
    isAuthenticated: boolean;
    setToken: (value: string | undefined) => void;
}

const AuthContext = createContext<IAuthContext>({
    isAuthenticated: false,
    setToken: () => {},
});

const useAuth = () => {
    return useContext(AuthContext);
};

function AuthProvider({ children }: { children: ReactNode }) {
    const auth = useLocalStorage('token');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        auth.getItem() != null,
    );

    const setToken = (value: string | undefined) => {
        auth.setItem(value);
        setIsAuthenticated(true);

        if (value === undefined) {
            setIsAuthenticated(false);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, setToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, useAuth };
