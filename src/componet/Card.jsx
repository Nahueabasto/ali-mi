import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Card.css'; // Importa el archivo de estilos CSS

const AliMiCard = (props) => {
    return (
        <div className="alicard">
            <h3 className="titulo">{props.titulo}</h3>
            <div className="separator"></div>
            <h3 className="precio">{props.precio}</h3>
        </div>
    );
}

export default AliMiCard;