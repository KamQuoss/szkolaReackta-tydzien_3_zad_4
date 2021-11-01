import React, { useState } from "react";

const TableRow = ({ employe, i }) => {
    const [visibilty, setVisibility] = useState(false);
    const handleClick = () => {
        setVisibility(visibilty => !visibilty)
    }
    return (
        <tr key={`employe-${i}`}>
            <td onClick={handleClick}>{employe.name}</td>
            <td>{visibilty && employe.email}</td>
        </tr>
    )
};

export default TableRow