import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import cart from "../assets/bag.png";
import login from "../assets/user.png";
import favourites from "../assets/heart.png";
import classes from "./MainNavigation.module.css";
import LogInModal from "./LogInModal";
import { LinkStyle } from '../styles/LinkStyle';

function MainNavigation() {
  const [modal, setModal] = useState(false)
  function toggle() {
    setModal((prevModal) => !prevModal)
  }
  return (
    <>
      <header>
        <NavLink to="/">
          <img src={logo} alt="logo" className={classes.logo} />
        </NavLink>
        <div className={classes.headerRight}>
            <div onClick={toggle} className={classes.rightContainer}>
              <img src={login} alt="login" />
              <LinkStyle>Login</LinkStyle>
            </div>
          
          <div className={classes.rightContainer}>
            <img className="head-right-img" src={favourites} alt="favourites" />
            <LinkStyle to='/favourites' >Favourites</LinkStyle>
          </div>
          <div className={classes.rightContainer}>
            <img src={cart} alt="cart" />
            <LinkStyle>Shopping Cart (0)</LinkStyle>
          </div>
        </div>
      </header>
      <LogInModal modal={modal} toggle={toggle}/>
    </>
  );
}

export default MainNavigation;
