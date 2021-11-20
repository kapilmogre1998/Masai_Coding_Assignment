import { useEffect, useState } from "react"
import { Product } from '../db.json'
import { Item } from "./Item";



export const Home = () => {
    

    return (
        <div className="home">
            {
                Product.map(e =>
                    <Item image_url={e.image_url} product_name={e.product_name} price={e.price} id={e.id} />
                )
            }
        </div>
    )
}
