import './App.css';
import Counter from './component/Counter';

function App() {
  return (
    <div className="App">
      <h1 id="heading">Counter</h1>
      <Counter initial = {0}/>
    </div>
  );
}

export default App;
