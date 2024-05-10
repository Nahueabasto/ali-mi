import React, { useState } from 'react';
import { Link } from "react-router-dom";


const AliMiCard = (props) => {

    return(
        <div>
        <h2>{props.titulo}</h2>
        <h2>{props.precio}</h2>
        </div>
    )
}


export default AliMiCard;