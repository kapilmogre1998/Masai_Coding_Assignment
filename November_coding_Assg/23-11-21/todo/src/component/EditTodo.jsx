import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import { useLocation,useHistory } from "react-router-dom";
import { editTodo } from "../redux/todo/action";


export const EditTodo = () => {
    const location = useLocation();
    const history = useHistory();
    const {state : {todoid}} = location;

    const dispatch = useDispatch();
    const [editText,setEditText] = useState("")

    const handleTodoEdited = ()=>{
        dispatch(editTodo({todoid,editText}))
        history.push("/");
    }

    return (
        <>
        <div>
            <textarea name="edit" value={editText}  cols="50" rows="10" placeholder="Edit Todo List" onChange={(e)=> setEditText(e.target.value)}>
            </textarea>
        </div>
        <div onClick={handleTodoEdited}>
            <input type="submit" value="Done" />
        </div>
        </>
    )
}
