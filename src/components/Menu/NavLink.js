import React from "react";

const styles = {
    display: 'block',
    padding: '8px 16px',
    'text-transform': 'uppercase',
    background: 'lightgray',
    'border-bottom': '1px solid gray'
}

const linkStyles = {
    'text-decoration': 'none',
}
const activeLinkStyles = {
    'text-decoration': 'none',
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