import { Link } from 'react-router-dom'
import classes from './Footer.module.css'

function Footer(){
    return(
        <>
         <div className={classes.footer}>
            <div  className={classes.block}>
                <h4>Corporate Informations</h4>
                <Link to='/' >HomePage</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/store'>Stores</Link>
                <Link to='/contact'>Contact Us</Link>

            </div>
            <div className={classes.block}>
                <h4>Customer Relationships</h4>
                <Link to='/privacy'>Privacy Policy</Link>
                <Link to='/distanceSelling'>Distance Selling Contract</Link>
                <Link to='/cargoDelivery'>Cargo Delivery</Link>

            </div>
            <div className={classes.block}>
                <h4>Help</h4>
                <Link to='/customerServices'>Customer Services</Link>
                <Link to='/cargoTracking'>Cargo Tracking</Link>

            </div>

            </div>
        </>
    )
}




export default Footer