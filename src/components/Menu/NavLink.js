import React from "react";

const styles = {
    display: 'block',
    padding: '8px 16px',
    textTransform: 'uppercase',
    background: 'lightgray',
    borderBottom: '1px solid gray'
}

const linkStyles = {
    textDecoration: 'none',
}
const activeLinkStyles = {
    textDecoration: 'none',
    color: 'red'
}

function MenuLink({ to = '#', isActive, children }) {
    return (
        <li style={styles}>
            <a href={to} style={isActive ? activeLinkStyles : linkStyles}>{children}</a>
        </li>
    )
};

export default MenuLink;