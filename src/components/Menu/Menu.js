import React from "react";

function Menu({ children }) {
    return (
        <nav style={{width: 'fit-content'}}>
            <ul>
                {children}
            </ul>
        </nav>
    )
};

export default Menu