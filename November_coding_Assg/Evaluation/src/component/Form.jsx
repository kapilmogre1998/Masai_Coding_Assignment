import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { loginFail, loginSuccess } from '../redux/action';
import { LOGIN_FAIL } from '../redux/actionTypes';
import './style/form.css'

export const Form = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const {token} = useSelector(store => store);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(email.length !== 0 && password.length !== 0){
            let action = loginSuccess("jnkfnkjfkfkfknednejdn");
            dispatch(action)
        }
        else{
            let action = loginFail("err");
            dispatch(action)
        }
    }

    
    return token ? <Redirect to="/" /> : (
        <div>
            <form onSubmit={handleSubmit} className="main-container">
            <h2>Login</h2>
                <input type="email" name="email" placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" name="password"  placeholder="Enter password"onChange={(e)=> setPassword(e.target.value)}/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}
