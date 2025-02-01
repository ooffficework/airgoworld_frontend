import axios from "axios";
import Cookies from "universal-cookie";

const API_BASE_URL = "http://localhost:8000";
// const API_BASE_URL = "http://46.202.178.135:8000";
const cookies = new Cookies();

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, 
});
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = cookies.get("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`; 
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = cookies.get("refreshToken");
        if (!refreshToken) {
          window.location.href = "/login"; 
          return Promise.reject(error);
        }
        const refreshResponse = await axios.post(
          `${API_BASE_URL}/token/refresh/`,
          {
            refreshToken,
          }
        );
        if (refreshResponse.status === 200) {
          cookies.set("accessToken", refreshResponse.data.access, {
            path: "/",
          });
          originalRequest.headers.Authorization = `Bearer ${refreshResponse.data.access}`;
          return axiosInstance(originalRequest); 
        } else {
          cookies.remove("refreshToken", { path: "/" }); 
          window.location.href = "/login"; // Redirect to login if refresh failed
          return Promise.reject(error);
        }
      } catch (refreshError) {
        cookies.remove("refreshToken", { path: "/" });
        window.location.href = "/login"; // Redirect to login if refreshing the token fails
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
