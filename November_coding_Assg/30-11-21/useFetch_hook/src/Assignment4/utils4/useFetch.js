import { useState,useEffect } from "react";

export const useFetch = (url) => {
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState();
    const [response,setResponse] = useState();

    useEffect(() => {
        fetch(url)
        .then(x => x.json()).then(data => {
            const timer = setTimeout(()=>{
                setLoading(false);
                setResponse(data);
            },1000)
            return ()=> clearTimeout(timer)
        })
        .catch(()=>{
            setLoading(false);
            setError(true)
        })
    }, [])

    return ({
        loading,
        error,
        response
    })
}

