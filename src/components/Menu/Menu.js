import React from "react";

const stylesNav = {
    width: 'fit-content',
    position: 'absolute',
    top: 0,
    left: 0,
};
const stylesUl = {
    margin: 0,
    padding: 0
};

function Menu({ children }) {
    return (
        <nav style={stylesNav}>
            <ul style={stylesUl}>
                {children}
            </ul>
        </nav>
    )
};

export default Menu