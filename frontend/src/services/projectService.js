import api from "../api"; // Importation de l'instance Axios

const createContact = async () => {
  try {
    const response = await api.get("/api/v1/projects/"); // Remplace par le bon endpoint
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des projets :", error);
    return []; // Retourne un tableau vide en cas d'erreur
  }
};

export default createContact;
