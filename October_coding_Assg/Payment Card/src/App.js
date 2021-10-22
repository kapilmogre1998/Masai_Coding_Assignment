import logo from './logo.svg';
import './App.css';
import { Payment } from './component/Payment';
import { DiApple } from "react-icons/di";
import { FaArrowRight } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";

function App() {
  return (
    <>
    <i class="fas fa-camera"></i>
    <div className="main-div">
     <Payment arrow={<FaArrowRight size="30"/>} icon={< FaAmazon size="60" />} desktop="Desktop - Mobile"pay="Pay"date="28/10/2020" title="Case Study" gift="Amazon Gift"/>
    </div>
    <div className="main-div" id="div2">
     <Payment arrow={<FaArrowRight size="30"/>} icon={<DiApple size="80"/>} desktop="Macos - Mobile"pay="Pay"date="28/10/2020" title="Case Study" gift="Apple Gift"/>
    </div>
    </>
  );
}

export default App;
