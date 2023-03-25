import React, { useState } from "react";
import { Col, Button, Row, Container, Image } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Input from "../shared/input";
import Btn from "../shared/button";
// import Dropdown from 'react-bootstrap/Dropdown';
import { isEmailValid, isNumberValid } from "../shared/utils";
import Dropdown from "../shared/dropdown";

// import downArrow from "../../../images/Icon-down-arrow.svg";
import downArrow from "../images/Icon-down-arrow.svg";

function Adduser(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [state, setState] = useState({
    name: "",
    email: "",
    designation: "",
    reporting: "",
    error: {
      name: "",
      email: "",
      designation: "",
      reporting: "",
    },
  });

  const [addmodal, setAddModal] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  });
  const handleInputChange = (e) => {
    setAddModal({ ...addmodal, [e.target.name]: e.target.value });
  };
  const [isAdd, setIsAdd] = useState(false);
  const editUser = (user) => {
    console.log("user", user);
    setAddModal(user);

    setShow(true);
    setIsAdd(false);
  };

  const { error } = state;

  const handleinput = (e) => {
    state[e.target.name] = e.target.value;
    error[e.target.name] = "";
    setState({ ...state, state: state, error: error });
    console.log(state);
  };

  const Addfun = (e) => {
    console.log("im clicked");
    if (!state.name) {
      error.name = "This field is required";
    }

    if (!state.email) {
      error.email = "This field is required";
    } else if (isEmailValid(state.email)) {
      error.email = "";
    } else {
      error.email = "valid email";
    }

    if (!state.designation) {
      error.designation = "this field is required";
    }
    if (!state.reporting) {
      error.reporting = "This field is required";
    }

    setState({ ...state, error: error });
  };
  //edit
  const editfun = (e) => console.log("is edited");

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        +ADD
      </Button>
      <Button variant="primary" onClick={editUser}>
        +edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title color="blue">
            {isAdd ? "Add New User" : "Edit user"}{" "}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="show-grid">
          <Container>
            <Row className="mb2 head">
              <Col xs={2}>Name</Col>
              <Col xs={2}></Col>
              <Col xs={7}>
                <Input
                  type="text"
                  className={`input-field  ${error.name && "borderRed "} `}
                  name="name"
                  placeholder="name"
                  value={state.name}
                  onChange={handleinput}
                ></Input>

                {error.name ? (
                  <span className="text-danger">{error.name}</span>
                ) : null}
              </Col>
            </Row>
            <Row className="mb2 head ">
              <Col xs={2}>Email</Col>
              <Col xs={2}></Col>
              <Col xs={7}>
                <Input
                  type="email"
                  className={`input-field  ${error.email && "borderRed "} `}
                  name="email"
                  placeholder="Email"
                  value={state.email}
                  onChange={handleinput}
                ></Input>

                {error.email ? (
                  <span className="text-danger">{error.email}</span>
                ) : null}
              </Col>
            </Row>
            <Row className="mb2 head  ">
              <Col xs={2}>designation</Col>

              <Col sm={2}></Col>

              <Col xs={7} className="posRel">
                <Dropdown
                  type="select"
                  data={[
                    { value: 1, label: "1" },
                    { value: 2, label: "2" },
                    { value: 3, label: "3" },
                  ]}
                  value={state.designation}
                  className={`text-onboard form-control input-field ${
                    error.designation && "borderRed "
                  } `}
                  name="designation"
                  onChange={handleinput}
                />
                {error.designation ? (
                  <span className="text-danger">{error.designation}</span>
                ) : null}

                <Image
                  src={downArrow}
                  className="posAbs arrow-drop  down1   "
                  alt="no img"
                ></Image>
              </Col>
            </Row>
            <Row className="mb2 head tal">
              <Col xs={2}>Reporting Manager</Col>
              <Col xs={2}></Col>
              <Col xs={7}>
                <Input
                  type="text"
                  className={`input-field  ${error.reporting && "borderRed "} `}
                  name="text"
                  placeholder="manager"
                  value={state.reporting}
                  onChange={handleinput}
                ></Input>

                {error.reporting ? (
                  <span className="text-danger">{error.reporting}</span>
                ) : null}
              </Col>
            </Row>

            <Row>
              <Col sm={4}></Col>

              <Col sm={4}>
                <Button text="cancel" className="ml15-5 mt5 mb2 hr-button">
                  cancel
                </Button>
              </Col>
              <Col sm={4}>
                <Btn
                  text="Add"
                  className="ml15-5 mt5 mb2 hr-button"
                  onSubmit={Addfun}
                ></Btn>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
export default Adduser;
