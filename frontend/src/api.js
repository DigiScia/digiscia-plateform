import axios from "axios";

// Utilise une variable d'environnement (standard Vite)
// Si la variable n'existe pas (en local), on utilise localhost par défaut
const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";
// const API_URL = "http://127.0.0.1:8000";


const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // INDISPENSABLE car tu as mis CORS_ALLOW_CREDENTIALS = True dans Django
  withCredentials: true, 
});

export default api;