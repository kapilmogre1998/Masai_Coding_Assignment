import { useContext, useState } from "react"
import { Context } from "../context/AppContext"
import { useFetch } from "../utils/useFetch";


export const Todo = () => {
    const {error,loading,response} = useFetch("http://localhost:3002/todoList")
    const {state,dispatch} = useContext(Context);
    const [todo,setTodo] = useState("");

    return  (
        <div>
            <h1>Todo List</h1>
            <input type="text" name="text" onChange={e => setTodo(e.target.value) }  />
            <input type="button" value="Submit" onClick={() => dispatch({type: "ADD_TODO", payload : {
                status : false,
                title : todo
            }})} />
            <div>
            {
                loading ? "...loading" : error ? "Please try after sometime" : 
                response.length === 0 ? "" : response.map(({todo:{title},id}) => 
                    <div key={id}>{title} </div>
                )
            }
            </div>
        </div>
    )
}
