import React, { useRef, useState } from 'react';
import Dropdown from '../../../shared/dropdown';
import Input from '../../../shared/input';
import { Row, Col, Image, Form } from 'react-bootstrap';
import EmpIdImage from '../../../images/verified-white.png';
import Checkbox from '../../../shared/checkbox';
import Button from '../../../shared/button';
import SideBar from '../../../shared/sidebar';
import Header from '../../../shared/header';
import { useTranslation } from "react-i18next";
import downArrow from "../../../images/Icon-down-arrow.svg";
import { isEmailValid, isNumberValid } from "../../../shared/utils";
import { useDispatch } from "react-redux";
import { HrTypes } from '../../../redux/action_types/hr_types'

const EmployeeIdCreation = () => {


  // const [state1, setState1] = useState(true)

  const [checked1, setChecked1] = useState("systemYes");
  const [checked2, setChecked2] = useState("companyMobileYes");
  const [checked3, setChecked3] = useState("bankAccountYes");
  const [checked4, setChecked4] = useState("locationAllowanceYes");

  const dispatch = useDispatch()
  const isChecked1 = (value1) => value1 === checked1;
  const isChecked2 = (value2) => value2 === checked2;
  const isChecked3 = (value3) => value3 === checked3;
  const isChecked4 = (value4) => value4 === checked4;






  const { t } = useTranslation();
  const [state, setState] = useState({
    emIdCreationForm: {
      empid: "",
      skill: "",
      experience: "",
      personalEmailId: "",
      workEmailId: "",
      mobileNumber: "",
      currentCTC: "",
      offeredCTC: "",
      dateOfJoin: "",
      designation: "",
      band: "",
      insurance: "",
      department: "",
      reportingManager: "",
      bankAccountnumber: "",
      billingStatus: "",
      client: "",
      clientCode: "",
      project: "",
      geo: "",
      shiftTimmings: "",
      shiftAllowance: "",
      workLocation: "",
    },
    errors: {
      empid: "",
      skill: "",
      experience: "",
      personalEmailId: "",
      workEmailId: "",
      mobileNumber: "",
      currentCTC: "",
      offeredCTC: "",
      dateOfJoin: "",
      designation: "",
      band: "",
      insurance: "",
      department: "",
      reportingManager: "",
      bankAccountnumber: "",
      billingStatus: "",
      client: "",
      clientCode: "",
      project: "",
      geo: "",
      shiftTimmings: "",
      shiftAllowance: "",
      workLocation: "",
    },
  });
  const clearObj = {
    empid: "",
    skill: "",
    experience: "",
    personalEmailId: "",
    workEmailId: "",
    mobileNumber: "",
    currentCTC: "",
    offeredCTC: "",
    dateOfJoin: "",
    designation: "",
    band: "",
    insurance: "",
    department: "",
    reportingManager: "",
    bankAccountnumber: "",
    billingStatus: "",
    client: "",
    clientCode: "",
    project: "",
    geo: "",
    shiftTimmings: "",
    shiftAllowance: "",
    workLocation: "",
  }
  const { emIdCreationForm, errors, } = state


  const validateEIC = (e) => {
    e.preventDefault();

    if (!emIdCreationForm.empid &&
      !emIdCreationForm.skill &&
      !emIdCreationForm.experience &&
      !emIdCreationForm.dateOfJoin &&
      !emIdCreationForm.designation &&
      !emIdCreationForm.band &&
      !emIdCreationForm.insurance &&
      !emIdCreationForm.department &&
      !emIdCreationForm.reportingManager &&
      !emIdCreationForm.billingStatus &&
      !emIdCreationForm.client &&
      !emIdCreationForm.clientCode &&
      !emIdCreationForm.project &&
      !emIdCreationForm.geo &&
      !emIdCreationForm.shiftTimmings &&
      !emIdCreationForm.shiftAllowance &&
      !emIdCreationForm.workLocation &&
      !emIdCreationForm.locationAllowance &&
      !emIdCreationForm.bankAccountnumber) {
      errors.empid = `${t('REQIRED_ERROR_FIELD')}`
      errors.skill = `${t('REQIRED_ERROR_FIELD')}`
      errors.experience = `${t('REQIRED_ERROR_FIELD')}`
      errors.dateOfJoin = `${t('REQIRED_ERROR_FIELD')}`
      errors.designation = `${t('REQIRED_ERROR_FIELD')}`
      errors.band = `${t('REQIRED_ERROR_FIELD')}`
      errors.insurance = `${t('REQIRED_ERROR_FIELD')}`
      errors.department = `${t('REQIRED_ERROR_FIELD')}`
      errors.reportingManager = `${t('REQIRED_ERROR_FIELD')}`
      errors.bankAccountnumber = `${t('REQIRED_ERROR_FIELD')}`
      errors.billingStatus = `${t('REQIRED_ERROR_FIELD')}`
      errors.client = `${t('REQIRED_ERROR_FIELD')}`
      errors.clientCode = `${t('REQIRED_ERROR_FIELD')}`
      errors.project = `${t('REQIRED_ERROR_FIELD')}`
      errors.geo = `${t('REQIRED_ERROR_FIELD')}`
      errors.shiftTimmings = `${t('REQIRED_ERROR_FIELD')}`
      errors.shiftAllowance = `${t('REQIRED_ERROR_FIELD')}`
      errors.workLocation = `${t('REQIRED_ERROR_FIELD')}`
      errors.locationAllowance = `${t('REQIRED_ERROR_FIELD')}`
    }

    if (isEmailValid(emIdCreationForm.personalEmailId)) {
      errors.personalEmailId = "";
    } else {
      errors.personalEmailId = `${t("EMAIL_ERROR")}`;
    }
    if (isEmailValid(emIdCreationForm.workEmailId)) {
      errors.workEmailId = "";
    } else {
      errors.workEmailId = `${t("EMAIL_ERROR")}`;
    }
    if (isEmailValid(emIdCreationForm.workEmailId)) {
      errors.workEmailId = "";
    } else {
      errors.workEmailId = `${t("EMAIL_ERROR")}`;
    }
    if (!emIdCreationForm.currentCTC) {
      errors.currentCTC = `${t("Please Enter currentCTC")}`;
    } else if (isNumberValid(emIdCreationForm.currentCTC)) {
      errors.currentCTC = `${t("")}`;
    } else {
      errors.currentCTC = `${t("Please Enter valid currentCTC")}`;
    }

    if (!emIdCreationForm.offeredCTC) {
      errors.offeredCTC = `${t("Please Enter offeredCTC")}`;
    } else if (isNumberValid(emIdCreationForm.offeredCTC)) {
      errors.offeredCTC = `${t("")}`;
    } else {
      errors.offeredCTC = `${t("Please Enter valid offeredCTC")}`;
    }

    if (!emIdCreationForm.mobileNumber) {
      errors.mobileNumber = `${t("Please Enter mobileNumber")}`;
    } else if (emIdCreationForm.mobileNumber.length < 10) {
      errors.mobileNumber = `${t("Accept Exact 10 numbers only")}`;
    }
    else {
      errors.mobileNumber = `${t("")}`;
    }

    if (!errors) {
      dispatch({
        type: HrTypes.EMPLOYEE_ID_REQUEST,
        payload: emIdCreationForm,
        // callback: (error) => {
        //   if (error) {
        //     setOnBoard({ ...onBoard });
        //     return;
        //   }
        // },
      });
    }

    setState({ ...state, errors: errors });

    // setChecked1('SystemNo')
    // setChecked2('companyMobileNo')
    // setChecked3('bankAccountNo')
    // setChecked4('locationAllowanceNo')
    setChecked1('')
    setChecked2('')
    setChecked3('')
    setChecked4('')
    console.log(checked1)
    console.log(checked2)
    console.log(checked3)
    console.log(checked4)



    console.log(state);
    if (
      isEmailValid(emIdCreationForm.personalEmailId) &&
      isEmailValid(emIdCreationForm.workEmailId) &&
      isNumberValid(emIdCreationForm.currentCTC) &&
      isNumberValid(emIdCreationForm.offeredCTC)
    ) {
      setState({
        ...state,
        emIdCreationForm: clearObj,
      });
    }
  };

  const handleInput = (e) => {
    emIdCreationForm[e.target.name] = e.target.value;
    errors[e.target.name] = "";
    setState({ ...state, emIdCreationForm: emIdCreationForm, errors: errors });
  };


  const handleDropdown = (e) => {
    emIdCreationForm[e.target.name] = e.target.value;
    errors[e.target.name] = "";
    setState({ ...state, emIdCreationForm: emIdCreationForm, errors: errors });
  };

  const handleOnRadio = (e) => {
    emIdCreationForm[e.target.name] = e.target.value;
    errors[e.target.name] = "";
    setState(...state, e.target.value, emIdCreationForm.system = "")

    // setState({ ...state, system:"",bankAccount:"",mobileNumber:"", locationAllowance:"" });

  }

  const allowOnlyNumbers = (evt) => {
    var charCode = (evt.which) ? evt.which : KeyboardEvent.code;
    console.log(charCode)
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      evt.preventDefault()

    return true;
  };




  const onSelect1 = ({ target: { value } }) => {
    setChecked1(value)
    // let system = document.getElementById("system1").attributes;
    // system.removeNamedItem("checked");
    // console.log("system", system)

  }

  const onSelect2 = ({ target: { value } }) => {
    setChecked2(value)
    // let companyMobile = document.getElementById("companyMobile")
    // console.log("system2", companyMobile)
    // companyMobile.checked = false
    // setState1(companyMobile.checked)



  }
  const onSelect3 = ({ target: { value } }) => {

    setChecked3(value)

  }
  const onSelect4 = ({ target: { value } }) => {

    setChecked4(value)
  }



  return (
    <div className="flx   ">
      <div className="posAbs col-12 mt1">
        <Header />
      </div>
      <div>
        <SideBar />
      </div>


      <div className='mt5-5  ml4 mt8 mr3 mb2  ph6 fntLg width header'>

        <Row className='mb3  mt2'>
          <Col sm="6">
            <Row>
              <Col lg="3 tac" className="Human-Resource-outer posRel">
                {" "}
                <img
                  src={EmpIdImage}
                  alt="EmpIdImage"
                  className="eici text-onboard"
                />
              </Col>
              <Col lg="9">
                <h3 className="head underline ph4  mb4">
                  {t("Employee ID Creation")}
                </h3>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("EMP ID")}</label>
              </Col>
              <Col lg="6">
                <Input
                  className={`input-field ${errors.empid && "borderRed txt_color"
                    }`}
                  name="empid"
                  value={emIdCreationForm.empid}
                  onChange={handleInput}
                  onKeyPress={allowOnlyNumbers}
                />
                {errors.empid ? (
                  <span className="fntRed">{errors.empid}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("Skill")}</label>
              </Col>
              <Col lg="6" className="posRel drop_down_icon">
                <Dropdown
                  className={`input-field text-onboard form-control ${errors.skill && "borderRed txt_color"
                    }`}
                  data={[
                    { value: 1, label: "React JS" },
                    { value: 2, label: "Java" },
                    { value: 3, label: "Dot Net" },
                  ]}
                  name={"skill"}
                  value={emIdCreationForm.skill}
                  placeholder={"Select Skill"}
                  onChange={handleDropdown}
                />
                <Image
                  src={downArrow}
                  alt="dropDown Icon"
                  className=" posAbs arrow-drop1  "
                />
                {errors.skill ? (
                  <span className="fntRed">{errors.skill}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("Experience")}</label>
              </Col>
              <Col lg="6">
                <Input
                  className={`input-field ${errors.experience && "borderRed txt_color"
                    }`}
                  name="experience"
                  value={emIdCreationForm.experience}
                  onChange={handleInput}
                  onKeyPress={allowOnlyNumbers}
                />
                {errors.experience ? (
                  <span className="fntRed">{errors.experience}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("Personal Email ID")}</label>
              </Col>
              <Col lg="6">
                <Input
                  className={`input-field ${errors.personalEmailId && "borderRed txt_color"
                    }`}
                  name="personalEmailId"
                  value={emIdCreationForm.personalEmailId}
                  onChange={handleInput}
                />
                {errors.personalEmailId && (
                  <span className="txt_color mt-30 p-tag">
                    {errors.personalEmailId}
                  </span>
                )}
              </Col>
            </Row>
          </Col>

          <Col lg="6">
            <Row>
              <Col lg="4">
                <label htmlFor="empid">{t("Work Email ID")}</label>
              </Col>
              <Col lg="6">
                <Input
                  className={`input-field ${errors.workEmailId && "borderRed txt_color"
                    }`}
                  name="workEmailId"
                  value={emIdCreationForm.workEmailId}
                  onChange={handleInput}
                />
                {errors.workEmailId && (
                  <span className="txt_color mt-30 p-tag">
                    {errors.workEmailId}
                  </span>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("Mobile Number")}</label>
              </Col>
              <Col lg="6">
                <Input
                  maxlength="10"
                  className={`input-field ${errors.mobileNumber && "borderRed txt_color"
                    }`}
                  name="mobileNumber"
                  value={emIdCreationForm.mobileNumber}
                  onChange={handleInput}
                  onKeyPress={allowOnlyNumbers}
                />
                {errors.mobileNumber ? (
                  <span className="fntRed">{errors.mobileNumber}</span>
                ) : null}
              </Col>
              <Col lg="6"><Input maxLength="10" className={`input-field ${errors.mobileNumber && "borderRed txt_color"
                }`} name='mobileNumber' value={emIdCreationForm.mobileNumber} onChange={handleInput} onKeyPress={allowOnlyNumbers} />{errors.mobileNumber ? <span className='fntRed'>{errors.mobileNumber}</span> : null}</Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("Current CTC")}</label>
              </Col>
              <Col lg="6">
                <Input
                  className={`input-field ${errors.currentCTC && "borderRed txt_color"
                    }`}
                  name="currentCTC"
                  value={emIdCreationForm.currentCTC}
                  onChange={handleInput}
                />
                {errors.currentCTC && (
                  <span className="txt_color mt-30 p-tag">
                    {errors.currentCTC}
                  </span>
                )}
              </Col>
            </Row>
          </Col>
          <Col lg="6">
            <Row>
              <Col lg="4">
                <label htmlFor="empid">{t("Offered CTC")}</label>
              </Col>
              <Col lg="6">
                <Input
                  className={`input-field ${errors.offeredCTC && "borderRed txt_color"
                    }`}
                  name="offeredCTC"
                  value={emIdCreationForm.offeredCTC}
                  onChange={handleInput}
                />
                {errors.offeredCTC && (
                  <span className="txt_color mt-30 p-tag">
                    {errors.offeredCTC}
                  </span>
                )}
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("DOJ")}</label>
              </Col>
              <Col lg="6">
                <Input
                  type="date"
                  className={`input-field ${errors.dateOfJoin && "borderRed txt_color"
                    }`}
                  name="dateOfJoin"
                  value={emIdCreationForm.dateOfJoin}
                  onChange={handleInput}
                />
                {errors.dateOfJoin ? (
                  <span className="fntRed">{errors.dateOfJoin}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("Designation")}</label>
              </Col>
              <Col lg="6" className="posRel drop_down_icon">
                <Dropdown
                  className={`input-field text-onboard form-control ${errors.designation && "borderRed txt_color"
                    }`}
                  data={[
                    { value: 1, label: "Software Eng" },
                    { value: 2, label: "Sr Software Eng" },
                    { value: 3, label: "Manager" },
                  ]}
                  name={"designation"}
                  value={emIdCreationForm.designation}
                  placeholder={"Select Designation"}
                  onChange={handleDropdown}
                />{" "}
                <Image
                  src={downArrow}
                  alt="dropDown Icon"
                  className=" posAbs arrow-drop1  "
                />
                {errors.designation ? (
                  <span className="fntRed">{errors.designation}</span>
                ) : null}
              </Col>
            </Row>
          </Col>

          <Col lg="6">
            <Row>
              <Col lg='4'><label htmlFor="empid">{t('Band')}</label>
              </Col>
              <Col lg="6" className="posRel drop_down_icon"><Dropdown className={`input-field text-onboard form-control ${errors.band && "borderRed txt_color"
                }`} data={[
                  { value: 1, label: "M1/E1" },
                  { value: 2, label: "M2/E2" },
                  { value: 3, label: "M3/E3" },
                ]}
                name={'band'}
                value={emIdCreationForm.band}
                placeholder={"Select Band"}
                onChange={handleDropdown} /><Image
                  src={downArrow}
                  alt="dropDown Icon"
                  className=" posAbs arrow-drop1"
                />{errors.band ? <span className='fntRed'>{errors.band}</span> : null}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='mb1'>
          <Col lg="6">
            <Row>
              <Col lg='5'><label htmlFor="empid">{t('Insurance')}</label>
              </Col>
              <Col lg="6" className="posRel drop_down_icon"><Dropdown className={`input-field text-onboard form-control ${errors.insurance && "borderRed txt_color"
                }`} data={[
                  { value: 1, label: "Company Name" },
                  { value: 2, label: "Amount" },
                  { value: 3, label: "Insurance card or Number" },
                ]}
                name={'insurance'}
                value={emIdCreationForm.insurance}
                placeholder={"Select Details"}
                onChange={handleDropdown} /><Image
                  src={downArrow}
                  alt="dropDown Icon"
                  className=" posAbs arrow-drop1"
                />{errors.insurance ? <span className='fntRed'>{errors.insurance}</span> : null}
              </Col>
            </Row>
          </Col>

          <Col lg="6">
            <Row>
              <Col lg='4'><label htmlFor="empid">{t('Department')}</label>
              </Col>
              <Col lg="6" className="posRel drop_down_icon"><Dropdown className={`input-field text-onboard form-control ${errors.department && "borderRed txt_color"
                }`} data={[
                  { value: 1, label: "Management" },
                  { value: 2, label: "Finance" },
                  { value: 3, label: "Sales" },
                  { value: 4, label: "Projects" },
                ]}
                name={'department'}
                value={emIdCreationForm.department}
                placeholder={"Select Department"}
                onChange={handleDropdown} /><Image
                  src={downArrow}
                  alt="dropDown Icon"
                  className=" posAbs arrow-drop1"
                />{errors.department ? <span className='fntRed'>{errors.department}</span> : null}
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className='mb1'>
          <Col lg="6">
            <Row>

              <Col lg='5'><label htmlFor="empid">{t('System Allocated')}</label>
              </Col>

              <Col lg="3" className="col">
                <Checkbox type="radio" name='system' id="system1" value="systemYes" label={'Yes'} checked1={isChecked1("systemYes")} onChange={onSelect1} defaultChecked />
                {/* {errors.system ? <span className='fntRed'>{errors.system}</span> : null} */}
              </Col>
              <Col lg="2" className='col' >
                <Checkbox type="radio" name='system' id="system2" value="systemNo" label={'No'} checked1={isChecked1("systemNo")} onChange={onSelect1} />
              </Col>

            </Row>


            <Row>
              <Col xs={5}></Col>
              <Col xs={4}>
                {/* {errors.choice? <span className='fntRed'>{errors.choice}</span> : null} */}
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className='mb1'>
          <Col lg="6">
            <Row>
              <Col lg='5'><label htmlFor="empid">{t('Company Mobile')}</label>
              </Col>
              <Col lg="3" className="col" >
                <Checkbox type="radio" name='companyMobile' id="companyMobile"
                  value="companyMobileYes" label={'Yes'} checked2={isChecked2("companyMobileYes")} onChange={onSelect2} defaultChecked />
              </Col>
              <Col lg="2" className='col' >
                <Checkbox type="radio" name='companyMobile' id="companyMobile2"
                  value="companyMobileNo" label={'No'} checked2={isChecked2("companyMobileNo")} onChange={onSelect2} />
              </Col>
              {/* <Col lg="3" className="col" >
              <Checkbox type="radio" name='companyMobile' value="Yes" onChange={changeRadio} checked={state.companyMobile === "Yes"} label={"Yes"} />
            </Col>
            <Col lg="2" className='col' >
              <Checkbox type="radio" name='companyMobile' value="No" onChange={changeRadio} checked={state.companyMobile === "Yes"} label={"No"} />
            </Col> */}
            </Row>
            <Row>
              <Col xs={5}></Col>
              <Col xs={4}>
                {/* {errors.companyMobile ? <span className='fntRed'>{errors.companyMobile}</span> : null} */}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='mb1'>
          <Col lg="6">
            <Row>
              <Col lg='5'><label htmlFor="empid">{t('Reporting Manager')}</label>
              </Col>
              <Col lg="6"><Input className={`input-field ${errors.reportingManager && "borderRed txt_color"
                }`} name='reportingManager' value={emIdCreationForm.reportingManager} onChange={handleInput} />{errors.reportingManager ? <span className='fntRed'>{errors.reportingManager}</span> : null}</Col>
            </Row>
          </Col>
        </Row>
        <Row className='mb1'>
          <Col lg="6">
            <Row>
              <Col lg='5'><label htmlFor="empid">{t('Bank Account')}</label>
              </Col>

              <Col lg="3" className='col' >
                <Checkbox type="radio" name='bankAccount' id="bankAccount"
                  value="bankAccountYes" label={'Yes'} checked3={isChecked3("bankAccountYes")} onChange={onSelect3} defaultChecked />
              </Col>

              <Col lg="3" className='col'>
                <Checkbox type="radio" name='bankAccount' id="bankAccount2"
                  value="bankAccountNo" label={'No'} checked3={isChecked3("bankAccountNo")} onChange={onSelect3} />
              </Col>

              {/* <Col lg="3" className='col' >
              <Checkbox type="radio" name='bankAccount' value="Yes" onChange={handleOnRadio} checked={state.bankAccount === "Yes"} label={"Yes"} />
            </Col>

            <Col lg="3" className='col'>
              <Checkbox type="radio" name='bankAccount' value="No" onChange={handleOnRadio} checked={state.bankAccount === "Yes"} label={"No"} />
            </Col> */}

            </Row>
            <Row>
              <Col xs={5}></Col>
              <Col xs={4}>
                {/* {errors.bankAccount ? <span className='fntRed'>{errors.bankAccount}</span> : null} */}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='mb1'>
          <Col lg="10">
            <Row>
              <Col lg='3'>
              </Col>
              <Col lg="9"><label htmlFor="empid">{t('If you have already account number ?')}</label></Col>
            </Row>
          </Col>
        </Row>
        <Row className='mb1'>
          <Col lg="6">
            <Row>
              <Col lg='5'>
              </Col>
              <Col lg="6"><Input className={`input-field ${errors.bankAccountnumber && "borderRed txt_color"
                }`} placeholder={'Enter Account Number'} name='bankAccountnumber' value={emIdCreationForm.bankAccountnumber} onChange={handleInput} onKeyPress={allowOnlyNumbers} />{errors.bankAccountnumber ? <span className='fntRed'>{errors.bankAccountnumber}</span> : null}</Col>
            </Row>
          </Col>
        </Row>
        <Row className='mb1'>
          <Col lg="6">
            <Row>
              <Col lg='5'><label htmlFor="empid">{t('Billing Status')}</label>
              </Col>
              <Col lg="6" className="posRel drop_down_icon">
                <Dropdown
                  className={`input-field text-onboard form-control ${errors.band && "borderRed txt_color"
                    }`}
                  data={[
                    { value: 1, label: "M1/E1" },
                    { value: 2, label: "M2/E2" },
                    { value: 3, label: "M3/E3" },
                  ]}
                  name={"band"}
                  value={emIdCreationForm.band}
                  placeholder={"Select Band"}
                  onChange={handleDropdown}
                />
                <Image
                  src={downArrow}
                  alt="dropDown Icon"
                  className=" posAbs arrow-drop1"
                />
                {errors.band ? (
                  <span className="fntRed">{errors.band}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("Insurance")}</label>
              </Col>
              <Col lg="6" className="posRel drop_down_icon">
                <Dropdown
                  className={`input-field text-onboard form-control ${errors.insurance && "borderRed txt_color"
                    }`}
                  data={[
                    { value: 1, label: "Company Name" },
                    { value: 2, label: "Amount" },
                    { value: 3, label: "Insurance card or Number" },
                  ]}
                  name={"insurance"}
                  value={emIdCreationForm.insurance}
                  placeholder={"Select Details"}
                  onChange={handleDropdown}
                />
                <Image
                  src={downArrow}
                  alt="dropDown Icon"
                  className=" posAbs arrow-drop1"
                />
                {errors.insurance ? (
                  <span className="fntRed">{errors.insurance}</span>
                ) : null}
              </Col>
            </Row>
          </Col>

          <Col lg="6">
            <Row>
              <Col lg="4">
                <label htmlFor="empid">{t("Department")}</label>
              </Col>
              <Col lg="6" className="posRel drop_down_icon">
                <Dropdown
                  className={`input-field text-onboard form-control ${errors.department && "borderRed txt_color"
                    }`}
                  data={[
                    { value: 1, label: "Management" },
                    { value: 2, label: "Finance" },
                    { value: 3, label: "Sales" },
                    { value: 4, label: "Projects" },
                  ]}
                  name={"department"}
                  value={emIdCreationForm.department}
                  placeholder={"Select Department"}
                  onChange={handleDropdown}
                />
                <Image
                  src={downArrow}
                  alt="dropDown Icon"
                  className=" posAbs arrow-drop1"
                />
                {errors.department ? (
                  <span className="fntRed">{errors.department}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("System Allocated")}</label>
              </Col>
              <Col lg="3" className="col" name="system">
                <Checkbox
                  type="radio"
                  name={"system"}
                  value={emIdCreationForm.system}
                  label={"Yes"}
                  onChange={handleOnRadio}
                />
                {/* {errors.system ? <span className='fntRed'>{errors.system}</span> : null} */}
              </Col>
              <Col lg="2" className="col">
                <Checkbox
                  type="radio"
                  name={"system"}
                  value={emIdCreationForm.system}
                  label={"No"}
                  onChange={handleOnRadio}
                />
              </Col>
            </Row>

            <Row>
              <Col xs={5}></Col>
              <Col xs={4}>
                {errors.system ? (
                  <span className="fntRed">{errors.system}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("Company Mobile")}</label>
              </Col>
              <Col lg="3" className="col">
                <Checkbox
                  type="radio"
                  name={"companyMobile"}
                  value={emIdCreationForm.companyMobile}
                  label={"Yes"}
                  onChange={handleOnRadio}
                />
              </Col>
              <Col lg="2" className="col">
                <Checkbox
                  type="radio"
                  name={"companyMobile"}
                  value={emIdCreationForm.companyMobile}
                  label={"No"}
                  onChange={handleOnRadio}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={5}></Col>
              <Col xs={4}>
                {errors.companyMobile ? (
                  <span className="fntRed">{errors.companyMobile}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("Reporting Manager")}</label>
              </Col>
              <Col lg="6">
                <Input
                  className={`input-field ${errors.reportingManager && "borderRed txt_color"
                    }`}
                  name="reportingManager"
                  value={emIdCreationForm.reportingManager}
                  onChange={handleInput}
                />
                {errors.reportingManager ? (
                  <span className="fntRed">{errors.reportingManager}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("Bank Account")}</label>
              </Col>

              <Col lg="3" className="col">
                <Checkbox
                  type="radio"
                  name={"bankAccount"}
                  value={emIdCreationForm.bankAccount}
                  label={"Active"}
                  onChange={handleOnRadio}
                />
              </Col>

              <Col lg="3" className="col">
                <Checkbox
                  type="radio"
                  name={"bankAccount"}
                  value={emIdCreationForm.bankAccount}
                  label={"Not Active"}
                  onChange={handleOnRadio}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={5}></Col>
              <Col xs={4}>
                {errors.bankAccount ? (
                  <span className="fntRed">{errors.bankAccount}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb1">
          <Col lg="10">
            <Row>
              <Col lg="3"></Col>
              <Col lg="9">
                <label htmlFor="empid">
                  {t("If you have already account number ?")}
                </label>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5"></Col>
              <Col lg="6">
                <Input
                  maxlength="12"
                  className={`input-field ${errors.bankAccountnumber && "borderRed txt_color"
                    }`}
                  placeholder={"Enter Account Number"}
                  name="bankAccountnumber"
                  value={emIdCreationForm.bankAccountnumber}
                  onChange={handleInput}
                  onKeyPress={allowOnlyNumbers}
                />
                {errors.bankAccountnumber ? (
                  <span className="fntRed">{errors.bankAccountnumber}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("Billing Status")}</label>
              </Col>
              <Col lg="6" className="posRel drop_down_icon">
                <Dropdown
                  className={`input-field text-onboard form-control ${errors.billingStatus && "borderRed txt_color"
                    }`}
                  data={[
                    { value: 1, label: "In Billing" },
                    { value: 2, label: "Bench" },
                    { value: 3, label: "YTA Project" },
                  ]}
                  name={"billingStatus"}
                  value={emIdCreationForm.billingStatus}
                  placeholder={"Select Status"}
                  onChange={handleDropdown}
                />
                <Image
                  src={downArrow}
                  alt="dropDown Icon"
                  className=" posAbs arrow-drop1"
                />
                {errors.billingStatus ? (
                  <span className="fntRed">{errors.billingStatus}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("Client")}</label>
              </Col>
              <Col lg="6">
                <Input
                  className={`input-field ${errors.client && "borderRed txt_color"
                    }`}
                  name="client"
                  value={emIdCreationForm.client}
                  onChange={handleInput}
                />
                {errors.client ? (
                  <span className="fntRed">{errors.client}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5"></Col>
              <Col lg="7">{t("Client names will come as per code")}</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("Client Code")}</label>
              </Col>
              <Col lg="6">
                <Input
                  className={`input-field ${errors.clientCode && "borderRed txt_color"
                    }`}
                  name="clientCode"
                  value={emIdCreationForm.clientCode}
                  onChange={handleInput}
                />
                {errors.clientCode ? (
                  <span className="fntRed">{errors.clientCode}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5"></Col>
              <Col lg="7">{t("Which will provided by finance team")}</Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("Project")}</label>
              </Col>
              <Col lg="6" className="posRel drop_down_icon">
                <Dropdown
                  className={`input-field text-onboard form-control ${errors.project && "borderRed txt_color"
                    }`}
                  data={[
                    { value: 1, label: "Project ID" },
                    { value: 2, label: "Work Location" },
                  ]}
                  name={"project"}
                  value={emIdCreationForm.project}
                  placeholder={"Select Status"}
                  onChange={handleDropdown}
                />
                <Image
                  src={downArrow}
                  alt="dropDown Icon"
                  className=" posAbs arrow-drop1"
                />
                {errors.project ? (
                  <span className="fntRed">{errors.project}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
          <Col lg="6">
            <Row>
              <Col lg="4">
                <label htmlFor="empid">{t("Work Location")}</label>
              </Col>
              <Col lg="6" className="posRel drop_down_icon">
                <Dropdown
                  className={`input-field text-onboard form-control ${errors.workLocation && "borderRed txt_color"
                    }`}
                  data={[
                    { value: 1, label: "India" },
                    { value: 2, label: "USA" },
                    { value: 3, label: "UK" },
                  ]}
                  name={"geo"}
                  value={emIdCreationForm.geo}
                  placeholder={"Select"}
                  onChange={handleDropdown}
                />
                <Image
                  src={downArrow}
                  alt="dropDown Icon"
                  className=" posAbs arrow-drop1"
                />
                {errors.geo ? (
                  <span className="fntRed">{errors.geo}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("Shift Timings")}</label>
              </Col>
              <Col lg="6">
                <Input
                  type="time"
                  className={`input-field ${errors.shiftTimmings && "borderRed txt_color"
                    }`}
                  name="shiftTimmings"
                  value={emIdCreationForm.shiftTimmings}
                  onChange={handleInput}
                />
                {errors.shiftTimmings ? (
                  <span className="fntRed">{errors.shiftTimmings}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb1">
          <Col lg="10">
            <Row>
              <Col lg="3"></Col>
              <Col lg="9">
                {t(
                  "It will work as per geo code and project code (it's a automode)"
                )}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("Shift allowance")}</label>
              </Col>
              <Col lg="6">
                <Input
                  className={`input-field ${errors.shiftAllowance && "borderRed txt_color"
                    }`}
                  name="shiftAllowance"
                  value={emIdCreationForm.shiftAllowance}
                  onChange={handleInput}
                  onKeyPress={allowOnlyNumbers}
                />
                {errors.shiftAllowance ? (
                  <span className="fntRed">{errors.shiftAllowance}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb1">
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("Work Location")}</label>
              </Col>
              <Col lg="6">
                <Input
                  className={`input-field ${errors.workLocation && "borderRed txt_color"
                    }`}
                  name="workLocation"
                  value={emIdCreationForm.workLocation}
                  onChange={handleInput}
                />

                {errors.workLocation ? (
                  <span className="fntRed">{errors.workLocation}</span>
                ) : null}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb2">
          <Col lg="6">
            <Row>
              <Col lg="5">
                <label htmlFor="empid">{t("Location allowance")}</label>
              </Col>
              <Col lg="3" className='col'>
                <Checkbox type="radio" name='locationAllowance' id="locationAllowance" value="locationAllowanceYes" label={'Yes'} checked4={isChecked4("locationAllowanceYes")} onChange={onSelect4} defaultChecked />
                <div>
                  {/* {errors.locationAllowance ? <span className='fntRed'>{errors.locationAllowance}</span> : null} */}
                </div>
              </Col>
              <Col lg="2" className='col'>
                <Checkbox type="radio" name='locationAllowance' id="locationAllowance2" value="locationAllowanceNo" label={'No'} checked4={isChecked4("locationAllowanceNo")} onChange={onSelect4} />
              </Col>
            </Row>

            <Row>
              <Col xs={5}></Col>
              <Col xs={5}>
                {/* {errors.locationAllowance ? <span className='fntRed'>{errors.locationAllowance}</span> : null} */}
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <Row>
              <Col lg="5"></Col>
              <Col lg="6">
                {" "}
                <div className="tac">
                  <Button
                    text={t("SUBMIT")}
                    className="ml15-5 mt5 mb2 hr-button"
                    onSubmit={validateEIC}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

      </div>

    </div>
  );
};

export default EmployeeIdCreation;
