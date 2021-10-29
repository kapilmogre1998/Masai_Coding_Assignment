import {useState,useEffect,useRef} from 'react'

export const Useref = () => {
    const [count,setCount] = useState(1);
    const timeRef = useRef()
    console.log(timeRef)
    // const [stopTimer,setStopTimer] = useState()

    useEffect(() => {
        startTimer()
        return stopTimer 
    }, [])

    const startTimer = ()=>{
        timeRef.current = setInterval(()=>{
            setCount((prev)=>{
                return (prev+1)
            })
        },1000)
    }
    const stopTimer = ()=>{
        clearInterval(timeRef.current)
        // return timeRef.current = null
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={startTimer}>start</button>
            <button onClick={()=>clearInterval(timeRef)}>stop</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}
