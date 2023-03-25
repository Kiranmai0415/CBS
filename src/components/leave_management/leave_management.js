import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Button from '../../shared/button'
import EmpSideBar from '../../shared/employeesidebar'
import Header from '../../shared/header'
import Input from '../../shared/input'


const Leave_Management = () => {

    const { t } = useTranslation();
    return (

        <div className="flx   ">
            <div className="posAbs col-12 mt1 ">
                <Header />
            </div>
            <div>
                <EmpSideBar />
            </div>

            <div className="ml4 mt8  on-board mb3 fntLg text-onboard box-shadow  ph4  " width={'88%'}>
                <div className=" ml2-5 mt6-5 mr3 input-width mb3 " >

                    <div className='mb3'>
                        <h4 className='ml4 mt2-5 posRel'>Employee Leave Management</h4>
                        <div className="tac emp_leave">
                            <Button
                                text={t("Apply Leave ")}
                                className=" hr-button posAbs"
                            // onSubmit={validateED}
                            />
                        </div>
                    </div>
                </div>
                <hr className='mb3' />

                <Row className="mt3">
                    
                    <Col lg="6" className='flx'>
                        {/* style={{left: "10px"}} */}
                        <Row>
                            <Col lg="6" md={2} sm={12} >
                                <div className="box-shadow emp_attendence1 mt1" height={'70px'} width={'70px'} >
                                    fgfddfgd
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6" md={2} sm={12}>
                                <div className="box-shadow emp_attendence2 mt1" height={'70px'} width={'70px'} >
                                    fgfddfgd
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="6" md={2} sm={12} >
                                <div className="box-shadow emp_attendence3 mt1" height={'70px'} width={'70px'} >
                                    fgfddfgd
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* <Row className="mt5">
                    <Col lg="6" className='flx'>
                        style={{left: "10px"}}
                <Row>
                    <Col lg="6" >
                        <div className="box-shadow emp_attendence1 mt1" height={'70px'} width={'70px'} style={{ top: "421px" }}>
                            fgfddfgd
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6" >
                        <div className="box-shadow emp_attendence2 mt1" height={'70px'} width={'70px'} style={{ top: "421px" }} >
                            fgfddfgd
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg="6" >
                        <div className="box-shadow emp_attendence3 mt1" height={'70px'} width={'70px'} style={{ top: "421px" }} >
                            fgfddfgd
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>  */}
            </div >
        </div >
        // </div >
    )
}

export default Leave_Management