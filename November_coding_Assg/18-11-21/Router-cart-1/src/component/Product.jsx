import { useContext, useState } from "react"
import { AppContext } from "../contexts/AppContext";


export const Product = ({img,product_name,price}) => {
    const {handleCartData} = useContext(AppContext)
    const [quantity,setQuantity] = useState(1);

    const handleAdd = ()=>{
        setQuantity(quantity + 1)
    }

    const handleSub = ()=>{
        quantity <= 1 ? "" : setQuantity(quantity - 1)
    }

    return (
        <div>
            <img style={{width:"192px",height:"262px"}} src={img} alt="" />
            <p>Product - {product_name}</p>
            <p>Price - {price} ₹</p>
            <div>
                <button onClick={handleSub} >-</button>
                <span style={{margin:"0 1ch"}}>{quantity}</span>
                <button onClick={handleAdd}>+</button>
            </div>
            <button style={{marginTop:"10px"}} onClick={()=> handleCartData({product_name,price,quantity})} ><strong>Add to cart</strong></button>
        </div>
    )
}
