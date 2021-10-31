import React from "react";

const CardExpand = ({method, display}) => {
    return (
        <div className={`card-expand card-expand--${display?'show':'hide'}`} >{method}</div>
    )
};

export default CardExpand