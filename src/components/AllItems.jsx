import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllItems() {
  const [products, setProducts] = useState([]);

  const fetch = () => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data.results);
        console.log(res.data.results);
      })
      .catch();
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product._id} className="border border-info mt-2 p-5">
            <h3>{product.title}</h3>
            <h4>Price: $ {product.price}</h4>
            <h4>
              Description: <br />
              {product.desc}
            </h4>
          </div>
        );
      })}
    </div>
  );
}
