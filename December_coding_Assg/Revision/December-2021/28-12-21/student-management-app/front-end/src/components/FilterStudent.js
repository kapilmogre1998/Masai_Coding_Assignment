import axios from "axios";

export const handleSort = (setCount,count,text,setUpdated)=>{
    setCount(count + 1)
        if(count % 2 === 0){
            axios.get(`http://localhost:3002/student/sort/name?text=${text}&order=${-1}`)
            .then(({data:{students}}) => setUpdated(students))
            .catch(err => console.log("error in sort "))
        }
        else{
            axios.get(`http://localhost:3002/student/sort/name?text=${text}&order=${1}`)
            .then(({data:{students}}) => setUpdated(students))
            .catch(err => console.log("error in sort "))
        }
}