import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{
    const [cart,setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0) 

    const handleAddToCart = (obj)=>{
        // let updated = cart.map((e)=>{
        //     if(e.id === obj.id){
        //         e.counter = 
        //     }
        // })
        setCart([...cart,obj])
    }

    const handleTotalPrice = ({price,counter})=>{
        setTotalPrice(totalPrice+price*counter)
    }

    return (
        <AppContext.Provider value={{cart,handleAddToCart,handleTotalPrice,totalPrice}}>
            {children}
        </AppContext.Provider>
    )
}