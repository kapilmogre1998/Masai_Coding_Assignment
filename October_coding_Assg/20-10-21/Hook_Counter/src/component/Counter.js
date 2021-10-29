import { useState } from 'react';
import React from 'react'
import './stylesheet/counter.css';

export const Counter = ({initial}) => {
    let [state, setstate] = useState(initial)

    let handlebar = (value) => {
        setstate(state + value)
        if(value === 1){
            document.body.style.backgroundColor = "#0288D1"
            document.getElementById("show-value").style.color = "#0288D1"
        }
        else{
            document.body.style.backgroundColor = "#D32F2F"
            document.getElementById("show-value").style.color = "#D32F2F"
        }
    }

    let handlebardouble = (value) => {
        setstate(state * value)
        document.body.style.backgroundColor = "#388E3C"
        document.getElementById("show-value").style.color = "#388E3C"
    }
    
    return (
        <>
            <div >
                <h1 id="show-value">{state}</h1>
                <button  type="button" class="btn btn-primary" onClick={()=>{handlebar(+1)} }>Add</button>
                <button  type="button" class="btn btn-danger" onClick={()=>{handlebar(-1)}} >Delete</button>
                 <button type="button" class="btn btn-success" onClick={()=>{handlebardouble(2)}}>Double</button>
                {/* disabled={true} */}
            </div>
        </>
    )
}

export default Counter;
