import { useContext } from "react"
import { useState } from 'react'
import { AppContext } from "../Context/AppContext"
import { Link } from "react-router-dom"


export const ShowCart = () => {
    const { cart, totalPrice } = useContext(AppContext)

    return (
        <>
            <div style={{ width: "30%", margin: "auto"}}>
                <table style={{ border: "1px solid black", width: "100%" }}>
                    <tr>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    {
                        cart.map(e =>
                            <tr>
                                <td>{e.product_name}</td>
                                <td>{e.counter} </td>
                                <td>{e.price} ₹</td>
                            </tr>
                        )
                    }
                </table>
                <table style={{ border: "1px solid black",display:"inherit",float:"right"}}>
                    <tr>
                        <th>
                            Total Price - {totalPrice} ₹
                        </th>
                    </tr>
                </table>
            </div>
            <div style={{clear:"right",marginTop:"50px"}}>
            <Link to="/">Go Back</Link>
            </div>
        </>

    )
}
