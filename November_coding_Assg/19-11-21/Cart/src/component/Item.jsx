import { useContext, useState } from "react"
import './style/items.css';
import { AppContext } from "../Context/AppContext";

export const Item = ({image_url,price,product_name,id}) => {
    const {handleAddToCart,handleTotalPrice} = useContext(AppContext);
    const [add,setAdd] = useState({});
    const [counter,setCounter] = useState(1);
    
    const handleCounterIncr = ()=>{
        setCounter(counter+1)
    }

    const handleCounterDecr = ()=>{
        if(counter === 1)
        return ;
        setCounter(counter-1)
    }

    const handleAddProduct = ({product_name,counter,id,price})=>{
        console.log(price)
       handleAddToCart({product_name,counter,id,price})
       handleTotalPrice({price,counter})
    }

    
    return (
        <div key={id} className="cart">
            <img src={image_url} alt="img" />
            <div className="content">
                <p>{product_name} </p>
                <p> Price - {price} ₹</p>
            </div>
            <div className="btn">
                <button onClick={handleCounterDecr}>-</button>
                <p>{counter}</p>
                <button onClick={handleCounterIncr}>+</button>
                <button style={{ margin: "5px" }} onClick={()=> handleAddProduct({product_name,counter,id,price})}>Add to cart</button>
            </div>
        </div>
    )
}
