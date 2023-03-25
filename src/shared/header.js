import React from "react";
import {
    Container,
    Navbar,
    Offcanvas,
    Nav,
    NavDropdown,
    Button,
    Form,
} from "react-bootstrap";
import bell from "../images/bell.svg";
import setting from "../images/settings.svg";
import mail from "../images/mail.svg";
import search from "../images/search.svg";
// import downArrow from '../images/downarrow.svg'
// import Acc_cir from '../images/circle_fill_col.svg'
// import Dropdown from './dropdown';
import user from '../images/user1.svg'
// import { ReactComponent as user} from "../images/user.svg";
// import { ReactComponent as password} from "../images/password.svg";
// import { ReactComponent as logout} from "../images/logout.svg";
import logout from '../images/logout1.svg'

import password from '../images/password2.svg'
const Header = () => {
    return (
        <>
            <div className='posRel borderwhite ml4'>
                <ul className="nav justify-content-center  col-12 ">
                    <li className='col-1'>

                    </li>
                    <li className="nav-item posRel col-5 ml5">
                        <a className="nav-link" href="#"><img className='settings-icon posAbs pl1 top13' src={search} alt="icon" />
                            <input className='search-input pl4-5 col-10' type="text" alt='name' placeholder='Search here' /></a>
                    </li>
                    <li className='col-2'>

                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="#"><img className='settings-icon' src={setting} alt="settings-icon " /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img className='settings-icon' src={bell} alt="bell-icon" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><img className='settings-icon' src={mail} alt="mail-icon" /></a>
                    </li>

                    <li className='nav-item'> <Nav>
                        <NavDropdown
                            // id="nav-dropdown-dark-example"
                            title="Name"
                            // menuVariant="dark"
                        >
                            <NavDropdown.Item href="#action/3.1" ><img src={user} alt="pro"></img> profile 
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"><img src={password}  alt="no img"></img>
                                change password
                            </NavDropdown.Item>

                            <NavDropdown.Item href="#action/3.4"><img src={logout}  alt="logout"></img>
                                logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav></li>


                    <li className="nav-item">
                        {/* <a className="nav-link posRel" href="#">
                                <label className='mr1 posAbs left2-5 pt0 letter'>N</label>
                                <img className='circle_col' src={Acc_cir} alt="circle-icon" />
                                </a> */}
                        <a className="nav-link" href="#"><div className='circle_col rounded-circle'><center className="size letter">N</center> </div></a>

                    </li>

                </ul>

            </div>
        </>
    );
}

export default Header;
