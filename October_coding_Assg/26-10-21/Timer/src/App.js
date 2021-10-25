import logo from './logo.svg';
import './App.css';
import Timer from './component/Timer';


function App() {
  // const [show,setShow] = useState(true);

  return (
    <div className="App">
      <Timer start={1} end={10}/>
    </div>
  );
}

export default App;
