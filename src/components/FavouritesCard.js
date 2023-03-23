import React from 'react'
import { Div, Image } from "../styles/ClothItem";


function FavouritesCard({ img, category, price }) {
    return (
        <Div>
          <Image src={img} alt="product" />
          <div className="cardInfo">
            <div className="card-text">
              <p>{category}</p>
              <p>{price}TL</p>
            </div>
          </div>
        </Div>
      );
}

export default FavouritesCard