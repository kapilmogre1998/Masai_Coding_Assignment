import {useRef,useEffect} from 'react'

export const Useref1 = () => {
    const refElem = useRef();
   
    const submitFile = ()=>{
        console.log(refElem.current.value)
    }

    return (
        <div>
            <input type="text" ref={refElem}/>
            
            <button onClick={submitFile}>SUBMIT</button>
        </div>
    )
}
