import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addtodo } from '../redux/todo/action';
import './style/todoapp.css'
import { TodoList } from './TodoList';
import { v4 as uuidv4 } from 'uuid';

export const TodoApp = () => {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const todoList = useSelector(store => store.data)


    const handleAddTodo = () => {
        if(todo.length !== 0){
            const action = addtodo({
                id: uuidv4(),
                status: false,
                title: todo
            })
            setTodo("")
            dispatch(action);
        }
        else
        return;
    }

    return (
        <div className="input-todo">
            <form>
                <input type="text" value={todo} name="text" placeholder="Enter Todo" autoComplete="off" onChange={(e) => setTodo(e.target.value)} />
                <input type="button" value="Add Todo" onClick={handleAddTodo} />
            </form>
            <TodoList />
        </div>
    )
}
