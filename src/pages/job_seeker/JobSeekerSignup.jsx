import { Link, useNavigate  } from "react-router-dom";
import React, { useState } from "react";
import JobSeekerService from "../../services/jobseeker_auth.service";

const JobSeekerSignup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    // Perform register logic here
    console.log("Login button clicked");
    console.log("Username:", username);
    console.log("Password:", password);

    JobSeekerService.register(username,email,password).then(
      () => {
        console.log("Logging successful");
        navigate("/job-seeker/login");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div class="container mx-auto p-8 mt-36 flex">
      <div class="max-w-md w-full mx-auto">
        <div class="bg-white rounded-lg overflow-hidden shadow-2xl">
          <div class="p-8">
            <div className=" h3  text-center">Job Seeker</div>
            <form onSubmit={handleSignup}>
              <div class="mb-5">
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium text-gray-600"
                >
                  User Name
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
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-600"
                >
                  Email
                </label>

                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                value="Register"
                disabled={loading}
              />
            </form>
            {message && <p>{message}</p>}
          </div>
          <div class="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
            <Link to="/job-seeker/signup" className="text-gray-600">
              Job Seeker
            </Link>
            <Link to="/consultant/signup" className="text-gray-600">
              Consunltant
            </Link>
            <Link to="/admin/login" className="text-gray-600">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerSignup;
