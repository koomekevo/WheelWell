import axios from "axios";

const API_BASE_URL = "https://your-api-url.com"; // Replace with your API base URL

// Create an Axios instance with custom configuration if needed
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // Request timeout in milliseconds
  // Add other configuration options here as needed
});

// Define API endpoints as needed

const api = {
  // Example GET request
  getExampleData: () => {
    return axiosInstance.get("/example");
  },

  // Example POST request
  postExampleData: (data) => {
    return axiosInstance.post("/example", data);
  },

  // Add more API endpoints here
};

export default api;
