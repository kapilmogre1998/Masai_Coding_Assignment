import { useState } from 'react'
import { Navbar } from './Navbar'
import './style/addstudent.css'
import axios from 'axios'
import { Redirect, useHistory } from 'react-router-dom'

export const Login = () => {
    const history = useHistory()
    const [login,setLogin] = useState({
        "email":"",
        "password":""
    });

    const token = localStorage.getItem("token");

    const {email,password} = login;

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            axios.post("http://localhost:3002/user/login",{
                email:email,
                password:password
            })
            .then(({data})=> {
                localStorage.setItem("token",data)
                history.push("/student");
            })
            .catch(err=>alert("Please check email and password"))
        }
        catch(err){
            console.log("try after some time")
        }
    }

    const handlechange = (e)=>{
        const {name,value} = e.target;
        setLogin({
            ...login,
            [name] : value
        })
    }

    //if token then redirect to student page
    if(token)
    return <Redirect to="/student" />

    return (
        <>
            <Navbar />
            <div className="add-student-container" style={{ marginTop: "70px" }} >
                <h3 className='title' style={{ textAlign: 'center', fontSize: '25px' }}>Login Form</h3>
                <form onSubmit={handleSubmit} >
                    <div>
                        <p>Email</p>
                        <input name='email' value={email} type="email" onChange={handlechange} />
                    </div>
                    <div>
                        <p>Password</p>
                        <input name='password' value={password} type="password"  onChange={handlechange} />
                    </div>
                    <div style={{ display: "flex", marginTop: "20px", justifyContent: "end" }} className='add-student-btn'>
                        <button style={{ width: "100%", padding: "10px", marginRight: "0px", fontSize: "16px" }}>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}
