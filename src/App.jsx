import { useLocation, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { animateScroll } from "react-scroll";
import { useEffect } from "react";

import PublicLayout from "./layouts/public";
import HomePage from "./pages/public/HomePage";
import AdminLayout from "./layouts/admin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ConsultantLayout from "./layouts/consultant";
import ConsultantLogin from "./pages/consunltant/ConsultantLogin";
import ConsultantSignup from "./pages/consunltant/ConsultantSignup";
import ConsultantDashboard from "./pages/consunltant/ConsultantDashboard";
import JobSeekerLayout from "./layouts/job_seeker";
import JobSeekerLogin from "./pages/job_seeker/JobseekerLogin";
import JobSeekerSignup from "./pages/job_seeker/JobseekerSignup";
import JobSeekerDashboard from "./pages/job_seeker/JobSeekerDashboard";


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
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="login" element={<JobSeekerLogin />} />
      </Route>
      <Route path="/job-seeker" element={<JobSeekerLayout />}>
        <Route index element={<JobSeekerDashboard />} />
        <Route path="login" element={<JobSeekerLogin />} />
        <Route path="signup" element={<JobSeekerSignup />} />
      </Route>
      <Route path="/consultant" element={<ConsultantLayout />}>
        <Route index element={<ConsultantDashboard />} />
        <Route path="login" element={<ConsultantLogin />} />
        <Route path="signup" element={<ConsultantSignup />} />
      </Route>
    </Routes>
  );
}

export default App;
