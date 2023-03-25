import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthTypes } from "../../../redux/action_types/auth_types";
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import CodexLogo from "../../../images/CBS-codexbox-Logo.png";
import CBSvector from "../../../images/CBS-vector.png";
import CBS_main_logo from "../../../images/CBS-main-logo.png";
import Input from "../../../shared/input";
import Button from "../../../shared/button";
import { ReactComponent as PasswordIcon } from "../../../images/icon-password.svg";
import { ReactComponent as VisibleIconNone } from "../../../images/icon-visibility-none.svg";
import { ReactComponent as VisibleIcon } from "../../../images/icon-visibility.svg";
import { isConfirmPasswordValid, isPasswordValid } from "../../../shared/utils";



function ResetPassword() {
  const [visible, setVisible] = useState(false);
  const [visi, setVisi] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { resetToken } = useParams();
  
  const { t } = useTranslation();

  const [state, setState] = useState({
    resetForm: {
      password: "",
      confirmPassword: "",
    },
    errors: {
      password: "",
      confirmPassword: "",
    },
  });
  // visible function

  const toggleFn1 = () => {
    setVisible(!visible);
  };
  const toggleFn2 = () => {
    setVisi(!visi);
  };
  const handleInputChange = (e) => {
    const name = [e.target.name];
    const value = e.target.value;
    resetForm[name] = value;
    errors[name] = "";
    setState({ ...state, resetForm: resetForm, errors: errors });
  };

  const { resetForm, errors } = state;
 
  // submit function
  const onReset = (e) => {
    e.preventDefault();

    if (isPasswordValid(resetForm.password)) {
      errors.password = "";
    } else {
      errors.password = `${t("WRONG_PASSWORD")}`;
    }
    if (isConfirmPasswordValid(resetForm.confirmPassword, resetForm.password)) {
      errors.confirmPassword = "";
    } else {
      errors.confirmPassword = `${t("CONFIRM_PASSWORD_ERROR")}`;
    }

    if (!errors.password && !errors.confirmPassword) {
      dispatch({
        type: AuthTypes.RESET_REQUEST,
        params: resetToken,
        payload: {
          newPassword: resetForm.password,
          oldPassword: resetForm.password,
        },
        callback: (error) => {
          if (error) {
            setState({ ...state });
            return;
          }
          navigate("/login");
        },
      });
    }
    setState({ ...state, errors: errors });
  };

  return (
    <div className="main-bg-image flx ">
      <div className="side_vector flx">
        <div className="col-7 bg_color ">
          <Image
            src={CodexLogo}
            alt="app logo"
            className="app-logo posAbs mv17"
          />
          <Image
            src={CBSvector}
            alt="vector image"
            className="cbs-vector posAbs mv25 "
          />
        </div>
        <div className="pl3-5 pr3-5 col-5">
          <Image
            src={CBS_main_logo}
            alt="main logo"
            className="cbs_business_logo  mt3"
          />
          <div className="bg-img ">
            <h3 className="heading pv3">
              <b>{t("RESET_PASSWORD_HEADING")}</b>
            </h3>

            <Input
              type={visi ? "text" : "password"}
              placeholder={t("NEWPASSWORD_PLACEHOLDER")}
              icon={<PasswordIcon className="posAbs top1 left1-5" />}
              icon1={
                !visi ? (
                  <VisibleIconNone
                    onClick={toggleFn2}
                    className="posAbs top1 right1-5"
                  />
                ) : (
                  <VisibleIcon
                    onClick={toggleFn2}
                    className="posAbs top1 right1-5"
                  />
                )
              }
              className={`mb3 text-field ${
                errors.password && "borderRed txt_color"
              } `}
              name="password"
              onChange={handleInputChange}
              value={resetForm.password}
            />
            {errors.password && (
              <p className="txt_color mt-17">{errors.password}</p>
            )}
            {/*  This is for confirm password input field */}
            <Input
              type={visible ? "text" : "password"}
              className={`mb3 text-field ${
                errors.password && "borderRed txt_color"
              } `}
              placeholder={t("CONFIRM_NEWPASSWORD_PLACEHOLDER")}
              icon={<PasswordIcon className="posAbs top1 left1-5" />}
              icon1={
                !visible ? (
                  <VisibleIconNone
                    onClick={toggleFn1}
                    className="posAbs top1 right1-5"
                  />
                ) : (
                  <VisibleIcon
                    onClick={toggleFn1}
                    className="posAbs top1 right1-5"
                  />
                )
              }
              name="confirmPassword"
              onChange={handleInputChange}
              value={resetForm.confirmPassword}
            />
            {errors.confirmPassword && (
              <p className="txt_color mt-17">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="tac">
            <Button
              text={t("SUBMIT_BUTTON")}
              className="success-button primary-btn mt2 fntWhite"
              disabled={!resetForm.password || !resetForm.confirmPassword}
              onSubmit={onReset}
            />
            <p className="mt-3">
              {t("PASSWORD_MESSAGE")}
              <a href="/login" className="disin fntwdt underline ml1 ">
                {t("LOGIN_HEADING")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
