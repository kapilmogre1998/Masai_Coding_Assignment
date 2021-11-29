import { loadData, saveData } from "../utils/localStorage";
import { LOGIN_FAIL, LOGIN_SUCCESS } from "./actionTypes";

const token = loadData("token")

const initState = {
    isAuth : token ? true : false,
    token : token || ""
}

export const reducerAuth = (state = initState, {type,payload})=>{
    switch (type) {
        case LOGIN_SUCCESS:
            saveData("token",payload)
            return({
                ...state,
                isAuth:true,
                token:"kapil"
            })

        case LOGIN_FAIL:
            return({
                ...state,
                isAuth:false,
                token:""
            })
    
        default:
            return state
    }
} 