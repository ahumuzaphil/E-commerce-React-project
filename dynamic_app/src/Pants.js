import React from "react"
export default function Pants(props){
    return(
       
        <div className="content_item">
        <img src={process.env.PUBLIC_URL + props.item.image} className="shirt" alt="Pant" />
        <p className="item">{props.item.type}</p>
        <span className="logo_price">$</span>
        <span className="price_el">{props.item.price}</span>
        <span className="buy"><button onClick={props.onclick} >Buy</button></span>
        </div>
         
    )
}