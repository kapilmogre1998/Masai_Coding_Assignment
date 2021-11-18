import { Route,Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from './component3/Navbar';
import {Home} from './component3/Home';
import {About} from './component3/About';
import {Contact} from './component3/Contact'
import {Login} from './component3/Login'
import {Services} from './component3/Services'

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/services">
          <Services/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
