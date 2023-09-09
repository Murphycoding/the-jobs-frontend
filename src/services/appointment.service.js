import axios from "axios";

const API_URL = "http://localhost:5173/api/appointment/";

const save = (id) => {
  return axios.post(API_URL + "save",{
    "id":id
  });
};

const   accepted = (id) => {
  return axios.post(API_URL + "accepted",{
    "id":id
  });
};
const getAll = () => {
  return axios.get(API_URL + "job-seeker");
};
const getAllConsultant = () => {
  return axios.get(API_URL + "consultant");
};
const  AppointmentService = {
  save,
  getAll,
  getAllConsultant,
  accepted
}

export default AppointmentService;