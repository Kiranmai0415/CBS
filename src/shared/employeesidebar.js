
import { NavLink } from "react-router-dom";
import { FaBars, FaCalendar } from "react-icons/fa";
import profile from '../images/profile.svg'
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "../shared/sidebarMenu";
import { ReactComponent as Calendar } from '../images/calendar_month.svg';
import { ReactComponent as Monitor } from '../images/monitor.svg';
import { ReactComponent as Work } from '../images/work.svg';
import { ReactComponent as Employee_Badge } from '../images/employee_badge.svg';


const routes = [

    
    {
        path: "/Dashboard",
        name: "Dashboard",
        icon: <Monitor />,

    },
    {
        path: "/attendence",   
        name: "Attendence",
        icon: <Calendar/>,
    },
    {
        path: "/leaveManagement",
        name: "LeaveManagement",
        icon: <Work />,
    },
    {
        path: "/employeedetails",
        name: "EmployeeDetails",
        icon: <Employee_Badge />,
    },

];

const EmpSideBar = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        < >

            <div className="main-container posStk radbtn">
                <motion.div
                    animate={{
                        width: isOpen ? "20%" : "4%",

                        transition: {
                            duration: 0.5,
                            // type: "spring",
                            // damping: 10,
                        },
                    }}
                    className={`sidebar `}
                >

                    <div className="menu-bar tar ">
                        <FaBars className=" cursPoint " onClick={toggle} />
                    </div>


                    {isOpen &&

                        <div className='drawer-top '>
                            {/* <FaBars className="menu-bar1 posAbs" onClick={toggle} /> */}

                            <div className='profile flx justify-center'>
                                <img className='profile-icon' src={profile} alt='drawer image' />
                            </div>
                            <div className='profile2 flx justify-center'>
                                <p className='text-color fntXXLg fntwdt justify-center'><b>Admin</b></p>
                            </div>
                            <div>
                                <p className='text-color fntMd fntwdt justify-center flx'>Admin@Codexbox.com</p>
                            </div>
                        </div>}

                    <section className="routes">
                        {routes.map((route, index) => {
                            if (route.subRoutes) {
                                return (
                                    <SidebarMenu
                                        setIsOpen={setIsOpen}
                                        route={route}
                                        // showAnimation={showAnimation}
                                        isOpen={isOpen}
                                    />
                                );
                            }

                            return (
                                <NavLink
                                    to={route.path}
                                    key={index}
                                    className="flx "
                                   
                                >
                                    <div className="icon pl2">{route.icon}</div>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                // variants={showAnimation}
                                                // initial="hidden"
                                                // animate="show"
                                                // exit="hidden"
                                                className="link_text pl1 name-color underline"
                                            >
                                               <b> {route.name}</b>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            );
                        })}
                    </section>
                </motion.div>

                <main>{children}</main>
            </div>

        </>
    );
};

export default EmpSideBar;
