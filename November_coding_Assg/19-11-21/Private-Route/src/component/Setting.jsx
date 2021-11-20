import { useContext } from "react"
import { AppContext } from "../Context/AppContext"

export const Setting = () => {
    const {isAuth,setIsAuth} = useContext(AppContext);

    const handleLogout = ()=>{
        setIsAuth(false)
    }

    return  (
        <div>
            <div>
            Setting Page
            </div>
            <div>Thank You for login</div>
            <button onClick={handleLogout}>Logout</button>
        </div> 
        ) 
}
