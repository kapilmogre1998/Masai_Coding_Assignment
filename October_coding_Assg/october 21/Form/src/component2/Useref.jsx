import { useState, useRef, useEffect } from 'react'

export const Useref = () => {
    const [count, setCount] = useState();
    const countRef = useRef(0)

    useEffect(() => {
        countRef.current = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000)
    }, [])

    const handleStart = () => {
        countRef.current = setInterval(() => {
            setCount(prev => prev + 1)
        }, 1000)
    }

    return (
        <div>
            Timer : {count}
            <button onClick={() => {clearInterval(countRef.current)}}></button>
            <button onClick={() => {handleStart}}>Restart</button>
        </div>
    )
}
