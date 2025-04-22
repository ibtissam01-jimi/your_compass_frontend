import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/forms/login";
import HomePage from "./components/pages/homePage";
import BusinessForm from "./components/forms/addBusiness";
import SignUp from "./components/forms/signin";
import ResetPassword from "./components/forms/resetPassword";
import ProfileForm from "./components/forms/addGuides";
import AboutPage from "./components/pages/aboutPage";
import Sidebar from "./components/admin/menuAdmin"; // Keep the Sidebar import
import AdminPage from "./components/pages/adminPage";
import AdminProfile from "./components/admin/AdminProfile";
import Favorites from "./components/home/Favorites";
import SubmissionsTable from "./components/admin/Submissions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/forget_password" element={<ResetPassword />} />
        <Route path="/profileGuide" element={<ProfileForm />} />
        <Route path="/AddBuss" element={<BusinessForm />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/create_signup" element={<SignUp />} />
        <Route path="/signup_login" element={<LoginPage />} />
        <Route path="/your-cancel-destination" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/admin-sidebar" element={<Sidebar />} /> {/* Keep Sidebar route */}
        <Route path="/submission" element={<SubmissionsTable />} />
      </Routes>
    </Router>
  );
}

export default App;
