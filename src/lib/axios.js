import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_MODE === "development" ? "http://localhost:5000/api/v1" : `${import.meta.env.VITE_SERVER}/api/v1`,
	withCredentials: true,
});
