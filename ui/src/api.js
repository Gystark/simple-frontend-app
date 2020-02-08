import axios from "axios";

const getAuthToken = () => {
    return localStorage.getItem("authToken");
};

const BASE_URL = "http://localhost:3001";
const getOptions = () => {
    return {headers: {Authorisation: getAuthToken()}}
};

const getAllPosts = () => {
    return axios.get(`${BASE_URL}/posts`, getOptions());
};

export {
    getAllPosts
};
