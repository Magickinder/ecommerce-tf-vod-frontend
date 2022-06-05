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

export const movies = {
    getTitles: () => requests.get('/api/video/title'),
    getAll: () => requests.get('/api/video/all'),
    getCategories: () => requests.get('/api/video/categories'),
    getFiltered: (category) => requests.post('/api/video/filtered',category),
    getById: (id) => requests.get(`/api/video/${id}`),
    getFilteredTitles: (category) => requests.post("/api/video/filtered/title", category),
    getDirectors: () => requests.get('/api/director/name')
}

export const users = {
    getLoggedUser: () => requests.get('/api/user'),
    getUserMovies: () => requests.get('/api/user/videos')
}

export const comments = {
    addComment: (videoID, userID, message) =>
        requests.post(`/api/comments/video/${videoID}/user/${userID}`, message),
    addRate: (videoID, rate) =>
        requests.post(`/api/comments/video/${videoID}/rating/${rate}`)
}

//Przykład
export const auth = {
    login: (username, password) =>
        requests.post("/auth/login", { username: username, password: password }),
    register: (payload) => requests.post("/auth/register", payload),
};

export const payment = {
    pay: (body) => requests.post('/checkout',body),
}
