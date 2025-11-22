import axios from "axios";

// const API_URL = "http://127.0.0.1:8000"; // L'URL de ton backend Django
const API_URL = "https://digiscia-backend.fly.dev"; // L'URL de ton backend Django


const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

