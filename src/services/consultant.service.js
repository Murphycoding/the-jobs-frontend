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
const profile = (firstname,lastname,dob,gender,address,contactnumber,nic,jobtype,specialized_country) => {
  return axios.post(API_URL + "save", {
    "first_name":firstname,
    "last_name":lastname,
    "dob": dob,
    "gender":gender,
    "address":address,
    "contact_number": contactnumber,
    "nic":nic,
    "specialized_area":jobtype,
    "specialized_country":specialized_country,
  });
};
const update = (id,firstname,lastname,jobtype,specificConutry) => {
  return axios.put(API_URL + "update/"+id, {
    "first_name":firstname,
    "last_name":lastname,
    "specialized_area":jobtype,
    "specialized_country":specificConutry
  });
};

const submitDelete = (id) => {
  return axios.delete(API_URL + "delete/"+id);
};

const ConsunltantService = {
  getDashboard,
  profile,
  getAll,
  getConsultant,
  update,
  submitDelete
}


export default ConsunltantService;