import api from "../api"; // Importation de l'instance Axios

const fetchProjects = async () => {
  try {
    const response = await api.get("/api/v1/services/"); // Remplace par le bon endpoint
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création de la prise de contact :", error);
    return []; // Retourne un tableau vide en cas d'erreur
  }
};

export default fetchProjects;
