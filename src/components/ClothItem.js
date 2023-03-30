import React, { useContext, useEffect, useState } from "react";
import { Div, Image } from "../styles/ClothItem";
import heart from "../assets/heart.png";
import { CategoryContext } from "../context/categoryContext";
import redHeart from "../assets/redheart.png";

function ClothItem({ id, img, category, price }) {

  const [isHeartFull, setIsHeartFull] = useState(false);
  const { addToFavourites, removeFavourite, favourites } = useContext(CategoryContext);

  useEffect(() => {
    const item = favourites.find(item => item._id === id)
  }, [favourites, id])

  function toggleHeart() {
    setIsHeartFull((prevHeart) => !prevHeart);
  }
  const clothObj = {
    id,
    category,
    price,
    img,
  };

  function callToggleHeartandFavourites() {
    if (isHeartFull) {
      removeFavourite(id);
      toggleHeart();
    } else {
      addToFavourites(clothObj);
      toggleHeart();
    }
  }

  return (
    <Div>
      <Image src={img} alt="product" />
      <div className="cardInfo">
        <div className="card-text">
          <p>{category}</p>
          <p>{price}TL</p>
        </div>
        <img
          src={isHeartFull ? redHeart : heart}
          alt="heart"
          onClick={callToggleHeartandFavourites}
        />
      </div>
    </Div>
  );
}

export default ClothItem;
