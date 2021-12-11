import { useState } from "react"


export const Counter = () => {
    const [counter,setCounter] = useState(0);

    return <div>
        <p data-testid="counter-value"> {counter} </p>
        <button data-testid="add" onClick={e=> setCounter(counter + 1)} >increment</button>
        <button onClick={e=> setCounter(counter - 1)} disabled={counter <= 0} >decrement</button>
    </div>
}