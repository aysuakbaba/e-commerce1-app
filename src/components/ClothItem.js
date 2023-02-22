import React from "react";
import { Div, Image } from "../styles/ClothItem";
import heart from "../assets/heart.png";

function ClothItem({ img, category, price }) {
  return (
    <Div>
      <Image src={img} alt="product" />
      <div className="cardInfo">
        <div className="card-text">
          <p>{category}</p>
          <p>{price}TL</p>
        </div>
        <img src={heart} alt="heart" />
      </div>
    </Div>
  );
}

export default ClothItem;
