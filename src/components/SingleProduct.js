import React from "react";

function SingleProduct(props){
    return(
        
        <div className="single">
            <img src={props.img} alt="cloth" className="product-image"/>
            <div className="product-info">
            <p className="sex">{props.sex}</p>
            <p className="category">{props.category}</p>

            </div>
        </div>

    
    )
}




export default SingleProduct