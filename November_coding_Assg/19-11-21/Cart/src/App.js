import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home } from './component/Home';
import { Navbar } from './component/Navbar';
import { ShowCart } from './component/ShowCart';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/show-cart">
          <ShowCart/>
        </Route>
        {/* <Route>
          <Home/>
        </Route> */}
      </Switch>
    </div>
  );
}

export default App;
