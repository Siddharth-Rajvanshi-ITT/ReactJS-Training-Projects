import axios from "axios";

type userDetails = {
  username: string;
  password: string;
};

const API_URL = "http://localhost:3001/api/user";

export const loginUser = async (userData: userDetails) => {
  try {
    const response = await axios.post(API_URL, userData);

    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }
    return await response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
