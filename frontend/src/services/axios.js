import axios from "axios";
export const apiClientAuth = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

apiClientAuth.interceptors.request.use(
    config => {
        const token = localStorage.getItem("access-token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    
    },
    function (error) {
        return Promise.reject(error);
    }
);