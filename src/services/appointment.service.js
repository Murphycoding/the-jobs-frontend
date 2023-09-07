import axios from "axios";

const API_URL = "http://localhost:5173/api/available_time/";


const getavailable_time= (id) => {
  console.log("asdasdsadsad AS Das dds a:"+id);
  return axios.get(API_URL+"consultant/"+id);
};

const save = (list) => {
  return axios.post(API_URL + "save",list);
};
const  AppointmentService = {
  getavailable_time,
  save
  
}

export default AppointmentService;