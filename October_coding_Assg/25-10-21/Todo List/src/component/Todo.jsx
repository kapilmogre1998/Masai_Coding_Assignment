import { useEffect, useState } from 'react'
import { ShowData } from './ShowData';
import axios from 'axios'
import { todos } from './request'

export const Todo = () => {
    const [text, setText] = useState('');
    const [todo, setTodo] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])

    useEffect(() => {
        showData()
    }, [page])

    // const pagination = ()=>{
    //     const res = await fetch.patch('http://localhost:4500/todos', {
    //         params: {
    //         _page: page,
    //         _limits: 2
    //     }});
    // }

    //Get request
    const showData = async () => {  
        const { data } = await axios.get("http://localhost:4500/todos",{
            params: {
                _page: page,
                _limit: 4  
            }
        });
        console.log(data)

        setTodo(data)
        //HTTP request using Fetch
        // const data = await fetch(`http://localhost:4500/todos?_page=${page}&_limit=5`);
        // const res = await data.json()
        // // if(!res)
        //  setTodo(res)
        // if(res === null)
        // return null;
        //HTTP request using axios
    }

    const deleteItem = async(id) => {
        await axios.delete(`http://localhost:4500/todos/${id}`)
        showData();
    }

    const taskDone = async({id,status}) => {
        
        await axios.patch(`http://localhost:4500/todos/${id}`,{
            status : !status
        })
        showData();
    }

    //Post Request
    const addTodo = async () => {
        //HTTP request using axios
        const todo = await axios.post("http://localhost:4500/todos", {
            title: text,
            status: false
        })
        showData()
        console.log("addItem", todo)
        // fetch("http://localhost:4500/todos",{
        //     method: "POST",
        //     body : JSON.stringify({
        //         title : text,
        //         status : false
        //     }),
        //     headers : {"content-type" : "application/json"},
        // })
    }

    return loading ? <div>...loading</div> : (
        <div>
            <input type="text" placeholder="Enter todo" onChange={(e) => setText(e.target.value)} />
            <button onClick={addTodo}>Add todo</button>
            <button onClick={() => setPage(page - 1)}>prev</button>
            <button onClick={() => setPage(page + 1)}>next</button>
            <ShowData data={todo} deleteItem={deleteItem} taskDone={taskDone}/>
        </div>
    )
}
