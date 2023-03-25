import React, { useState } from "react";
import { t } from "i18next";
import { Image } from "react-bootstrap";
import HumanResources from "../../../images/human-resources.png";
import Dropdown from "../../../shared/dropdown";
import Input from "../../../shared/input";
import Checkbox from "../../../shared/checkbox";
import Button from "../../../shared/button";
import Sidebar from "../../../shared/sidebar";
import downArrow from "../../../images/Icon-down-arrow.svg";
import { result } from "lodash";
import Header from "../../../shared/header";
import OnlineHiring from "../../../shared/onlinehiring";
import OfflineHiring from "../../../shared/offlinehiring";



const EmployeeHiring = () => {
  const [select, setSelect] = useState("");
  const [form, setForm] = useState({
    hiringForm: {
      zoom: "",
      interviewerName: "",
      designation: "",
      feedback:"",
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
var value=''
  const handleOndropdown1 = (e) => {
     value = e.target.value;
    setSelect(value);
    console.log(value);
  };


  const [state, setState] = useState("");
  const handleOnRadio = (e) => {
    const value = e.target.value;
    setState(value);
    console.log(value);
  };
  
  if (
    dropdown === "Selected" &&
    hiringForm.zoom &&
    hiringForm.interviewerName &&
    hiringForm.designation
  ) {
    setDisplay({ ...display, L1: true });

    setForm({
      ...form,
      hiringForm: { zoom: "", interviewerName: "", designation: "" ,feedback:''},
    });
    setDropdown('')
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
console.log("form",hiringForm);
  return (
    <div className="flx">
      <div className="posAbs mt1 col-12">
        <Header />
      </div>
      <div className="posRel"><Sidebar /></div>
      <div className=" hrmain ml4 mt5-5 mr3 fntXLg header">
        <div className="flx mb2 mt3 ml1-5">
          <div className="Human-Resource-outer posRel ">
            <Image
              src={HumanResources}
              alt="HR logo"
              className="Human-Resource-inner  posAbs top10 left2"
            />
          </div>

          <div className=" mt0-3 pl1-5 ">
            <h3 className="head">{t("EMPLOYEE_HIRING")}</h3>
          </div>
        </div>

        <div className="mt5 ml3">
          <h4 className="head">
            <b> {t("PROFILE_HEADING")}</b>
          </h4>
        </div>
        <div className="ml3 mt2 flx posRel">
          <Dropdown
            className=" hr-dropdown text-onboard input-field  form-control"
            placeholder={t("SELECT_SOURCES")}
            data={[
              { value: `${t("NAUKRI")}`, label: `${t("NAUKRI")}` },
              { value: `${t("MONSTER")}`, label: `${t("MONSTER")}` },
              { value: `${t("LINKEDIN")}`, label: `${t("LINKEDIN")}` },
              { value: `${t("VENDORS")}`, label: `${t("VENDORS")}` },
            ]}
            onChange={handleOndropdown1}

          />
          <Image
            src={downArrow}
            alt="dropDown Icon"
            className=" posAbs arrow-drop3"
          />
          {select === `${t("VENDORS")}` ? <textarea className="ml2" /> : null}

        </div>

        <h5 className="head  mt2 ml3">
          <b>{t("MODE_OF_INTERVIEW")}</b>
        </h5>

        <div className="flx ml3 mb2 ">
          <Checkbox
            type="radio"
            name="group1"
            value={t("ONLINE")}
            className="mr1"
            onChange={handleOnRadio}
          />{" "}
          {t("ONLINE")}
          <Checkbox
            className="pl1-5 mr1 "
            type="radio"
            value={t("OFFLINE")}
            name="group1"
            onChange={handleOnRadio}
          />{" "}
          {t("OFFLINE")}
        </div>
        {state === `${t("ONLINE")}` ? (<OnlineHiring />
        ) : null}
        {state === `${t("OFFLINE")}` ? (<OfflineHiring />

        ) : null}
      </div>
    </div>
  );
}

export default EmployeeHiring;
