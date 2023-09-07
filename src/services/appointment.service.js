import axios from "axios";

const API_URL = "http://localhost:5173/api/appointment/";

const save = (id) => {
  return axios.post(API_URL + "save",{
    "id":id
  });
};
const getAll = () => {
  return axios.get(API_URL + "all");
};
const  AppointmentService = {
  save,
  getAll  
}

export default AppointmentService;