import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
const Checkbox = (props) => {
const { name,  ...rest } = props

    return (
        <>
            <Form.Group>
                <Form.Check
                    name={name}
                    {...rest} />
            </Form.Group>
        </>
    )
}

Checkbox.propTypes = {
    type: PropTypes.string,
};

export default Checkbox;

