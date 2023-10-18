import axios from "axios";
// import dotenv from "dotenv".config

const API_URL: any = process.env.REACT_APP_GetRestaurants;

export const fetchRestaurants = async () => {
  console.log("API URL: " + API_URL);
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
