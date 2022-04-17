import axios from "axios";
import { Navigate } from "react-router-dom";

export const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const createSession = async (email, password) => {
  // api
  //   .post("/api/token/obtain/", { email, password })
  //   .then((response) => {
  //     console.log("createSession", response);
  //     return response;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     alert("Usuário ou senha inválidos");
  //     return error;
  //   });

  return api.post("/api/token/obtain/", { email, password });
};

export const userRegistration = async (name, email, cpf, phone, password) => {
  api
    .post("/user/", { name, email, cpf, phone, password })
    .then((response) => {
      console.log("response", response);
      alert("Usuário cadastrado com sucesso");
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      alert("Cadastro inválido");
      return error;
    });
};

export const collaboratorRegistration = async (
  name,
  email,
  cpf,
  phone,
  password,
  occupation
) => {
  api
    .post("/provider/", { name, email, cpf, phone, password, occupation })
    .then((response) => {
      console.log("response", response);
      alert("Usuário cadastrado com sucesso");
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      alert("Cadastro inválido");
      return error;
    });
};
