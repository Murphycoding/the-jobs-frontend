import React, { useState, useEffect } from "react";

const ConsultantAvailableDate = () => {
  const [temporaryData, setTemporaryData] = useState([]);
  const [inputData, setInputData] = useState({
    date: "",
    start_time: "",
    end_time: "",
  });

  const handleInputChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleAddData = () => {
    setTemporaryData([...temporaryData, inputData]);
    setInputData({ date: "", start_time: "", end_time: "" });
  };

  return (
    <div>
      <div class="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <div class="mb-10">
          <p class="text-gray-400">Pick Your Time Slot</p>
          <p class="text-3xl font-extrabold tracking-tight text-slate-900">
            Available
          </p>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Date
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="date"
              name="date"
              value={inputData.date}
              onChange={handleInputChange}
              placeholder="Date"
            />
            <p class="text-black-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div class="w-full md:w-1/4 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Start Time
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="time"
              name="start_time"
              value={inputData.start_time}
              onChange={handleInputChange}
              placeholder="Start Time"
            />
          </div>
          <div class="w-full md:w-1/4 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              End Time
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="time"
              name="end_time"
              value={inputData.end_time}
              onChange={handleInputChange}
              placeholder="End Time"
            />
          </div>
          <div class="w-full md:w-1/4 px-3 pt-6">
            <button
              class="appearance-none block w-full bg-gray-700 text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-teal-500 focus:border-gray-500"
              onClick={handleAddData}
              placeholder="Doe"
            >
              Add Data
            </button>
          </div>
        </div>
        <div class="text-center">
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
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
                  {temporaryData.map((item, index) => (
                    <tr>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {item.date}
                          </p>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {item.start_time}
                          </p>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex">
                          <p class="text-gray-900 whitespace-no-wrap">
                            {item.end_time}
                          </p>
                        </div>
                      </td>

                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                        <button
                          type="button"
                          class="inline-block text-gray-500 hover:text-gray-700"
                        >
                          <svg
                            class="inline-block h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div class="float-right ">
              <button class=" appearance-none block w-full bg-gray-700 text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-teal-500 focus:border-gray-500 content-end">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultantAvailableDate;
