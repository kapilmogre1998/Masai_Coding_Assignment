import axios from "axios";
import { useState,useEffect } from "react"

export const useFetch = (url)=>{
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");
    const [response,setResponse] = useState("");

    useEffect(async () => {
        setLoading(true);
        try{
            const res =  await fetch(url);
            const data = await res.json();
            setResponse(data);
            setLoading(false)
        }
        catch(err){
            console.log("err",err)
            setLoading(false);
            setError(true)
        }
    }, [])

    return ({
        loading,
        error,
        response
    })
}