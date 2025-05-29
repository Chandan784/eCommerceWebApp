import React, { useEffect, useState } from "react";

import ProductData from "../../data/data.json";
import ProductCard from "../ui/ProductCard";



function Products() {
  let [products, setProducts] = useState([]);


  useEffect(() => {
    setProducts(ProductData.products);
    console.log(ProductData.products, "products");
  }, [ProductData]);
  
function getButtonText(buttonText){
console.log(buttonText,"parent");
}
  return (
    <div className="grid grid-cols-3">
      {products.map((product) => {
        return (
        <div>
          <ProductCard key={product.id}
          id={product.id}
            img={product.images}
            title={product.title}
            price={product.price}
            ratings={product.rating.average}
            getButtonText={getButtonText}
          />
          </div>
        );
      })}
    </div>
  );
}

export default Products;
