import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import JobSeekerService from "../../services/consultant_auth.service";

const ConsultantLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // Function to handle login button click
  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log("Login button clicked");
    console.log("Username:", username);
    console.log("Password:", password);

    JobSeekerService.login(username, password).then(
      () => {
        console.log("Logging successful");
        navigate("/consultant");
      },
      (error) => {
        console.log(error);
        alert("Invalid username or password");
      }
    );
  };

  return (
    <div class="container mx-auto p-8 mt-44 flex">
      <div class="max-w-md w-full mx-auto">
        <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
          <div class="p-8">
            <div className=" h3  text-center">Consunltant</div>
            <form onSubmit={handleLogin}>
            <div class="mb-5">
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium text-gray-600"
                >
                  username
                </label>

                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  class="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none"
                />
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

              <button class="w-full p-3 mt-4 bg-color2 text-white rounded shadow">
                Login
              </button>
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
            <a href="Consunltantlogin" class="font-medium text-indigo-500">
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

export default ConsultantLogin;
