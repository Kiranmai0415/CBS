import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { EmpTypes } from '../../redux/action_types/emp_types';
import Button from '../../shared/button';
import Input from '../../shared/input';

const ExpDetails = () => {

    const [state, setState] = useState({
        employeeDetailsForm: {
            first: ""
        },
        errors: {
            first: ''
        }
    });
    const clearObj = {
        first: "",
    }

    const { employeeDetailsForm, errors } = state;
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const handleInput = (e) => {
        employeeDetailsForm[e.target.name] = e.target.value;
        if (errors[e.target.name] = ""){
            setState({ ...state, employeeDetailsForm: employeeDetailsForm, errors: errors });
        }
        else{
            
        }
    };
    const validateED = (e) => {
        e.preventDefault();

        if (!employeeDetailsForm.empid) {
            errors.first = `${t('REQIRED_ERROR_FIELD')}`

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
    return (
        <div>
            <Row className="mb1">
                <Col lg="6">
                    <Row>
                        <Col lg="5">
                            {/* <label htmlFor="empid">{t("EMP ID")}</label> */}
                            <label>FirstName</label>
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
                                    onSubmit={validateED}
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default ExpDetails