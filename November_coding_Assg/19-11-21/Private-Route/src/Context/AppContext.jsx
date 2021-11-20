import { createContext, useState } from "react"

export const AppContext = createContext();


export const AppContextProvider = ({children}) => {
    const [isAuth,setIsAuth] = useState("");

    const handleAuth = (token)=>{
        if(token)
        return setIsAuth(true);
        
        setIsAuth(false);
    }
    return (
        <AppContext.Provider value={{isAuth,setIsAuth,handleAuth}}>
            {children}
        </AppContext.Provider>
    )
}
