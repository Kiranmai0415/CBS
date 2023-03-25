import React from "react";
import { useTranslation } from "react-i18next";
import Input from "../../../shared/input";
import Button from "../../../shared/button";
import { Container, Row, Col, Image } from "react-bootstrap";
import Dropdown from "../../../shared/dropdown";
import calendar from "../../../images/timesheet.png";
import Sidebar from "../../../shared/sidebar";
import { useState } from "react";
import Header from "../../../shared/header";
import downArrow from "../../../images/Icon-down-arrow.svg";

const TimeSheet = () => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    list: [],

    time: "",
    time1: "",

    number: "",

    date1: "",

    errors: {
      time: "",
      time1: "",

      number: "",

      date1: "",
    },
  });

  const { errors } = state;

  const handleinputdata = (e) => {
    state[e.target.name] = e.target.value;
    errors[e.target.name] = "";
    setState({ ...state, state: state, errors: errors });
    console.log(state);
  };

  // const allowNumbersOnly = (e) => {
  //   var charCode = e.which ? e.which : e.keyCode;
  //   console.log(charCode);
  //   if (charCode > 31 && (charCode < 48 || charCode > 57)) e.preventDefault();

  //   return true;
  // };

  const submitFn = (e) => {
    e.preventDefault();
    if (!state.time && !state.time1 && !state.number && !state.date1) {
      errors.time = `${t("REQIRED_ERROR_FIELD")}`;
      errors.time1 = `${t("REQIRED_ERROR_FIELD")}`;
      errors.number = `${t("REQIRED_ERROR_FIELD")}`;
      errors.date1 = `${t("REQIRED_ERROR_FIELD")}`;
    }
    setState({ ...state, errors: errors });
    console.log("submit");

    console.log("add the values");

    const { list } = state;
    list.push(Row);
    setState({ ...state, list: list });
    console.log(state);

    setState({ ...state, time: "", time1: "", number: "", date1: "" });
  };

  return (
    <>
      <div className="flx tac">
        <div className="posAbs mt1 col-12">
          <Header />
        </div>

        <div>
          <Sidebar />
        </div>

        <div className=" ml4 mt5-5 mr3 on-board fntLg text-onboard header page-color">
          <div className="flx mb2 mt3 ml1-5">
            <div className="Human-Resource-outer posRel ">
              <Image
                src={calendar}
                alt="onBoard logo"
                className="Human-Resource-inner  posAbs top10 left2"
              />
            </div>

            <div className=" mt0-5 pl1-5 ">
              <h3 className="head underline">{t("TIME_SHEET")}</h3>
            </div>
          </div>

          <Row className="mb2">
            <Col xs={1}></Col>
            <Col xs={3} className="tal">
              {t("LOGIN_TIME")}
            </Col>

            <Col xs={2}>
              <Input
                type="time"
                onChange={handleinputdata}
                className={` input-field ${errors.time && "borderRed "} `}
                value={state.time}
                name="time"
              />
              {errors.time ? (
                <span className="text-danger">{errors.time}</span>
              ) : null}
            </Col>
            <Col sm={5}></Col>
          </Row>
          <Row className="mb2">
            <Col xs={1}></Col>
            <Col sm={3} className="tal">
              {t("LOGOUT_TIME")}
            </Col>
            <Col sm={2}>
              <Input
                type="time"
                className={` input-field ${errors.time1 && "borderRed "} `}
                onChange={handleinputdata}
                value={state.time1}
                name="time1"
              />
              {errors.time1 ? (
                <span className="text-danger">{errors.time1}</span>
              ) : null}
            </Col>
            <Col sm={5}></Col>
          </Row>
          <Row className="mb2">
            <Col xs={1}></Col>

            <Col sm={3} className="tal">
              {t("NUMBER_OF_WORKING_DAYS_IN_A_MONTH")}
            </Col>

            <Col xs={2} className="posRel">
              <Dropdown
                type="select"
                data={[
                  { value: 1, label: t("1") },
                  { value: 2, label: t("2") },
                  { value: 3, label: t("3") },
                  { value: 4, label: t("4") },
                  { value: 5, label: t("5") },
                  { value: 6, label: t("6") },
                  { value: 7, label: t("7") },
                  { value: 8, label: t("8") },
                  { value: 9, label: t("9") },
                  { value: 10, label: t("10") },
                  { value: 11, label: t("11") },
                  { value: 12, label: t("12") },
                  { value: 13, label: t("13") },
                  { value: 14, label: t("14") },
                  { value: 15, label: t("15") },
                  { value: 16, label: t("16") },
                  { value: 17, label: t("17") },
                  { value: 18, label: t("18") },
                  { value: 19, label: t("19") },
                  { value: 20, label: t("20") },
                  { value: 21, label: t("21") },
                  { value: 22, label: t("22") },
                  { value: 23, label: t("23") },
                  { value: 24, label: t("24") },
                  { value: 25, label: t("25") },
                  { value: 26, label: t("26") },
                  { value: 27, label: t("27") },
                  { value: 28, label: t("28") },
                  { value: 29, label: t("29") },
                  { value: 30, label: t("30") },
                ]}
                className={`text-onboard form-control input-field ${
                  errors.number && "borderRed "
                } `}
                placeholder={t("Enter working days")}
                value={state.number}
                name="number"
                onChange={handleinputdata}
              />
              <Image
                src={downArrow}
                alt="dropDown Icon"
                className=" posAbs arrow-drop1 "
              />
              {errors.number ? (
                <span className="text-danger">{errors.number}</span>
              ) : null}
            </Col>

            <Col sm={5}></Col>
          </Row>

          <Row className="mb2 ml1">
            <Col sm={1}></Col>
            <Col sm={3} className="tal">
              {t("HOLIDAYS/CLIENT_CALANDER")}
            </Col>
            <Col sm={2}>
              <Input
                type="date"
                className={` input-field ${errors.date1 && "borderRed "} `}
                onChange={handleinputdata}
                value={state.date1}
                name="date1"
              />
              {errors.date1 ? (
                <span className="text-danger">{errors.date1}</span>
              ) : null}
            </Col>
            <Col sm={5}></Col>
          </Row>

          <Row>
            <Col sm={4}></Col>

            <Col sm={4}>
              <Button
                text={t("SUBMIT")}
                className="ml15-5 mt5 mb2 hr-button"
                onSubmit={submitFn}
              >
                Submit
              </Button>
            </Col>
            <Col sm={4}></Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default TimeSheet;
