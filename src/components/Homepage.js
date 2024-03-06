import React, { useState, useEffect } from "react";
import Header from "./Header";
import Card from "../Card";

function Homepage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchproduct() {
      let res = await fetch("https://fakestoreapi.com/products");
      let json = await res.json();
      setProducts(json);
    }

    fetchproduct();
  }, []);
  function removeProduct() {
    const [deleteProduct, setDeleteProduct] = useState();
  }
  return (
    <>
      <Header></Header>
      <h3 className="titolo">Prodotti</h3>
      <div className="container">
        <div className="products">
          {products.map((prodotto) => (
            <div className="product" key={prodotto.id}>
              <h4>{prodotto.title}</h4>
              <img className="pics" src={prodotto.image}></img>
              <p>{prodotto.price}</p>
              <button>DELETE</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Homepage;
