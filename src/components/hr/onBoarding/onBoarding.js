import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import OnBoardIcon from "../../../images/icon-doc.png";
import { Col, Row, Image } from "react-bootstrap";
import Checkbox from "../../../shared/checkbox";
import Dropdown from "../../../shared/dropdown";
import Input from "../../../shared/input";
import Button from "../../../shared/button";
import Sidebar from "../../../shared/sidebar";
import Header from "../../../shared/header";
import downArrow from "../../../images/Icon-down-arrow.svg";
import PdfIcon from "../../../images/pdf-Icon.svg";
import crossicon from "../../../images/close-icon.svg";
import { isEmailValid } from "../../../shared/utils";
import { HrTypes } from "../../../redux/action_types/hr_types";

const OnBoarding = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [onBoard, setOnBoard] = useState({
    list: [],
    onBoardForm: {
      terms: "",
      sent: "",
      sscPercentage: "",
      interPercentage: "",
      spec1: "",
      spec2: "",
      ugPercentage: "",
      panCard: "",
      aadharCard: "",
      currentAddress: "",
      permanentAddress: "",
      name: "",
      gender: "",
      dob: "",
      emailId: "",
      mobileNumber: "",
      emergencyMobile: "",
      bankAccount: "",
      single: "",
      marriage: "",
    },

    errors: {
      terms: "",
      sent: "",
      sscPercentage: "",
      interPercentage: "",
      spec1: "",
      spec2: "",
      ugPercentage: "",
      panCard: "",
      aadharCard: "",
      currentAddress: "",
      permanentAddress: "",
      dob: "",
      gender: "",
      emailId: "",
      mobileNumber: "",
      emergencyMobile: "",
      bankAccount: "",
      marriage: "",
    },
  });

  const { onBoardForm, errors } = onBoard;

  //usestate for 3 files
  const [upload, setupload] = useState({
    fileupload: "",
    arr: [],
    error: "",
  });
  const { arr, error } = upload;

  //usestate for 6 files
  const [upload1, setupload1] = useState({
    fileupload1: "",
    arr1: [],
    error1: "",
  });
  const { arr1, error1 } = upload1;

  // 3 Filesupload onchange
  const handleOnFile = (e) => {
    setupload({ ...upload, fileupload: e.target.files[0], error: "" });
    document.getElementById("pdf").value = "";
  };

  useEffect(() => {
    if (!upload.fileupload) {
    } else if (upload.arr.length < 3) {
      const res = upload.fileupload.name.includes("pdf");
      if (res) {
        upload.arr.push(upload.fileupload);
      } else {
        upload.error = `${t("UPLOAD_ONLY_PDF")}`;
        setupload({ ...upload, error: error });
      }
    } else {
      upload.error = `${t("UPLOAD_ONLY_3PDF_FILES")}`;
      setupload({ ...upload, error: error });
    }
    setupload({ ...upload, arr: arr });
  }, [upload.fileupload]);

  //remove the 3 files
  const removeFile = (each) => {
    const getIndex = upload.arr.indexOf(each);
    upload.arr.splice(getIndex, 1);
    setupload({ ...upload, arr: arr });
    console.log(upload.arr);
  };
  // select  3 files onclick fun
  const onSelect = () => {
    document.getElementById("pdf").click();
  };
  // 6 files onchanges
  const handleOnFile1 = (e) => {
    setupload1({ ...upload1, fileupload1: e.target.files[0], error1: "" });
    document.getElementById("pdf1").value = "";
  };
  useEffect(() => {
    if (!upload1.fileupload1) {
    } else if (upload1.arr1.length < 6) {
      const res1 = upload1.fileupload1.name.includes("pdf");
      if (res1) {
        upload1.arr1.push(upload1.fileupload1);
      } else {
        upload1.error1 = `${t("UPLOAD_ONLY_PDF")}`;
        setupload1({ ...upload1, error1: error1 });
      }
    } else {
      upload1.error1 = `${t("UPLOAD_ONLY_6PDF_FILES")}`;
      setupload1({ ...upload1, error1: error1 });
    }
    setupload1({ ...upload1, arr1: arr1 });
  }, [upload1.fileupload1]);

  //remove  6 Files
  const removeFile1 = (each) => {
    const getIndex = upload1.arr1.indexOf(each);
    upload1.arr1.splice(getIndex, 1);
    setupload1({ ...upload1, arr1: arr1 });
    console.log(upload1.arr1);
  };

  //select 6 files onclick fun
  const onSelect1 = () => {
    document.getElementById("pdf1").click();
  };

  const handleInputChange = (e) => {
    onBoardForm[e.target.name] = e.target.value;
    errors[e.target.name] = "";
    setOnBoard({ ...onBoard, onBoardForm, errors });
    console.log("REY VUNNAVA", onBoardForm);
  };

  const allowOnlyNumbers = (e) => {
    var charCode = e.which ? e.which : e.keyCode;
    console.log(charCode);
    if (charCode > 31 && (charCode < 48 || charCode > 57)) e.preventDefault();
    return true;
  };

  const onLogin = (e) => {
    console.log("first", onBoardForm);
    e.preventDefault();
    if (
      // !onBoardForm[e.target.name]
      !onBoardForm.sscPercentage &&
      !onBoardForm.interPercentage &&
      !onBoardForm.spec1 &&
      !onBoardForm.spec2 &&
      !onBoardForm.ugPercentage &&
      !onBoardForm.panCard &&
      !onBoardForm.aadharCard &&
      !onBoardForm.currentAddress &&
      !onBoardForm.permanentAddress &&
      !onBoardForm.fullName &&
      !onBoardForm.gender &&
      !onBoardForm.dob &&
      !onBoardForm.emailId &&
      !onBoardForm.mobileNumber &&
      !onBoardForm.emergencyMobile &&
      !onBoardForm.bankAccount &&
      !onBoardForm.marriage
    ) {
      errors.sscPercentage = `${t("REQIRED_ERROR_FIELD")}`;
      errors.interPercentage = `${t("REQIRED_ERROR_FIELD")}`;
      errors.spec1 = `${t("REQIRED_ERROR_FIELD")}`;
      errors.spec2 = `${t("REQIRED_ERROR_FIELD")}`;
      errors.ugPercentage = `${t("REQIRED_ERROR_FIELD")}`;
      errors.panCard = `${t("REQIRED_ERROR_FIELD")}`;
      errors.aadharCard = `${t("REQIRED_ERROR_FIELD")}`;
      errors.currentAddress = `${t("REQIRED_ERROR_FIELD")}`;
      errors.permanentAddress = `${t("REQIRED_ERROR_FIELD")}`;
      errors.fullName = `${t("REQIRED_ERROR_FIELD")}`;
      errors.gender = `${t("REQIRED_ERROR_FIELD")}`;
      errors.dob = `${t("REQIRED_ERROR_FIELD")}`;
      errors.emailId = `${t("REQIRED_ERROR_FIELD")}`;
      errors.mobileNumber = `${t("REQIRED_ERROR_FIELD")}`;
      errors.emergencyMobile = `${t("REQIRED_ERROR_FIELD")}`;
      errors.bankAccount = `${t("REQIRED_ERROR_FIELD")}`;
      errors.marriage = `${t("REQIRED_ERROR_FIELD")}`;
    }
    errors.emailId = !isEmailValid(onBoardForm.emailId) && t("EMAIL_ERROR");

    if (errors) {
      console.log("NO Error");
      dispatch({
        type: HrTypes.ONBOARDING_REQUEST,
        payload: onBoardForm,
        // callback: (error) => {
        //   if (error) {
        //     setOnBoard({ ...onBoard });
        //     return;
        //   }
        // },
      });
    }

    setOnBoard({ ...onBoard, errors: errors });
    // setRadio({ ...radio, errors });
    // const { list } = onBoard;
    // list.push(Row);
    // setOnBoard({ ...onBoard, list: list });
    // console.log(onBoard);

    setOnBoard({
      ...onBoard,
      sscPercentage: "",
      interPercentage: "",
      spec1: "",
      spec2: "",
      ugPercentage: "",
      panCard: "",
      aadharCard: "",
      currentAddress: "",
      permanentAddress: "",
      fullName: "",
      dob: "",
      emailId: "",
      mobileNumber: "",
      emergencyMobile: "",
      bankAccount: "",
      marriageStatus: "",
      value: "",
    });
  };

  console.log(onBoard)

  const getTextField = (
    label,
    labelClassName,
    valueClassName,
    symbol,
    name,
    value,
    handleInputChange,
    onKeyPress,
    type
  ) => {
    return (
      <>
        <Row>
          <Col xs={5} className={`${labelClassName}`}>
            <span className="mb2 text-onboard">{label}</span>
            <span className="star">{symbol}</span>
          </Col>
          <Col xs={7}>
            <Input
              type={type}
              className={`input-field ${valueClassName} `}
              name={name}
              value={value}
              onChange={handleInputChange}
              onKeyPress={onKeyPress}
            />
          </Col>
        </Row>
      </>
    );
  };

  return (
    <div className="flx">
      <div className="posAbs mt1 col-12">
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>

      <div className="ml4 mt8  on-board mb3 fntLg text-onboard header ph4  ">
        <div className="flx mb2 mt3 ml1-5">
          <div className="Human-Resource-outer posRel ">
            <Image
              src={OnBoardIcon}
              alt="onBoard logo"
              className="Human-Resource-inner  posAbs top10 left2"
            />
          </div>

          <div className=" mt0-3 mb4 pl1-5 ">
            <h3 className="head underline">{t("ONBOARDING_FORMALITIES")}</h3>
          </div>
        </div>

        <Row className="mb2  ">
          <Col xs={2} className="head ">
            {t("HR_DISCUSSION")}
          </Col>
          <Col xs={2}>
            <p>{t("AGREED_WITH_TERMS")} </p>
          </Col>
          <Col xs={8}>
            <p className="flx ">
              <Checkbox
                type="radio"
                name="terms"
                value={"Yes"}
                onChange={handleInputChange}
                className="mr1"
              />
              {t("YES")}
              <Checkbox
                className="pl1-5 mr1"
                type="radio"
                value={"No"}
                onChange={handleInputChange}
                name="terms"
              />
              {t("NO")}
            </p>
          </Col>
        </Row>
        <Row className="mb2">
          <Col xs={2} className="head">
            {t("OFFER_EMAIL")}
          </Col>
          <Col xs={2}>
            <p>{t("SENT")}</p>
          </Col>

          <Col xs={8}>
            <p className="flx ">
              <Checkbox
                type="radio"
                name="sent"
                value={"Yes"}
                onChange={handleInputChange}
                className="mr1"
              />
              {t("YES")}
              <Checkbox
                className="pl1-5 mr1"
                value={"No"}
                onChange={handleInputChange}
                type="radio"
                name="sent"
              />
              {t("NO")}
            </p>
          </Col>
        </Row>
        <Row className="mb2">
          <Col xs={2} className="head">
            {t("OFFER_STATUS")}
          </Col>

          <Col xs={2} className="posRel">
            <Dropdown
              data={[
                { value: 1, label: t("Accepted") },
                { value: 2, label: t("REJECTED") },
              ]}
              className="text-onboard form-control input-field "
              placeholder={t("CANDIDATE_STATUS")}
            />
            <Image
              src={downArrow}
              alt="dropDown Icon"
              className=" posAbs arrow-drop1"
            />
          </Col>
          <Col xs={8}></Col>
        </Row>

        <Row className="mb2">
          <Col xs={2} className="head">
            {t("EDUCATION")}
          </Col>
          <Col xs={5}>
            {getTextField(
              t("SSC_IN_PERCENTAGE"),
              "",
              errors.sscPercentage ? "borderRed" : "",
              <sup>*</sup>,
              "sscPercentage",
              onBoardForm.sscPercentage,
              handleInputChange
            )}
          </Col>
          <Col xs={5}></Col>
          <Row>
            <Col xs={4}></Col>
            <Col xs={5}>
              {errors.sscPercentage ? (
                <span className="text-danger ml1">{errors.sscPercentage}</span>
              ) : null}
            </Col>
          </Row>
        </Row>

        <Row>
          <Col xs={2}></Col>
          <Col xs={5}>
            {getTextField(
              t("INTERMEDIATE_IN_PERCENTAGE"),
              "",
              errors.interPercentage ? "borderRed" : "",
              <sup>*</sup>,
              "interPercentage",
              onBoardForm.interPercentage,
              handleInputChange
            )}
          </Col>
          <Col xs={5}>
            {getTextField(
              t("SPECIALIZATION"),
              "tac",
              errors.spec1 ? "borderRed" : "",
              <sup>*</sup>,
              "spec1",
              onBoardForm.spec1,
              handleInputChange
            )}
          </Col>
          <Row>
            <Col xs={4}></Col>
            <Col xs={5}>
              {errors.interPercentage ? (
                <span className="text-danger ml1">
                  {errors.interPercentage}
                </span>
              ) : null}
            </Col>
            <Col xs={3}>
              {errors.spec1 ? (
                <span className="text-danger ml1">{errors.spec1}</span>
              ) : null}
            </Col>
          </Row>
        </Row>

        <Row className="mb2">
          <Col xs={2}></Col>
          <Col xs={5}>
            {getTextField(
              t("UG_IN_PERCENTAGE"),
              "",
              errors.ugPercentage ? "borderRed" : "",
              <sup>*</sup>,
              "ugPercentage",
              onBoardForm.ugPercentage,
              handleInputChange
            )}
          </Col>
          <Col xs={5}>
            {getTextField(
              t("SPECIALIZATION"),
              "tac",
              errors.spec2 ? "borderRed" : "",
              <sup>*</sup>,
              "spec2",
              onBoardForm.spec2,
              handleInputChange
            )}
          </Col>
          <Row>
            <Col xs={4}></Col>
            <Col xs={5}>
              {errors.ugPercentage ? (
                <span className="text-danger ml1">{errors.ugPercentage}</span>
              ) : null}
            </Col>
            <Col xs={2}>
              {errors.spec2 ? (
                <span className="text-danger ml1">{errors.spec2}</span>
              ) : null}
            </Col>
          </Row>
        </Row>
        <Row className="mb2">
          <Col xs={2}></Col>
          <Col xs={5}>{getTextField(t("PG_IN_PERCENTAGE"))}</Col>
          <Col xs={5}>{getTextField(t("SPECIALIZATION"), "tac")}</Col>
        </Row>
        <Row className="mb4">
          <Col xs={2}></Col>
          <Col xs={5}>{getTextField(t("DR"))}</Col>
          <Col xs={5}>{getTextField(t("SPECIALIZATION"), "tac")}</Col>
        </Row>

        <Row className="mb2">
          <Col xs={2} className="head">
            {t("EMPLOYMENT")}
          </Col>
          <Col xs={3}> {t("FIRST_EMPLOYMENT")}</Col>
          <Col xs={2}>
            <Input
              type="date"
              className={"input-field"}
              onChange={handleInputChange}
            />
          </Col>
          <Col xs={1} className="text_to">
            {t("TO")}
          </Col>
          <Col xs={2} className="ml2">
            <Input
              type="date"
              onChange={handleInputChange}
              placeholder={t("TILL_DATE")}
              className="text-onboard input-field"
            />
          </Col>
          <Col xs={2}></Col>
        </Row>

        <Row className="mb2">
          <Col xs={2}></Col>
          <Col xs={3}>{t("SECOND_EMPLOYMENT")}</Col>
          <Col xs={2}>
            <Input
              type="date"
              className={"input-field"}
              onChange={handleInputChange}
            />
          </Col>
          <Col xs={1} className="text_to">
            {t("TO")}
          </Col>
          <Col xs={2} className="ml2">
            <Input
              type="date"
              className={"input-field"}
              onChange={handleInputChange}
            />
          </Col>
          <Col xs={2}></Col>
        </Row>

        <Row className="mb2">
          <Col xs={2}></Col>
          <Col xs={3}> {t("THIRD_EMPLOYMENT")}</Col>
          <Col xs={2}>
            <Input
              type="date"
              className={"input-field"}
              onChange={handleInputChange}
            />
          </Col>
          <Col xs={1} className="text_to">
            {t("TO")}
          </Col>
          <Col xs={2} className="ml2">
            <Input
              type="date"
              className={"input-field"}
              onChange={handleInputChange}
            />
          </Col>
          <Col xs={2}></Col>
        </Row>

        <Row className="mb6">
          <Col xs={2}></Col>
          <Col xs={3}> {t("RELIEVING_FROM_CURRENT_ORGANIZATION")}</Col>
          <Col xs={5}>
            <div>
              <textarea className="text_area1"></textarea>
            </div>
          </Col>
          <Col xs={2}></Col>
        </Row>

        <Row className="mb4">
          <Col xs={2}></Col>
          <Col xs={2}> {t("PREVIOUS_COMPANY_3MONTHS")}</Col>
          <Col xs={1}></Col>
          <Col xs={2}>
            <span className="head1">{t("PDF_ONLY")}</span>
            <Input
              type="file"
              hidden
              name="fileupload"
              id="pdf"
              value={onBoardForm.name}
              onChange={handleOnFile}
              placeholder={"Select Files"}
              className="form-control"
            />
            <div className="text-center border border-dark" onClick={onSelect}>
              {t("SELECT_FILES")}
            </div>
          </Col>
          <Col xs={1}></Col>
          <Col xs={4}>
            <div>
              <br />
              {upload.arr.length > 0
                ? upload.arr.map((each, index) => {
                    return (
                      <span
                        className="posRel"
                        key={index}
                        style={{
                          border: "1px solid black",
                          marginRight: "10px",
                        }}
                        onClick={() => removeFile(each)}
                      >
                        <img src={PdfIcon} alt={"image"} />
                        <img
                          src={crossicon}
                          alt={"image"}
                          style={{ width: "9px" }}
                          className="posAbs top3 right1 "
                        />
                      </span>
                    );
                  })
                : null}
              <br />
            </div>
          </Col>
          <Row>
            <Col xs={2}></Col>
            <Col xs={3}></Col>
            <Col xs={4}>
              {" "}
              {error ? <span style={{ color: "red" }}>{error}</span> : null}
            </Col>
            <Col xs={3}></Col>
          </Row>
        </Row>

        <Row className="mb4">
          <Col xs={2}></Col>
          <Col xs={2}> {t("PREVIOUS_COMPANY_6MONTHS")}</Col>
          <Col xs={1}></Col>
          <Col xs={2}>
            <span className="head1">{t("PDF_ONLY")}</span>
            <Input
              type="file"
              name="fileupload1"
              id="pdf1"
              hidden
              onChange={handleOnFile1}
              placeholder={"Select Files"}
              className="form-control"
            />
            <div className="text-center border border-dark" onClick={onSelect1}>
              {t("SELECT_FILES")}{" "}
            </div>
          </Col>
          <Col xs={1}></Col>
          <Col xs={4}>
            <div>
              <br />
              {upload1.arr1.length > 0
                ? upload1.arr1.map((each, index) => {
                    return (
                      <span
                        className="posRel"
                        key={index}
                        style={{
                          border: "1px solid black",
                          marginRight: "10px",
                        }}
                        onClick={() => removeFile1(each)}
                      >
                        <img src={PdfIcon} alt={"image"} />
                        <img
                          src={crossicon}
                          alt={"image"}
                          style={{ width: "9px" }}
                          className="posAbs top3 right1 "
                        />
                      </span>
                    );
                  })
                : null}
              <br />
            </div>
          </Col>

          <Row>
            <Col xs={2}></Col>
            <Col xs={3}></Col>
            <Col xs={4}>
              {" "}
              {error1 ? (
                <span style={{ color: "red" }}>{error1}</span>
              ) : null}{" "}
            </Col>
            <Col xs={3}></Col>
          </Row>
        </Row>

        <Row className="mb2">
          <Col xs={2}></Col>
          <Col xs={5}>{getTextField(t("CURRENT_CTC"))}</Col>
          <Col xs={5}>{getTextField(t("EXPECTED_CTC"), "tac")}</Col>
        </Row>

        <Row className="mb2">
          <Col xs={2}></Col>
          <Col xs={5}>
            {getTextField(
              t("PAN_CARD"),
              "",
              errors.panCard ? "borderRed" : "",
              <sup>*</sup>,
              "panCard",
              onBoardForm.panCard,
              handleInputChange
            )}
          </Col>
          <Col xs={5}>
            {getTextField(
              t("AADHAR_CARD"),
              "tac",
              errors.aadharCard ? "borderRed" : "",
              <sup>*</sup>,
              "aadharCard",
              onBoardForm.aadharCard,
              handleInputChange,
              allowOnlyNumbers
            )}
          </Col>

          <Row>
            <Col xs={4}></Col>
            <Col xs={5}>
              {errors.panCard ? (
                <span className="text-danger ml1">{errors.panCard}</span>
              ) : null}
            </Col>
            <Col xs={3}>
              {errors.aadharCard ? (
                <span className="text-danger ml1">{errors.aadharCard}</span>
              ) : null}
            </Col>
          </Row>
        </Row>
        <Row className="mb2">
          <Col xs={2}></Col>
          <Col xs={2}>
            <span>{t("CURRENT_ADDRESS")}</span>
            <span className="star">
              <sup>*</sup>
            </span>
          </Col>
          <Col xs={3}>
            <div>
              <textarea
                className={`ml1  text_area2 ${
                  errors.currentAddress && "borderRed"
                }`}
                name="currentAddress"
                value={onBoardForm.currentAddress}
                onChange={handleInputChange}
              ></textarea>
            </div>
            {errors.currentAddress ? (
              <span className="text-danger ml1">{errors.currentAddress}</span>
            ) : null}
          </Col>
          <Col xs={5}></Col>
        </Row>

        <Row className="mb2">
          <Col xs={2}></Col>
          <Col xs={2}>
            <span> {t("PERMANENT_ADDRESS")} </span>
            <span className="star">
              <sup>*</sup>
            </span>
          </Col>
          <Col xs={3}>
            <div>
              <textarea
                className={`ml1 text_area2 ${
                  errors.permanentAddress && "borderRed"
                }`}
                name="permanentAddress"
                value={onBoardForm.permanentAddress}
                onChange={handleInputChange}
              ></textarea>
            </div>
            {errors.permanentAddress ? (
              <span className="text-danger ml1">{errors.permanentAddress}</span>
            ) : null}
          </Col>
          <Col xs={5}></Col>
        </Row>

        <Row className="mb2">
          <Col xs={2}></Col>
          <Col xs={5}>
            {getTextField(
              t("NAME"),
              "",
              errors.fullName ? "borderRed" : "",
              <sup>*</sup>,
              "fullName",
              onBoardForm.fullName,
              handleInputChange
            )}
          </Col>

          <Col xs={5} className="flx">
            <span className="mr2 ml4">
              {t("GENDER")}
              <span className="star">
                <sup>*</sup>
              </span>
            </span>

            <Checkbox
              type="radio"
              name="gender"
              value={"male"}
              onChange={handleInputChange}
              className="mr1"
            />
            {t("MALE")}
            <Checkbox
              className="pl1-5 mr1"
              value={"female"}
              onChange={handleInputChange}
              type="radio"
              name="gender"
            />
            {t("FEMALE")}
          </Col>

          <Row>
            <Col xs={4}></Col>
            <Col xs={4}>
              {errors.fullName ? (
                <span className="text-danger ml1">{errors.fullName}</span>
              ) : null}
            </Col>
            <Col xs={4}>
              {errors.gender ? (
                <span className="text-danger ml3">{errors.gender}</span>
              ) : null}
            </Col>
          </Row>
        </Row>
        <Row className="mb2">
          <Col xs={2}></Col>
          <Col xs={5}>
            {getTextField(
              t("DOB"),
              "",
              errors.dob ? "borderRed" : "",
              <sup>*</sup>,
              "dob",
              onBoardForm.dob,
              handleInputChange,
              "",
              "date"
            )}
          </Col>

          <Row>
            <Col xs={4}></Col>
            <Col xs={4}>
              {errors.dob ? (
                <span className="text-danger ml1">{errors.dob}</span>
              ) : null}
            </Col>
            <Col xs={4}></Col>
          </Row>

          <Col xs={5}></Col>
        </Row>

        <Row className="mb2">
          <Col xs={2}></Col>
          <Col xs={5}>
            {getTextField(
              t("PERSONAL_EMAIL"),
              "",
              errors.emailId ? "borderRed" : "",
              <sup>*</sup>,
              "emailId",
              onBoardForm.emailId,
              handleInputChange
            )}
          </Col>
          <Row>
            <Col xs={4}></Col>
            <Col xs={4}>
              {errors.emailId ? (
                <span className="text-danger ml1">{errors.emailId}</span>
              ) : null}
            </Col>
            <Col xs={4}></Col>
          </Row>
          <Col xs={5}></Col>
        </Row>

        <Row className="mb2">
          <Col xs={2}></Col>
          <Col xs={5}>
            {getTextField(
              t("MOBILE_NUMBER"),
              "",
              errors.mobileNumber ? "borderRed" : "",
              <sup>*</sup>,
              "mobileNumber",
              onBoardForm.mobileNumber,
              handleInputChange,
              allowOnlyNumbers
            )}
          </Col>
          <Col xs={5}>
            {getTextField(
              t("EMERGENCY_CONTACT"),
              "tac",
              errors.emergencyMobile ? "borderRed" : "",
              <sup>*</sup>,
              "emergencyMobile",
              onBoardForm.emergencyMobile,
              handleInputChange,
              allowOnlyNumbers
            )}
          </Col>

          <Row>
            <Col xs={4}></Col>
            <Col xs={5}>
              {errors.mobileNumber ? (
                <span className="text-danger ml1">{errors.mobileNumber}</span>
              ) : null}
            </Col>
            <Col xs={3}>
              {errors.emergencyMobile ? (
                <span className="text-danger ml1">
                  {errors.emergencyMobile}
                </span>
              ) : null}
            </Col>
          </Row>
        </Row>

        <Row className="mb2">
          <Col xs={2}></Col>
          <Col xs={2}>
            {t("BANK_ACCOUNT")} <sup className="star">*</sup>
          </Col>
          <Col xs={5}>
            <Checkbox
              type="Checkbox"
              value={onBoardForm.check}
              name="check"
              label={t("ALREADY_ACCOUNT")}
              className="ml1 mb2"
            />
            <Row>
              <Input
                type="text"
                name="bankAccount"
                value={onBoardForm.bankAccount}
                onChange={handleInputChange}
                onKeyPress={allowOnlyNumbers}
                className={`bank_account ml1 ${
                  errors.bankAccount && "borderRed"
                }`}
              />
            </Row>
            {errors.bankAccount ? (
              <span className="text-danger ml1">{errors.bankAccount}</span>
            ) : null}
          </Col>
          <Col xs={3}></Col>
        </Row>
        <Row className="mb2">
          <Col xs={2}></Col>
          <Col xs={5}>{getTextField(t("BLOOD_GROUP"))}</Col>
          <Col xs={5}></Col>
        </Row>
        <Row className="mb2">
          <Col xs={2}></Col>
          <Col xs={5} className="flx">
            <span>
              {t("MARRIAGE_STATUS")}
              <sup className="star">*</sup>
            </span>

            <Checkbox
              type="radio"
              name="marriage"
              value={"single"}
              onChange={handleInputChange}
              className="mr1 ml1 pl6"
            />
            {t("SINGLE")}
            <Checkbox
              className="pl1-5 mr1"
              value={"married"}
              onChange={handleInputChange}
              type="radio"
              name="marriage"
            />
            {t("MARRIED")}
          </Col>

          <Row>
            <Col xs={4}></Col>
            <Col xs={5}>
              {" "}
              {errors.marriage ? (
                <span className="text-danger ml1">{errors.marriage}</span>
              ) : null}
            </Col>
            <Col xs={3}></Col>
          </Row>

          <Col xs={5}></Col>
        </Row>
        <Row className="mb2">
          <Col xs={2}></Col>
          <Col xs={5}>{getTextField(t("FATHER_NAME"))}</Col>
          <Col xs={5}>{getTextField(t("MOTHER_NAME"), "tac")}</Col>
        </Row>
        {onBoardForm.marriage === "married" && (
          <div>
            <Row className="mb2">
              <Col xs={2}></Col>
              <Col xs={5}>{getTextField(t("SPOUSE_NAME"))}</Col>
            </Row>
          </div>
        )}
        <div className="tac">
          <Button
            text={t("SUBMIT")}
            className="ml15-5 mt5 mb2 hr-button"
            onSubmit={onLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;
