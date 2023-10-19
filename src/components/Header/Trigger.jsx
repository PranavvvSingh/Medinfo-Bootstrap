import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

export default function Trigger({tip,name,icon}){
    return(
        <OverlayTrigger placement="bottom" overlay={<Tooltip>{tip}</Tooltip>}>
            <span>{icon}{name}</span>
        </OverlayTrigger>
    );
}