import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/versace.png";
import cart from "../assets/bag.png";
import login from "../assets/user.png";
import favourites from "../assets/heart.png";
import classes from "./MainNavigation.module.css";
import LogInModal from "./LogInModal";
import { LinkStyle } from "../styles/LinkStyle";
import redHeart from "../assets/redheart.png";
import userPic from "../assets/user1.png";
import blackCart from "../assets/blackCart.png";
import { CategoryContext } from "../context/categoryContext";

function MainNavigation() {
  const { changeCategory, isLoggedIn, user } = useContext(CategoryContext);

  const [isCartHovered, setIsCartHovered] = useState(false);
  function cartHovered() {
    setIsCartHovered(true);
  }
  function cartNotHovered() {
    setIsCartHovered(false);
  }
  const [isloginHovered, setIsloginHovered] = useState(false);
  function loginHovered() {
    setIsloginHovered(true);
  }

  function loginNotHovered() {
    setIsloginHovered(false);
  }

  const [isHeartHovered, setisHeartHovered] = useState(false);
  function fullHeart() {
    setisHeartHovered(true);
  }
  function emptyHeart() {
    setisHeartHovered(false);
  }
  const [modal, setModal] = useState(false);
  function toggle() {
    setModal((prevModal) => !prevModal);
  }

  return (
    <>
      <header>
        <div className={classes.sexCategories}>
          <LinkStyle onClick={() => changeCategory("woman")} to="/woman">
            Woman
          </LinkStyle>
          <LinkStyle onClick={() => changeCategory("man")} to="/man">
            Man
          </LinkStyle>
          <LinkStyle onClick={() => changeCategory("child")} to="/child">
            Child
          </LinkStyle>
        </div>
        <NavLink to="/">
          <img src={logo} alt="logo" className={classes.logo} />
        </NavLink>
        <div className={classes.headerRight}>
          <div
            onClick={toggle}
            className={classes.rightContainer}
            onMouseEnter={loginHovered}
            onMouseLeave={loginNotHovered}
          >
            <img src={isloginHovered ? userPic : login} alt="login" />
            <LinkStyle>{isLoggedIn ? user.username : "Login"}</LinkStyle>
          </div>
          {isLoggedIn ? (
            <div className={classes.container}>
              <div
                className={classes.rightContainer}
                onMouseEnter={fullHeart}
                onMouseLeave={emptyHeart}
              >
                <img
                  className="head-right-img"
                  src={isHeartHovered ? redHeart : favourites}
                  alt="favourites"
                />
                <LinkStyle to="/favourites">Favourites</LinkStyle>
              </div>
              <div
                className={classes.rightContainer}
                onMouseEnter={cartHovered}
                onMouseLeave={cartNotHovered}
              >
                <img src={isCartHovered ? blackCart : cart} alt="cart" />
                <LinkStyle>Shopping Cart (0)</LinkStyle>
              </div>
            </div>
          ) : (
            <div className={classes.container}>
              <div
                className={classes.rightContainer}
                onMouseEnter={fullHeart}
                onMouseLeave={emptyHeart}
              >
                <img
                  className="head-right-img"
                  src={isHeartHovered ? redHeart : favourites}
                  alt="favourites"
                />
                <LinkStyle to="/favourites">Favourites</LinkStyle>
              </div>
              <div
                className={classes.rightContainer}
                onMouseEnter={cartHovered}
                onMouseLeave={cartNotHovered}
              >
                <img src={isCartHovered ? blackCart : cart} alt="cart" />
                <LinkStyle>Shopping Cart (0)</LinkStyle>
              </div>
            </div>
          )}
        </div>
      </header>
      <LogInModal modal={modal} toggle={toggle} />
    </>
  );
}

export default MainNavigation;
