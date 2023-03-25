import React from "react";
import PropTypes from "prop-types";
import { Button as Btn } from "react-bootstrap";

const Button = (props) => {
    const { text, onSubmit, ...rest } = props;
    return (
        <Btn {...rest} onClick={onSubmit} >{text} </Btn>
    )
}

Button.propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    variant: PropTypes.string,
    text: PropTypes.string,
};

export default Button;