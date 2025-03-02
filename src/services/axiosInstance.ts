import axios from "axios";

const API_BASE_URL = "https://backend.etkinlik.io/api/v2";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Etkinlik-Token": process.env.NEXT_PUBLIC_ETKINLIK_API_KEY,
  },
  timeout: 10000, // 10 sc timeout
});


export default axiosInstance;
