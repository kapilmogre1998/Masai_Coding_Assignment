import { useContext } from "react"
import { Redirect,useHistory } from "react-router-dom";
import { AppContext } from "../contexts/AppContext"

export const Cart = () => {
    const {cartData,totalPrice} = useContext(AppContext);
    const history = useHistory();

    const handlePayment = ()=>{
        history.replace("/login")
    }

    return (
        <div>   
            <table style={{width: "50%", margin:" 100px auto"}}>
                <tr >
                    <th style={{textAlign:"center",border:"1px solid black"}}>Product Name</th>
                    <th style={{textAlign:"center",border:"1px solid black"}}>Quantity</th>
                    <th style={{textAlign:"center",border:"1px solid black"}}>Price</th>
                </tr>
                {
                cartData.map((e)=> <tr>
                    <td style={{border:"1px solid black"}}>{e.product_name}</td>
                    <td style={{border:"1px solid black"}}>{e.price} ₹</td>
                    <td style={{border:"1px solid black"}}>{e.quantity}</td>
                </tr>
                )}
                <tr style={{width:"100%",border:"1px solid black"}}> 
                <th style={{alignSelf:"center"}}>Total Price  </th>
                <td style={{columnSpan:"2",textAlign:"center"}}>{totalPrice} ₹</td>
                </tr>
            </table>
            <button style={{width:"20%"}} onClick={handlePayment}>Payment</button>
        </div>
    )
}
