import React from "react";
import Card from "./Card";
import PreciosAliMi from "./data/PreciosAliMi";
import "./CardProduct.css";

const CardProduct = () => {
  return (
    <div className="CardProduct-container">
      <h2>Precios Ali-Mi</h2>
      <div className="project-container">
        {PreciosAliMi.map((val, ind) => {
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

export default CardProduct;