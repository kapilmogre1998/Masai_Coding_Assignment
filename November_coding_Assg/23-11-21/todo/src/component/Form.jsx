import { useState } from "react"
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import './style/form.css'

export const Form = ({handlelogin})=>{
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const {token} = useSelector(store => store.auth)


    const handleSubmit = (e)=>{
        e.preventDefault();
        handlelogin({email,password});
    }

        // if(token)
        // return <Redirect to="/" />

    return  (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="main-container">
                <input type="text" name="email" onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email" />
                <input type="password" name="password"  onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}