import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';

export const Login = () => {
    const {handleToken,token} = useContext(AppContext);
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(e.target.email.value.length !== 0 && e.target.password.value.length !==0)
        {
            handleToken("fhefkenfn");
            history.replace("/payment")
        }
        else{
            alert("Please enter valid details")
            history.replace("/login")
        }
    }

    return (
        <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:"column",width:"25%",margin:"auto",marginTop:"30px"}} >
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input type="submit" value="Submit" />
        </form>
    )
}
