import { useState,useEffect } from "react"
import { Fetchuser } from "./Fetchuser"

export const Github = ()=>{
    const [query,setQuery] = useState("");
    const [isLoading,setIsLoading] = useState(false);
    const [isError,setIsError] = useState(false);
    const [user,setUser] = useState([])

    // useEffect(() => {
    //     setIsLoading(true);
    //     setIsError(false)
    //     Fetchuser("masai")
    //     .then(res=>{
    //         setUser(res.data.items)
    //     })
    //     .catch(err=>{
    //         setIsError(true);
    //     })
    //     .finally(()=>{
    //         setIsLoading(false);
    //     })
    // }, [])
    
    const handleSearch =  () => {
        setIsLoading(true);
        setTimeout(()=>{
            setIsLoading(false)
        },500)
        setIsError(false)
        Fetchuser(query) //function call - passing param data to api 
        .then(res=>{
            setUser(res.data.items)
        })
        .catch(err=>{
            setIsError(true)
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }
    return (
        <>
        <h1>Github</h1>
          <input onChange={(e)=> setQuery(()=>e.target.value)} value={query} type="text" placeholder="Search"/>
          <button onClick={handleSearch}>{isLoading ? "loading":"search"}</button>
          <div>{isError ? "please fill in text" : null}</div>
          <div id="show-data">
              {
                user.map(e => <div key={e.id}>{e.login} </div>)
              }
          </div>
        </>
    )
}