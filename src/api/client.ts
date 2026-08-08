import axios from "axios";

// In dev, Vite proxies /api -> http://localhost:8000 (see vite.config.ts).
// In prod, set VITE_API_BASE_URL to the deployed backend's public URL.
const baseURL = import.meta.env.VITE_API_BASE_URL ?? "/api/v1";

export const apiClient = axios.create({
  baseURL,
  timeout: 15000,
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.detail ?? error?.message ?? "Something went wrong. Please try again.";
    return Promise.reject(new Error(typeof message === "string" ? message : "Request failed"));
  },
);
