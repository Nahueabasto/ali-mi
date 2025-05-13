import React from "react";
import Card from "./Card";
import PreciosCombo3 from "./data/PreciosCombo3";

const CardCombo3 = () => {
    return (
        <div className="product-container">
          <div className="price">
        <h2>Combo 3</h2>
        </div>
      <div className="project-container">
        {PreciosCombo3.map((val, ind) => {
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

export default CardCombo3;