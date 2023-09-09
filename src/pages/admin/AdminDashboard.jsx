import React, { useState, useEffect } from "react";
import AdminAuthService from "../../services/admin_auth.service";
import AdminService from "../../services/admin.service";
import ConsultantService from "../../services/consultant.service";
import { NavLink, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const currentAdmin = AdminAuthService.getCurrentUser();
  const [consultantList, setConsultantList] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  const [name, setName] = useState("");
  const [specificCountry, setSpecificCountry] = useState("");
  const [jobType, setJobType] = useState("");

  useEffect(() => {
    if (isFirstRender) {
      return;
    }
    setIsFirstRender(true);

    if (currentAdmin && currentAdmin.roles) {
      const isAdmin = currentAdmin.roles.includes("ROLE_ADMIN");

      setLoading(true);
      setError(!isAdmin);
    }
    ConsultantService.getAll().then(
      (response) => {
        console.log(response.data);
        setConsultantList(response.data);
      },
      (error) => {
        if (error.response && error.response.status === 401) {
          console.log("Unauthorized error:", error);
          AdminAuthService.logout();
          navigate("/admin/login");
        }
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }, [currentAdmin]);

  const openEditModal = (item) => {
    console.log(item);
    setSelectedItem(item);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (item) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };
  const submitUpdate = (event) => {
    console.log(selectedItem.id);
    setLoading(true);

    ConsultantService.update(selectedItem.id,name,name,jobType,specificCountry).then(
      (res) => {
        setIsEditModalOpen(false);
        setLoading(false);
        setError(false);
        
        
        ConsultantService.getAll().then(
          (response) => {
            console.log(response.data);
            setConsultantList(response.data);
          }
        );

        
      },
      (error) => {
        if (error.response && error.response.status === 401) {
          console.log("Unauthorized error:", error);
          AdminAuthService.logout();
          navigate("/admin/login");
        }
        setLoading(false);
        setError(true);
        console.log(error);
      }
    );
  };
  const submiDelete = (event) => {
    console.log(selectedItem.id);
    setLoading(true);

    ConsultantService.submitDelete(selectedItem.id).then(
      (res) => {
        setLoading(false);
        setError(false);
        setMessage("Your appointment has been scheduled successfully");
        setIsDeleteModalOpen(false);

          
        ConsultantService.getAll().then(
          (response) => {
            console.log(response.data);
            setConsultantList(response.data);
          }
        );
      },
      (error) => {
       alert("You have to Complete to appoinment")
      }
    );
  };
  return (
    <div>
      <div class="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <div class="mb-10">
          <p class="text-3xl font-extrabold tracking-tight text-slate-900">
            Manage Consultant Dashboard
          </p>
        </div>
        <table class="min-w-max w-full table-auto">
          <thead>
            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th class="py-3 px-6 text-left">Consultant Name </th>
              <th class="py-3 px-6 text-left">Specific Country</th>
              <th class="py-3 px-6 text-center">Job Type</th>
              
              <th class="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody class="text-gray-600 text-sm font-light">
            {consultantList.map((item) => (
              <tr class="border-b border-gray-200 hover:bg-gray-100">
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="mr-2">
                      {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="24"
                          height="24"
                          viewBox="0 0 48 48"
                          style=" fill:#000000;"
                        >
                          <path
                            fill="#80deea"
                            d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                          ></path>
                          <path
                            fill="#80deea"
                            d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                          ></path>
                          <path
                            fill="#80deea"
                            d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                          ></path>
                          <circle cx="24" cy="24" r="4" fill="#80deea"></circle>
                        </svg> */}
                    </div>
                    <span class="font-medium">
                      {item.first_name} {item.last_name}
                    </span>
                  </div>
                </td>
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <div class="mr-2"></div>
                    <span>{item.specialized_country}</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <span>{item.specialized_area} </span>
                </td>
                
                <td class="py-3 px-6 text-center">
                  <div class="flex item-center justify-center">
                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg
                        onClick={() => openEditModal(item)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </div>
                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg
                        onClick={() => openDeleteModal(item)}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isDeleteModalOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                {/* <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold"></h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div> */}
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                   Confrom Your delete.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setIsDeleteModalOpen(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => submiDelete()}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {isEditModalOpen ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Manage Consultant</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setIsEditModalOpen(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div class="mb-4 md:w-full">
                    <label for="name" class="block text-xs mb-1">
                      Consultant Name
                    </label>
                    <input
                      class="w-full border rounded p-2 outline-none focus:shadow-outline"
                      type="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      placeholder="Consultant Name"
                    />
                  </div>
                  <div class="mb-4 md:w-full">
                    <label for="name" class="block text-xs mb-1">
                      Specific Country
                    </label>
                    <input
                      class="w-full border rounded p-2 outline-none focus:shadow-outline"
                      type="name"
                      name="name"
                      value={specificCountry}
                      onChange={(e) => setSpecificCountry(e.target.value)}
                      id="name"
                      placeholder="Specific Country"
                    />
                  </div>
                  <div class="mb-4 md:w-full">
                    <label for="email" class="block text-xs mb-1">
                      Specific Job
                    </label>
                    <input
                      class="w-full border rounded p-2 outline-none focus:shadow-outline"
                      type="email"
                      name="email"
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                      id="email"
                      placeholder=" Specific Job"
                    />
                  </div>
                  {/* <div class="mb-4 md:w-full">
                    <label for="email" class="block text-xs mb-1">
                      Free Time
                    </label>
                    <input
                      class="w-full border rounded p-2 outline-none focus:shadow-outline"
                      type="email"
                      name="email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      id="email"
                      placeholder=" Free Time"
                    />
                  </div> */}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setIsEditModalOpen(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => submitUpdate(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default AdminDashboard;
