
import './App.css';
import { CustomHook } from './Assignment5/component/CustomHook';
import { FetchHook } from './Assignment4/component4/FetchHook';
import { Todo } from './Assignment1/component/Todo';


function App() {
  return (
    <div className="App">
    {/* <CustomHook/> */}
        <FetchHook/>
        {/* <Todo/> */}
    </div >
  );
}

export default App;
