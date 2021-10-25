import {useEffect,useState} from 'react'
import './Stylesheet/timer.css'

const Timer = ({start,end}) => {
    const [timer,setTimer] = useState(start)
    const colors = ["red","yellow","green"]

    useEffect(() => {
        const id = setInterval(()=>{
            setTimer((prev)=>{
                if(prev === end){
                    clearInterval(id)
                    return end;
                }
                if(prev%2 === 0)
                document.body.style.backgroundColor = "yellow"
                else
                document.body.style.backgroundColor = "rgb(0, 255, 255)"

                return (prev+1)
            })
        },1000);
        // return (clearInterval(id))
    },[])
    // let time = new Date().toLocaleTimeString()
    // console.log(time)
    return (
        <div id="show-timer" >
                  <h1 className="app-h1">⏳</h1>

        <h1 >Timer : {timer}</h1>
        {/* <h2>{time}</h2> */}
        </div>
        
    )
}

export default Timer
