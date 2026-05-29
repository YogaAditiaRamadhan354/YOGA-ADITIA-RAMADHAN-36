import React, { createContext, useState, useEffect } from 'react';
import api from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await api.get('/user');
                    setUser(response.data);
                } catch (error) {
                    console.error("Auth check failed", error);
                    localStorage.removeItem('token');
                }
            }
            setLoading(false);
        };
        checkAuth();
    }, []);

    const login = async (email, password) => {
        const response = await api.post('/login', { email, password });
        localStorage.setItem('token', response.data.token);
        setUser(response.data.user);
    };

    const logout = async () => {
        await api.post('/logout');
        localStorage.removeItem('token');
        setUser(null);
    };
    const register = async (name, email, password, passwordConfirm) => {
        const response = await api.post('/register', { 
            name, 
            email, 
            password, 
            password_confirmation: passwordConfirm 
        });
        localStorage.setItem('token', response.data.token);
        setUser(response.data.user);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
