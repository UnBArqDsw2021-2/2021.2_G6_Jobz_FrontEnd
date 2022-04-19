import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8000",
});

export const createSession = async (email, password) => {
    return api.post("/api/token/obtain/", { email, password });
};

export const userRegistration = async (name, email, cpf, phone, password) => {
    let photo = null;
    return api.post("/user/", { name, email, cpf, phone, password, photo });
};

export const updateUser = async (userCpf, body) => {
    return api.patch('/user/' + userCpf + '/', body);
}

export const getUsers = async (filters) => {
    return api.get("/user/", filters);
}

export const collaboratorRegistration = async (
    name, email, cpf, phone, password, occupation) => {
    let photo = null;
    return api.post("/provider/", { name, email, cpf, phone, password, occupation, photo });
};

export default api;

