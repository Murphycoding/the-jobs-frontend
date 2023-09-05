import axios from "axios";

const API_URL = "http://localhost:5173/api/consultant/";


const getDashboard = () => {
  return axios.get(API_URL+"dashboard");
};

const getConsultant= (id) => {
  return axios.get(API_URL+"profile/"+id);
};

const getAll = () => {
  return axios.get(API_URL+"all");
};
const profile = (firstname,lastname,dob,gender,address,contactnumber,nic,jobtype) => {
  return axios.post(API_URL + "save", {
    "first_name":firstname,
    "last_name":lastname,
    "dob": dob,
    "gender":gender,
    "address":address,
    "contact_number": contactnumber,
    "nic":nic,
    "job_type":jobtype,
  });
};

const ConsunltantService = {
  getDashboard,
  profile,
  getAll,
  getConsultant
}


export default ConsunltantService;