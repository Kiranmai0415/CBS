import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Sidebar from "../../../shared/sidebar";
import Input from "../../../shared/input";
import Button from "../../../shared/button";
import { useTranslation } from "react-i18next";
import logo from "../../../images/payrool-white.png";
import Header from "../../../shared/header";
import { useState } from "react";

const PayRoll = () => {



  const { t } = useTranslation();
  const [state, setState] = useState({
    list: [],
    month: "",
    number: "",
    amount: "",
    errors: {
      monthError: false,
      monthMessage: "",
      numberError: false,
      numberMessage: "",
      amountError: false,
      amountMessage: "",
    },
  });

  const handleInputChange = (e) => {
    const { errors } = state;
    const value = e.target.value;
    const name = e.target.name;
    state[name] = value;
    errors[name + "Error"] = false;
    setState({ ...state, state: state.errors });
  };

  const allowOnlyNumbers = (evt) => {
    var charCode = evt.which ? evt.which : evt.keyCode;
    console.log(charCode);
    if (charCode > 31 && (charCode < 48 || charCode > 57)) evt.preventDefault();

    return true;
  };

  const OnLogin = (e) => {
    e.preventDefault();
    const { errors } = state;
    if (!state.month) {
      errors["monthError"] = true;
      errors["monthMessage"] = "This field is required.";
    } else {
      errors["monthError"] = false;
      errors["monthMessage"] = "";
    }
    if (!state.number) {
      errors["numberError"] = true;
      errors["numberMessage"] = "This field is required.";
    } else {
      errors["numberError"] = false;
      errors["numberMessage"] = "";
    }
    if (!state.amount) {
      errors["amountError"] = true;
      errors["amountMessage"] = "This field is required.";
    } else {
      errors["amountError"] = false;
      errors["amountMessage"] = "";
    }
    setState({ ...state, errors: errors });
    console.log("Hello onclick");


    console.log("add the values");
    const { list } = state;
    list.push(Row);
    setState({ ...state, list: list });
    console.log(state)


    setState({ ...state, month: '', number: '', amount: '' })

  }




  return (
    <>
      <div>
        <div className="flx ">

          <div className="col-12 mt1 posAbs">
            <Header />
          </div>

          <div>
            <Sidebar />
          </div>
          <div className='full-width  ml4 mt5-5 mr3 fntLg header white page-color'>
            <div className='flx '>
              <img src={logo} alt="icon" className='logo-bg p0-5 ml1 p15 mt2-5' />
              <h2 className='ml2 mt3 header-name'>{t("PAYROLL_PROCESS")}</h2>
            </div>

            <Row className="mt7-5">
              <Col sm={1}></Col>
              <Col sm={4}>
                <p>{t("NUMBER_OF_WORKING_DAYS_IN_MONTH")}</p>
              </Col>
              {/* <Col sm={2}><Input type="month" name="month" onChange={handleInputChange} />{state.errors.monthError && <div className="text-danger">{state.errors.monthMessage}</div>}</Col> */}

              <Col sm={2}>
                <Input
                  type="month"
                  className={` input-field ${state.errors.month && "borderRed "} `}
                  name="month"
                  value={state.month}
                  onChange={handleInputChange}
                />
                {state.errors.monthError && (
                  <div className="text-danger">{state.errors.monthMessage}</div>
                )}
              </Col>

              <Col sm={1}></Col>
              <Col sm={2}>
                <Input
                  type="text"
                  className={` input-field ${state.errors.number && "borderRed "} `}
                  placeholder={t("NUMBER_OF_DAYS")}
                  name="number"
                  value={state.number}
                  onKeyPress={allowOnlyNumbers}
                  onChange={handleInputChange}
                />
                {state.errors.numberError && (
                  <div className="text-danger">
                    {state.errors.numberMessage}
                  </div>
                )}
              </Col>
            </Row>

            <Row className="mt2">
              <Col sm={1}></Col>
              <Col sm={4}><p>{t('BASED_ON_MONTH_IT_WILL_CALCULATE')}</p></Col>
              <Col sm={2}><Input type='text'
                className={` input-field ${state.errors.number && "borderRed "} `}
                placeholder={t("TOTAL_AMOUNT")} name='amount' value={state.amount} onKeyPress={allowOnlyNumbers} onChange={handleInputChange} />
                {state.errors.amountError && <div className="fntRed">{state.errors.amountMessage}</div>}</Col>
            </Row>

            <Row>
              <Col sm={5}></Col>
              <Col sm={2}> <Button
                text={t("GENERATE_PAYSLIP")} type='reset'
                className="fntWhite submit-button mt9 ml2 mb2" onSubmit={OnLogin} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayRoll;
