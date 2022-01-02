import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Contest } from './components/Contest';
import { Route, Switch } from 'react-router-dom';
import { Student } from './components/Student';
import { AddStudent } from './components/AddStudent';
import { Login } from './components/Login';
import { PrivateRoute } from './privateRoute/PrivateRoute';


function App() {
  return (
    <div>
      {/* <Login/> */}
      <Switch>
        <PrivateRoute exact path='/student'>
          <Student/>
        </PrivateRoute>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/contest">
          <Contest/>
        </Route>
        <Route exact path='/add-student'>
          <AddStudent/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
