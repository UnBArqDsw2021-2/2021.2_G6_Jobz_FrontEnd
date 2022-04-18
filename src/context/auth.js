import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api, createSession } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []); // função que quero executar quando inicializar e o array de monitoramento

  const login = async (email, password) => {
    let response = null;
    
    try {
      response = await createSession(email, password);
    } catch (err) {
      console.log(err);
      // console.log("login auth", response.status);
      alert("Credenciais inválidas");
    }
    
    const loggedUser = email; // recebemos email do usuario

    //const token = response.data.token; // recebemos o token
    const refresh = response.data.refresh;
    const access = response.data.access;

    //console.log("token:" +token);
    console.log("loggedUser:" + loggedUser);
    console.log("refresh:" + refresh);
    console.log("access:" + access);

    //guarda em localStorage
    localStorage.setItem("refresh", refresh);
    localStorage.setItem("access", access);
    localStorage.setItem("loggedUser", loggedUser);

    //oferece ao Bearer o token
    api.defaults.headers.Authorization = `Bearer ${access}`;

    //setUser(loggedUser); // nao tem user
    navigate("/");
  };

  const logout = () => {
    //console.log("logout!");
    //localStorage.removeItem("user"); // nao tem user
    //localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    localStorage.removeItem("access");
    localStorage.removeItem("loggedUser");
    api.defaults.headers.Authorization = null;

    // setUser(null); // nao tem user
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};