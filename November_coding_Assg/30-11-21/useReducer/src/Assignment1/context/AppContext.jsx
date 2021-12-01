import { createContext,useReducer } from "react"
import axios from "axios";

export const Context = createContext();

const initState = {
    
}

const reducer = (state = initState,{type,payload})=>{
    switch(type){
        case "ADD_TODO" :{
            axios.post("http://localhost:3002/todoList",{
                todo: payload
            })
        }
        case "DEL_TODO" :{
            return {
                
            }
        }
        default:
            return {
                ...state
            }
    }
}

export const AppContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initState);


    return (
        <div>
            <Context.Provider value={{dispatch,state}}>
                {children}
            </Context.Provider>
        </div>
    )
}
