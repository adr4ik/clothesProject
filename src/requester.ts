import axios, { Axios } from "axios";
import { BASE_URL } from "./utils/constants";

const api = axios.create({
  baseURL: BASE_URL,
});

api.interceptors.request.use(async (config) => {
  console.log("config", config);
  return config;
});

export default api;
