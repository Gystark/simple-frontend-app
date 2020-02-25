const AUTH_TOKEN_KEY = "authToken";

const extractServerError = (error) => {
    return error?.response?.data?.message ? error.response.data.message : "Internal server error, try again later";
};

const getApiUrl = () => {
    return process.env.REACT_APP_BACKEND_HOST || "http://localhost:3001";
};

export {
    AUTH_TOKEN_KEY,
    extractServerError,
    getApiUrl
};
