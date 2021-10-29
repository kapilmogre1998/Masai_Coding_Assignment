import React from 'react'
import './Stylesheet/showData.css'

export const ShowData = ({data, deleteItem, taskDone}) => {

    return data.length===0 ? null : (
        <div id="show-data">
            {
                data.map((data)=> 
                <div id="item" key={data.id}>{data.title}
                 <button onClick={()=>taskDone(data)}>{data.status ? "Completed" : "Not Completed"}</button> 
                 <button onClick={()=>deleteItem(data.id)}>Delete</button></div> )
            }
        </div>
    )
}
