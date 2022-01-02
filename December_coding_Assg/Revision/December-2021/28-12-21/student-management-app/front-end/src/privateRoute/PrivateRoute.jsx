import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({children,path})=>{
    let token = localStorage.getItem("token");

    if(!token)
    return <Redirect to="/login"/>

    return (
        <Route to={path}>
            {children}
        </Route>
    )
}