// Assume this function is placed in ../api

// Simulated data representing favorites
const favoritesData = {
  driverFavorites: [
    { id: 1, name: "Driver 1" },
    { id: 2, name: "Driver 2" },
    { id: 3, name: "Driver 3" },
  ],
  mechanicFavorites: [
    { id: 1, name: "Mechanic 1" },
    { id: 2, name: "Mechanic 2" },
    { id: 3, name: "Mechanic 3" },
  ],
};

// Function to fetch favorites based on user role and ID
const getFavorites = async (userRole, userId) => {
  try {
    // Simulate fetching favorites based on user role
    if (userRole === "driver") {
      return favoritesData.driverFavorites;
    } else if (userRole === "mechanic") {
      return favoritesData.mechanicFavorites;
    } else {
      throw new Error("Invalid user role");
    }
  } catch (error) {
    console.error("Error fetching favorites:", error);
    throw error;
  }
};

export default getFavorites;
