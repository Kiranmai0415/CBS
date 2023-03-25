// import React from "react";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { t } from "i18next";
import {
    Image,
    Nav,
    NavLink,
    NavItem
} from "react-bootstrap";
// import HumanResources from "../../../images/human-resources.png";

import Dropdown from "../shared/dropdown";
import Input from "../shared/input";
// import Checkbox from "../../../shared/checkbox";
import Button from "../shared/button";
// import Sidebar from "../../../shared/sidebar";
// import downArrow from "../../../images/Icon-down-arrow.svg";
import downArrow from "../images/Icon-down-arrow.svg";
// import { result } from "lodash";
// import Header from "../../../shared/header";


const OfflineHiring = (props) => {

    const [select, setSelect] = useState("");
    const [form, setForm] = useState({
        hiringForm: {
            zoom: "",
            interviewerName: "",
            designation: "",
        },
        errors: {
            zoom: "",
            interviewerName: "",
            designation: "",
        },
    });
    const [display, setDisplay] = useState({ L1: true, L2: false, Final: false });

    const { hiringForm, errors } = form;
    const [dropdown, setDropdown] = useState("");

    // const handleOndropdown1 = (e) => {
    //     const value = e.target.value;
    //     setSelect(value);
    //     console.log(value);
    // };
    var value = ''
    const handleOndropdown2 = (e) => {
        console.log('ip',value);
        value = e.target.value;
        setDropdown(value);
        
        value=''
        console.log("dn",value);

    };

    // const [state, setState] = useState("");
    // const handleOnRadio = (e) => {
    //     const value = e.target.value;
    //     setState(value);
    //     console.log(value);
    // };
    const handleInputChange = (e) => {
        hiringForm[e.target.name] = e.target.value;
        errors[e.target.name] = "";
        setForm({ ...select, hiringForm: hiringForm, errors: errors });
        console.log(hiringForm);
    };

    function Condition() {
        if (!hiringForm.zoom) {
            errors.zoom = `${t("REQIRED_ERROR_FIELD")}`;
        }
        if (!hiringForm.interviewerName) {
            errors.interviewerName = `${t("REQIRED_ERROR_FIELD")}`;
        }
        if (!hiringForm.designation) {
            errors.designation = `${t("REQIRED_ERROR_FIELD")}`;
        }
        setForm({ ...form, errors: errors });
        console.log("done", form.errors);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        Condition();
        if (
            dropdown === "Selected" &&
            hiringForm.zoom &&
            hiringForm.interviewerName &&
            hiringForm.designation
        ) {
            setDisplay({ ...display, L1: false, L2: true });

            setForm({
                ...form,
                hiringForm: { zoom: "", interviewerName: "", designation: "" },
            });
            value=''
        } else if (
            dropdown === "Selected" &&
            hiringForm.interviewerName &&
            hiringForm.designation
        ) {
            setDisplay({ ...display, L1: false, L2: true });

            setForm({
                ...form,
                hiringForm: { interviewerName: "", designation: "" },
            });
        }
    };
    const onSubmitL2 = (e) => {
        e.preventDefault();
        Condition();

        if (
            dropdown === "Selected" &&
            hiringForm.zoom &&
            hiringForm.interviewerName &&
            hiringForm.designation
        ) {
            setDisplay({ ...display, L2: false, Final: true });

            setForm({
                ...form,
                hiringForm: { zoom: "", interviewerName: "", designation: "" },
            });
        } else if (
            dropdown === "Selected" &&
            hiringForm.interviewerName &&
            hiringForm.designation
        ) {
            setDisplay({ ...display, L2: false, Final: true });

            setForm({
                ...form,
                hiringForm: { interviewerName: "", designation: "" },
            });
        }
    };
    const onSubmitL3 = (e) => {
        e.preventDefault();
        Condition();

        if (
            dropdown === "Selected" &&
            hiringForm.zoom &&
            hiringForm.interviewerName &&
            hiringForm.designation
        ) {
            setDisplay({ ...display, L1: true });

            setForm({
                ...form,
                hiringForm: { zoom: "", interviewerName: "", designation: "" },
            });
        } else if (
            dropdown === "Selected" &&
            hiringForm.interviewerName &&
            hiringForm.designation
        ) {
            setDisplay({ ...display, L1: true });

            setForm({
                ...form,
                hiringForm: { interviewerName: "", designation: "" },
            });
        }
    }
    return (

        <div>
            {display.L1 ? (
                <div>
                    <div className="ml3">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link className="hover" href="/home">
                                    {t("L1 ROUND")}
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                {dropdown === "Selected" ? (
                                    <Nav.Link href="/Login">{t("L2 ROUND")}</Nav.Link>
                                ) : (
                                    <Nav.Link href="/Login" className="disabled-link">
                                        {t("L2 ROUND")}
                                    </Nav.Link>
                                )}
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/Login" className="disabled-link">
                                    {t("FINAL ROUND")}
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>

                    <div>
                        <div className="ml3 pt2">
                            <Input
                                label={t("INTERVIEWER NAME")}
                                className={`hr-input ${errors.interviewerName && "borderRed txt_color"
                                    }`}
                                name="interviewerName"
                                value={hiringForm.interviewerName}
                                onChange={handleInputChange}
                            />
                            {errors.interviewerName ? (
                                <div className="text-danger">
                                    {" "}
                                    {errors.interviewerName}
                                </div>
                            ) : null}
                            <Input
                                label={t("DESIGNATION")}
                                className={`hr-input ${errors.designation && "borderRed txt_color"
                                    }`}
                                name="designation"
                                value={hiringForm.designation}
                                onChange={handleInputChange}
                            />
                            {errors.designation ? (
                                <div className="text-danger"> {errors.designation}</div>
                            ) : null}
                        </div>

                        <p className=" ml3 mt1-5">{t("FEEDBACK")}</p>
                        <div className="hr-feedback posRel ml3">
                            <Dropdown
                                className="hr-dropdown text-onboard form-control  mt2 ml2 "
                                placeholder={t("SELECT_STATUS")}
                                data={[
                                    {
                                        value: `${t("SELECTED")}`,
                                        label: `${t("SELECTED")}`,
                                    },
                                    {
                                        value: `${t("REJECTED")}`,
                                        label: `${t("REJECTED")}`,
                                    },
                                    { value: `${t("HOLD")}`, label: `${t("HOLD")}` },
                                ]}
                                // onChange={handleOndropdown2}
                            />
                            <Image
                                src={downArrow}
                                alt="dropDown Icon"
                                className=" posAbs arrow-drop2  "
                            />

                            <div className="mt2 ml0">{t("COMMENTS")}</div>
                            <div>
                                <textarea className="hr-input1 mt1 mb1-6 ml0-5"></textarea>
                            </div>
                            <Button
                                className="ml1-5 mt3 hr-button"
                                text={t("SUBMIT_BUTTON")}
                                onSubmit={onSubmit}
                            />
                        </div>
                    </div>
                </div>
            ) : display.L2 ? (
                <div>
                    <div className="ml3">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link className="disabled-link">
                                    {t("L1 ROUND")}
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                {dropdown === "Selected" ? (
                                    <Nav.Link className="hover">{t("L2 ROUND")}</Nav.Link>
                                ) : (
                                    <Nav.Link className="enabled-link">
                                        {t("L2 ROUND")}
                                    </Nav.Link>
                                )}
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/Login" className="disabled-link">
                                    {t("FINAL ROUND")}
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>

                    <div>
                        <div className="ml3 pt2">
                            <Input
                                label={t("INTERVIEWER NAME")}
                                className={`hr-input ${errors.interviewerName && "borderRed txt_color"
                                    }`}
                                name="interviewerName"
                                value={hiringForm.interviewerName}
                                onChange={handleInputChange}
                            />
                            {errors.interviewerName ? (
                                <div className="text-danger">
                                    {" "}
                                    {errors.interviewerName}
                                </div>
                            ) : null}
                            <Input
                                label={t("DESIGNATION")}
                                className={`hr-input ${errors.designation && "borderRed txt_color"
                                    }`}
                                name="designation"
                                value={hiringForm.designation}
                                onChange={handleInputChange}
                            />
                            {errors.designation ? (
                                <div className="text-danger"> {errors.designation}</div>
                            ) : null}
                        </div>

                        <p className=" ml3 mt1-5">{t("FEEDBACK")}</p>
                        <div className="hr-feedback posRel ml3">
                            <Dropdown
                                className="hr-dropdown text-onboard form-control mt2 ml2 "
                                placeholder={t("SELECT_STATUS")}
                                data={[
                                    {
                                        value: `${t("SELECTED")}`,
                                        label: `${t("SELECTED")}`,
                                    },
                                    {
                                        value: `${t("REJECTED")}`,
                                        label: `${t("REJECTED")}`,
                                    },
                                    { value: `${t("HOLD")}`, label: `${t("HOLD")}` },
                                ]}
                                onChange={handleOndropdown2}
                            /><Image
                                src={downArrow}
                                alt="dropDown Icon"
                                className=" posAbs arrow-drop2  "
                            />

                            <div className="mt2 ml0">{t("COMMENTS")}</div>
                            <div>
                                <textarea className="hr-input1 mt1 mb1-6 ml0-5"></textarea>
                            </div>
                            <Button
                                className="ml15-5 mt3 hr-button"
                                text={t("SUBMIT_BUTTON")}
                                onSubmit={onSubmitL2}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="ml3">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link className="disabled-link">
                                    {t("L1 ROUND")}
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="disabled-link">
                                    {t("L2 ROUND")}
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                {dropdown === "Selected" ? (
                                    <Nav.Link className="hover">
                                        {t("FINAL ROUND")}
                                    </Nav.Link>
                                ) : (
                                    <Nav.Link className="enabled-link">
                                        {t("FINAL ROUND")}
                                    </Nav.Link>
                                )}
                            </Nav.Item>
                        </Nav>
                    </div>

                    <div>
                        <div className="ml3 pt2">
                            <Input
                                label={t("INTERVIEWER NAME")}
                                className={`hr-input ${errors.interviewerName && "borderRed txt_color"
                                    }`}
                                name="interviewerName"
                                value={hiringForm.interviewerName}
                                onChange={handleInputChange}
                            />
                            {errors.interviewerName ? (
                                <div className="text-danger">
                                    {" "}
                                    {errors.interviewerName}
                                </div>
                            ) : null}
                            <Input
                                label={t("DESIGNATION")}
                                className={`hr-input ${errors.designation && "borderRed txt_color"
                                    }`}
                                name="designation"
                                value={hiringForm.designation}
                                onChange={handleInputChange}
                            />
                            {errors.designation ? (
                                <div className="text-danger"> {errors.designation}</div>
                            ) : null}
                        </div>

                        <p className=" ml3 mt1-5">{t("FEEDBACK")}</p>
                        <div className="hr-feedback  posRel ml3">
                            <Dropdown
                                className="hr-dropdown text-onboard form-control  mt2 ml2 "
                                placeholder={t("SELECT_STATUS")}
                                data={[
                                    {
                                        value: `${t("SELECTED")}`,
                                        label: `${t("SELECTED")}`,
                                    },
                                    {
                                        value: `${t("REJECTED")}`,
                                        label: `${t("REJECTED")}`,
                                    },
                                    { value: `${t("HOLD")}`, label: `${t("HOLD")}` },
                                ]}
                                onChange={handleOndropdown2}
                            /><Image
                                src={downArrow}
                                alt="dropDown Icon"
                                className=" posAbs arrow-drop2 "
                            />

                            <div className="mt2 ml0">{t("COMMENTS")}</div>
                            <div>
                                <textarea className="hr-input1 mt1 mb1-6 ml0-5"></textarea>
                            </div>
                            <Button
                                className="ml15-5 mt3 hr-button"
                                text={t("SUBMIT_BUTTON")}
                                onSubmit={onSubmitL3}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>







    )
}

export default OfflineHiring;