import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home } from './component/Home';
import { Navbar } from './component/Navbar';
import { Login } from './component/Login';
import { Dashboard } from './component/Dashboard';
import { Setting } from './component/Setting';
import { PrivateRoute } from './component/PrivateRoute';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute exact path="/dashboard">
          <Dashboard/>
        </PrivateRoute>
        <PrivateRoute path="/dashboard/setting">
          <Setting/>
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
