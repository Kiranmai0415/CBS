import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from '../src/components/auth/login/login'
import Admin from './components/Admin/admin'
import ForgotPassword from './components/auth/forgotPassword/forgotPassword'
import ResetPassword from './components/auth/resetPassword/resetPassword'
import Signup from './components/auth/signup/signup'
import { Dashboard } from './components/dashboard/dashboard'
import EmployeeDetails from './components/employee-details/employee-details'
import ExpDetails from './components/employee-details/employeeex'
import EmployeeHiring from './components/hr/employeeHiring/employeeHiring'
import EmployeeIdCreation from './components/hr/employeeIdCreation/employeeIdCreation'
import OnBoarding from './components/hr/onBoarding/onBoarding'
import PayRoll from './components/hr/payRoll/payRoll'
import TimeSheet from './components/hr/timeSheet/timeSheet'
import Leave_Management from './components/leave_management/leave_management'
import EmpSideBar from './shared/employeesidebar'
import Header from './shared/header'
import Loader from './shared/loader'
import Adduser from './shared/modal'
import Sidebar from "./shared/sidebar";

const KiranRoutes = () => {
    const loading = useSelector((state) => state.Loader.loading);
    return (
        <div>

            <BrowserRouter>
                <Loader loading={loading} />
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/forgot' element={<ForgotPassword />} />
                    <Route path='/reset' element={<ResetPassword />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/employeeHiring" element={<EmployeeHiring />} />
                    <Route path="/onBoarding" element={<OnBoarding />} />
                    <Route path="/employeeIdCreation" element={<EmployeeIdCreation />} />
                    <Route path="/payRoll" element={<PayRoll />} />
                    <Route path="/timeSheet" element={<TimeSheet />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/" element={<Navigate replace to="/Login" />} />
                    <Route path="*" element={<Navigate replace to="/Login" />} />
                    <Route path="/sidebar" element={<Sidebar />} />
                    <Route path="/header" element={<Header />} />
                    <Route path="/modal" element={<Adduser />} />
                    <Route path='/employeedetails' element={<EmployeeDetails />} />
                    <Route path='/empsidebar' element={<EmpSideBar />} />
                    <Route path='/expdetails' element={<ExpDetails />} />
                    <Route path='/leavemanagement' element={<Leave_Management />} />



                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default KiranRoutes