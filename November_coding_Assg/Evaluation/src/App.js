import logo from './logo.svg';
import './App.css';
import { Button } from './component/Button';

function App() {
  return (
    <>
      <div >
        <Button name="JOIN US" bkg="#00a0b2" />
        <Button name="SETTINGS" bkg="#bdbdbd" />
      </div>
      <div >
        <Button name="LOGIN" bkg="#fb8c00"/>
        <Button name="CONTACT US" bkg="#f44336"/>
      </div>
      <div >
        <Button name="SEARCH" bkg="#8bc34a" />
        <Button name="HELP" bkg="#283593"/>
      </div>
      <div >
        <Button name="HOME" bkg="#e91e63" />
        <Button name="DOWNLOAD" bkg="#9e9d24" />
      </div>
    </>
  );
}

export default App;
