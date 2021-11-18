import './App.css';
import {Route, Switch} from 'react-router-dom';
import {Home} from './component2/Home'
import { Navbar } from './component2/Navbar';
import { AllProducts } from './component2/AllProducts';
import { ProductDetails } from './component2/ProductDetails';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route path="/allproducts" component={AllProducts} ></Route>
        <Route path="/details/:id">
          <ProductDetails/>
        </Route>
      </Switch>
      {/* <Navbar/> */}
      {/* <Navbar />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route>
        <UserList/>
      </Route>
      </Switch> */}

    </div>
  )
}

export default App;
