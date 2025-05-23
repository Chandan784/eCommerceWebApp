import React from "react";

function ProductCard({ img, title, description, ratings, price, category }) {
  return (
    <div>
      <img src={img[0]} alt="" />
      <h1>{title}</h1>
      <p>{ratings}</p>
      <p>{price}</p>
      <button>Add to cart</button>
    </div>
  );
}

export default ProductCard;
