import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import JobSeekerService from "../../services/jobseeker_auth.service";
import InputField from "./components/InputField";

const JobSeekerLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // Function to handle login button click
  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    // Perform login logic here
    console.log("Login button clicked");
    console.log("Username:", username);
    console.log("Password:", password);

    JobSeekerService.login(username, password).then(
      (res) => {
        setUsername("");
        setPassword("");
        if(res.roles.includes("ROLE_jOB_SEEKER")){
          navigate("/job-seeker");
        }else{
          setLoading(false);
          setMessage("You are not Job Seeker");
        }
      },
      (error) => {
        setLoading(false);
        console.log(error);
        setMessage("Invalid username or password");
        // alert("Invalid username or password");
      }
    );
  };


  return (
    <div class="container mx-auto p-8 mt-44 flex">
      <div class="max-w-md w-full mx-auto">
        <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
          <div class="p-8">
            <div className=" h3  text-center">Job Seeker</div>
            {message && (
              <div
                class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong class="font-bold">ERROR </strong>
                <span class="block sm:inline">
                {message}
                </span>
                {/* <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    class="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span> */}
              </div>
            )}
            <form onSubmit={handleLogin}>
              <div class="mb-5">
              <InputField onInputChange={(e) => setUsername(e.target.value)} />
              </div>

              <div class="mb-5">
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-600"
                >
                  Password
                </label>

                <input
                  type="text"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                />
              </div>
              <input
                type="submit"
                class="w-full p-3 mt-4 bg-color2 text-white rounded shadow"
                value="Login"
                disabled={loading}
              />
            </form>
          </div>
          <div class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
            <Link to="/job-seeker/login" className="text-gray-600">
              Job Seeker
            </Link>
            <Link to="/consultant/login" className="text-gray-600">
              Consunltant
            </Link>
            <Link to="/admin/login" className="text-gray-600">
              Admin
            </Link>
          </div>

          <div class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
            <a href="Signup" class="font-medium text-indigo-500">
              Create account
            </a>

            <a href="#" class="text-gray-600">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerLogin;
