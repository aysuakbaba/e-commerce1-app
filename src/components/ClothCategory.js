import React from "react";
import { Link } from "react-router-dom";
import { Category } from "../styles/ClothStyle";

function ClothCategory(){
    return(
        <Category>
        <h4>Giyim</h4>
        <div>
            <Link>Dresses</Link>
            <p>Shirt</p>
            <p>Crops and Tops</p>
            <p>Sweatshirts</p>
            <p>Pants</p>
            <p>Skirts</p>
        </div>
        <h4>Aksesuar</h4>
        <div>
            <p>Shoes</p>
            <p>Purses</p>
        </div>
        </Category>
    )
}




export default ClothCategory