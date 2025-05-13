import React from "react";
import Card from "./Card";
import PreciosCombo4 from "./data/PreciosCombo4";

const CardCombo4 = () => {
    return (
        <div className="product-container">
          <div className="price">
        <h2>Combo 4</h2>
        </div>
      <div className="project-container">
        {PreciosCombo4.map((val, ind) => {
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

export default CardCombo4;