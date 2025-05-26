import React, { useEffect, useState } from "react";

import ProductData from "../../data/data.json";
import ProductCard from "../ui/ProductCard";

function Products() {
  let [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ProductData.products);
    console.log(ProductData.products, "products");
  }, [ProductData]);

  return (
    <div>
      {products.map((product) => {
        return (
          <ProductCard key={product.id}
            img={product.images}
            title={product.title}
            price={product.price}
            ratings={product.rating.average}
          />
        );
      })}
    </div>
  );
}

export default Products;
