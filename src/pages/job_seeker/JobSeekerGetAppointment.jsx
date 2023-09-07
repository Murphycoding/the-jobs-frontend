import React, { useState, useEffect } from "react";

const JobSeekerGetAppointment = () => {
  const [availableDates, setAvailableDates] = useState([]);
  // const currentUser = JobSeekerAuthService.getCurrentUser();
  const [isFirstRender, setIsFirstRender] = useState(false);

  // const navigate = useNavigate();

  useEffect(() => {
    if (isFirstRender) {
      return; // Skip the first render
    }
    setIsFirstRender(true);

    // JobSeekerService.getDashboard().then(
    //   (response) => {
    //     console.log(response.data);
    //     if(response.data == null){
    //       navigate("/job-seeker/profile");
    //     }
    //   },
    //   (error) => {
    //     const _content =
    //       (error.response && error.response.data) ||
    //       error.message ||
    //       error.toString();
    //   }
    // );
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
                Accepted
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Status
              </th>
              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Consultant Name
              </th>

              <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                  <p class="text-gray-900 whitespace-no-wrap">2023-09-05</p>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                  <p class="text-gray-900 whitespace-no-wrap">11.00</p>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                  <p class="text-gray-900 whitespace-no-wrap">15.00</p>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex">
                  <p class="text-gray-900 whitespace-no-wrap">15.00</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobSeekerGetAppointment;
