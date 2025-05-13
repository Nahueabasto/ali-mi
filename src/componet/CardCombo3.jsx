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

// Combo  1
// 1 Raviol   Vrd       $  2280
// 1 Tallarin              $  1280
// 1 Tarta                  $    840
// 1 Empanada Hrn $    840
//                     Total  $ 5240
// ___________________________
// Combo 2
// 1 Tallarin               $  1280
// 1 Tarta                   $    840
// 1 Empanada  Hrn $    840
//                      Total $  2960
// ____________________________
// Combo 3
// 2  Ravioles   Vrd   $  4560
// 1  Tallarin              $  1280
//                      Total  $  5840
// ____________________________
// Combo 4
// 2  Tallarines              $  2560
// 2  Tartas                    $  1680
// 2  Empanadas  Hrn  $  1680
//                        Total   $  5920
