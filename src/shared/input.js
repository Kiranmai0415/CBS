import React from "react";
import PropTypes from "prop-types";
import { Form } from 'react-bootstrap';


const Input = (props) => {
    const { icon, icon1, label, ...rest } = props;
    return (
        <Form.Group className="posRel">
            {
                label ? <Form.Label>{label}</Form.Label> : null
            }

            <Form.Control
                {...rest} />
            {icon}
            {icon1}
        </Form.Group>
    )
}

Input.propTypes = {
    icon: PropTypes.object,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    showError: PropTypes.bool,
};

export default Input;