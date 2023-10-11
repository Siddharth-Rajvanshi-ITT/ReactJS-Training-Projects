import axios from "axios";

const API_URL = "http://localhost:3001/api/restaurent/";

export const getRestaurant = async (restaurantID: number) => {
  try {
    const response = await axios.get(API_URL + restaurantID);

    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }
    return await response.data.data;
  } catch (error) {
    console.error("Error fetching restaurant data:", error);
    return null;
  }
};
