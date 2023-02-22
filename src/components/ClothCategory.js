import React, { useContext } from "react";
import { CategoryContext } from "../context/categoryContext";
import { Category } from "../styles/ClothStyle";
import { LinkStyle } from "../styles/LinkStyle";

function ClothCategory() {
  const { findSameWomanCategory, clothCategory, findSameManCategory} = useContext(CategoryContext);

  return (
    <Category>
      <div className="category">
        <h4>Giyim</h4>
        {clothCategory === "woman" || clothCategory === "child" ? (
          <div onClick={() => findSameWomanCategory("Dresses")}>Dresses</div>
        ) : (
          <div onClick={() => findSameManCategory("Blazers")}>Blazers</div>
        )}
        <div onClick={() => findSameWomanCategory("Shirt")}>Shirt</div>

        <div onClick={() => findSameManCategory("T-Shirts")}>T-Shirts</div>
        {clothCategory === "man" || clothCategory === "child" ? (
          <LinkStyle>Jackets</LinkStyle>
        ) : (
          <LinkStyle>Crops and Tops</LinkStyle>
        )}
        {clothCategory === "child" && <LinkStyle>Pyjamas</LinkStyle>}
        {(clothCategory === "child" || clothCategory === "woman") && (
          <LinkStyle>Skirts</LinkStyle>
        )}

        <LinkStyle>Sweatshirts</LinkStyle>
        <LinkStyle>Pants</LinkStyle>
      </div>
      <h4>Aksesuar</h4>
      <div className="category">
        <LinkStyle>Shoes</LinkStyle>
        <LinkStyle>Purses</LinkStyle>
      </div>
    </Category>
  );
}

export default ClothCategory;
