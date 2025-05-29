import React from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({
  id,
  img,
  title,
  description,
  ratings,
  price,
  category,
  getButtonText,
}) {
  let navigate = useNavigate();

  function handleProductclick(id) {
    getButtonText(id);
    console.log(id, "handle");
    navigate(`/ProductDetails/${id}`);
  }
  return (
    <div
      className="font-serif items-center bg-gray-200"
      onClick={() => {
        handleProductclick(id);
      }}
    >
      
        <div>
          <img
            className="h-50 w-50 shadow-2xl shadow-gray-300"
            src={img[0]}
            alt=""
          />
        </div>
      <h1 className="text-gray-800 font-serif text-l font-bold mt-3 mb-1">
        {title}
      </h1>
      <p>{ratings}</p>
      <p className="text-red-400 font-bold text-xl mb-1">${price}</p>
      <button>Add to cart</button>
    </div>
  );
}

export default ProductCard;
