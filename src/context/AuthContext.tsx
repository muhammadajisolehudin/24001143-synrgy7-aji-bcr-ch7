// UserProvider.js
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface User {
    name: string;
    role: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    error: string | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    getToken: () => string | null;  // Tambahkan getToken
}

interface UserProviderProps {
    children: ReactNode;
}

const UserContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a UserProvider');
    }
    return context;
};

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const login = async (username: string, password: string): Promise<void> => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('http://localhost:8000/api/v1/login', { username, password });
            const data = response.data;
            const userData: User = { name: data.user.username, role: data.user.role };
            setUser(userData);
            console.log("User after login:", userData);
            localStorage.setItem('token', data.token);

            if (userData.role === 'admin' || userData.role === 'super admin') {
                navigate("/dashboard");
            } else if (userData.role === 'member') {
                navigate("/member/index");
            } else {
                setError('Unknown user role');
            }
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                setError(err.response ? err.response.data.message : 'Failed to login');
            } else if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
        } finally {
            setLoading(false);
        }
    };

    const logout = (): void => {
        setUser(null);
        console.log("User after logout:", null);
        localStorage.removeItem('token');
    };

    const getToken = (): string | null => {
        return localStorage.getItem('token');
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Lakukan pemeriksaan token dan atur user jika diperlukan
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, loading, error, login, logout, getToken }}>
            {children}
        </UserContext.Provider>
    );
};
