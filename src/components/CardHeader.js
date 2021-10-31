import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

import Avatar from "./Avarar";
import Button from "./Button";

const CardHeader = ({title, date, name}) => {
    return <div className='card-header'>
        <Avatar name={name}></Avatar>
        <div className='header-title'>
            <div className='header-main-title'>{title}</div>
            <div className='header-subtitle'>{date}</div>
        </div>
        <Button>
            <FontAwesomeIcon icon={faEllipsisV} />
        </Button>
    </div>
};

export default CardHeader