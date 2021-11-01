import React, { useState } from "react";

import { CardActions, CardContent, CardHeader, CardMedia, CardExpand } from ".";

const Card = ({ image, data }) => {
    const {title, date, name, lead, method} = data;
    const [state, setState] = useState(false);

    const handleChange = (e) => {
        setState(state => !state)
    }

    return (
        <div className='card'>
            <CardHeader title= {title} date= {date} name={name} />
            <CardMedia image={image} />
            <CardContent lead={lead} />
            <CardActions onClick={handleChange} display={state}/>
            <CardExpand method={method} display={state}/>
        </div>
    )
};

export default Card