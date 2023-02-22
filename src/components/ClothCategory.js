import React, { useContext } from "react";
import { CategoryContext } from "../context/categoryContext";
import { Category } from "../styles/ClothStyle";

function ClothCategory(){
    const {clothCategory} = useContext(CategoryContext)



    return(
        <Category>
        <div>
            {clothCategory === "woman" || clothCategory === "child" ? <p>Dresses</p> : <p>T-shirts</p>}
            
            <p>Shirt</p>
            {clothCategory === "woman" ? <p>Crops and Tops</p> : <p>Jackets</p>}
            {clothCategory === "woman" ? <p>Crops and Tops</p> : <p>Pyjamas</p>}
            <p>Sweatshirts</p>
            <p>Pants</p>
            {clothCategory === "man" ? <p>Blazers</p>: <p>Skirts</p>  }
           
            
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