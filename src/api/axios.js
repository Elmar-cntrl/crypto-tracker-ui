import axios from "axios";

const api = axios.create({
    baseURL: "http://crypto-tracker-api-env.eba-2tmm72yw.eu-north-1.elasticbeanstalk.com",
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;