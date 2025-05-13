import React from "react";
import Card from "./Card";
import PreciosAliMi from "./data/PreciosAliMi";
import "./CardProduct.css";

const CardProduct = () => {
  return (
    <div className="product-container">
      <div className="price">
      <h2>Combo  1</h2>
      </div>
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