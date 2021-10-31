import React from "react";

const CardMedia = ({image, alt=''}) => {
    return (
        <img src={image} alt={alt}/>
    )
};

export default CardMedia