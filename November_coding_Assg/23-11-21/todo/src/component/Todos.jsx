import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTodo,deleteTodo, editTodo, toggleTodo } from "../redux/todo/action";
import { v4 as uuid } from 'uuid';
import './style/todos.css'
import { useHistory } from "react-router";

export const Todos = () => {
    const dispatch = useDispatch();
    const {todos} = useSelector(store => store.todos);
    // const {token} = useSelector(store => store.auth)
    const [text, setText] = useState("");
    const history = useHistory();

    const handleAddTodo = () => {
        dispatch(addTodo({
            id: uuid(4),
            title: text,
            status: "false"
        }))
    }

    const handleDelTodo = (id)=>{
       dispatch(deleteTodo(id))
    }

    const handleToggle = (id)=>{
        dispatch(toggleTodo(id))
    }

    const handleEdit = (item)=>{
        // console.log("todos",item)
        history.push({
            pathname :'/edit-todo',
            state : {
                todoid : item.id
            }
        })
    }

    // if(token)
    // return (
    //     <Redirect to="/" />
    // )

    return (
        <div className="main-container">
            <div className="todo-input">
            <input type="text" value={text} placeholder="Enter todo" onChange={(e) => setText(e.target.value)} />
            <input onClick={handleAddTodo} type="submit" value="+" />
            </div>
            {
                todos.length === 0 ? "" : todos.map(e =>
                    <div key={e.id}>
                        <p style={{textDecoration: e.status ?"none" : "line-through"}}><input style={{display:"inline-block"}} type="checkbox" name="" id="" />{e.title}
                        <button onClick={()=>handleDelTodo(e.id)}>Delete</button>
                        <button onClick={()=>handleToggle(e.id)}>Done</button>
                        <button onClick={()=>handleEdit(e)}>Edit</button>
                        </p>
                    </div>
                )
            }
        </div>
    )
}