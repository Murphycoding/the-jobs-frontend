import axios from "axios";

const API_URL = "http://localhost:5173/api/job-seeker/";

const getDashboard = () => {
  return axios.get(API_URL+"dashboard");
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
  getDashboard,profile
}


export default ConsunltantService;