import React from "react";
import Card from "./Card";
import PreciosLaGringa from "./data/PreciosLaGringa";

const CardProductGringa = () => {
    return (
        <div className="product-container">
          <div className="price">
        <h2>Combo 2</h2>
        </div>
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