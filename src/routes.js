import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/auth/login/login";
import Signup from "./components/auth/signup/signup";
import ResetPassword from "./components/auth/resetPassword/resetPassword";
import ForgotPassword from "./components/auth/forgotPassword/forgotPassword";
import Loader from "./shared/loader";
import PublicRoute from "./publicRoutes";
import PrivateRoute from "./privateRoutes";
import OnBoarding from "./components/hr/onBoarding/onBoarding";
import EmployeeHiring from "./components/hr/employeeHiring/employeeHiring";

import PayRoll from "./components/hr/payRoll/payRoll";
import TimeSheet from "./components/hr/timeSheet/timeSheet";
import { Dashboard } from "./components/dashboard/dashboard";
import Sidebar from "./shared/sidebar";
import Header from "./shared/header";
import EmployeeIdCreation from "./components/hr/employeeIdCreation/employeeIdCreation";
import Admin from "./components/Admin/admin";
import Adduser from "./shared/modal";




const AppRoutes = () => {
  const loading = useSelector((state) => state.Loader.loading);
  return (
    <Router>
      <Loader loading={loading} />
      <Routes>
        <Route path="/Login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route
          path="/Signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
        <Route
          path="/Forgot"
          element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          }
        />
        <Route
          path="/resetPassword/:resetToken"
          element={
            <PublicRoute>
              <ResetPassword />
            </PublicRoute>
          }
        />
        <Route
          path="/Reset/:id"
          element={
            <PublicRoute>
              <ResetPassword />
            </PublicRoute>
          }
        />
        <Route
          path="/Dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/employeeHiring"
          element={
            <PublicRoute>
              <EmployeeHiring />
            </PublicRoute>
          }
        />

        <Route
          path="/onBoarding"
          element={
            <PublicRoute>
              <OnBoarding />
            </PublicRoute>
          }
        />
        <Route
          path="/employeeIdCreation"
          element={
            <PublicRoute>
              <EmployeeIdCreation />
            </PublicRoute>
          }
        />
        <Route
          path="/payRoll"
          element={
            <PublicRoute>
              <PayRoll />
            </PublicRoute>
          }
        />
        <Route
          path="/timeSheet"
          element={
            <PublicRoute>
              <TimeSheet />
            </PublicRoute>
          }
        />
         <Route
          path="/admin"
          element={
            <PublicRoute>
              <Admin />
            </PublicRoute>
          }
        />
        <Route path="/" element={<Navigate replace to="/Login" />} />
        <Route path="*" element={<Navigate replace to="/Login" />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/header" element={<Header />} />
       <Route path="/modal" element={<Adduser/>} />

      </Routes>
    </Router>
  );
};
export default AppRoutes;
