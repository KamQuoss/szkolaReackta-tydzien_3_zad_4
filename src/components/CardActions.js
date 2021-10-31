import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";

const CardActions = ({onClick, display}) => {
    let styles = {
        transform: display ?'rotate(0deg)' : 'rotate(-180deg)'
    }
    return <div className='card-actions'>
        <Button><FontAwesomeIcon icon={faHeart} /></Button>
        <Button><FontAwesomeIcon icon={faShareAlt} /></Button>
        <Button isLast={true} onClick={onClick}><FontAwesomeIcon icon={faArrowDown} style={styles} /></Button>
    </div>
}

export default CardActions