import React from 'react'
import '../Stylesheet/image.css'
import '../Stylesheet/button.css'
import '../Stylesheet/cart.css'

const Cart = ({ image ,food_item,food_detail,cal,pfc,degree,new_price,prev_price}) => {
    return (
        <div id="cart">
            <img id="customImage" src={image} alt="" />

            <div>
                <h5>{food_item}</h5>
                <p>{food_detail} </p>
                <p>
                    <span>{cal} </span>
                    <span>{pfc} </span>
                    <span>{degree} </span>
                </p>
                <p id="price">
                    <span>{new_price}</span>
                    <span>{prev_price} </span>
                    <button id="custonButton">ORDER</button>
                </p>
            </div>
        </div>
    )
}

export default Cart;
