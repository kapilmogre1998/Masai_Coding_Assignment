import { DISPLAY_MESSAGE, LOGIN_FAIL, LOGIN_SUCCESS } from "./actionTypes"

export const loginSuccess = (payload)=>{
    return ({type:LOGIN_SUCCESS , payload})
}

export const loginFail = (payload)=>{
    return ({type: LOGIN_FAIL,payload})
}

export const displayMessage = (payload)=>{
    return ({type: DISPLAY_MESSAGE,payload})
}