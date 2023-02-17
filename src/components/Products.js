import React from "react";
import product_data from "../dummyData/product_data";
import SingleProduct from "./SingleProduct";

function Products() {
  const products = product_data.map((pro) => {
    return (
      <SingleProduct
        key={pro.id}
        img={pro.img}
        sex={pro.sex}
        category={pro.category}
      />
    );
  });
  return (
    <div className="products">
      <h3>Popular Categories</h3>
      <div>{products}</div>
    </div>
  );
}

export default Products;
