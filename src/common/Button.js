import React from "react";
import propTypes from "prop-types";

export const Button = ({ label, onClick, value, className, ...rest }) => (
  <button onClick={onClick}  value={value}  className={className} {...rest}>
    {label}
  </button>
);
Button.propTypes = {
  label: propTypes.string,
  value:propTypes.string,
  onClick: propTypes.func,
  className: propTypes.string,
};
