import { useContext } from "react"
import { Route } from "react-router-dom"
import { Redirect } from "react-router-dom"
import {AppContext} from "../Context/AppContext.jsx"


export const PrivateRoute = ({path,children}) => {
    const {isAuth} = useContext(AppContext);

    return isAuth ?(
        <Route to={path}>
            {children}
        </Route> 
    ) : (        
        <Redirect to="/login" />
    )
    
}
