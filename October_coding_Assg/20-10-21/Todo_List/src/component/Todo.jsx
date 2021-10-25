import React from 'react'
import todoImg from '../component/Image/todo_img.png'
import './stylesheet/todo.css'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import { BiTrash } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

//Get todo data from localstorage
const getLocalStData = () => {
    let list = JSON.parse(localStorage.getItem(('lists')));

    if (list)
        return JSON.parse(localStorage.getItem('lists'))
    else
        return [];
}

//Get taskcompleted data from localstorage
const getTaskCompData = () => {
    let todoList = JSON.parse(localStorage.getItem(('taskCompleted')));

    if (todoList)
        return JSON.parse(localStorage.getItem('taskCompleted'))
    else
        return [];
}

export const Todo = () => {
    let [text, settext] = useState('');
    let [todo, settodo] = useState(getLocalStData());
    let [taskCompleted, settaskCompleted] = useState(getTaskCompData())


    //Add todo data to localStorage
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(todo))
    }, [todo])

    //Add taskcompleted data to localStorage
    useEffect(() => {
        localStorage.setItem('taskCompleted', JSON.stringify(taskCompleted))
    }, [taskCompleted])


    const addItem = () => {
        if (text.length === 0)
            return
        let data = {
            title: text,
            status: false,
            id: nanoid(4)
        }
        settodo([...todo, data]);
        settext('')
    }

    const compeletedItem = (item) => {
        settaskCompleted([...todo])
        //add completed task in settaskcompleted
        let completed = todo.filter(e => { if (item.id === e.id){item.status =!item.status; return e }})
        //add remainign task inside todo
        let notCompleted = todo.filter(e => { if (item.id !== e.id) return e })
        
        settaskCompleted([...taskCompleted,...completed])
        settodo(notCompleted)
        console.log("comp", taskCompleted)
        //console.log("todo", todo)
    }

    const deleteItem = (id) => {
        {
            const updated = todo.filter((item) => id !== item.id)
            settodo(updated)
            //console.log(updated)
        }
    }

    const clearAllData = () => {
        settodo([])
        settaskCompleted([])
    }

    return (
        <>
            <div id="main-div">
                <div id="todo-img">📝</div>
                <figcaption>Todo List</figcaption>
                <div className="add-item">
                    <input type="text" onChange={(e) => settext(e.target.value)} value={text} placeholder="✍️write something..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <button onClick={addItem}>+</button>
                </div>
                <div>
                    {/* //Get Data from todo by using map function */}
                    {
                        todo.map(item => <> <div key={item.id} id="show-item" style={{ display: "overline" }}>{item.status ? "Completed" : item.title}
                            <button className="btn btn-primary" onClick={() => compeletedItem(item)}><TiTick /></button>
                            <button className="btn btn-danger" onClick={() => deleteItem(item.id)}><BiTrash /></button>
                        </div>
                        </>)

                    }
                </div>
                <div >
                    <button id="clear-task" className="btn btn-success" onClick={clearAllData}>Clear All</button>
                </div>
            </div>
             <div id="show-completed-Task">
                 {/* use of this div to add completed tasks */}
                    { <h3>Task Completed</h3> }
                    {
                        taskCompleted.map(e => <li style={{ textDecorationLine: 'line-through', padding:"5px"}}>{e.title}</li> )
                    }
                </div> 
        </>
    )
}
