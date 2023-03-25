import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { AuthTypes } from "../../../redux/action_types/auth_types";
import CodexLogo from '../../../images/CBS-codexbox-Logo.png'
import CBSvector from '../../../images/CBS-vector.png';
import CBS_main_logo from '../../../images/CBS-main-logo.png'
import { Image } from 'react-bootstrap';
import { ReactComponent as EmailIcon } from '../../../images/icon-email.svg';
import { useTranslation } from 'react-i18next';
import { isEmailValid } from '../../../shared/utils';
import Input from '../../../shared/input';
import Button from '../../../shared/button';


function ForgotPassword() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t } = useTranslation();
  const [state, setState] = useState({
    forgotForm: {
      email: ''
    },
    errors: {
      email: ''
    }
  })
  const { errors, forgotForm } = state

  const handleInputChange = (e) => {
    const name = [e.target.name]
    const value = e.target.value
    forgotForm[name] = value
    errors[name] = ''
    setState({ ...state, forgotForm: forgotForm, errors: errors });
  }

  // submit function
  const forgotFn = (e) => {
    e.preventDefault();
    if (isEmailValid(forgotForm.email)) {
      errors.email = "";
    } else {
      errors.email = `${t('EMAIL_ERROR')}`;
    }
    if ( !errors.password) {
      dispatch({
        type: AuthTypes.FORGOT_REQUEST,
        payload: forgotForm,
        callback: (error) => {
          if (error) {
            setState({ ...state });
            return;
          }
          
        },
      });
    }
    setState({ ...state, errors: errors })
  }


  return (
    <div className='main-bg-image flx '>
      <div className='side_vector flx'>
        <div className='col-7 bg_color '>
          <Image id='app-logo' src={CodexLogo} alt='app logo' className='app-logo posAbs mv17' />
          <Image src={CBSvector} alt='vector image' className='cbs-vector posAbs mv25 ' />
        </div>
        <div className=' pl3-5 pr3-5 col-5'>
          <Image src={CBS_main_logo} alt='main logo' className='cbs_business_logo mt3' />
          <h2 className=' heading pv3 '><b>{t('FORGOT_PASSWORD_HEADING')}</b></h2>
          <p className='forgotmessage '>{t('FORGOT_PASSWORD_MESSAGE')}</p>
          <div>

            <Input
              type="text"
              className={`mb3 text-field ${errors.password && "borderRed txt_color"} `}
              placeholder={t("EMAIL_PLACEHOLDER")}
              value={forgotForm.name}
              icon={<EmailIcon className="posAbs top1 left1-5 " />}
              name="email"
              onChange={handleInputChange}
            />
            {
              errors.email &&
              <p className='txt_color mt-10'>{errors.email}</p>
            }
            <div className=' tac '>
              <Button text={t('CONTINUE_BUTTON')} disabled={!state.forgotForm.email} className="success-button primary-btn mt2 " onSubmit={forgotFn} />
              <p className='mt-3 '>{t('PASSWORD_MESSAGE')}
                <a href='/login' className='disin fntwdt underline ml1 '>{t('LOGIN_HEADING')}</a>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ForgotPassword;