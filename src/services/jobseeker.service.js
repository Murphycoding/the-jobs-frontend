import axios from "axios";

const API_URL = "http://localhost:5173/api/job-seeker/";

const getDashboard = () => {
  return axios.get(API_URL+"dashboard");
};

const JobSeekerService = {
  getDashboard
}

export default JobSeekerService;