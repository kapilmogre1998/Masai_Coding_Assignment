import './App.css';
import { Navbar } from './component/Navbar';
import { CustomNavbar } from './component/CustomNavbar';

const App = ()=>{
  return (
    < >
      <CustomNavbar/>
      {/* <Navbar/> */}
    </>
  )
}
//STYLED COMPONENT - LIVE CLASS
// const App = ()=>{
//       return (<div>
//       <Button theme="light">Click Me</Button>
//       <br />
//       <button>Toggle on</button>
//     </div>);
// }

//COMPOSITION - LIVE CLASS
// const App = () => {
//   return (
//     <div onSubmit={(e)=>e.preventDefault()} className="App">
//       <Form1>
//         <input type="text" placeholder="name"/>
//         <input type="text" placeholder="email"/>
//         <input type="text" placeholder="password"/>
//         <input type="submit" value="Sign up" />
//       </Form1>

//       <Form1 onSubmit={(e)=>e.preventDefault()}>
//         <input type="text" placeholder="email"/>
//         <input type="text" placeholder="password"/>
//         <input type="submit" value="Sign in" />
//       </Form1>
//     </div>
//   );
// }


//COMPOSITION
// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       username : "",
//       password : ""
//     }
//   }
//   onSubmit = e=>{
//     e.preventDefault();
//     console.log(this.state)
//   }
//   render() {
//     return (
//       <div className="App">
//         <Form onSubmit={this.onSubmit} >
//           <input type="text" placeholder="username" name="username" value={this.state.username} onChange={e =>this.setState({[e.target.name]: e.target.value})}  />
//           <input type="text" placeholder="password" name="password" value={this.state.password} onChange={e =>this.setState({[e.target.name]: e.target.value})} />
//           <input type="submit" value="submit" />
//         </Form>
//       </div>
//     );
//   }
// }

//STYLE COMPONENT
// const App = ()=>{
//       return (
//       <div className="App">
//       <StyleComponent/>
//       </div>
//     );
// }

export default App;
