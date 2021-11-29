import { useSelector } from "react-redux";
import { BrowserRouter as Router,Switch,Route,Link,Redirect} from "react-router-dom";


export const PrivateRoute = ({path,children})=>{
    let {token} = useSelector(store=> store);
    
    if(!token)
        return <Redirect exact to="/login" />

    return (
        <>
        <Route exact path={path}>
            {children}
          </Route>
        </>
    )
}