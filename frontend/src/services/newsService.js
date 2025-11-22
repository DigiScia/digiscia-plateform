import api from "../api"; // Importation de l'instance Axios configurée

const fetchNews = async () => {
  try {
    // On utilise seulement le chemin relatif.
    // L'instance 'api' ajoutera automatiquement le domaine (localhost ou fly.dev)
    const response = await api.get("/api/v1/news/"); 
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des news :", error);
    return []; // Retourne un tableau vide pour éviter de planter l'interface
  }
};

export default fetchNews;