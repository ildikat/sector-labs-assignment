import React from 'react';
import PropTypes from 'prop-types';
import "./Button.css"

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    disabled: PropTypes.bool
};

Button.defaultProps = {
    onClick: () =>{},
    text: "",
    disabled: false
}

function Button({onClick, text, disabled}) {
    return (
        <button className={"common-button"} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
}

export default Button;