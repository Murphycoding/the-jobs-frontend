import React, { useState, useEffect } from "react";
import JobSeeker from "../../services/jobseeker.service";
import ConsultantAuthService from "../../services/consultant_auth.service";
import ConsultantService from "../../services/consultant.service";
import AppointmentService from "../../services/appointment.service";
import { Link, useNavigate } from "react-router-dom";

const ConsultantDashboard = () => {
  const navigate = useNavigate();

  const currentUser = ConsultantAuthService.getCurrentUser();
  const [isFirstRender, setIsFirstRender] = useState(false);
  const [appointmentList, setAppointmentList] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isFirstRender) {
      return;
    }
    setIsFirstRender(true);
    if (currentUser && currentUser.roles) {
      const isConsultant = currentUser.roles.includes("ROLE_jOB_SEEKER");

      ConsultantService.getDashboard().then(
        (response) => {
          if (response.data == null) {
            navigate("/consultant/profile");
          }
        },
        (error) => {
          if (error.response && error.response.status === 401) {
            // Handle unauthorized error here, e.g., redirect to login page or show a message
            // You can also dispatch an action to update your Redux store or context
            console.log("Unauthorized error:", error);
            JobSeekerAuthService.logout();
            navigate("/consultnat/login");
          }
          const _content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );

      setLoading(true);
      setError(!isConsultant);
    }
    AppointmentService.getAllConsultant().then(
    (response) => {
      setAppointmentList(response.data);
      console.log(response.data);
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        console.log("Unauthorized error:", error);
        JobSeekerAuthService.logout();
        navigate("/consultant/login");
      }
    }
  );
  }, [currentUser,appointmentList]);

  

  return (
    <div>
      <div class="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <div class="mb-10">
          <p class="text-2xl font-extrabold tracking-tight text-slate-900">
            View Clients
          </p>
        </div>
        <table class="min-w-max w-full table-auto">
          <thead>
            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th class="py-3 px-6 text-left">Name </th>
              <th class="py-3 px-6 text-left">Date Of Birthday </th>
              <th class="py-3 px-6 text-left">Gender</th>
              <th class="py-3 px-6 text-left">Address</th>
              <th class="py-3 px-6 text-left">Contact Number</th>
              <th class="py-3 px-6 text-center">Job Type</th>
            </tr>
          </thead>
          <tbody class="text-gray-600 text-sm font-light">
            {appointmentList.map((item) => (
              <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {item.jobSeeker.first_name}
                    </p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {item.jobSeeker.dob}
                    </p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {item.jobSeeker.gender}
                    </p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {item.jobSeeker.address}
                    </p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {item.jobSeeker.contact_number}
                    </p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {item.jobSeeker.job_type}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ConsultantDashboard;
