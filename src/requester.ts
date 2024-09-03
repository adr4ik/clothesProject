import axios, { Axios } from "axios";
import { BASE_URL, BLOG_URL } from "./utils/constants";

const api = axios.create({
  baseURL: BASE_URL,
});

const blogApi = axios.create({
  baseURL: BLOG_URL,
});

api.interceptors.request.use(async (config) => {
  return config;
});

blogApi.interceptors.request.use(async (config) => {
  // Add any request modifications here
  return config;
});

export { api, blogApi };
