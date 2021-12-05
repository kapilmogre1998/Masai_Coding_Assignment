import { useSelector } from "react-redux";
import { Redirect,Route } from "react-router-dom";
import { Dashboard } from "../component/Dashboard";

export const PrvteRoute = ({path,children}) => {
    let {token} = useSelector(store => store)

    if(!token){
        return <Redirect to="/login" />
    }

    return (
        <Route exact path={path} >
            {children}
        </Route>
    )
}
