import React from "react";

const JobSeekerSetupProfile = () => {
  return (
    <div className="py-10  bg-gray-200">
      <div class="container w-2/5 bg-white mx-auto my-10 p-10 rounded-lg shadow-xl">
      <h1 id="title" class="text-3xl al font-bold text-gray-800 mb-3 ">
          Welcome  to job seeker profile
        </h1>
    
        <h1 id="title" class="text-4xl font-bold text-gray-800 mb-0">
          Create account
        </h1>
        <p id="description" class="text-gray-600">
          Complete the form with your personal information
        </p>

        <form id="survey-form">
          <label class="block my-3 mt-8" for="name" id="name-label">
            <span class="font-medium text-gray-700">First Name</span>
            <input
              class="bg-gray-100 border rounded focus:border-blue-400 outline-none w-full block p-2 mt-2"
              id="name"
              type="text"
              placeholder="Enter your first name"
              required
            />
          </label>
          <label class="block my-3 mt-8" for="name" id="name-label">
            <span class="font-medium text-gray-700">Last Name</span>
            <input
              class="bg-gray-100 border rounded focus:border-blue-400 outline-none w-full block p-2 mt-2"
              id="name"
              type="text"
              placeholder="Enter your last name"
              required
            />
          </label>
          
          <label class="block my-3" for="number" id="number-label">
            <span class="font-medium text-gray-700">Age</span>
            <input
              class="bg-gray-100 border rounded focus:border-blue-400 outline-none w-full block p-2 mt-2"
              id="number"
              type="number"
              placeholder="Enter your age"
              min="12"
              max="99"
              required
            />
          </label>
         
          <label class="block my-3" for="gender" id="gender-label">
            <span class="font-medium text-gray-700">Gender</span>
            <div class="my-3">
              <label for="gender-male" class="mr-2">
                <input
                  type="radio"
                  id="gender-male"
                  name="gender"
                  value="male"
                />{" "}
                Male
              </label>
              <label for="gender-female">
                <input
                  type="radio"
                  id="gender-female"
                  name="gender"
                  value="female"
                />{" "}
                Female
              </label>
            </div>
          </label>
          <label class="block my-3 mt-8" for="name" id="name-label">
            <span class="font-medium text-gray-700">Address</span>
            <input
              class="bg-gray-100 border rounded focus:border-blue-400 outline-none w-full block p-2 mt-2"
              id="name"
              type="text"
              placeholder="address"
              required
            />
          </label>
          <label class="block my-3 mt-8" for="name" id="name-label">
            <span class="font-medium text-gray-700">Contact Number</span>
            <input
              class="bg-gray-100 border rounded focus:border-blue-400 outline-none w-full block p-2 mt-2"
              id="name"
              type="text"
              placeholder="+94"
              required
            />
          </label>
          <label class="block my-3 mt-8" for="name" id="name-label">
            <span class="font-medium text-gray-700">Job Type </span>
            <input
              class="bg-gray-100 border rounded focus:border-blue-400 outline-none w-full block p-2 mt-2"
              id="name"
              type="text"
              placeholder="job type"
              required
            />
          </label>
          <input
            class="bg-blue-400 font-medium text-white w-full p-3 mt-4 rounded cursor-pointer"
            type="submit"
            id="submit"
            value="Submit"
          />
        </form>
      </div>
      <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
    </div>
  );
};

export default JobSeekerSetupProfile;
