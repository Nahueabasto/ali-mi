import React, { useEffect } from 'react';
import NavBar from '../componet/NavBar';
import CardProduct from '../componet/CardProduct';
import CardProductGringa from '../componet/CardProductGringa';
import Fecha from '../componet/Fecha';
import CardCombo3 from '../componet/CardCombo3';
import CardCombo4 from '../componet/CardCombo4';

export default function Home(){
    useEffect(() => {
        // Desplazar la página hacia arriba cuando el componente Home se monta
        window.scrollTo(0, 0);
    }, []); // El segundo argumento asegura que esta función se ejecute solo una vez, después de que el componente se monte

    return(
        <div>
            <NavBar/>
            <Fecha/>
          <CardProduct/>
          <CardProductGringa/>
          <CardCombo3/>
          <CardCombo4/>
        </div>
    )
}