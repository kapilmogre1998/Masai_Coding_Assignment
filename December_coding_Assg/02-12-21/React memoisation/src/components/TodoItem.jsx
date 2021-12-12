import React from "react"

export const TodoItem = ({todoList,settodo})=>{
    
    const handleToggle = (item)=>{
        let update = todoList.map((e) =>{
            if(e.id === item.id)
            e.verify = !e.verify

            return e;
        })
    }
    
    return (
        <div>
            {
                    todoList.map((e,id)=> 
                    <div key={e.id} style={{border:"1px solid black",textAlign:"start", display:"flex"}}> 
                        <div style={{backgroundColor:`#${Math.floor(Math.random()*16777215).toString(16)}`}}>
                            Random color
                        </div>
                        <div>
                        <div>Title: {e.title}</div>
                        <div>Body: {e.body}</div>
                        <div>{e.status === true ? "Done" : "Not Done"}</div>
                        <button onClick={()=> handleToggle(e)}>Verify</button>
                        </div>
                    </div> )
                }
        </div>
    )
}

export const TodoItemMemo = React.memo(TodoItem)