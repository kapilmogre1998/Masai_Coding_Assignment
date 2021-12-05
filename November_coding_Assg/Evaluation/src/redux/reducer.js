import { loadData, saveData } from "../utils/localStorage";
import { DISPLAY_MESSAGE, LOGIN_FAIL, LOGIN_SUCCESS } from "./actionTypes";

const token = loadData("token")

const initState = {
    isAuth : token ? true : false,
    token : token || "",
    message : ""
}

export const reducerAuth = (state = initState, {type,payload})=>{
    switch (type) {
        case LOGIN_SUCCESS:
            saveData("token",payload)
            return({
                ...state,
                isAuth:true,
                token: payload
            })

        case LOGIN_FAIL:
            return({
                ...state,
                isAuth:false,
                token:""
            })
        case DISPLAY_MESSAGE:
            return ({
                ...state,
                message: payload
            })
        default:
            return state
    }
} 