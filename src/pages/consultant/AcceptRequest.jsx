import React, { useState, useEffect } from "react";
import AppointmentService from "../../services/appointment.service";
import ConsultantAuthService from "../../services/consultant_auth.service";
import { Link, useNavigate } from "react-router-dom";

const AcceptRequest = () => {
  const navigate = useNavigate();
  const [appointmentList, setAppointmentList] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(false);

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isFirstRender) {
      return; // Skip the first render
    }
    setIsFirstRender(true);

    AppointmentService.getAllConsultant().then((response) => {
      console.log(response.data);
      setAppointmentList(response.data);
    }),
    (error) => {
      if (error.response && error.response.status === 401) {
        console.log('Unauthorized error:', error);
        ConsultantAuthService.logout();
      }
    };
  });
  
  const submitBooking = (id,event) => {
    console.log(id);
    setLoading(true);

    AppointmentService.accepted(id).then(
      (res) => {
        setLoading(false);
        setError(false);
        setMessage("Your appointment has been scheduled successfully");
      },
      (error) => {
        setLoading(false);
        setError(true);
        console.log(error);
        setMessage("ERROR ");
      }
    );
  };
  
  return (
    <div>
      <div class="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <div class="mb-10">
          <p class="text-gray-400"></p>
        </div>
        <div>
          <table class="min-w-full leading-normal ">
            <thead>
              <tr>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Appoinment ID
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Job Seeker name 
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Job Type
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Contact number 
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Gender
                </th>
                <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
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
                      <p class="text-gray-900 whitespace-no-wrap">
                        {item.jobSeeker.first_name} {item.jobSeeker.last_name}
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
                        {item.jobSeeker.gender}
                      </p>
                    </div>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                    <button
                      class="flex-shrink-0 bg-gray-700  hover:bg-gray-700  border-gray-700  hover:border-gray-700  text-sm border-4 text-white py-1 px-2 rounded"
                      type="button"
                      onClick={() => submitBooking(item.id)}
                    >
                      Accept Request
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AcceptRequest;
