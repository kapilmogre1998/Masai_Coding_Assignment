import './App.css';
import { useContext } from 'react';
import { Page } from './component/Home';
import { Form } from './component/Form';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { PrivateRoute } from './auth/PrivateRoute';
import { LoginPage } from './component/LoginPage';
import { Todos } from './component/Todos';



const App = ()=>{

  return (
    <div className="App">
        {/* <Page/>
        <Form/> */}
        {/* <Todos/> */}
        <Switch>
          <PrivateRoute exact path="/">
            <Page/>
          </PrivateRoute>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
        </Switch>
    </div>
  )
}

export default App;
