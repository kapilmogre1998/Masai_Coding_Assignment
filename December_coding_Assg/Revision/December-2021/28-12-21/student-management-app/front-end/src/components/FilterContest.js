import axios from "axios"

export const handleSort = (setCount,count,text,setUpdated)=>{
    setCount(count + 1)
        if(count % 2 === 0){
            axios.get(`http://localhost:3002/contest/sort?text=${text}&order=${-1}`)
            .then(({data:{contests}}) => setUpdated(contests))
            .catch(err => console.log("error in sort "))
        }
        else{
            axios.get(`http://localhost:3002/contest/sort?text=${text}&order=${1}`)
            .then(({data:{contests}}) => setUpdated(contests))
            .catch(err => console.log("error in sort "))
        }
}
