import React from 'react'
import { Div, Image } from "../styles/ClothItem";
import Select from 'react-select';



function FavouritesCard({ id,img, category, price }) {
    const options = [
        { value: "blues", label: "Blues" },
        { value: "rock", label: "Rock" },
        { value: "jazz", label: "Jazz" },
        { value: "orchestra", label: "Orchestra" }
    ];
    return (
        <Div>
          <Image src={img} alt="product" />
          <div className="cardInfo">
            <div className="card-text">
              <p>{category}</p>
              <p>{price}TL</p>
            </div>
            <Select options={options}></Select>
          </div>
        </Div>
      );
}

export default FavouritesCard