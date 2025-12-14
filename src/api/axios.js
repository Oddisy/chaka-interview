import axios from "axios";

const api = axios.create({
  baseURL: process.env.baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // logout user or redirect
    }
    return Promise.reject(error);
  }
);


export default api;
