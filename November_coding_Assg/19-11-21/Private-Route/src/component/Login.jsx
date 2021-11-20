import { useContext, useState } from "react"
import { Redirect } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

export const Login = () => {
    const {isAuth,handleAuth} = useContext(AppContext)
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        handleAuth("grijrji");
    }

    const handleLogout = ()=>[
        handleAuth("")
    ]
    
    return !isAuth ? (
        <div >
            <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",width:"20%",margin:"auto",marginTop:"20px"}}>
            <input  type="email" placeholder="email" name="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            <input  type="password" placeholder="password" name="" value={password} onChange={e=> setPassword(e.target.value)} />
            <input  type="submit" value="Submit" />
            </form>
        </div>
        ) : (
            <>
            <button onClick={handleLogout}>Logout</button> 
            <Redirect to="/" />
            
            </>
        )
}
