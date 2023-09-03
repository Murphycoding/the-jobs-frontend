import React from "react";

const JobSeekerGetAppointment = () => {
  return (
    <body>
      <div class="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                for="company"
              >
                Approve or not*
              </label>
              <input
                class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                id="company"
                type="text"
              />
            </div>
          </div>
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/3 px-3">
              <label
                class="uppercase tracking-wide text-black text-xs font-bold mb-2"
                for="application-link"
              >
                Appoinment Link*
              </label>
              <input
                class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                id="application-link"
                type="text"
                placeholder="http://...."
              />
            </div>
          </div>
          <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Date
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Start time
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      End Time
                    </th>

                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <p class="text-gray-900 whitespace-no-wrap">
                        asd
                          </p>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <p class="text-gray-900 whitespace-no-wrap">
                            fdg
                          </p>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <p class="text-gray-900 whitespace-no-wrap">
                            425424
                          </p>
                        </div>
                      </td>

                      
                    </tr>
               
                </tbody>
            </table>
        </div>
      </div>
    </body>
    
  );
};

export default JobSeekerGetAppointment;
