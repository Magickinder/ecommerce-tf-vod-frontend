import axios from "axios";
import tokenUtils from "./TokenUtils";

const API_URL = 'http://localhost:8080';


const getHeaders = () => ({
    headers: {
        'Authorization': !!tokenUtils.getToken() ? `Bearer ${tokenUtils.getToken()}` : "",
        "content-type": "application/json"
    },
});


class Request {
    delete = (url) => axios.delete(`${API_URL}${url}`, getHeaders());
    get = (url) => axios.get(`${API_URL}${url}`, getHeaders());
    put = (url, body) => axios.put(`${API_URL}${url}`, body, getHeaders());
    post = (url, body) => axios.post(`${API_URL}${url}`, body, getHeaders());
}

const requests = new Request();

//Przykład
export const auth = {
    login: (username, password) =>
        requests.post("/login", { username: username, password: password }),
    register: (payload) => requests.post("/register", payload),
};