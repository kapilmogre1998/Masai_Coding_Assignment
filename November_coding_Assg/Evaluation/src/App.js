import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import { Form } from './component/Form';
import { Dashboard } from './component/Dashboard';
import { Navbar } from './component/Navbar';
import { About } from './component/About';


function App() {
  return (
    <div className="App">
     {/* <Form/> */}
     <Navbar/>
     <Switch>
       <Route exact path="/">
         <Form/>
       </Route>
       <Route path="/about"> 
         <About/>
       </Route>
       <Route path="/dashboard">
         <Dashboard/>
       </Route>
     </Switch>
    </div>
  );
}

export default App;
