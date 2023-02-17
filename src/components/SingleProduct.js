import React from "react";

function SingleProduct(props){
    return(
        
        <div>
            <img src={props.img} alt="cloth"/>
            <p className="sex">{props.sex}</p>
            <p className="category">{props.category}</p>
        </div>

    
    )
}




export default SingleProduct