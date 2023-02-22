import React, { useContext } from "react";
import { CategoryContext } from "../context/categoryContext";
import { Category } from "../styles/ClothStyle";
import { LinkStyle } from "../styles/LinkStyle";

function ClothCategory() {
  const { clothCategory } = useContext(CategoryContext);

  return (
    <Category>
      <div className="category">
        <h4>Giyim</h4>
        {clothCategory === "woman" || clothCategory === "child" ? (
          <LinkStyle>Dresses</LinkStyle>
        ) : (
          <LinkStyle>Blazers</LinkStyle>
        )}
        <LinkStyle>Shirt</LinkStyle>
        <LinkStyle>T-shirts</LinkStyle>
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
