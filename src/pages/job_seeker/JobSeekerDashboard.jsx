import React, { useState, useEffect } from "react";
import JobSeekerAuthService from "../../services/jobseeker_auth.service";
import JobSeekerService from "../../services/jobseeker.service";
import ConsultantService from "../../services/consultant.service";
import AvailableTimeService from "../../services/available_time.service";
import AppointmentService from "../../services/appointment.service";
import { NavLink, useNavigate } from "react-router-dom";

const JobSeekerDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);
  const currentUser = JobSeekerAuthService.getCurrentUser();
  const [consultantList, setConsultantList] = useState([]);
  const [isFirstRender, setIsFirstRender] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedID, setSelectedID] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isFirstRender) {
      return;
    }
    setIsFirstRender(true);
    if (currentUser && currentUser.roles) {
      const isConsultant = currentUser.roles.includes("ROLE_jOB_SEEKER");

      JobSeekerService.getDashboard().then(
        (response) => {
          console.log(response.data);
          if (response.data == null) {
            navigate("/job-seeker/profile");
          }
        },
        (error) => {
          const _content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );

      ConsultantService.getAll().then(
        (response) => {
          console.log(response.data);
          setConsultantList(response.data);
        },
        (error) => {
          const _content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );

      setLoading(true);
      setError(!isConsultant);
    }
  }, [currentUser]);

  const openBookingModal = (id) => {
    setSelectedID(id);
    setIsBookingModalOpen(true);
    console.log("sad");
  };

  const openEditModal = (id) => {
    AvailableTimeService.getavailable_time(id).then(
      (response) => {
        setSelectedItem(response.data);
        setIsViewModalOpen(true);
      },
      (error) => {}
    );
  };
  
  const submitBooking = (event) => {
    console.log("sad");
    setLoading(true);

    AppointmentService.save(selectedID).then(
      (res) => {
        setLoading(false);
        setError(false);
        setMessage("Your appointment has been scheduled successfully");
        setIsBookingModalOpen(false);
      },
      (error) => {
        setLoading(false);
        setError(true);
        console.log(error);
        setMessage("ERROR ");
        setIsBookingModalOpen(true);
      }
    );
  };
  return (
    <div>
      <div class="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <div class="mb-10">
          <p class="text-3xl font-extrabold tracking-tight text-slate-900">
            Pick Your Consultants
          </p>
          <h1>Choose Destination And Choose Your Jobtype. </h1>
        </div>
        {message && (
              <div
              className={`${
                error
                  ? 'bg-red-100 border border-red-400 text-red-700'
                  : 'bg-green-100 border border-green-400 text-green-700'
              } px-4 py-3 rounded relative`}
                role="alert"
              >
                <strong class="font-bold">{error?"ERROR":"SUCEESS"} </strong>
                <span class="block sm:inline">
                {message}
                </span>
              </div>
            )}
        <table class="min-w-max w-full table-auto">
          <thead>
            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th class="py-3 px-6 text-left">Consultants Name </th>
              <th class="py-3 px-6 text-left">Specific Country</th>
              <th class="py-3 px-6 text-center">Job Type</th>
              <th class="py-3 px-6 text-center">Free Time </th>
              <th class="py-3 px-6 text-center">Book</th>
            </tr>
          </thead>
          <tbody class="text-gray-600 text-sm font-light">
            {consultantList.map((item) => (
              <tr class="border-b border-gray-200 hover:bg-gray-100">
                <td class="py-3 px-6 text-left whitespace-nowrap">
                  <div class="flex items-center">
                    <span class="font-medium">
                      {item.first_name} {item.last_name}
                    </span>
                  </div>
                </td>
                <td class="py-3 px-6 text-left">
                  <div class="flex items-center">
                    <div class="mr-2"></div>
                    <span>United Kingdom</span>
                  </div>
                </td>
                <td class="py-3 px-6 text-center">
                  <span>UI/UX Designer </span>
                </td>
                <td class="py-3 px-6 text-center">
                  <button onClick={() => openEditModal(item.id)}>view</button>
                  {/* <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                {item.map((item) => (

                ))}
                </span> */}
                </td>
                <td class="py-3 px-6 text-center">
                  <button onClick={() => openBookingModal(item.id)}>
                    Booking
                  </button>
                  {/* <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                {item.map((item) => (

                ))}
                </span> */}
                </td>
                {/* <td class="py-3 px-6 text-center">
                  <div class="flex item-center justify-center">
                    <NavLink to="" className="text-gray-600">
                      Booking
                    </NavLink>
                  </div>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
        {isViewModalOpen ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}

                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    {selectedItem.map((item) => (
                      <input type="text" name="" value={item.start_at} id="" />
                    ))}
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="bg-gray-700 text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setIsViewModalOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        {isBookingModalOpen ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}

                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p class="text-gray-400">
                      Before You booking ,read this
                      <br />
                      You can't cancel the appoinment after booking
                      <br />
                      <p class="text-pink-400">
                        So, plase Confrom your Booking .
                      </p>
                      <br />
                      ThankYou!
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="bg-gray-700 text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setIsBookingModalOpen(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-gray-700 text-white active:bg-emerald-600 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      value="Submit"
                      onClick={() => submitBooking()}
                    >
                      Booking2
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default JobSeekerDashboard;
