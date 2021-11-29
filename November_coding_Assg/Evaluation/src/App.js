import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Form } from './component/Form';
import { Dashboard } from './component/Dashboard';
import { Navbar } from './component/Navbar';
import { About } from './component/About';
import { PrvteRoute } from './auth/PrivateRoute';
import { MovieDetails } from './component/MovieDetails';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <PrvteRoute exact path="/">
          <Dashboard />
        </PrvteRoute>
        <Route exact path="/login">
          <Form />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/movie-details">
          <MovieDetails/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
