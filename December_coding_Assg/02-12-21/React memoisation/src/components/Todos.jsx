import React, { useCallback, useState,useEffect } from "react"
import { TodoItem, TodoItemMemo } from "./TodoItem";
import { v4 as uuidv4 } from 'uuid';

export const Todos = ()=>{
const [title,setTitle] = useState("");
const [body,setBody] = useState("");
const [todoList,setTodoList] = useState([]);
const [counter,setCounter] = useState(0)

    useEffect(() => {
        setInterval(()=>{
            setCounter(p => p + 1)
        },2000)
    },[])


    const handleAddTodo = ()=>{
        setTodoList([...todoList,{
            id : uuidv4(),
            title,
            body,
            verify:"false"
        }])
    }

    // const handleToggle = useCallback((item)=>{
    //     console.log(todoList)
    //     // todoList.map((id)=>{
    //     //     console.log(id,item)
    //     //     // if(id === item)
    //     //     // console.log("match")
    //     // })
    //  // console.log("handleToggle")
    // })

    return (
        <div style={{display:"flex",flexDirection:"column",width:"25%",margin:"auto"}}>
            <div>
               Counter : {counter}
            </div>
            <input type="text" name="title" placeholder="title" onChange={(e)=> setTitle(e.target.value)} />
            <textarea type="text" style={{height:"100px"}}  name="body" placeholder="body" onChange={(e)=> setBody(e.target.value)} />
            <input type="button" value="Add Todo" onClick={handleAddTodo} />
            <div>
            {console.log("hello")}
            <TodoItemMemo todoList={todoList} settodo = {setTodoList} />
            </div>
        </div>
    )
}

