import classes from "./Footer.module.css";
import { LinkStyle } from "../styles/LinkStyle";

function Footer() {
  return (
    <>
      <div className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.block}>
            <h4>Corporate Informations</h4>
            <LinkStyle to="/">HomePage</LinkStyle>
            <LinkStyle to="/about">About Us</LinkStyle>
            <LinkStyle to="/store">Stores</LinkStyle>
            <LinkStyle to="/contact">Contact Us</LinkStyle>
          </div>
          <div className={classes.block}>
            <h4>Customer Relationships</h4>
            <LinkStyle to="/privacy">Privacy Policy</LinkStyle>
            <LinkStyle to="/distanceSelling">
              Distance Selling Contract
            </LinkStyle>
            <LinkStyle to="/cargoDelivery">Cargo Delivery</LinkStyle>
          </div>
          <div className={classes.block}>
            <h4>Help</h4>
            <LinkStyle to="/customerServices">Customer Services</LinkStyle>
            <LinkStyle to="/cargoTracking">Cargo Tracking</LinkStyle>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
