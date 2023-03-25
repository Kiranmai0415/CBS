import React, { useState } from 'react'
import { Col, Row, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { EmpTypes } from '../../redux/action_types/emp_types';
import Button from '../../shared/button';
import Input from '../../shared/input';
import Header from '../../shared/header';
import EmpSideBar from '../../shared/employeesidebar';
import profile from '../../images/profile.svg';
import downArrow from "../../images/Icon-down-arrow.svg";
import Dropdown from '../../shared/dropdown';
import { isEmailValid } from '../../shared/utils';

const EmployeeDetails = () => {

  const [state, setState] = useState({
    employeeDetailsForm: {
      location: "",
      employeeCode: "",
      first: "",
      middle: "",
      last: "",
      department: "",
      designation: "",
      employeedetails: "",
      joiningdate: "",
      reportingmanager: "",
      gender: "",
      bloodgroup: "",
      worklocation: "",
      maritalstatus: "",
      mobilenumber: "",
      emailid: "",
      officemail: "",
      certificateDOB: "",
      presentAddress: "",
      permanentAddress: "",
      state: "",
      district: "",
      city: "",
      pincode: "",
      emergencyContactName: "",
      contactperson: "",
      contactno: "",
      actualdob: "",
      pan_no: "",
      pf_no: "",
      esi_no: "",
      uan_no: "",
      passport: "",
      passport_expiry: "",
      bank_name: "",
      branch_name: "",
      bank_account: "",
      ifsc_code: "",
      aadhar_no: "",
      driving_license: "",
      medi_policy_member: ""
    },
    errors: {
      location: '',
      employeeCode: '',
      first: '',
      middle: '',
      last: '',
      department: '',
      designation: '',
      employeedetails: '',
      joiningdate: '',
      reportingmanager: '',
      gender: '',
      bloodgroup: '',
      worklocation: '',
      maritalstatus: '',
      mobilenumber: '',
      emailid: "",
      officemail: "",
      certificateDOB: "",
      presentAddress: "",
      permanentAddress: "",
      state: "",
      district: "",
      city: "",
      pincode: "",
      emergencyContactName: "",
      contactperson: "",
      contactno: "",
      actualdob: "",
      pan_no: '',
      pf_no: '',
      esi_no: '',
      uan_no: '',
      passport: '',
      passport_expiry: '',
      bank_name: '',
      branch_name: '',
      bank_account: '',
      ifsc_code: '',
      aadhar_no: '',
      driving_license: '',
      medi_policy_member: ''
    }
  });
  const clearObj = {
    location: "",
    employeeCode: "",
    first: "",
    middle: "",
    last: "",
    department: "",
    designation: "",
    employeedetails: "",
    joiningdate: "",
    reportingmanager: "",
    gender: "",
    bloodgroup: "",
    worklocation: "",
    maritalstatus: "",
    mobilenumber: "",
    emailid: "",
    officemail: "",
    certificateDOB: "",
    presentAddress: "",
    permanentAddress: "",
    state: "",
    district: "",
    city: "",
    pincode: "",
    emergencyContactName: "",
    contactperson: "",
    contactno: "",
    actualdob: "",
    pan_no: "",
    pf_no: "",
    esi_no: "",
    uan_no: "",
    passport: "",
    passport_expiry: "",
    bank_name: "",
    branch_name: "",
    bank_account: "",
    ifsc_code: "",
    aadhar_no: "",
    driving_license: "",
    medi_policy_member: ""

  }

  const { employeeDetailsForm, errors } = state;
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleInput = (e) => {
    employeeDetailsForm[e.target.name] = e.target.value;
    errors[e.target.name] = "";
    setState({ ...state, employeeDetailsForm: employeeDetailsForm, errors: errors });
  };
  const validateED = (e) => {
    e.preventDefault();

    if (!employeeDetailsForm.location &&
      !employeeDetailsForm.employeeCode &&
      !employeeDetailsForm.first &&
      !employeeDetailsForm.middle &&
      !employeeDetailsForm.last &&
      !employeeDetailsForm.department &&
      !employeeDetailsForm.designation &&
      !employeeDetailsForm.employeedetails &&
      !employeeDetailsForm.joiningdate &&
      !employeeDetailsForm.reportingmanager &&
      !employeeDetailsForm.gender &&
      !employeeDetailsForm.bloodgroup &&
      !employeeDetailsForm.worklocation &&
      !employeeDetailsForm.maritalstatus &&
      !employeeDetailsForm.mobilenumber &&
      !employeeDetailsForm.emailid &&
      !employeeDetailsForm.officemail &&
      !employeeDetailsForm.certificateDOB &&
      !employeeDetailsForm.presentAddress &&
      !employeeDetailsForm.permanentAddress &&
      !employeeDetailsForm.state &&
      !employeeDetailsForm.district &&
      !employeeDetailsForm.city &&
      !employeeDetailsForm.pincode &&
      !employeeDetailsForm.emergencyContactName &&
      !employeeDetailsForm.contactperson &&
      !employeeDetailsForm.contactno &&
      !employeeDetailsForm.actualdob &&
      !employeeDetailsForm.pan_no &&
      !employeeDetailsForm.pf_no &&
      !employeeDetailsForm.esi_no &&
      !employeeDetailsForm.uan_no &&
      !employeeDetailsForm.passport &&
      !employeeDetailsForm.passport_expiry &&
      !employeeDetailsForm.bank_name &&
      !employeeDetailsForm.branch_name &&
      !employeeDetailsForm.bank_account &&
      !employeeDetailsForm.ifsc_code &&
      !employeeDetailsForm.aadhar_no &&
      !employeeDetailsForm.driving_license &&
      !employeeDetailsForm.medi_policy_member


    ) {
      errors.location = `${t('REQIRED_ERROR_FIELD')}`
      errors.employeeCode = `${t('REQIRED_ERROR_FIELD')}`
      errors.first = `${t('REQIRED_ERROR_FIELD')}`
      errors.middle = `${t('REQIRED_ERROR_FIELD')}`
      errors.last = `${t('REQIRED_ERROR_FIELD')}`
      errors.department = `${t('REQIRED_ERROR_FIELD')}`
      errors.designation = `${t('REQIRED_ERROR_FIELD')}`
      errors.employeedetails = `${t('REQIRED_ERROR_FIELD')}`
      errors.joiningdate = `${t('REQIRED_ERROR_FIELD')}`
      errors.reportingmanager = `${t('REQIRED_ERROR_FIELD')}`
      errors.gender = `${t('REQIRED_ERROR_FIELD')}`
      errors.bloodgroup = `${t('REQIRED_ERROR_FIELD')}`
      errors.worklocation = `${t('REQIRED_ERROR_FIELD')}`
      errors.maritalstatus = `${t('REQIRED_ERROR_FIELD')}`
      errors.mobilenumber = `${t('REQIRED_ERROR_FIELD')}`
      errors.emailid = `${t('REQIRED_ERROR_FIELD')}`
      errors.officemail = `${t('REQIRED_ERROR_FIELD')}`
      errors.certificateDOB = `${t('REQIRED_ERROR_FIELD')}`
      errors.presentAddress = `${t('REQIRED_ERROR_FIELD')}`
      errors.permanentAddress = `${t('REQIRED_ERROR_FIELD')}`
      errors.state = `${t('REQIRED_ERROR_FIELD')}`
      errors.district = `${t('REQIRED_ERROR_FIELD')}`
      errors.city = `${t('REQIRED_ERROR_FIELD')}`
      errors.pincode = `${t('REQIRED_ERROR_FIELD')}`
      errors.emergencyContactName = `${t('REQIRED_ERROR_FIELD')}`
      errors.contactperson = `${t('REQIRED_ERROR_FIELD')}`
      errors.contactno = `${t('REQIRED_ERROR_FIELD')}`
      errors.actualdob = `${t('REQIRED_ERROR_FIELD')}`
      errors.pan_no = `${t('REQIRED_ERROR_FIELD')}`
      errors.pf_no = `${t('REQIRED_ERROR_FIELD')}`
      errors.esi_no = `${t('REQIRED_ERROR_FIELD')}`
      errors.uan_no = `${t('REQIRED_ERROR_FIELD')}`
      errors.passport = `${t('REQIRED_ERROR_FIELD')}`
      errors.passport_expiry = `${t('REQIRED_ERROR_FIELD')}`
      errors.bank_name = `${t('REQIRED_ERROR_FIELD')}`
      errors.branch_name = `${t('REQIRED_ERROR_FIELD')}`
      errors.bank_account = `${t('REQIRED_ERROR_FIELD')}`
      errors.ifsc_code = `${t('REQIRED_ERROR_FIELD')}`
      errors.aadhar_no = `${t('REQIRED_ERROR_FIELD')}`
      errors.driving_license = `${t('REQIRED_ERROR_FIELD')}`
      errors.medi_policy_member = `${t('REQIRED_ERROR_FIELD')}`
    }

    if (isEmailValid(employeeDetailsForm.emailid)) {
      errors.emailid = "";
    } else {
      errors.emailid = `${t("EMAIL_ERROR")}`;
    }
    if (isEmailValid(employeeDetailsForm.officemail)) {
      errors.officemail = "";
    } else {
      errors.officemail = `${t("EMAIL_ERROR")}`;
    }

    if (!employeeDetailsForm.mobilenumber) {
      errors.mobilenumber = `${t("Please Enter mobile Number")}`;
    } else if (employeeDetailsForm.mobilenumber.length < 10) {
      errors.mobilenumber = `${t("Accept Exact 10 numbers only")}`;
    }
    else {
      errors.mobilenumber = `${t("")}`;
    }

    if (!employeeDetailsForm.contactno) {
      errors.contactno = `${t("Please Enter mobile Number")}`;
    } else if (employeeDetailsForm.contactno.length < 10) {
      errors.contactno = `${t("Accept Exact 10 numbers only")}`;
    }
    else {
      errors.contactno = `${t("")}`;
    }

    if (!errors) {
      dispatch({
        type: EmpTypes.EMP_DETAILS_REQUEST,
        payload: employeeDetailsForm,

      });
    }

    setState({ ...state, errors: errors });



    console.log(state);
    {
      setState({
        ...state,
        employeeDetailsForm: clearObj,
      });
    }
  };

  const handleDropdown = (e) => {
    employeeDetailsForm[e.target.name] = e.target.value;
    errors[e.target.name] = "";
    setState({ ...state, employeeDetailsForm: employeeDetailsForm, errors: errors });
  };

  const allowOnlyNumbers = (evt) => {
    var charCode = (evt.which) ? evt.which : KeyboardEvent.code;
    console.log(charCode)
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      evt.preventDefault()

    return true;
  };
  return (

    <div className="flx   ">
      <div className="posAbs col-12 mt1">
        <Header />
      </div>
      <div>
        <EmpSideBar />
      </div>


      <div className="ml4 mt8  on-board mb3 fntLg text-onboard header ph4  " width={'88%'}>
        <div className=" ml2-5 mt6-5 mr3 input-width " >

          <div className='mb3'>
            <h4 className='ml4 mt2-5 '>Employee Details</h4>
          </div>


          <Row>
            <Col lg={2} md={2} sm={0} />

            <div className="alert alert-info">
              <strong className='ml4 mt2-5 fntXLg'>Personal Details!</strong>
            </div>
            <div>
              <Row className="mb1">
                <Col lg="5">
                  <Row >
                    <Col lg="4">
                      <label className='fntXXLg ml2'>Location</label>
                    </Col>
                    <Col lg="5">
                      <Input
                        className={`input-field ${errors.location && "borderRed txt_color"
                          }`}
                        name="location"
                        value={employeeDetailsForm.location}
                        onChange={handleInput}

                      />
                      {errors.location ? (
                        <span className="fntRed">{errors.location}</span>
                      ) : null}

                    </Col>
                  </Row>
                </Col>

                <Col lg="5">
                  <Row>
                    <Col lg="4">
                      <label className='fntXXLg ml2'>Employee Code</label>
                    </Col>
                    <Col lg="5">
                      <Input
                        className={`input-field ${errors.employeeCode && "borderRed txt_color"
                          }`}
                        name="employeeCode"
                        value={employeeDetailsForm.employeeCode}
                        onChange={handleInput}

                      />
                      {errors.employeeCode ? (
                        <span className="fntRed">{errors.employeeCode}</span>
                      ) : null}

                    </Col>
                  </Row>
                </Col>

                <Col lg="2">
                  <Row>
                    <Col lg="2">
                      <div className='profile flx justify-center'>
                        <img className='profile-icon ml7' height={'70px'} width={'70px'} src={profile} alt='drawer image' />
                      </div>
                      <Col lg="2">
                        {" "}
                        <div className="tac">
                          <Button
                            text={t("Upload")}
                            className="mt5 mb2 hr-button "
                          // onSubmit={validateED}
                          />
                        </div>
                      </Col>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>


            <Row className="mb1">
              <Col lg="6">
                <Row>
                  <Col lg="5">
                    {/* <label htmlFor="empid">{t("EMP ID")}</label> */}
                    <label className='fntXXLg ml2'>First Name</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.first && "borderRed txt_color"
                        }`}
                      name="first"
                      value={employeeDetailsForm.first}
                      onChange={handleInput}

                    />
                    {errors.first ? (
                      <span className="fntRed">{errors.first}</span>
                    ) : null}
                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>Middle Name</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.middle && "borderRed txt_color"
                        }`}
                      name="middle"
                      value={employeeDetailsForm.middle}
                      onChange={handleInput}

                    />
                    {errors.middle ? (
                      <span className="fntRed">{errors.middle}</span>
                    ) : null}
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb1">
              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>Last Name</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.last && "borderRed txt_color"
                        }`}
                      name="last"
                      value={employeeDetailsForm.last}
                      onChange={handleInput}

                    />
                    {errors.last ? (
                      <span className="fntRed">{errors.last}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>Department</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.department && "borderRed txt_color"
                        }`}
                      name="department"
                      value={employeeDetailsForm.department}
                      onChange={handleInput}

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
                    <label className='fntXXLg ml2'>Designation</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.designation && "borderRed txt_color"
                        }`}
                      name="designation"
                      value={employeeDetailsForm.designation}
                      onChange={handleInput}

                    />
                    {errors.designation ? (
                      <span className="fntRed">{errors.designation}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>Employment Details</label>
                  </Col>
                  <Col lg="6" className="posRel drop_down_icon">
                    <Dropdown
                      className={`input-field text-onboard form-control ${errors.employeedetails && "borderRed txt_color"
                        }`}
                      data={[
                        { value: 'fulltime', label: " FULL TIME" },
                        { value: 'parttime', label: "PART TIME" },
                      ]}
                      name={"employeedetails"}
                      value={employeeDetailsForm.employeedetails}
                      placeholder={"Select Employement Type"}
                      onChange={handleDropdown}
                    />
                    <Image
                      src={downArrow}
                      alt="dropDown Icon"
                      className=" posAbs arrow-drop1  "
                    />
                    {errors.employeedetails ? (
                      <span className="fntRed">{errors.employeedetails}</span>
                    ) : null}
                  </Col>

                </Row>
              </Col>
            </Row>

            <Row className="mb1">
              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>Joining Date</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.joiningdate && "borderRed txt_color"
                        }`}
                      name="joiningdate"
                      value={employeeDetailsForm.joiningdate}
                      onChange={handleInput}

                    />
                    {errors.joiningdate ? (
                      <span className="fntRed">{errors.joiningdate}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>Reporting Manager</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.reportingmanager && "borderRed txt_color"
                        }`}
                      name="reportingmanager"
                      value={employeeDetailsForm.reportingmanager}
                      onChange={handleInput}

                    />
                    {errors.reportingmanager ? (
                      <span className="fntRed">{errors.reportingmanager}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb1">
              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>Gender</label>
                  </Col>
                  <Col lg="6" className="posRel drop_down_icon">
                    <Dropdown
                      className={`input-field text-onboard form-control ${errors.gender && "borderRed txt_color"
                        }`}
                      data={[
                        { value: 'male', label: " Male" },
                        { value: 'female', label: "Female" },
                      ]}
                      name={"gender"}
                      value={employeeDetailsForm.gender}
                      placeholder={"Select Gender Type"}
                      onChange={handleDropdown}
                    />
                    <Image
                      src={downArrow}
                      alt="dropDown Icon"
                      className=" posAbs arrow-drop1  "
                    />
                    {errors.employeedetails ? (
                      <span className="fntRed">{errors.gender}</span>
                    ) : null}
                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>Blood Group</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.bloodgroup && "borderRed txt_color"
                        }`}
                      name="bloodgroup"
                      value={employeeDetailsForm.bloodgroup}
                      onChange={handleInput}

                    />
                    {errors.bloodgroup ? (
                      <span className="fntRed">{errors.bloodgroup}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb1">
              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>Work Location </label>
                  </Col>
                  <Col lg="6" className="posRel drop_down_icon">
                    <Dropdown
                      className={`input-field text-onboard form-control ${errors.worklocation && "borderRed txt_color"
                        }`}
                      data={[
                        { value: 'telangana', label: " Telangana" },
                        { value: 'delhi', label: "Delhi" },
                        { value: 'bangalore', label: "Bangalore" },
                        { value: 'chennai', label: "Chennai" },
                      ]}
                      name={"worklocation"}
                      value={employeeDetailsForm.worklocation}
                      placeholder={"Select Work Location"}
                      onChange={handleDropdown}
                    />
                    <Image
                      src={downArrow}
                      alt="dropDown Icon"
                      className=" posAbs arrow-drop1  "
                    />
                    {errors.employeedetails ? (
                      <span className="fntRed">{errors.worklocation}</span>
                    ) : null}
                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>Marital Status</label>
                  </Col>
                  <Col lg="6" className="posRel drop_down_icon">
                    <Dropdown
                      className={`input-field text-onboard form-control ${errors.maritalstatus && "borderRed txt_color"
                        }`}
                      data={[
                        { value: 'unmarried', label: " UnMarried" },
                        { value: 'married', label: "Married" },
                      ]}
                      name={"maritalstatus"}
                      value={employeeDetailsForm.maritalstatus}
                      placeholder={"Select "}
                      onChange={handleDropdown}
                    />
                    <Image
                      src={downArrow}
                      alt="dropDown Icon"
                      className=" posAbs arrow-drop1  "
                    />
                    {errors.employeedetails ? (
                      <span className="fntRed">{errors.maritalstatus}</span>
                    ) : null}
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb1">
              <div className="alert alert-info">
                <strong className='ml4 mt2-5 fntXLg'>Contact Details!</strong>
              </div>
              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>Mobile Number *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      maxlength="10"
                      className={`input-field ${errors.mobilenumber && "borderRed txt_color"
                        }`}
                      name="mobilenumber"
                      value={employeeDetailsForm.mobilenumber}
                      onChange={handleInput}
                      onKeyPress={allowOnlyNumbers}
                    />
                    {errors.mobilenumber ? (
                      <span className="fntRed">{errors.mobilenumber}</span>
                    ) : null}
                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>Personal EmailId *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.emailid && "borderRed txt_color"
                        }`}
                      name="emailid"
                      value={employeeDetailsForm.emailid}
                      onChange={handleInput}
                    />
                    {errors.emailid && (
                      <span className="txt_color mt-30 p-tag">
                        {errors.emailid}
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
                    <label className='fntXXLg ml2'>Office EmailId  *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.officemail && "borderRed txt_color"
                        }`}
                      name="officemail"
                      value={employeeDetailsForm.officemail}
                      onChange={handleInput}

                    />
                    {errors.officemail ? (
                      <span className="fntRed">{errors.officemail}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>Certificate DOB *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.certificateDOB && "borderRed txt_color"
                        }`}
                      name="certificateDOB"
                      value={employeeDetailsForm.certificateDOB}
                      onChange={handleInput}

                    />
                    {errors.certificateDOB ? (
                      <span className="fntRed">{errors.certificateDOB}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb1">
              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>Present Address  *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.presentAddress && "borderRed txt_color"
                        }`}
                      name="presentAddress"
                      value={employeeDetailsForm.presentAddress}
                      onChange={handleInput}

                    />
                    {errors.presentAddress ? (
                      <span className="fntRed">{errors.presentAddress}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>Permanent Address</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.permanentAddress && "borderRed txt_color"
                        }`}
                      name="permanentAddress"
                      value={employeeDetailsForm.permanentAddress}
                      onChange={handleInput}

                    />
                    {errors.permanentAddress ? (
                      <span className="fntRed">{errors.permanentAddress}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb1">
              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>State</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.state && "borderRed txt_color"
                        }`}
                      name="state"
                      value={employeeDetailsForm.state}
                      onChange={handleInput}

                    />
                    {errors.state ? (
                      <span className="fntRed">{errors.state}</span>
                    ) : null}


                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>State</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.state && "borderRed txt_color"
                        }`}
                      name="state"
                      value={employeeDetailsForm.state}
                      onChange={handleInput}

                    />
                    {errors.state ? (
                      <span className="fntRed">{errors.state}</span>
                    ) : null}


                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb1">
              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>District</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.district && "borderRed txt_color"
                        }`}
                      name="district"
                      value={employeeDetailsForm.district}
                      onChange={handleInput}

                    />
                    {errors.district ? (
                      <span className="fntRed">{errors.district}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>District</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.district && "borderRed txt_color"
                        }`}
                      name="district"
                      value={employeeDetailsForm.district}
                      onChange={handleInput}

                    />
                    {errors.district ? (
                      <span className="fntRed">{errors.district}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb1">
              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>City</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.city && "borderRed txt_color"
                        }`}
                      name="city"
                      value={employeeDetailsForm.city}
                      onChange={handleInput}

                    />
                    {errors.city ? (
                      <span className="fntRed">{errors.city}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>City </label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.city && "borderRed txt_color"
                        }`}
                      name="city"
                      value={employeeDetailsForm.city}
                      onChange={handleInput}

                    />
                    {errors.city ? (
                      <span className="fntRed">{errors.city}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb1">
              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>PinCode</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.pincode && "borderRed txt_color"
                        }`}
                      name="pincode"
                      value={employeeDetailsForm.pincode}
                      onChange={handleInput}

                    />
                    {errors.pincode ? (
                      <span className="fntRed">{errors.pincode}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>PinCode</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.pincode && "borderRed txt_color"
                        }`}
                      name="pincode"
                      value={employeeDetailsForm.pincode}
                      onChange={handleInput}

                    />
                    {errors.pincode ? (
                      <span className="fntRed">{errors.pincode}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb1">
              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>Emergency Contact * Person Name</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.emergencyContactName && "borderRed txt_color"
                        }`}
                      name="emergencyContactName"
                      value={employeeDetailsForm.emergencyContactName}
                      onChange={handleInput}

                    />
                    {errors.emergencyContactName ? (
                      <span className="fntRed">{errors.emergencyContactName}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>Contact Person * Relation</label>
                  </Col>
                  <Col lg="6" className="posRel drop_down_icon">
                    <Dropdown
                      className={`input-field text-onboard form-control ${errors.contactperson && "borderRed txt_color"
                        }`}
                      data={[
                        { value: 'mother', label: " Mother" },
                        { value: 'father', label: "Father" },
                        { value: 'brother', label: "Brother" },
                        { value: 'sister', label: "Sister" },
                        { value: 'cousin', label: "Cousin" },
                      ]}
                      name={"contactperson"}
                      value={employeeDetailsForm.contactperson}
                      placeholder={"Select "}
                      onChange={handleDropdown}
                    />
                    <Image
                      src={downArrow}
                      alt="dropDown Icon"
                      className=" posAbs arrow-drop1  "
                    />
                    {errors.employeedetails ? (
                      <span className="fntRed">{errors.contactperson}</span>
                    ) : null}
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb1">
              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>Contact Person No. *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      maxlength="10"
                      className={`input-field ${errors.contactno && "borderRed txt_color"
                        }`}
                      name="contactno"
                      value={employeeDetailsForm.contactno}
                      onChange={handleInput}
                      onKeyPress={allowOnlyNumbers}
                    />
                    {errors.contactno ? (
                      <span className="fntRed">{errors.contactno}</span>
                    ) : null}
                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>Actual DOB *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.actualdob && "borderRed txt_color"
                        }`}
                      name="actualdob"
                      value={employeeDetailsForm.actualdob}
                      onChange={handleInput}

                    />
                    {errors.actualdob ? (
                      <span className="fntRed">{errors.actualdob}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>
            </Row>


            <Row className="mb1">
              <div className="alert alert-info">
                <strong className='ml4 mt2-5 fntXLg'>Employee Statutory</strong>
              </div>
              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>PAN No. *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.pan_no && "borderRed txt_color"
                        }`}
                      name="pan_no"
                      value={employeeDetailsForm.pan_no}
                      onChange={handleInput}

                    />
                    {errors.pan_no ? (
                      <span className="fntRed">{errors.pan_no}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>PF No. *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.pf_no && "borderRed txt_color"
                        }`}
                      name="pf_no"
                      value={employeeDetailsForm.pf_no}
                      onChange={handleInput}

                    />
                    {errors.pf_no ? (
                      <span className="fntRed">{errors.pf_no}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb1">
              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>ESI No. *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.esi_no && "borderRed txt_color"
                        }`}
                      name="esi_no"
                      value={employeeDetailsForm.esi_no}
                      onChange={handleInput}

                    />
                    {errors.esi_no ? (
                      <span className="fntRed">{errors.esi_no}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>UAN No. *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.uan_no && "borderRed txt_color"
                        }`}
                      name="uan_no"
                      value={employeeDetailsForm.uan_no}
                      onChange={handleInput}

                    />
                    {errors.uan_no ? (
                      <span className="fntRed">{errors.uan_no}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb1">
              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>Passport Number *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.passport && "borderRed txt_color"
                        }`}
                      name="passport"
                      value={employeeDetailsForm.passport}
                      onChange={handleInput}

                    />
                    {errors.passport ? (
                      <span className="fntRed">{errors.passport}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>Passport Expiry Date </label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.passport_expiry && "borderRed txt_color"
                        }`}
                      name="passport_expiry"
                      value={employeeDetailsForm.passport_expiry}
                      onChange={handleInput}

                    />
                    {errors.passport_expiry ? (
                      <span className="fntRed">{errors.passport_expiry}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb1">

              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>Bank Name *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.bank_name && "borderRed txt_color"
                        }`}
                      name="bank_name"
                      value={employeeDetailsForm.bank_name}
                      onChange={handleInput}

                    />
                    {errors.bank_name ? (
                      <span className="fntRed">{errors.bank_name}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>Branch Name *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.branch_name && "borderRed txt_color"
                        }`}
                      name="branch_name"
                      value={employeeDetailsForm.branch_name}
                      onChange={handleInput}

                    />
                    {errors.branch_name ? (
                      <span className="fntRed">{errors.branch_name}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb1">

              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>Bank Account Number *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.bank_account && "borderRed txt_color"
                        }`}
                      name="bank_account"
                      value={employeeDetailsForm.bank_account}
                      onChange={handleInput}

                    />
                    {errors.bank_account ? (
                      <span className="fntRed">{errors.bank_account}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>IFSC Code *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.ifsc_code && "borderRed txt_color"
                        }`}
                      name="ifsc_code"
                      value={employeeDetailsForm.ifsc_code}
                      onChange={handleInput}

                    />
                    {errors.ifsc_code ? (
                      <span className="fntRed">{errors.ifsc_code}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb1">

              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>Aadhar No. *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.aadhar_no && "borderRed txt_color"
                        }`}
                      name="aadhar_no"
                      value={employeeDetailsForm.aadhar_no}
                      onChange={handleInput}

                    />
                    {errors.aadhar_no ? (
                      <span className="fntRed">{errors.aadhar_no}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Row>
                  <Col lg="4">
                    <label className='fntXXLg ml2'>Driving License No. *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.driving_license && "borderRed txt_color"
                        }`}
                      name="driving_license"
                      value={employeeDetailsForm.driving_license}
                      onChange={handleInput}

                    />
                    {errors.driving_license ? (
                      <span className="fntRed">{errors.driving_license}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="mb1">

              <Col lg="6">
                <Row>
                  <Col lg="5">
                    <label className='fntXXLg ml2'>Medi Policy Member *</label>
                  </Col>
                  <Col lg="6">
                    <Input
                      className={`input-field ${errors.medi_policy_member && "borderRed txt_color"
                        }`}
                      name="medi_policy_member"
                      value={employeeDetailsForm.medi_policy_member}
                      onChange={handleInput}

                    />
                    {errors.medi_policy_member ? (
                      <span className="fntRed">{errors.medi_policy_member}</span>
                    ) : null}

                  </Col>
                </Row>
              </Col>

            </Row>
          </Row>



          {/* </Row> */}
          <Row>
            <Col lg="6">
              <Row>
                <Col lg="5"></Col>
                <Col lg="6">
                  {" "}
                  <div className="tac">
                    <Button
                      text={t("Save")}
                      className="ml15-5 mt5 mb2 hr-button"
                      onSubmit={validateED}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>





        </div >
      </div>
    </div>


  )
}

export default EmployeeDetails