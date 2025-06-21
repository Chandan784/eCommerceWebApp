import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

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
  const { cartCount, setcartCount } = useContext(CartContext);
  let navigate = useNavigate();

  function handleProductclick(id) {
    getButtonText(id);
    console.log(id, "handle");
    navigate(`/ProductDetails/${id}`);
  }
  const handleAddToCart = () => {
    setcartCount(cartCount + 1);
  };

  return (
    <div className="font-serif justify-center">
      <div className="flex flex-col w-50 h-50 ml-7">
        <img
          className="h-50 shadow-2xl shadow-gray-300"
          src={img[0]}
          alt=""
          onClick={() => {
            handleProductclick(id);
          }}
        />
      </div>
      <div className="ml-7">
        <h1 className="text-gray-800 font-serif text-l">{title}</h1>
        <p>{ratings}</p>
        <p className="text-red-400 text-l">${price}</p>
        <button
          className="rounded border-1 border-blue-400 bg-red-500 text-white text-xs w-20"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
