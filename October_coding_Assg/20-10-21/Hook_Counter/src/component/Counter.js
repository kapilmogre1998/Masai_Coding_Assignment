import { useState } from 'react';
import React from 'react'
import './stylesheet/counter.css';

export const Counter = ({initial}) => {
    let [state, setstate] = useState(initial)

    let handlebar = (value) => {
        setstate(state + value)
    }

    let handlebardouble = (value) => {
        setstate(state * value)
    }
    
    return (
        <>
            <div >
                <h1>{state}</h1>
                <button  type="button" class="btn btn-primary" onClick={()=>{handlebar(+1)} }>Add</button>
                <button  type="button" class="btn btn-danger" onClick={()=>{handlebar(-1)}} >Delete</button>
                 <button type="button" class="btn btn-success" onClick={()=>{handlebardouble(2)}}>Double</button>
                {/* disabled={true} */}
            </div>
        </>
    )
}

export default Counter;
