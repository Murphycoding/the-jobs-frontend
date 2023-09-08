import React, { useState, useEffect } from "react";
import AppointmentService from "../../services/appointment.service";
import JobSeekerAuthService from "../../services/jobseeker_auth.service";
import { Link, useNavigate } from "react-router-dom";

const JobSeekerGetAppointment = () => {
  const navigate = useNavigate();
  const [appointmentList, setAppointmentList] = useState([]);
  // const currentUser = JobSeekerAuthService.getCurrentUser();
  const [isFirstRender, setIsFirstRender] = useState(false);

  // const navigate = useNavigate();

  useEffect(() => {
    if (isFirstRender) {
      return; // Skip the first render
    }
    setIsFirstRender(true);

    AppointmentService.getAll().then(
      (response) => {
        console.log(response.data);
        setAppointmentList(response.data);
      },
      (error) => {
        if (error.response && error.response.status === 401) {
          console.log('Unauthorized error:', error);
          JobSeekerAuthService.logout();
          navigate("/job-seeker/login");
        }
      }
    );
  });
  return (
    <div class="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Appoinment ID
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Consultant
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Status
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Accepted At
              </th>
            </tr>
          </thead>
          <tbody>
            {appointmentList.map((item) => (
              <tr>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex">
                    <p class="text-gray-900 whitespace-no-wrap">{item.id}</p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex">
                    <p class="text-gray-900 whitespace-no-wrap">{item.consultant.first_name} {item.consultant.last_name}</p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex">
                    <p class="text-gray-900 whitespace-no-wrap">{item.status}</p>
                  </div>
                </td>
                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div class="flex">
                    <p class="text-gray-900 whitespace-no-wrap">{item.accepted_at ?? "Not accepted yet"}</p>
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

export default JobSeekerGetAppointment;
