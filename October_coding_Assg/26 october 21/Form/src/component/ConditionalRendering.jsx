import {useState} from 'react'

export const Rendering = () => {
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)
    const [showDate,setShowDate] = useState(false)

    const fetchData = ()=>{
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
            setIsError(true)
        },2000)
    }

    const fetchDataWithError = ()=>{
        setTimeout(()=>{
            setIsError(false)
        },2000)
    }   

    if(isLoading){
        return( <div>...Loading</div>)
     }
 
     if(isError){
         return (<>
         <div>Something went wrong</div>
         <button onClick={fetchDataWithError}>Do you want to fetch data again?</button>
         </>)
     }
    return (
        <div>
            <h1>Conditional Rendering</h1>
            <button onClick = {fetchData}>Fetch Data</button>
            <br />
            <button onClick={()=>setShowDate((prev)=> !prev)}>Toggle date</button>
            <br />
            {
                showDate && new Date().toLocaleString()
            }
        </div>
    )
}
