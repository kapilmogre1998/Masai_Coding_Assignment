import logo from './logo.svg';
import './App.css';
import { Calender, MemoisedCalender } from './components/Memo';
import { useState } from 'react';
import { Todos } from './components/Todos';


function App() {
  const [state,setState] = useState("");
  console.log("state");

  return (
    <div className="App">
      <Todos/>
      {/* <MemoisedCalender date={"02/12/21"}/>
      <Calender date={"02/12/21"}/>
      <button onClick={setState}>
        force rendering
      </button> */}
    </div>
  );
}

export default App;
