import React from "react";

const Employees = ({ data }) => {
    const handleClick = () => {
        console.log('Employe cklicked')
    }
    return (
        <table>
            <tbody>
                {data.map((employe, i) => (
                    <tr key={`employe-${i}`}>
                        <td onClick={handleClick}>{employe.name}</td>
                        <td>...</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default Employees