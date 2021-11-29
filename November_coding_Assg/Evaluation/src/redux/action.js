import { LOGIN_FAIL, LOGIN_SUCCESS } from "./actionTypes"

export const loginSuccess = (payload)=>{
    return ({type:LOGIN_SUCCESS , payload})
}

export const loginFail = (payload)=>{
    return ({type: LOGIN_FAIL,payload})
}