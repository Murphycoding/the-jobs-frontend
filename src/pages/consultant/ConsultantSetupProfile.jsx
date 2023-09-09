import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ConsultantService from "../../services/consultant.service";
import ConsultantAuthService from "../../services/consultant_auth.service";

const JobSeekerSetupProfile = () => {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [contactnumber, setContactnumber] = useState("");
  const [nic, setNIC] = useState("");
  const [jobtype, setJobtype] = useState("");
  const [specialized_country, setSpecializedCountry] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const submitProfile = (event) => {
    event.preventDefault();
    setLoading(true);

    console.log(jobtype);

    ConsultantService.profile(
      firstname,
      lastname,
      dob,
      gender,
      address,
      contactnumber,
      nic,
      jobtype,
      specialized_country
    ).then(
      () => {
        console.log("Logging successful");
        navigate("/consultant");
      },
      (error) => {
        if (error.response && error.response.status === 401) {
          console.log("Unauthorized error:", error);
          // ConsultantAuthService.logout();
          navigate("/consultant/profile");
        }
        setLoading(false);
        console.log(error);
        alert("Invalid username or password");
      }
    );
  };

  return (
    <div className="py-10  bg-gray-200">
      <div class="container w-2/5 bg-white mx-auto my-10 p-10 rounded-lg shadow-xl">
        <h1 id="title" class="text-3xl al font-bold text-gray-800 mb-3 ">
          Welcome to consultant profile
        </h1>

        <h1 id="title" class="text-4xl font-bold text-gray-800 mb-0">
          Create account
        </h1>
        <p id="description" class="text-gray-600">
          Complete the form with your personal information
        </p>

        <form onSubmit={submitProfile}>
          <label class="block my-3 mt-8" for="name" id="name-label">
            <span class="font-medium text-gray-700">First Name</span>
            <input
              class="bg-gray-100 border rounded focus:border-blue-400 outline-none w-full block p-2 mt-2"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Enter your first name"
              required
            />
          </label>
          <label class="block my-3 mt-8" for="name" id="name-label">
            <span class="font-medium text-gray-700">Last Name</span>
            <input
              class="bg-gray-100 border rounded focus:border-blue-400 outline-none w-full block p-2 mt-2"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
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
              value={dob}
              onChange={(e) => setDob(e.target.value)}
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
                  value={gender}
                  onChange={(e) => setGender("gender")}
                  id="gender-male"
                  name="gender"
                />{" "}
                Male
              </label>
              <label for="gender-female">
                <input
                  type="radio"
                  id="gender-female"
                  name="gender"
                  value="female"
                  onChange={(e) => setGender("female")}
                />{" "}
                Female
              </label>
            </div>
          </label>
          <label class="block my-3 mt-8" for="name" id="name-label">
            <span class="font-medium text-gray-700">Address</span>
            <input
              class="bg-gray-100 border rounded focus:border-blue-400 outline-none w-full block p-2 mt-2"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="address"
              required
            />
          </label>
          <label class="block my-3 mt-8" for="name" id="name-label">
            <span class="font-medium text-gray-700">Contact Number</span>
            <input
              class="bg-gray-100 border rounded focus:border-blue-400 outline-none w-full block p-2 mt-2"
              type="text"
              value={contactnumber}
              onChange={(e) => setContactnumber(e.target.value)}
              placeholder="+94"
              required
            />
          </label>
          <label class="block my-3 mt-8" for="name" id="name-label">
            <span class="font-medium text-gray-700">NIC Number</span>
            <input
              class="bg-gray-100 border rounded focus:border-blue-400 outline-none w-full block p-2 mt-2"
              type="text"
              value={nic}
              onChange={(e) => setNIC(e.target.value)}
              placeholder="NIC number"
              required
            />
          </label>
          <label class="block my-3 mt-8" for="name" id="name-label">
            <span class="font-medium text-gray-700">Specialized Country</span>
            <input
              class="bg-gray-100 border rounded focus:border-blue-400 outline-none w-full block p-2 mt-2"
              type="text"
              value={specialized_country}
              onChange={(e) => setSpecializedCountry(e.target.value)}
              placeholder="specialized country"
              required
            />
          </label>
          <label class="block my-3 mt-8" for="name" id="name-label">
            <span class="font-medium text-gray-700">specialized Job Type</span>
            <input
              class="bg-gray-100 border rounded focus:border-blue-400 outline-none w-full block p-2 mt-2"
              type="text"
              value={jobtype}
              onChange={(e) => setJobtype(e.target.value)}
              placeholder="specialized job type"
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
