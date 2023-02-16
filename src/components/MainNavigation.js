//import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import cart from "../assets/bag.png";
import login from "../assets/user.png";
import favourites from "../assets/heart.png";
import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <>
      <header>
        <img src={logo} alt="logo" className={classes.logo} />
        <div className={classes.headerRight}>
          <div className={classes.rightContainer}>
            <img src={login} alt="login" />
            <h3>Login</h3>
          </div>
          <div className={classes.rightContainer}>
            <img className="head-right-img" src={favourites} alt="favourites" />
            <h3>Favourites</h3>
          </div>
          <div className={classes.rightContainer}>
            <img src={cart} alt="cart" />
            <h3>Shopping Cart (0)</h3>
          </div>
        </div>
      </header>
    </>
  );
}

export default MainNavigation;
