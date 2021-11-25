import { createContext, useState } from "react"

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [cartData,setCardData] = useState([]);
    const [totalPrice,setTotalPrice] = useState(0);
    const [token,setToken] = useState(false)

    const handleCartData = (obj)=>{
        setTotalPrice(totalPrice + (obj.price * obj.quantity))
        setCardData([...cartData,obj])
    }

    const handleToken = (token)=>{
        if(token)
        setToken(true)
    }

    return (
        <AppContext.Provider value={{token,handleCartData,cartData,totalPrice,handleToken}}>
            {children}
        </AppContext.Provider>
    )
}
