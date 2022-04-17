import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { api, createSession } from '../services/api'


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');

        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }

    }, []); // função que quero executar quando inicializar e o array de monitoramento

    const login = async (email, password) => {

        const response = await createSession(email, password);

        console.log("login", response.data);
        
        const loggedUser = email; // recebemos email do usuario

        const refresh = response.data.refresh;
        const access = response.data.access;

        console.log("loggedUser:" + loggedUser);
        console.log("refresh:" + refresh);
        console.log("access:" + access);

        //guarda em localStorage
        localStorage.setItem('refresh', refresh);
        localStorage.setItem('access', access);
        localStorage.setItem('loggedUser', loggedUser)


        //oferece ao Bearer o token
        api.defaults.headers.Authorization = `Bearer ${access}`;

        //setUser(loggedUser); // nao tem user
        navigate('/');
    };

    const logout = () => {
       // console.log("logout!");
        localStorage.removeItem("refresh");
        localStorage.removeItem("access");
        localStorage.removeItem("loggedUser");
        api.defaults.headers.Authorization = null;

        // setUser(null); // nao tem user
        navigate('/login');
    }

    return (
        <AuthContext.Provider
            value={{ authenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

};