import React from "react";

const Button = ({ isLast, children, onClick }) => {
    return <button className={`button ${isLast ? "button--last-item" : ""}`} type='button' onClick={onClick}>{children}</button>
};

export default Button