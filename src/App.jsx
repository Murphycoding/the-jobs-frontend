import { useLocation, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { useEffect } from "react";

import PublicLayout from "./layouts/public";
import HomePage from "./pages/public/HomePage";
import AdminLayout from "./layouts/admin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import ConsultantLayout from "./layouts/consultant";
import ConsultantLogin from "./pages/consultant/ConsultantLogin";
import ConsultantSignup from "./pages/consultant/ConsultantSignup";
import ConsultantDashboard from "./pages/consultant/ConsultantDashboard";
import ConsultantAvailableDate from "./pages/consultant/ConsultantAvailableDate";
import ConsultantSetupProfile from "./pages/consultant/ConsultantSetupProfile";
import JobSeekerLayout from "./layouts/job_seeker";
import JobSeekerLogin from "./pages/job_seeker/JobSeekerLogin";
import JobSeekerSignup from "./pages/job_seeker/JobseekerSignup";
import JobSeekerSetupProfile from "./pages/job_seeker/JobSeekerSetupProfile";
import JobSeekerDashboard from "./pages/job_seeker/JobSeekerDashboard";
import JobSeekerGetAppointment from "./pages/job_seeker/JobSeekerGetAppointment";
import ViewProfiles from "./pages/job_seeker/ViewProfiles";


function App() {
  const directory = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="job-seeker/login" element={<JobSeekerLogin />} />
        <Route path="job-seeker/signup" element={<JobSeekerSignup />} />    
        <Route path="job-seeker/profile" element={<JobSeekerSetupProfile />} /> 
        <Route path="admin/login" element={<AdminLogin />} />
        <Route path="consultant/login" element={<ConsultantLogin />} />
        <Route path="consultant/signup" element={<ConsultantSignup />} />
        <Route path="consultant/signup/profile" element={<ConsultantSetupProfile />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
      </Route>
      <Route path="/job-seeker" element={<JobSeekerLayout />}>
        <Route index element={<JobSeekerDashboard />} />
        <Route path="appoinment" element={<JobSeekerGetAppointment />} />
        <Route path="viewprofiles/:id" element={<ViewProfiles />} />
      </Route>
      
      <Route path="/consultant" element={<ConsultantLayout />}>
        <Route index element={<ConsultantDashboard />} />
        <Route path="availabledate" element={<ConsultantAvailableDate />} />
      </Route>
    </Routes>
  );
}

export default App;
