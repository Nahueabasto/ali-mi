import React from "react";
import Card from "./Card";
import PreciosLaGringa from "./data/PreciosLaGringa";

const CardProductGringa = () => {
    return (
        <div className="CardProduct-container">
        <h3>Precios La Gringa</h3>
      <div className="project-container">
        {PreciosLaGringa.map((val, ind) => {
          return (
            <Card
              id={val.id}
              key={ind}
              titulo={val.titulo}
              precio={val.precio}
            />
          );
        })}
      </div>
      </div>
    );
  };

export default CardProductGringa;