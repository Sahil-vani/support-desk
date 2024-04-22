import axios from "axios";

const API_URL = "/api/user";

const login = async (formData) => {
  console.log(`${API_URL}/login`);
  const response = await axios.post(API_URL + "/login", formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

const signup = async (formData) => {
  const response = await axios.post(API_URL + "/register", formData);
  localStorage.setItem("user", JSON.stringify(response.data));

  return response.data;
};

const authService = {
  login,
  signup,
};

export default authService;
