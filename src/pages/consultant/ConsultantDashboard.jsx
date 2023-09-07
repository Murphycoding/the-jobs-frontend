import React from 'react';

const ConsultantDashboard = () => {

  
  return (
    <div>
      <div class="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <div class="mb-10">
        
          <p class="text-3xl font-extrabold tracking-tight text-slate-900">
            View Appointment
          </p>
        </div>
        <table class="min-w-max w-full table-auto">
          <thead>
            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th class="py-3 px-6 text-left">Job seeker  Name </th>
              <th class="py-3 px-6 text-left">Specific Country</th>
              <th class="py-3 px-6 text-center">Job Type</th>
           
              <th class="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody class="text-gray-600 text-sm font-light">
            
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default ConsultantDashboard;