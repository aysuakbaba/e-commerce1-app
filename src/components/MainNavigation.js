import React, {useState} from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import cart from "../assets/bag.png";
import login from "../assets/user.png";
import favourites from "../assets/heart.png";
import classes from "./MainNavigation.module.css";
import LogInModal from "./LogInModal";

function MainNavigation() {
  const [modal, setModal] = useState(true)
  function toggle() {
    setModal((prevModal) => !prevModal)
  }
  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} alt="logo" className={classes.logo} />
        </Link>
        <div className={classes.headerRight}>
            <div onClick={toggle} className={classes.rightContainer}>
              <img src={login} alt="login" />
              <h3 className={classes.rightText}>Login</h3>
            </div>
          
          <div className={classes.rightContainer}>
            <img className="head-right-img" src={favourites} alt="favourites" />
            <h3 className={classes.rightText}>Favourites</h3>
          </div>
          <div className={classes.rightContainer}>
            <img src={cart} alt="cart" />
            <h3 className={classes.rightText}>Shopping Cart (0)</h3>
          </div>
        </div>
      </header>
      <LogInModal modal={modal} toggle={toggle}/>
    </>
  );
}

export default MainNavigation;
