import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data/data.json";

function ProductDetails() {
  const [Product, setProduct] = useState({});
  const [imgIndex, setImageIndex] = useState(0);
  const { id } = useParams();
  console.log(id, "  ProductDetails");

  useEffect(() => {
    console.log("useeffect");
    let item = data.products.find((i) => i.id == id);
    console.log(item);
    setProduct({ ...item });
  }, [id]);
  if (Object.keys(Product).length == 0) {
    return <h1>Loading.......</h1>;
  }
  return (
    <div className="flex w-full justify-center ">
      <div className="">
        {
          <img
            className="h-50 w-80 shadow-2xl shadow-gray-300 m-3"
            src={Product?.images[imgIndex]}
            alt=""
          />
        }
        <div className="h-30 flex gap-1 p-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400">
          {Product?.images.map((x, n) => (
            <div
              key={n}
              className={`h-16 w-16 flex-shrink-0 cursor-pointer bg-violet-500 ${
                imgIndex === n ? "ring-2 ring-sky-500" : ""
              }`}
              onClick={() => setImageIndex(n)}
            >
              <img
                className="h-full w-full object-cover"
                src={x}
                alt={`Product image ${n + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="m-4 font-serif text-gray-800 h-50">
        <h1 className="text-gray-600 font-serif text-xl font-bold mt-3 mb-1">
          {Product?.title}
        </h1>
        <p className="text-red-400 font-bold text-xl mb-1">${Product?.price}</p>
        <p>{Product?.rating?.average}</p>
        <p>{Product?.description}</p>
        <p>{Product?.category}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
