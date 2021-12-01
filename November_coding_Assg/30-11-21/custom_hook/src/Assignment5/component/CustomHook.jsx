import { useState,useEffect } from "react"

const useTimeout = (delay)=>{
    const [render,setRender] = useState(false)
    useEffect(() => {
        const timer = setTimeout(()=>{
            setRender(true)
            document.body.style.background ="lightpink"
        },delay*1000)
        return () => clearTimeout(timer)
    }, [])
    return render;
}

export const CustomHook = ()=>{
    const render = useTimeout(3);

    if(!render)
    return null;

    return (
        <div style={{marginTop:"150px"}}>
            Hello world!
        </div>
    )
}
