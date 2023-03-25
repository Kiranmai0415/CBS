import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Image } from "react-bootstrap";
import CodexLogo from "../../../images/CBS-codexbox-Logo.png";
import CBSvector from "../../../images/CBS-vector.png";
import CBS_main_logo from "../../../images/CBS-main-logo.png";
import Input from "../../../shared/input";
import Button from "../../../shared/button";
import Checkbox from "../../../shared/checkbox";
import { ReactComponent as EmailIcon } from "../../../images/icon-email.svg";
import { ReactComponent as PasswordIcon } from "../../../images/icon-password.svg";
import { ReactComponent as NameIcon } from "../../../images/icon-name.svg";
import { ReactComponent as VisibilityOffIcon } from "../../../images/icon-visibility-none.svg";
import { ReactComponent as VisibilityIcon } from "../../../images/visibility_FILL0_wght400_GRAD0_opsz24.svg";
import {
  isEmailValid,
  isPasswordValid,
  isConfirmPasswordValid,
} from "../../../shared/utils";
import { AuthTypes } from "../../../redux/action_types/auth_types"; 

function Signup() {

  const [eye, setEye] = useState(false);

  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    signupForm: {
      fname: "",
      email: "",
      password: "",
      confirmPassword: "",
      check: "",
    },
    errors: {
      email: "",
      password: "",
      confirmPassword: "",
      check: "",
    },
    showError: false,
  });
  const handleInputChange = (e) => {
    const name = [e.target.name];
    const value = e.target.value;
    signupForm[name] = value;
    errors[name] = "";
    setState({ ...state, signupForm: signupForm, errors: errors });
  };
  const handleCheckChange = (e) => {
    const name = [e.target.name];
    const value = e.target.checked;
    signupForm[name] = value;
    setState({ ...state, signupForm: signupForm });
  };

  const onSignup = (e) => {
    e.preventDefault();
    if (isEmailValid(signupForm.email)) {
      errors.email = "";
    } else {
      errors.email = `${t("EMAIL_ERROR")}`;
    }
    if (isPasswordValid(signupForm.password)) {
      errors.password = "";
    } else {
      errors.password = `${t("INVALID_PASSWORD_ERROR")}`;
    }
    if (
      isConfirmPasswordValid(signupForm.confirmPassword, signupForm.password)
    ) {
      errors.confirmPassword = "";
    } else {
      errors.confirmPassword = `${t("NOT_MATCH")}`;
    }
    if (!errors.email && !errors.password && !errors.confirmPassword) {
      dispatch({
        type: AuthTypes.SIGNUP_REQUEST,
        payload: signupForm,
        callback: (error) => {
          if (error) {
            setState({ ...state, showError: true });
            return;
          }
          navigate("/Dashboard");
        },
      });
    }
    setState({ ...state, errors: errors });
  };
  const toggleFn = () => {
    setEye(!eye);
  };

  const { signupForm, errors } = state;
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
            className="cbs-vector  posAbs mv25 "
          />
        </div>
        <div className=" pl3-5 pr3-5 col-5">
          <Image
            src={CBS_main_logo}
            alt="main logo"
            className="cbs_business_logo"
          />
          <h2 className=" heading pv1">
            <b>{t("SIGN_UP_HEADING")}</b>
          </h2>
          <div>
            <Input
              type="text"
              placeholder={t("NAME_PLACEHOLDER")}
              icon={<NameIcon className="posAbs top1 left1-5  " />}
              className={`mb3 text-field`}
              name="fname"
              value={signupForm.fname}
              onChange={handleInputChange}
            />

            <Input
              type="text"
              placeholder={t("EMAIL_PLACEHOLDER")}
              icon={<EmailIcon className="posAbs top1 left1-5 " />}
              className={`mb3 text-field ${errors.email && "borderRed txt_color"} `}
              name="email"
              value={signupForm.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="txt_color mt-30 p-tag">{errors.email}</p>
            )}

            <Input
              type={eye ? "text" : "password"}
              placeholder="Password"
              className={`mb3 text-field ${errors.password && "borderRed txt_color"} `}
              name="password"
              value={signupForm.password}
              icon={<PasswordIcon className="posAbs top1 left1-5 " />}
              icon1={
                eye ? (
                  <VisibilityIcon
                    className="posAbs top1 right1-5"
                    onClick={toggleFn}
                  />
                ) : (
                  <VisibilityOffIcon
                    className="posAbs top1 right1-5 "
                    onClick={toggleFn}
                  />
                )
              }
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className="txt_color mt-30 p-tag">{errors.password}</p>
            )}

            <Input
              type="password"
              placeholder={t("CONFIRM_NEWPASSWORD_PLACEHOLDER")}
              icon={<PasswordIcon className="posAbs top1 left1-5 " />}
              name="confirmPassword"
              value={signupForm.confirmPassword}
              className={`mb3 text-field ${errors.confirmPassword && "borderRed txt_color"} `}
              onChange={handleInputChange}
            />
            {errors.confirmPassword && (
              <p className="txt_color mt-30 p-tag">{errors.confirmPassword}</p>
            )}

            <Checkbox
              type="Checkbox"
              value={signupForm.check}
              name="check"
              label={t("CHECKBOX")}
              onChange={handleCheckChange}
            />
            <div className="tac">
              <Button
                text={t("SIGN_UP_HEADING")}
                disabled={
                  !signupForm.fname ||
                  !signupForm.email ||
                  !signupForm.password ||
                  !signupForm.confirmPassword ||
                  !signupForm.check
                }
                className={"success-button mt2 fntWhite"}
                onSubmit={onSignup}
              />

              <p className="fntBlue mb0-3 ">{t("OR_MESSAGE")}</p>
              <span>{t("ACCOUNT_MESSAGE")}</span>
              <a href="/Login" className="fntBlue mb0-3 ml0-5 underlinenone">
                {t("LOGIN_LINK")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
