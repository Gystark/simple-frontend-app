import axios from "axios";
import {AUTH_TOKEN_KEY} from "./common";
import moment from "moment";

const getAuthToken = () => {
    return localStorage.getItem(AUTH_TOKEN_KEY);
};

const BASE_URL = process.env.REACT_APP_BACKEND_HOST || "http://localhost:3001";
const getOptions = () => {
    return {headers: {Authorisation: getAuthToken()}}
};

const getPosts = (sortBy = undefined, order = undefined, search = undefined) => {
    let options = getOptions();

    if (sortBy !== undefined || order !== undefined || search !== undefined) {
        options.params = {};

        if (sortBy !== undefined) {
            options.params._sort = sortBy;
        }

        if (order !== undefined) {
            options.params._order = order;
        }

        if (search !== undefined) {
            options.params.q = search;
        }
    }

    return axios.get(`${BASE_URL}/posts`, options);
};

const login = (username, password) => {
    return axios.post(`${BASE_URL}/login`, {username, password});
};

const deletePost = (postId) => {
    return axios.delete(`${BASE_URL}/posts/${postId}`, getOptions());
};

const addPost = (title, body) => {
    return axios.post(`${BASE_URL}/posts`, {
        title,
        body,
        postedAt: moment().format()
    }, getOptions());
};

const updatePost = (id, title = undefined, body = undefined) => {
    const data = {};

    if (title !== undefined) {
        data.title = title;
    }

    if (body !== undefined) {
        data.body = body;
    }

    return axios.patch(`${BASE_URL}/posts/${id}`, data, getOptions());
};

export {
    getPosts,
    login,
    deletePost,
    addPost,
    updatePost
};
