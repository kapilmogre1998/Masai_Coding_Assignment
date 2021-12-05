import './App.css';
import { TodoApp } from './component/TodoApp';
import { Navbar } from './component/Navbar';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import { LoginForm } from './component/LoginForm';
import { PrivateRoute } from './isAuth/PrivateRoute';
import { EditTodo } from './component/EditTodo';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <PrivateRoute exact path="/">
        <TodoApp/>
        </PrivateRoute>
        <Route exact  path="/login">
          <LoginForm/>
        </Route>
        <Route exact path="/edit-todo">
          <EditTodo/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
