import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes"

export const loginSuccess = (token)=>{
    return ({type:LOGIN_SUCCESS,payload:token})
}

export const loginFailure = (payload)=>{
    return ({type:LOGIN_FAILURE,payload})
}
