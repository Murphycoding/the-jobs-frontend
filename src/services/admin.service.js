import axios from "axios";

const API_URL = "http://localhost:5173/api/admin/";


const getDashboard = () => {
  return axios.get(API_URL+"dashboard");
};
const AdminService = {
    getDashboard
}
  
  export default AdminService;
