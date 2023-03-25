import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Image } from "react-bootstrap";
import CodexLogo from "../../../images/CBS-codexbox-Logo.png";
import CBSvector from "../../../images/CBS-vector.png";
import CBS_main_logo from "../../../images/CBS-main-logo.png";
import Input from "../../../shared/input";
import Button from "../../../shared/button";
import { ReactComponent as EmailIcon } from "../../../images/icon-email.svg";
import { ReactComponent as PasswordIcon } from "../../../images/icon-password.svg";
import { ReactComponent as VisibleIconNone } from "../../../images/icon-visibility-none.svg";
import { ReactComponent as VisibleIcon } from "../../../images/icon-visibility.svg";
import { isEmailValid, isPasswordValid } from "../../../shared/utils";
import { AuthTypes } from "../../../redux/action_types/auth_types";



const Login = () => {
  const [visible, SetVisible] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    loginForm: {
      email: "",
      password: "",
    },

    errors: {
      email: "",
      password: "",
    },
  });

  // visible function
  const toggleFn = () => {
    SetVisible(!visible);
  };

  // onChange function
  const handleInputChange = (e) => {
    const name = [e.target.name];
    const value = e.target.value;
    loginForm[name] = value;
    errors[name] = "";
    setState({ ...state, loginForm: loginForm, errors: errors });
  };

  // submit function
  const onLogin = (e) => {
    e.preventDefault();
    if (isEmailValid(loginForm.email)) {
      errors.email = "";
    } else {
      errors.email = `${t("EMAIL_ERROR")}`;
    }
    if (isPasswordValid(loginForm.password)) {
      errors.password = "";
    } else {
      errors.password = `${t("INVALID_PASSWORD_ERROR")}`;
    }

    if (!errors.email && !errors.password) {
      localStorage.setItem("token",123)
      dispatch({
        type: AuthTypes.LOGIN_REQUEST,
        payload: loginForm,
        callback: (error) => {
          if (error) {
            setState({ ...state });
            return;
          }
          navigate("/Dashboard");
        },
      });
      
    }
    setState({ ...state });
  };

  const { loginForm, errors } = state;
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
            className="cbs_business_logo mt3"
          />
          <div>
            <h2 className=" heading pv2">
              <b>{t("LOGIN_HEADING")}</b>
            </h2>
            <Input
              type="text"
              className={`mb3 text-field ${errors.email && "borderRed txt_color"
                } `}
              placeholder={t("EMAIL_PLACEHOLDER")}
              value={loginForm.name}
              icon={<EmailIcon className="posAbs top1 left1-5 " />}
              name="email"
              onChange={handleInputChange}
            />
            {errors.email && <p className="txt_color mt-10">{errors.email}</p>}
            <Input
              type={visible ? "text" : "password"}
              className={`mb3 text-field ${errors.password && "borderRed txt_color"
                } `}
              placeholder={t("PASSWORD_PLACEHOLDER")}
              value={loginForm.password}
              icon={<PasswordIcon className="posAbs top1 left1-5 " />}
              icon1={
                !visible ? (
                  <VisibleIconNone
                    onClick={toggleFn}
                    className="posAbs top1 right3"
                  />
                ) : (
                  <VisibleIcon
                    onClick={toggleFn}
                    className="posAbs top1 right3"
                  />
                )
              }
              name="password"
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className="txt_color mt-10">{errors.password}</p>
            )}
          </div>
          <div className="mb1 tac">
            <Button
              text={t("LOGIN_HEADING")}
              disabled={!loginForm.email || !loginForm.password}
              className="success-button primary-btn mt4  button fntWhite"
              onSubmit={onLogin}
            />
            <div className="mt4 mb1">
              <a href="/Forgot" className="underlinenone">
                {t("FORGOT_PASSWORD_LINK")}{" "}
              </a>
            </div>
            <div>
              <a href="/Signup" className="underlinenone">
                {t("SIGN_UP_LINK")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
