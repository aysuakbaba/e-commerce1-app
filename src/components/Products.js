import React from "react";
import product_data from "../dummyData/product_data";
import SingleProduct from "./SingleProduct";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; 

function Products() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 9
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 8
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
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
      <h3 className="popular">Popular Categories</h3>
      
      <Carousel responsive={responsive} className="carouselItem">
        {products}
        </Carousel>;
    </div>
  );
}

export default Products;
