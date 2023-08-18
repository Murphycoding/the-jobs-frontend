import { Link } from "react-router-dom";
import React, { useState } from "react";


const JobSeekerLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
 
  return (
    <div class="container mx-auto p-8 mt-44 flex">
      <div class="max-w-md w-full mx-auto">
        <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
          <div class="p-8">
            <div className=" h3  text-center">Job Seeker</div>
            <form >
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
              <input
                type="submit"
                class="w-full p-3 mt-4 bg-color2 text-white rounded shadow"
                value="Login"
              />
            </form>
          </div>
          <div class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
            <Link to="/Job_seekerlogin" className="text-gray-600">
              Job Seeker
            </Link>
            <Link to="/Consunltantlogin" className="text-gray-600">
              Consunltant
            </Link>
            <Link to="/AdminView" className="text-gray-600">
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