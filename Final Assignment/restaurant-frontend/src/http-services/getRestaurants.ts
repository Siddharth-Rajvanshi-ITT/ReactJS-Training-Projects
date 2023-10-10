import axios from "axios";

const API_URL = "http://localhost:3001/api/restaurents";

export const fetchRestaurants = async () => {
  try {
    const response = await axios.get(API_URL);
    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }
    return await response.data;
  } catch (error) {
    console.error("Error fetching reataurants data:", error);
    return null;
  }
};
