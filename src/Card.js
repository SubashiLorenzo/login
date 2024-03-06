import React from "react";

function Card(product) {
  return (
    <div className="card">
      {product}
      <img src="product"></img>
    </div>
  );
}

export default Card;
