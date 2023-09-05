import React, { useState, useEffect } from "react";
import AvailableTimeService from "../../services/available_time.service";
import ConsultantService from "../../services/consultant.service";
import { useParams } from 'react-router-dom';

const ViewProfiles = () => {
  const { id } = useParams();
  const [availableDates, setAvailableDates] = useState([]);
  const [consultant, setConsultant] = useState(null);
  const [isFirstRender, setIsFirstRender] = useState(false);

  useEffect(() => {
    console.log(id);
    if (isFirstRender) {
      return; // Skip the first render
    }
    setIsFirstRender(true);

    AvailableTimeService.getavailable_time(id).then(
      (response) => {
        setAvailableDates(response.data);
      },
      (error) => {}
    );
    ConsultantService.getConsultant(id).then(
      (response) => {
        setConsultant(response.data);
      },
      (error) => {}
    );
  });
  return (
    <div class="m-2 md:m-20 mt-12 p-2 md:p-5  bg-white rounded-3xl ">
      <div>
        <div class="mb-10 text-center">
          <div class="mx-auto w-32 h-32 mb-2 border rounded-full relative bg-gray-200 -100 mb-4 shadow-inset">
            <img id="image" class="object-cover w-full h-32 rounded-full" />
          </div>

          <label
            for="fileInput"
            type="button"
            class="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
              <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
              <circle cx="12" cy="13" r="3" />
            </svg>
            Browse Photo
          </label>

          <div class="mx-auto w-70 text-gray-500 text-xs text-center mt-1">
            Make An Appoinment To Contact Our Well Qualified Councilors.
          </div>

          <input
            name="photo"
            id="fileInput"
            accept="image/*"
            class="hidden"
            type="file"
            change="let file = document.getElementById('fileInput').files[0]; 
            var reader = new FileReader();
            reader.onload = (e) => image = e.target.result;
            reader.readAsDataURL(file);"
          />
        </div>

        <div class="mb-5 grid place-items-center ">
          <label for="firstname" class="font-bold mb-1 text-gray-600 block">
            Consultant Name
          </label>
          <input
            type="text"
            value={consultant.first_name}
            class="md:w-1/3  appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>

        <div class="mb-5 grid place-items-center ">
          <label for="email" class="font-bold mb-1 text-gray-600 block">
            Country
          </label>
          <input
            type="email"
            class="md:w-1/3  appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>

        <div class="mb-5 grid place-items-center ">
          <label for="email" class="font-bold mb-1 text-gray-700 block">
            Job Type
          </label>
          <input
            type="email"
            class="md:w-1/3  appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
        </div>
        <h2 className="text-center">PAKAYA</h2>
        <table class="mx-auto min-w-max w-400 table-auto">
          <thead>
            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th class="py-3 px-6 text-left">Start At </th>
              <th class="py-3 px-6 text-left">End At</th>
            </tr>
          </thead>
          <tbody class="text-gray-600 text-sm font-light">
            {availableDates.map((item) => (
              <tr class="border-b border-gray-200 hover:bg-gray-100">
                <td class="py-3 px-6 text-left">
                  <span>{item.start_at }</span>
                </td>
                <td class="py-3 px-6 text-left">
                <span>{item.end_at }</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full  ">
          Book Your Appoinment
        </button>
      </div>
    </div>
  );
};

export default ViewProfiles;
