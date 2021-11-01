import React from "react";
import TableRow from "./TableRow";

const Employees = ({ data }) => {
    return (
        <table>
            <tbody>
                {data.map((employe, i) => <TableRow employe={employe} i = {i}/>)}
            </tbody>
        </table>
    )
};

export default Employees