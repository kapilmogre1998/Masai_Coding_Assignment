import './App.css';
import {Route, Switch} from 'react-router-dom';
import { Navbar } from './component/Navbar';
import { Men } from './component/Men.jsx';
import { Home } from './component/Home';
import { Women } from './component/Women.jsx';
import { Children } from './component/Children.jsx';
import { Cart } from './component/Cart';
import { Login } from './component/Login';
import { Payment } from './component/Payment';


const App = () => {
  return (
    <div className="App">
    <Navbar/>
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/men">
          <Men/>
      </Route>
      <Route path="/women">
          <Women/>
      </Route>
      <Route path="/children">
          <Children/>
      </Route>
      <Route path="/cart">
          <Cart/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/payment">
        <Payment/>
      </Route>
      <Route>
        Opps page not found!!
      </Route>
    </Switch>
    </div>
  )
}

export default App;
