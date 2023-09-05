import axios from "axios";

const API_URL = "http://localhost:5173/api/auth/"

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("admin", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("admin");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("admin"));
};

const AdminAuthService = {
  login,
  logout,
  getCurrentUser,
}

export default AdminAuthService;