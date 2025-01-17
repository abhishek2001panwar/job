import axios from "axios";

const API_BASE = "https://api.thecatapi.com/v1/images";

export const fetchRandomCat = async () => {
  try {
    const response = await axios.get(`${API_BASE}/search?has_breeds=1`);
    return response.data[0]; // Return the first cat object
  } catch (error) {
    console.error("Error fetching random cat:", error);
    throw error;
  }
};

export const fetchCatDetails = async (id) => {
  try {
    const response = await axios.get(`${API_BASE}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching cat details:", error);
    throw error;
  }
};
