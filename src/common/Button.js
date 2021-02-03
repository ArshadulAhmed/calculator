import React from "react";
import propTypes from "prop-types";

export const Button = ({ label, onClick, className, ...rest }) => (
  <button onClick={onClick} {...rest} className={className}>
    {label}
  </button>
);
Button.propTypes = {
  label: propTypes.string.isRequired,
  onClick: propTypes.func,
  className: propTypes.string,
};
