import axios from "axios";

export const fetchUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3001/api/users");

    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }
    return await response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
