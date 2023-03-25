
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import profile from '../images/profile.svg'
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "../shared/sidebarMenu";
import { ReactComponent as Emphiring } from '../images/human-resources-white.svg';
import { ReactComponent as Doc } from '../images/docs-white.svg';
import { ReactComponent as Verified } from '../images/verified-white.svg';
import { ReactComponent as Timesheet } from '../images/timesheet.svg';
import { ReactComponent as Payrool } from '../images/payrool-white.svg';
import { ReactComponent as HR } from '../images/hr-blue.svg';
import { ReactComponent as Admin } from '../images/Admin-blue.svg';
import { ReactComponent as Finance } from '../images/Finance-blue.svg';
import { ReactComponent as IT } from '../images/it-blue.svg';
import { ReactComponent as Sales } from '../images/Sales-blue.svg';


const routes = [

    {
        name: "HR",
        icon: <HR />,
        subRoutes: [
            {
                path: "/employeeHiring",
                name: "Employee hiring",
                icon: <Emphiring />,
            },
            {
                path: "/onBoarding",
                name: "Onboarding Formalities",
                icon: <Doc />,
            },
            {
                path: "/employeeIdCreation",
                name: "Employee Id Creation",
                icon: <Verified />,
            },
            {
                path: "/timeSheet",
                name: "Timesheet",
                icon: <Timesheet />,
            },
            {
                path: "/payroll",
                name: "Payroll Process",
                icon: <Payrool />,
            },
        ],
    },
    {
        path: "/admin",
        name: "Admin",
        icon: <Admin />,

    },
    {
        path: "/Finance",
        name: "Finance",
        icon: <Finance />,
    },
    {
        path: "/IT",
        name: "IT",
        icon: <IT />,
    },
    {
        path: "/Sales",
        name: "Sales",
        icon: <Sales />,
    },

];

const SideBar = ({ children }) => {

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

export default SideBar;
