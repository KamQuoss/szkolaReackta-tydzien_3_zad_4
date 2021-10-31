import React, { useState } from "react";

import { cardInfo } from "../assets/card-data";
import CardActions from "./CardActions";
import CardContent from "./CardContent";
import CardHeader from "./CardHeader";
import CardMedia from "./CardMedia";
import CardExpand from "./CardExpand";

const Card = ({ image }) => {
    const [state, setState] = useState(false);

    const handleChange = (e) => {
        setState(state => !state)
    }

    return (
        <div className='card'>
            <CardHeader {...cardInfo} />
            <CardMedia image={image} />
            <CardContent {...cardInfo} />
            <CardActions onClick={handleChange} display={state}/>
            <CardExpand {...cardInfo} display={state}/>
        </div>
    )
};

export default Card